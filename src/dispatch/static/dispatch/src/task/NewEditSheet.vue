<template>
  <v-form @submit.prevent v-slot="{ isValid }">
    <v-navigation-drawer v-model="showCreateEdit" location="right" width="500">
      <template #prepend>
        <v-list-item lines="two">
          <v-list-item-title v-if="id" class="text-h6"> Edit </v-list-item-title>
          <v-list-item-title v-else class="text-h6"> New </v-list-item-title>
          <v-list-item-subtitle>Task</v-list-item-subtitle>

          <template #append>
            <v-btn
              icon
              variant="text"
              color="info"
              :loading="loading"
              :disabled="!isValid.value"
              @click="save()"
            >
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="secondary" @click="closeCreateEdit()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="description"
                  label="Description"
                  hint="The task's description."
                  clearable
                  required
                  name="description"
                />
              </v-col>
              <v-col cols="12">
                <project-select v-model="project" />
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="status"
                  label="Status"
                  :items="statuses"
                  hint="The task's current status"
                />
              </v-col>
              <v-col cols="12">
                <v-combobox
                  v-model="incidentName"
                  label="Incident"
                  hint="The incident associated with this task (read only)"
                  readonly
                  required
                  name="incident"
                  :rules="[rules.required]"
                />
              </v-col>
              <v-col cols="12">
                <participant-select
                  v-model="owner"
                  label="Owner"
                  hint="The task's current owner"
                  clearable
                  required
                  name="owner"
                  :rules="[required_and_only_one]"
                />
              </v-col>
              <v-col cols="12">
                <assignee-combobox
                  v-model="assignees"
                  label="Assignee"
                  hint="The task's current assignee"
                  clearable
                  required
                  name="assignees"
                  :rules="[required_and_only_one]"
                />
              </v-col>
              <v-col cols="12">
                <v-row>
                  <v-col cols="6">
                    <date-time-picker-menu label="Resolved At" v-model="resolved_at" />
                  </v-col>
                  <v-col cols="6">
                    <date-time-picker-menu label="Resolve By" v-model="resolve_by" />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
  </v-form>
</template>

<script>
import { required } from "@/util/form"
import { mapFields } from "vuex-map-fields"
import { mapActions } from "vuex"

import ProjectSelect from "@/project/ProjectSelect.vue"
import ParticipantSelect from "@/components/ParticipantSelect.vue"
import AssigneeCombobox from "@/task/AssigneeCombobox.vue"
import DateTimePickerMenu from "@/components/DateTimePickerMenu.vue"

export default {
  setup() {
    return {
      rules: { required },
    }
  },
  name: "TaskNewEditSheet",

  components: {
    AssigneeCombobox,
    ParticipantSelect,
    ProjectSelect,
    DateTimePickerMenu,
  },

  data() {
    return {
      statuses: ["Open", "Resolved"],
      required_and_only_one: (value) => {
        if (!value || value.length == 0) {
          return "This field is required"
        }
        if (value && value.length > 1) {
          return "Only one is allowed"
        }
        return true
      },
    }
  },

  computed: {
    ...mapFields("task", [
      "selected.status",
      "selected.owner",
      "selected.assignees",
      "selected.description",
      "selected.creator",
      "selected.project",
      "selected.resolved_at",
      "selected.resolve_by",
      "selected.incident",
      "selected.id",
      "selected.loading",
      "dialogs.showCreateEdit",
    ]),
    incidentName: {
      get() {
        if (this.incident) {
          return this.incident.name
        }
        return ""
      },
      set(value) {
        this.incident.name = value
      },
    },
  },

  methods: {
    ...mapActions("task", ["save", "closeCreateEdit"]),
  },

  created() {
    if (this.$route.query.project) {
      this.project = { name: this.$route.query.project }
    }
  },
}
</script>
