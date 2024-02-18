(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2405],{7404:function(e,n,t){"use strict";t.d(n,{j:function(){return s}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.flat(1/0).filter(Boolean).join(" ")},s=(e,n)=>t=>{var s;if((null==n?void 0:n.variants)==null)return i(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:o,defaultVariants:a}=n,l=Object.keys(o).map(e=>{let n=null==t?void 0:t[e],i=null==a?void 0:a[e];if(null===n)return null;let s=r(n)||r(i);return o[e][s]}),u=t&&Object.entries(t).reduce((e,n)=>{let[t,r]=n;return void 0===r||(e[t]=r),e},{}),d=null==n?void 0:null===(s=n.compoundVariants)||void 0===s?void 0:s.reduce((e,n)=>{let{class:t,className:r,...i}=n;return Object.entries(i).every(e=>{let[n,t]=e;return Array.isArray(t)?t.includes({...a,...u}[n]):({...a,...u})[n]===t})?[...e,t,r]:e},[]);return i(e,l,d,null==t?void 0:t.class,null==t?void 0:t.className)}},90757:function(e,n,t){Promise.resolve().then(t.bind(t,86925))},23313:function(e,n,t){"use strict";t.d(n,{I:function(){return s}});var r=t(57437),i=t(52373);let s=e=>{let{className:n}=e;return(0,r.jsx)(i.b,{className:n,externalLink:"https://tabby.tabbyml.com/blog/2023/10/16/repository-context-for-code-completion",children:"Tabby supports connecting to Git repositories and uses these repositories as a context to enhance performance of large language model."})}},86925:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var r=t(57437),i=t(61396),s=t.n(i),o=t(93023),a=t(23313),l=t(2265),u=t(71424),d=t(99109),c=t(61985),f=t(58835),v=t(7820),h=t(57166),m=t(84168),g=t(91320),p=t(32553),x=t(93111);let b=(0,f.BX)("\n  mutation deleteRepository($id: ID!) {\n    deleteRepository(id: $id)\n  }\n"),y=c.L;function j(){var e,n;let t=(0,d.m8)(),[{data:i,error:s,fetching:a,stale:c}]=(0,d.aM)({query:h.S1,variables:{first:y}}),[f]=(0,v.io)({data:i,error:s,stale:c}),[j,N]=l.useState(1),k=null==i?void 0:null===(e=i.repositories)||void 0===e?void 0:e.edges,w=null==i?void 0:null===(n=i.repositories)||void 0===n?void 0:n.pageInfo,T=Math.ceil(((null==k?void 0:k.length)||0)/y),S=l.useMemo(()=>{var e;return null==k?void 0:null===(e=k.slice)||void 0===e?void 0:e.call(k,(j-1)*y,j*y)},[j,k]),I=(null==w?void 0:w.hasNextPage)||j<T,R=j>1,$=!!(null==S?void 0:S.length)&&(I||R),E=e=>t.query(h.S1,e).toPromise(),C=(0,v.Db)(b),P=e=>{C({id:e.id}).then(e=>{if(null==e?void 0:e.error){u.A.error(e.error.message);return}})};return l.useEffect(()=>{T<j&&j>1&&N(T)},[T,j]),(0,r.jsx)("div",{children:f?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.iA,{className:"border-b",children:[(0,r.jsx)(p.xD,{children:(0,r.jsxs)(p.SC,{children:[(0,r.jsx)(p.ss,{className:"w-[25%]",children:"Name"}),(0,r.jsx)(p.ss,{className:"w-[45%]",children:"Git URL"}),(0,r.jsx)(p.ss,{})]})}),(0,r.jsx)(p.RM,{children:(null==S?void 0:S.length)||1!==j?(0,r.jsx)(r.Fragment,{children:null==S?void 0:S.map(e=>(0,r.jsxs)(p.SC,{children:[(0,r.jsx)(p.pj,{children:e.node.name}),(0,r.jsx)(p.pj,{children:e.node.gitUrl}),(0,r.jsx)(p.pj,{className:"flex justify-end",children:(0,r.jsx)("div",{className:"flex gap-1",children:(0,r.jsx)(o.z,{size:"icon",variant:"hover-destructive",onClick:()=>P(e.node),children:(0,r.jsx)(m.IconTrash,{})})})})]},e.node.id))}):(0,r.jsx)(p.SC,{children:(0,r.jsx)(p.pj,{colSpan:3,className:"h-[100px] text-center",children:"No Data"})})})]}),$&&(0,r.jsx)(g.tl,{className:"my-4",children:(0,r.jsxs)(g.ng,{children:[(0,r.jsx)(g.nt,{children:(0,r.jsx)(g.dN,{disabled:!R,onClick:()=>{!(j<=1)&&(a||N(e=>e-1))}})}),(0,r.jsx)(g.nt,{children:(0,r.jsx)(g.$0,{disabled:!I,onClick:()=>{I&&(a||E({first:y,after:null==w?void 0:w.endCursor}).then(e=>{var n,t,r;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:null===(t=r.repositories)||void 0===t?void 0:null===(n=t.edges)||void 0===n?void 0:n.length)&&N(e=>e+1)}))}})})]})})]}):(0,r.jsx)(x.c,{})})}function N(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.I,{}),(0,r.jsx)(j,{}),(0,r.jsx)("div",{className:"mt-4 flex justify-end",children:(0,r.jsx)(s(),{href:"/settings/repository/new",className:(0,o.d)(),children:"Create"})})]})}},93111:function(e,n,t){"use strict";t.d(n,{c:function(){return s}});var r=t(57437),i=t(25645);let s=()=>(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"})]})},52373:function(e,n,t){"use strict";t.d(n,{b:function(){return l}});var r=t(57437);t(2265);var i=t(61396),s=t.n(i),o=t(39311),a=t(84168);let l=e=>{let{className:n,externalLink:t,children:i}=e;return(0,r.jsx)("div",{className:(0,o.cn)("mb-4 flex items-center gap-4",n),children:(0,r.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[i,!!t&&(0,r.jsxs)(s(),{className:"ml-2 inline-flex cursor-pointer flex-row items-center text-primary hover:underline",href:t,target:"_blank",children:["Learn more",(0,r.jsx)(a.IconExternalLink,{})]})]})})}},93023:function(e,n,t){"use strict";t.d(n,{d:function(){return l},z:function(){return u}});var r=t(57437),i=t(2265),s=t(67256),o=t(7404),a=t(39311);let l=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,n)=>{let{className:t,variant:i,size:o,asChild:u=!1,...d}=e,c=u?s.g7:"button";return(0,r.jsx)(c,{className:(0,a.cn)(l({variant:i,size:o,className:t})),ref:n,...d})});u.displayName="Button"},91320:function(e,n,t){"use strict";t.d(n,{$0:function(){return v},dN:function(){return f},ng:function(){return u},nt:function(){return d},tl:function(){return l}});var r=t(57437),i=t(2265),s=t(39311),o=t(93023),a=t(84168);let l=e=>{let{className:n,...t}=e;return(0,r.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,s.cn)("mx-auto flex w-full justify-center",n),...t})};l.displayName="Pagination";let u=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("ul",{ref:n,className:(0,s.cn)("flex flex-row items-center gap-1",t),...i})});u.displayName="PaginationContent";let d=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("li",{ref:n,className:(0,s.cn)("",t),...i})});d.displayName="PaginationItem";let c=e=>{let{className:n,isActive:t,size:i="icon",...a}=e;return(0,r.jsx)("a",{"aria-current":t?"page":void 0,className:(0,s.cn)((0,o.d)({variant:t?"outline":"ghost",size:i}),n),...a})};c.displayName="PaginationLink";let f=e=>{let{className:n,disabled:t,...i}=e;return(0,r.jsxs)(c,{"aria-label":"Go to previous page",size:"default",className:(0,s.cn)("cursor-pointer gap-1 pl-2.5",t&&"cursor-not-allowed text-muted-foreground",n),...i,children:[(0,r.jsx)(a.IconChevronLeft,{className:"h-4 w-4"}),(0,r.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let v=e=>{let{className:n,disabled:t,...i}=e;return(0,r.jsxs)(c,{"aria-label":"Go to next page",size:"default",className:(0,s.cn)("cursor-pointer gap-1 pr-2.5",t&&"cursor-not-allowed text-muted-foreground",n),...i,children:[(0,r.jsx)("span",{children:"Next"}),(0,r.jsx)(a.IconChevronRight,{className:"h-4 w-4"})]})};v.displayName="PaginationNext"},25645:function(e,n,t){"use strict";t.d(n,{O:function(){return s}});var r=t(57437),i=t(39311);function s(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,i.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",n),...t})}},32553:function(e,n,t){"use strict";t.d(n,{RM:function(){return l},SC:function(){return d},iA:function(){return o},pj:function(){return f},ss:function(){return c},xD:function(){return a}});var r=t(57437),i=t(2265),s=t(39311);let o=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("table",{ref:n,className:(0,s.cn)("w-full caption-bottom text-sm",t),...i})});o.displayName="Table";let a=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("thead",{ref:n,className:(0,s.cn)("[&_tr]:border-b",t),...i})});a.displayName="TableHeader";let l=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("tbody",{ref:n,className:(0,s.cn)("[&_tr:last-child]:border-0",t),...i})});l.displayName="TableBody";let u=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("tfoot",{ref:n,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...i})});u.displayName="TableFooter";let d=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("tr",{ref:n,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...i})});d.displayName="TableRow";let c=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("th",{ref:n,className:(0,s.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...i})});c.displayName="TableHead";let f=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("td",{ref:n,className:(0,s.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...i})});f.displayName="TableCell";let v=i.forwardRef((e,n)=>{let{className:t,...i}=e;return(0,r.jsx)("caption",{ref:n,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",t),...i})});v.displayName="TableCaption"},61985:function(e,n,t){"use strict";t.d(n,{L:function(){return i},o:function(){return r}});let r="name@yourcompany.com",i=20},58001:function(e,n,t){"use strict";t.d(n,{Dp:function(){return y},Ho:function(){return j},QJ:function(){return T},Rn:function(){return p},av:function(){return $},bW:function(){return m},kP:function(){return S},pC:function(){return g},zq:function(){return w}});var r,i,s=t(57437),o=t(2265),a=t(24033),l=t(53771),u=t(99109),d=t(26566),c=t.n(d),f=t(58835),v=t(39311);(r=i||(i={}))[r.SignIn=0]="SignIn",r[r.SignOut=1]="SignOut",r[r.Refresh=2]="Refresh";let h="_tabby_auth",m=()=>{if((0,v.S_)()){let e=localStorage.getItem(h);if(e)try{return JSON.parse(e)}catch(e){}}},g=e=>{localStorage.setItem(h,JSON.stringify(e))},p=()=>{localStorage.removeItem(h),window.dispatchEvent(new StorageEvent("storage",{storageArea:window.localStorage,url:window.location.href,key:h}))};function x(e,n){var t,r;let s=function(e,n){switch(n.type){case i.SignIn:case i.Refresh:return{status:"authenticated",data:n.data};case i.SignOut:return{status:"unauthenticated",data:void 0}}}(0,n);return e.status==s.status&&(t=e.data,r=s.data,(null==t?void 0:t.accessToken)===(null==r?void 0:r.accessToken)&&(null==t?void 0:t.refreshToken)===(null==r?void 0:r.refreshToken))?e:s}let b=o.createContext({}),y=(0,f.BX)("\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n"),j=e=>{let{children:n}=e,t=o.useRef(!1),[r]=c()(h,void 0),[a,u]=o.useReducer(x,{status:"loading",data:void 0});o.useEffect(()=>{t.current=!0,(null==r?void 0:r.accessToken)&&(null==r?void 0:r.refreshToken)?u({type:i.SignIn,data:r}):u({type:i.SignOut})},[]),o.useEffect(()=>{t.current&&((null==r?void 0:r.accessToken)&&(null==r?void 0:r.refreshToken)?u({type:i.SignIn,data:r}):u({type:i.SignOut}))},[r]);let d=o.useMemo(()=>{var e,n;if((null==a?void 0:a.status)=="authenticated")try{let{sub:e,is_admin:n}=(0,l.o)(a.data.accessToken);return{data:{email:e,isAdmin:n,accessToken:a.data.accessToken},status:a.status}}catch(n){return console.error("jwt decode failed"),{status:null!==(e=null==a?void 0:a.status)&&void 0!==e?e:"loading",data:{email:"",isAdmin:!1,accessToken:a.data.accessToken}}}return{status:null!==(n=null==a?void 0:a.status)&&void 0!==n?n:"loading",data:null}},[a]);return(0,s.jsx)(b.Provider,{value:{authState:a,dispatch:u,session:d},children:n})};class N extends Error{constructor(){super("AuthProvider is missing. Please add the AuthProvider at root level")}}function k(){let e=o.useContext(b);if(!e)throw new N;return e}function w(){let{dispatch:e}=k(),[n,t]=c()(h,void 0);return async n=>(t({accessToken:n.accessToken,refreshToken:n.refreshToken}),e({type:i.SignIn,data:n}),!0)}function T(){let{dispatch:e}=k(),[n,t]=c()(h,void 0);return async()=>{t(void 0),e({type:i.SignOut})}}function S(){let{session:e}=k();return e}let I=(0,f.BX)("\n  query GetIsAdminInitialized {\n    isAdminInitialized\n  }\n"),R=["/auth/signin","/auth/signup"];function $(){let[{data:e}]=(0,u.aM)({query:I}),n=(0,a.useRouter)(),t=(0,a.usePathname)(),{data:r,status:i}=S();return o.useEffect(()=>{"loading"!==i&&("authenticated"===i||((null==e?void 0:e.isAdminInitialized)===!1?n.replace("/auth/signup?isAdmin=true"):R.includes(t)||n.replace("/auth/signin")))},[e,i]),r}},7820:function(e,n,t){"use strict";t.d(n,{Db:function(){return v},Lp:function(){return g},io:function(){return h}});var r=t(2265),i=t(69166),s=t(73997),o=t(83074),a=t(53771),l=t(24144),u=t(99109),d=t(18398),c=t(58001),f=t(57166);function v(e,n){var t;let[r,i]=(0,u.Db)(e),s=(null==n?void 0:n.form)?(t=n.form,e=>{let{graphQLErrors:n=[]}=e;for(let e of n)if(e.extensions&&e.extensions["validation-errors"]){let n=e.extensions["validation-errors"];for(let e of n.errors)t.setError(e.path,e)}else(null==e?void 0:e.originalError)&&t.setError("root",e.originalError)}):void 0,o=async e=>{let t;try{if(null==(t=await i(e))?void 0:t.error)s&&s(t.error),(null==n?void 0:n.onError)&&n.onError(t.error);else if(!(0,l.Z)(null==t?void 0:t.data)){var r;null==n||null===(r=n.onCompleted)||void 0===r||r.call(n,t.data)}}catch(e){(null==n?void 0:n.onError)&&n.onError(e);return}return t};return o}function h(e){let{data:n,error:t,stale:i}=e,s=(e,n)=>!(0,l.Z)(e)||!(0,l.Z)(n),[o,a]=(0,r.useState)(s(n,t)&&!!i);return(0,r.useEffect)(()=>{!o&&s(n,t)&&a(!0)},[n,t]),[o,a]}let m=e=>Date.now()>1e3*e,g=new d.KU({url:"/graphql",requestPolicy:"cache-and-network",exchanges:[(0,s.HG)({resolvers:{Query:{invitations:(0,o.N)(),repositories:(0,o.N)(),jobRuns:(0,o.N)()}},updates:{Mutation:{deleteInvitation(e,n,t,r){e.deleteInvitation&&t.inspectFields("Query").filter(e=>"invitations"===e.fieldName).forEach(e=>{t.updateQuery({query:f.lE,variables:e.arguments},e=>{var t;return(null==e?void 0:null===(t=e.invitations)||void 0===t?void 0:t.edges)&&(e.invitations.edges=e.invitations.edges.filter(e=>e.node.id!==n.id)),e})})},deleteRepository(e,n,t,r){e.deleteRepository&&t.inspectFields("Query").filter(e=>"repositories"===e.fieldName).forEach(e=>{t.updateQuery({query:f.S1,variables:e.arguments},e=>{var t;return(null==e?void 0:null===(t=e.repositories)||void 0===t?void 0:t.edges)&&(e.repositories.edges=e.repositories.edges.filter(e=>e.node.id!==n.id)),e})})}}}}),(0,i.M)(async e=>{let n=(0,c.bW)(),t=null==n?void 0:n.accessToken,r=null==n?void 0:n.refreshToken;return{addAuthToOperation:n=>t?e.appendHeaders(n,{Authorization:"Bearer ".concat(t)}):n,didAuthError(e,n){var t;return(null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.status)===401||e.graphQLErrors.some(e=>{var n;return(null==e?void 0:null===(n=e.extensions)||void 0===n?void 0:n.code)==="UNAUTHORIZED"})},willAuthError(e){let n=(0,c.bW)();if(t=null==n?void 0:n.accessToken,r=null==n?void 0:n.refreshToken,"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null===(n=e.name)||void 0===n?void 0:n.value)&&["tokenAuth","registerUser"].includes(e.name.value)})||r&&"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null==e?void 0:null===(n=e.name)||void 0===n?void 0:n.value)==="refreshToken"}))return!1;if(!t)return!0;try{let{exp:e}=(0,a.o)(t);return!e||m(e)}catch(e){return!0}},async refreshAuth(){if(r){var n;let i=await e.mutate(c.Dp,{refreshToken:r});(null===(n=i.data)||void 0===n?void 0:n.refreshToken)?(t=i.data.refreshToken.accessToken,r=i.data.refreshToken.refreshToken,(0,c.pC)({accessToken:t,refreshToken:r})):(0,c.Rn)()}else(0,c.Rn)()}}}),d.Ek]})},57166:function(e,n,t){"use strict";t.d(n,{GG:function(){return o},S1:function(){return s},lE:function(){return i}});var r=t(58835);let i=(0,r.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),s=(0,r.BX)("\n  query repositories($after: String, $before: String, $first: Int, $last: Int) {\n    repositories(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,r.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n")}},function(e){e.O(0,[1091,584,1424,1396,4402,4168,2971,7864,1744],function(){return e(e.s=90757)}),_N_E=e.O()}]);