"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8395],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(8168),r=(n(6540),n(5680));const i={},o="Core",s={unversionedId:"administration/contributing/core",id:"administration/contributing/core",title:"Core",description:"API",source:"@site/docs/administration/contributing/core.mdx",sourceDirName:"administration/contributing",slug:"/administration/contributing/core",permalink:"/dispatch/docs/administration/contributing/core",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/main/docs/docs/administration/contributing/core.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adminSidebar",previous:{title:"Contributing",permalink:"/dispatch/docs/administration/contributing/"},next:{title:"Environment",permalink:"/dispatch/docs/administration/contributing/environment"}},l={},d=[{value:"API",id:"api",level:2},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Starting the Development Server",id:"starting-the-development-server",level:3},{value:"Creating Models",id:"creating-models",level:3},{value:"Is this a new model?",id:"is-this-a-new-model",level:4},{value:"Am I adding columns? Am I Removing columns?",id:"am-i-adding-columns-am-i-removing-columns",level:4},{value:"Do I need to migrate any data?",id:"do-i-need-to-migrate-any-data",level:4},{value:"Standards",id:"standards",level:3},{value:"UI",id:"ui",level:2},{value:"Folder Structure",id:"folder-structure-1",level:3},{value:"Starting the Development Server",id:"starting-the-development-server-1",level:3},{value:"Standards",id:"standards-1",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"core"},"Core"),(0,r.yg)("h2",{id:"api"},"API"),(0,r.yg)("h3",{id:"folder-structure"},"Folder Structure"),(0,r.yg)("p",null,"Dispatch's backend is a typical python web app. Its folder structure is a simple one and is mirrored between the backend code ","(","python",")"," and the frontend code ","(","javascript",")","."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 dispatch\n\u2502   \u251c\u2500\u2500 alembic\n\u2502   \u251c\u2500\u2500 application\n\u2502   \u251c\u2500\u2500 auth\n\u2502   \u251c\u2500\u2500 common\n\u2502   \u251c\u2500\u2500 conversation\n\u2502   \u251c\u2500\u2500 definition\n...\n")),(0,r.yg)("p",null,"Looking at the Dispatch folder structure, we try to group code by its subject. For example, all of the ",(0,r.yg)("inlineCode",{parentName:"p"},"definitions")," code ","(","models, views, services",")"," is contained within the ",(0,r.yg)("inlineCode",{parentName:"p"},"definitions")," folder."),(0,r.yg)("h3",{id:"starting-the-development-server"},"Starting the Development Server"),(0,r.yg)("p",null,"For backend development, you will most likely want to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"develop")," command. This command starts a web server, creates a supervisor process to check for file changes, and reloads the server process when necessary."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"> dispatch server develop --log-level debug\n")),(0,r.yg)("h3",{id:"creating-models"},"Creating Models"),(0,r.yg)("p",null,"During development, if you need to add or modify database models, there are a few things to consider:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Is this a new model?"),(0,r.yg)("li",{parentName:"ul"},"Am I adding columns? Removing columns?"),(0,r.yg)("li",{parentName:"ul"},"Do I need to migrate any data?")),(0,r.yg)("p",null,"Dispatch uses a combination of ",(0,r.yg)("a",{parentName:"p",href:"https://www.sqlalchemy.org/"},"SQLAlchemy")," models and ",(0,r.yg)("a",{parentName:"p",href:"https://alembic.sqlalchemy.org/en/latest/"},"Alembic")," to manage its database models."),(0,r.yg)("h4",{id:"is-this-a-new-model"},"Is this a new model?"),(0,r.yg)("p",null,"When creating a new model, ensure that you are always inheriting from the ",(0,r.yg)("inlineCode",{parentName:"p"},"Base")," Dispatch class ","(",(0,r.yg)("inlineCode",{parentName:"p"},"dispatch.database.Base"),")",". Check to see if your model requires any of the pre-existing mixins available to you in ",(0,r.yg)("inlineCode",{parentName:"p"},"dispatch.models")," ","(","like ",(0,r.yg)("inlineCode",{parentName:"p"},"ResourceMixin")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"TimestampMixin"),")","."),(0,r.yg)("p",null,"For Alembic to see your new model, you must import the model at the bottom of the ",(0,r.yg)("inlineCode",{parentName:"p"},"dispatch.models")," python module. This import ensures the model is available for Alembic introspection."),(0,r.yg)("p",null,"When you're ready, create a new migration for your model by running the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"> dispatch database revision --autogenerate\n")),(0,r.yg)("p",null,"This command will generate an alembic file for you. The generated file will be automatically populated with several code pieces that enable everyday actions. If you need to migrate ",(0,r.yg)("em",{parentName:"p"},"data")," as part of your migration, you will have to write the data migration code yourself."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Alembic migrations are a ",(0,r.yg)("em",{parentName:"p"},"starting")," point and almost always need to be modified. Review the migration file before continuing.")),(0,r.yg)("p",null,"Once you're happy with the migration file, commit the modifications to the database:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"> dispatch database upgrade\n")),(0,r.yg)("h4",{id:"am-i-adding-columns-am-i-removing-columns"},"Am I adding columns? Am I Removing columns?"),(0,r.yg)("p",null,"Similar to adding models, you will have to run a dispatch ",(0,r.yg)("inlineCode",{parentName:"p"},"revision")," command to have Alembic create a new revision:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"> dispatch database revision --autogenerate\n")),(0,r.yg)("p",null,"Adding columns is relatively straightforward. It is encouraged that you do not add ",(0,r.yg)("em",{parentName:"p"},"and")," remove columns ","(","or tables",")"," within the same revision. Instead, it's better to add your new column on one revision and later remove/deprecate the old column once you are sure there is no code depending on that column."),(0,r.yg)("h4",{id:"do-i-need-to-migrate-any-data"},"Do I need to migrate any data?"),(0,r.yg)("p",null,"Sometimes, a schema change necessitates some data migration. Migrating data can be a tricky operation, be careful to test this change several times ","(","ensuring backups are in place for worst-case scenarios",")","."),(0,r.yg)("p",null,"Alembic can help us with data migration; just like with the removal of columns, it's encouraged to create separate revisions for schema changes ","(","e.g., creating/deleting tables",")"," and modifying data itself. Staging these changes reduces the overall risk of the change."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"> dispatch database revision\n")),(0,r.yg)("p",null,"Creates a new empty revision, which you can then use to modify existing data if need be, as an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"connection = op.get_bind()\n# Select all existing names that need migrating.\nresults = connection.execute(sa.select([\n    t_users.c.id,\n    t_users.c.name,\n    ])).fetchall()\n# Iterate over all selected data tuples.\nfor id_, name in results:\n    # Split the existing name into first and last.\n    firstname, lastname = name.rsplit(' ', 1)\n    # Update the new columns.\n    connection.execute(t_users.update().where(t_users.c.id == id_).values(\n        lastname=lastname,\n        firstname=firstname,\n        ))\n")),(0,r.yg)("h3",{id:"standards"},"Standards"),(0,r.yg)("p",null,"For Dispatch's Python code base, all code style is controlled and enforced by ",(0,r.yg)("a",{parentName:"p",href:"https://black.readthedocs.io/en/stable/"},"black"),". Additionally, we use various ",(0,r.yg)("a",{parentName:"p",href:"https://flake8.pycqa.org/en/latest/"},"flake8")," rules to ensure that our codebase is consistent. All settings are set in the ",(0,r.yg)("inlineCode",{parentName:"p"},"setup.cfg")," located in the project's root directory and respected by tools locally."),(0,r.yg)("p",null,"When submitting a PR to Dispatch's GitHub project, code must have passing tests and no black or flake8 violations. PRs will not be evaluated if these checks are not met."),(0,r.yg)("h2",{id:"ui"},"UI"),(0,r.yg)("h3",{id:"folder-structure-1"},"Folder Structure"),(0,r.yg)("p",null,"Similar to the API folder structure, we've chosen to group files based on the type of model they are related to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"src\n\u2502   \u251c\u2500\u2500 API\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 application\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 auth\n\u2502   \u251c\u2500\u2500 components\n\u2502   \u251c\u2500\u2500 dashboard\n\u2502   \u251c\u2500\u2500 definition\n\u2502   \u251c\u2500\u2500 document\n...\n")),(0,r.yg)("h3",{id:"starting-the-development-server-1"},"Starting the Development Server"),(0,r.yg)("p",null,"From Dispatch's static directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"> cd <path-to-static>/dispatch npm run serve\n")),(0,r.yg)("p",null,"This command starts a local server, that again, like the API, will automatically reload itself when changes are detected. Additionally, this server acts as a proxy to the local API server, such that from the frontend's perspective, it is only talking to one server. This command helps avoid CORS-related issues and is closer to how the application is deployed ","(","static and API on the same hostname",")","."),(0,r.yg)("h3",{id:"standards-1"},"Standards"),(0,r.yg)("p",null,"Similar to the Python API, we use a combination of ",(0,r.yg)("a",{parentName:"p",href:"https://eslint.org/"},"eslint")," and ",(0,r.yg)("a",{parentName:"p",href:"https://prettier.io/"},"prettier")," to give our code a consistent look and feel. We are not currently enforcing any of these checks on open PRs but plan to do so in the future."))}m.isMDXComponent=!0}}]);