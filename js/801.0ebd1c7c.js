"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[801],{2801:(t,e,i)=>{i.r(e),i.d(e,{default:()=>_t});var a=i(9835),n=i(6970);const s=t=>((0,a.dD)("data-v-c1fe9cb0"),t=t(),(0,a.Cn)(),t),c={class:"q-pa-md"},l={class:"absolute-bottom text-h4 text-center text-black"},o={class:"absolute-bottom text-h4 text-center text-black"},r={class:"absolute-bottom text-h4 text-center text-black"},d={key:0,class:"q-pa-md",style:{"max-width":"500px"}},p={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},h={class:"q-gutter-y-md column",style:{"max-width":"470px"}},m={class:"q-pa-md",style:{"max-width":"470px"}},u={class:"q-pa-md",style:{"max-width":"470px"}},k={class:"q-pa-md q-gutter-sm"},x=s((()=>(0,a._)("div",{class:"text-h6"},"Übersicht teilen",-1))),g={class:"q-pt-md",style:{"max-width":"350px"}},b=s((()=>(0,a._)("div",{class:"text-h6"},"Teilnahme erfassen",-1))),A={class:"q-pt-md",style:{"max-width":"350px"}},w=s((()=>(0,a._)("div",{class:"text-h6"},"Teilnahme ändern",-1))),P={class:"q-pt-md",style:{"max-width":"350px"}},f=s((()=>(0,a._)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1))),v=s((()=>(0,a._)("div",{class:"text-h6"},"Karte zuweisen",-1))),T=s((()=>(0,a._)("div",{class:"text-h6"},"Freigabe oder Bedarf ändern",-1))),R={class:"q-pt-md",style:{"max-width":"350px"}},y=s((()=>(0,a._)("div",{class:"text-h6"},"Kartenzuweisung",-1))),W=s((()=>(0,a._)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1))),_=s((()=>(0,a._)("span",{class:"q-ml-sm"},"Kartenzuweisung aufheben?",-1)));function q(t,e,i,s,q,V){const I=(0,a.up)("q-item-label"),U=(0,a.up)("q-item-section"),H=(0,a.up)("q-item"),$=(0,a.up)("q-list"),M=(0,a.up)("q-btn-dropdown"),C=(0,a.up)("q-img"),L=(0,a.up)("q-card"),S=(0,a.up)("q-btn"),N=(0,a.up)("q-input"),G=(0,a.up)("q-toolbar-title"),D=(0,a.up)("q-toolbar"),K=(0,a.up)("q-card-section"),j=(0,a.up)("q-separator"),O=(0,a.up)("q-card-actions"),Z=(0,a.up)("q-dialog"),E=(0,a.up)("q-select"),z=(0,a.up)("q-avatar"),Q=(0,a.up)("q-page"),B=(0,a.Q2)("close-popup"),F=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(Q,null,{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.Wm)(M,{split:"",color:"primary",push:"",glossy:"","no-caps":"",icon:"star",label:"Spiel auswählen",onClick:V.onPositionMatchMainClick},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(q.matchIndex,(t=>(0,a.wy)(((0,a.wg)(),(0,a.j4)($,{key:t},{default:(0,a.w5)((()=>[t>0?(0,a.wy)(((0,a.wg)(),(0,a.j4)(H,{key:0,clickable:"",onClick:e=>V.onMatchClick(q.matchMatch[t],q.matchTime[t],q.matchAnnotations[t],q.matchDate[t])},{default:(0,a.w5)((()=>[(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(q.matchMatch[t]),1)])),_:2},1024),(0,a.Wm)(I,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(q.matchDate[t])+" - "+(0,n.zw)(q.matchTime[t]),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[B]]):(0,a.kq)("",!0)])),_:2},1024)),[[F]]))),128))])),_:1},8,["onClick"])]),(0,a.Wm)(L,{class:"my-card"},{default:(0,a.w5)((()=>[s.txtMatchName.indexOf("H....")>=0?((0,a.wg)(),(0,a.j4)(C,{key:0,src:"statics/SCF-Hoffenheim.jpg"},{default:(0,a.w5)((()=>[(0,a._)("div",l,(0,n.zw)(s.txtMatchName),1)])),_:1})):(0,a.kq)("",!0),s.txtMatchName.indexOf("Juventus")>=0?((0,a.wg)(),(0,a.j4)(C,{key:1,src:"statics/SCF-Juventus.jpg"},{default:(0,a.w5)((()=>[(0,a._)("div",o,(0,n.zw)(s.txtMatchName),1)])),_:1})):(0,a.kq)("",!0),s.txtMatchName.indexOf("Test")>=0?((0,a.wg)(),(0,a.j4)(C,{key:2,src:"statics/Test_Spieltag.jpg"},{default:(0,a.w5)((()=>[(0,a._)("div",r,(0,n.zw)(s.txtMatchName),1)])),_:1})):(0,a.kq)("",!0)])),_:1}),s.IsAdministrator?((0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)(S,{class:"bg-white text-primary",icon:"share",label:"Übersicht teilen",onClick:e[0]||(e[0]=t=>V.setTextShare(s.txtMatchName))})])):(0,a.kq)("",!0),(0,a._)("div",p,[(0,a._)("div",h,[(0,a.Wm)(N,{dark:"",outlined:"",modelValue:s.txtAnnotationsMatch,"onUpdate:modelValue":e[1]||(e[1]=t=>s.txtAnnotationsMatch=t),"input-class":"text-overline",type:"textarea",readonly:!0},null,8,["modelValue"])]),(0,a._)("div",m,[(0,a.Wm)(D,{class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{class:"text-overline"},{default:(0,a.w5)((()=>[(0,a.Uk)("Anwesend (Ankunft)")])),_:1}),(0,a.Wm)(S,{class:"bg-white text-primary",icon:"add",label:"Neu",onClick:e[2]||(e[2]=t=>s.addParticipant=!0)})])),_:1})]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(q.participantIndex,(t=>(0,a.wy)(((0,a.wg)(),(0,a.j4)($,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:t},{default:(0,a.w5)((()=>[t>0?(0,a.wy)(((0,a.wg)(),(0,a.j4)(H,{key:0,clickable:"",onClick:e=>V.onParticipantClick(q.participantPosition[t],q.participantParticipant[t],q.participantArrival[t],q.participantAnnotations[t],q.participantAction[t],q.participantReaction[t])},{default:(0,a.w5)((()=>[(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I,{overline:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(q.participantParticipant[t]),1)])),_:2},1024),(0,a.Wm)(I,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(q.participantArrival[t]),1)])),_:2},1024),(0,a.Wm)(I,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(q.participantAnnotations[t]),1)])),_:2},1024),""!==q.participantReaction[t]?((0,a.wg)(),(0,a.j4)(I,{key:0,caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)("habe Karte von "+(0,n.zw)(q.participantReaction[t]),1)])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])),[[F]]):(0,a.kq)("",!0)])),_:2},1024)),[[F]]))),128)),(0,a._)("div",u,[(0,a.Wm)(D,{class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(G,{class:"text-overline"},{default:(0,a.w5)((()=>[(0,a.Uk)("Karte weitergegeben oder bedarf")])),_:1}),s.IsAdministrator?((0,a.wg)(),(0,a.j4)(S,{key:0,class:"bg-white text-primary",icon:"credit_card",label:"Zuweisung",onClick:e[3]||(e[3]=t=>s.addTicketAssignment=!0)})):(0,a.kq)("",!0)])),_:1})]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(q.ticketIndex,(t=>(0,a.wy)(((0,a.wg)(),(0,a.j4)($,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:t},{default:(0,a.w5)((()=>[t>0?(0,a.wy)(((0,a.wg)(),(0,a.j4)(H,{key:0,clickable:"",onClick:e=>V.onTicketAssignmentClick(q.ticketPosition[t],q.ticketParticipant[t],q.ticketArrival[t],q.ticketAnnotations[t],q.ticketAction[t],q.ticketReaction[t])},{default:(0,a.w5)((()=>[(0,a.Wm)(U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(I,{overline:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(q.ticket[t]),1)])),_:2},1024),(0,a.Wm)(I,{caption:""},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(q.ticketAnnotations[t]),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[F]]):(0,a.kq)("",!0)])),_:2},1024)),[[F]]))),128))]),(0,a._)("div",k,[(0,a.Wm)(Z,{modelValue:s.share,"onUpdate:modelValue":e[5]||(e[5]=t=>s.share=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[x])),_:1}),(0,a.Wm)(K,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a.Wm)(N,{modelValue:s.txtShare,"onUpdate:modelValue":e[4]||(e[4]=t=>s.txtShare=t),filled:"",type:"textarea",rows:"35"},null,8,["modelValue"])])])),_:1}),(0,a.Wm)(j),(0,a.Wm)(O,{class:"text-primary",align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Abbrechen"},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Z,{modelValue:s.addParticipant,"onUpdate:modelValue":e[11]||(e[11]=t=>s.addParticipant=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[b])),_:1}),(0,a.Wm)(K,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{dense:"",modelValue:s.txtParticipantNew,"onUpdate:modelValue":e[6]||(e[6]=t=>s.txtParticipantNew=t),autofocus:"",label:"Name"},null,8,["modelValue"]),(0,a.Wm)(E,{modelValue:s.txtActionNew,"onUpdate:modelValue":e[7]||(e[7]=t=>s.txtActionNew=t),options:s.cbxActionOptions,label:"Aktion"},null,8,["modelValue","options"]),"bin dabei"===s.txtActionNew?((0,a.wg)(),(0,a.j4)(E,{key:0,modelValue:s.txtArrivalNew,"onUpdate:modelValue":e[8]||(e[8]=t=>s.txtArrivalNew=t),options:s.cbxArrivalOptions,label:"Ankunft"},null,8,["modelValue","options"])):(0,a.kq)("",!0),(0,a._)("div",A,[(0,a.Wm)(N,{modelValue:s.txtAnnotationsParticipantNew,"onUpdate:modelValue":e[9]||(e[9]=t=>s.txtAnnotationsParticipantNew=t),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,a.Wm)(j),(0,a.Wm)(O,{class:"text-primary",align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Abbrechen"},null,512),[[B]]),(0,a.wy)((0,a.Wm)(S,{icon:"save",label:"Speichern",onClick:e[10]||(e[10]=t=>V.addParticipantSave(s.txtParticipantNew,s.txtArrivalNew,s.txtAnnotationsParticipantNew,s.txtActionNew,s.txtMatchName,s.txtTime,s.txtAnnotationsMatchOriginal)),disable:""===s.txtParticipantNew},null,8,["disable"]),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Z,{modelValue:s.editParticipant,"onUpdate:modelValue":e[21]||(e[21]=t=>s.editParticipant=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[w])),_:1}),(0,a.Wm)(K,{class:"q-pt-none"},{default:(0,a.w5)((()=>[""===s.txtParticipantReaction?((0,a.wg)(),(0,a.j4)(N,{key:0,dense:"",modelValue:s.txtParticipantParticipant,"onUpdate:modelValue":e[12]||(e[12]=t=>s.txtParticipantParticipant=t),autofocus:"",label:"Name",readonly:!1},null,8,["modelValue"])):(0,a.kq)("",!0),""!==s.txtParticipantReaction?((0,a.wg)(),(0,a.j4)(N,{key:1,dense:"",modelValue:s.txtParticipantParticipant,"onUpdate:modelValue":e[13]||(e[13]=t=>s.txtParticipantParticipant=t),autofocus:"",label:"Name",readonly:!0},null,8,["modelValue"])):(0,a.kq)("",!0),""===s.txtParticipantReaction?((0,a.wg)(),(0,a.j4)(E,{key:2,modelValue:s.txtParticipantAction,"onUpdate:modelValue":e[14]||(e[14]=t=>s.txtParticipantAction=t),options:s.cbxActionOptions,label:"Aktion",readonly:!1},null,8,["modelValue","options"])):(0,a.kq)("",!0),""!==s.txtParticipantReaction?((0,a.wg)(),(0,a.j4)(E,{key:3,modelValue:s.txtParticipantAction,"onUpdate:modelValue":e[15]||(e[15]=t=>s.txtParticipantAction=t),options:s.cbxActionOptions,label:"Aktion",readonly:!0},null,8,["modelValue","options"])):(0,a.kq)("",!0),"bin dabei"===s.txtParticipantAction?((0,a.wg)(),(0,a.j4)(E,{key:4,modelValue:s.txtParticipantArrival,"onUpdate:modelValue":e[16]||(e[16]=t=>s.txtParticipantArrival=t),options:s.cbxArrivalOptions,label:"Ankunft"},null,8,["modelValue","options"])):(0,a.kq)("",!0),""!==s.txtParticipantReaction?((0,a.wg)(),(0,a.j4)(N,{key:5,class:"text-italic",dense:"",modelValue:s.txtParticipantReaction,"onUpdate:modelValue":e[17]||(e[17]=t=>s.txtParticipantReaction=t),readonly:!0},null,8,["modelValue"])):(0,a.kq)("",!0),(0,a._)("div",P,[(0,a.Wm)(N,{modelValue:s.txtParticipantAnnotations,"onUpdate:modelValue":e[18]||(e[18]=t=>s.txtParticipantAnnotations=t),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,a.Wm)(j),(0,a.Wm)(O,{class:"text-primary",align:"right"},{default:(0,a.w5)((()=>[s.IsAdministrator&&""===s.txtParticipantReaction?((0,a.wg)(),(0,a.j4)(S,{key:0,icon:"delete",color:"primary",onClick:e[19]||(e[19]=t=>s.delParticipant=!0)})):(0,a.kq)("",!0),(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Abbrechen"},null,512),[[B]]),(0,a.wy)((0,a.Wm)(S,{icon:"save",label:"Speichern",onClick:e[20]||(e[20]=t=>V.editParticipantSave(s.intParticipantPosition,s.txtParticipantParticipant,s.txtParticipantArrival,s.txtParticipantAnnotations,s.txtParticipantAction,s.txtMatchName,s.txtTime,s.txtAnnotationsMatchOriginal)),disable:""===s.txtParticipantParticipant},null,8,["disable"]),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Z,{modelValue:s.delParticipant,"onUpdate:modelValue":e[23]||(e[23]=t=>s.delParticipant=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(K,{class:"row items-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{icon:"delete",color:"primary","text-color":"white"}),f])),_:1}),(0,a.Wm)(O,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Nein",color:"primary"},null,512),[[B]]),(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Ja",color:"primary",onClick:e[22]||(e[22]=t=>V.deleteParticipant(s.intParticipantPosition,s.txtMatchName,s.txtTime,s.txtAnnotationsMatchOriginal))},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Z,{modelValue:s.addTicketAssignment,"onUpdate:modelValue":e[27]||(e[27]=t=>s.addTicketAssignment=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[v])),_:1}),(0,a.Wm)(K,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(E,{modelValue:s.txtTicketAssignmentGiven,"onUpdate:modelValue":e[24]||(e[24]=t=>s.txtTicketAssignmentGiven=t),options:s.cbxTicketAssignmentGivenOptions,label:"Karte von"},null,8,["modelValue","options"]),(0,a.Wm)(E,{modelValue:s.txtTicketAssignmentRequired,"onUpdate:modelValue":e[25]||(e[25]=t=>s.txtTicketAssignmentRequired=t),options:s.cbxTicketAssignmentRequiredOptions,label:"Karte an"},null,8,["modelValue","options"])])),_:1}),(0,a.Wm)(j),(0,a.Wm)(O,{class:"text-primary",align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Abbrechen"},null,512),[[B]]),(0,a.wy)((0,a.Wm)(S,{icon:"save",label:"Speichern",onClick:e[26]||(e[26]=t=>V.addTicketAssignmentSave(s.txtTicketAssignmentGiven,s.txtTicketAssignmentRequired,s.txtMatchName,s.txtTime,s.txtAnnotationsMatchOriginal)),disable:""===s.txtTicketAssignmentGiven||""===s.txtTicketAssignmentRequired},null,8,["disable"]),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Z,{modelValue:s.editTicketAssignment,"onUpdate:modelValue":e[33]||(e[33]=t=>s.editTicketAssignment=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[T])),_:1}),(0,a.Wm)(K,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{dense:"",modelValue:s.txtTicketParticipant,"onUpdate:modelValue":e[28]||(e[28]=t=>s.txtTicketParticipant=t),autofocus:"",label:"Name"},null,8,["modelValue"]),(0,a.Wm)(E,{modelValue:s.txtTicketAction,"onUpdate:modelValue":e[29]||(e[29]=t=>s.txtTicketAction=t),options:s.cbxActionOptions,label:"Aktion"},null,8,["modelValue","options"]),(0,a._)("div",R,[(0,a.Wm)(N,{modelValue:s.txtTicketAnnotations,"onUpdate:modelValue":e[30]||(e[30]=t=>s.txtTicketAnnotations=t),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,a.Wm)(j),(0,a.Wm)(O,{class:"text-primary",align:"right"},{default:(0,a.w5)((()=>[s.IsAdministrator?((0,a.wg)(),(0,a.j4)(S,{key:0,icon:"delete",color:"primary",onClick:e[31]||(e[31]=t=>s.delTicketAssignment=!0)})):(0,a.kq)("",!0),(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Abbrechen"},null,512),[[B]]),(0,a.wy)((0,a.Wm)(S,{icon:"save",label:"Speichern",onClick:e[32]||(e[32]=t=>V.editTicketAssignmentSave(s.intTicketAssignmentPosition,s.txtTicketParticipant,s.txtTicketArrival,s.txtTicketAnnotations,s.txtTicketAction,s.txtMatchName,s.txtTime,s.txtAnnotationsMatchOriginal)),disable:""===s.txtTicketParticipant},null,8,["disable"]),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Z,{modelValue:s.editTicketAssigned,"onUpdate:modelValue":e[37]||(e[37]=t=>s.editTicketAssigned=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(L,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[y])),_:1}),(0,a.Wm)(K,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(N,{modelValue:s.txtTicketAssignmentGiven,"onUpdate:modelValue":e[34]||(e[34]=t=>s.txtTicketAssignmentGiven=t),label:"Karte von",readonly:!0},null,8,["modelValue"]),(0,a.Wm)(N,{modelValue:s.txtTicketAssignmentRequired,"onUpdate:modelValue":e[35]||(e[35]=t=>s.txtTicketAssignmentRequired=t),label:"Karte an",readonly:!0},null,8,["modelValue"])])),_:1}),(0,a.Wm)(j),(0,a.Wm)(O,{class:"text-primary",align:"right"},{default:(0,a.w5)((()=>[s.IsAdministrator?((0,a.wg)(),(0,a.j4)(S,{key:0,icon:"swipe_left",label:"Aufheben",color:"primary",onClick:e[36]||(e[36]=t=>s.delTicketAssigned=!0)})):(0,a.kq)("",!0),(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Abbrechen"},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Z,{modelValue:s.delTicketAssignment,"onUpdate:modelValue":e[39]||(e[39]=t=>s.delTicketAssignment=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(K,{class:"row items-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{icon:"delete",color:"primary","text-color":"white"}),W])),_:1}),(0,a.Wm)(O,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Nein",color:"primary"},null,512),[[B]]),(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Ja",color:"primary",onClick:e[38]||(e[38]=t=>V.deleteTicketAssignment(s.intTicketAssignmentPosition,s.txtMatchName,s.txtTime,s.txtAnnotationsMatchOriginal))},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(Z,{modelValue:s.delTicketAssigned,"onUpdate:modelValue":e[41]||(e[41]=t=>s.delTicketAssigned=t),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(L,null,{default:(0,a.w5)((()=>[(0,a.Wm)(K,{class:"row items-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(z,{icon:"swipe_left",color:"primary","text-color":"white"}),_])),_:1}),(0,a.Wm)(O,{align:"right"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Nein",color:"primary"},null,512),[[B]]),(0,a.wy)((0,a.Wm)(S,{flat:"",label:"Ja",color:"primary",onClick:e[40]||(e[40]=t=>V.deleteTicketAssigned(s.txtTicketAssignedGiven,s.txtTicketAssignedRequired,s.txtMatchName,s.txtTime,s.txtAnnotationsMatchOriginal))},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,a.Wm)(C,{src:"statics/BGB.jpg",class:"header-image absolute-top"})])),_:1})}var V=i(499);const I=(0,V.iH)(""),U=(0,V.iH)(""),H=(0,V.iH)(""),$=(0,V.iH)(""),M=(0,V.iH)(""),C=(0,V.iH)(""),L=[],S=(0,V.iH)(""),N=(0,V.iH)(""),G=(0,V.iH)(""),D=(0,V.iH)(""),K=(0,V.iH)(""),j=(0,V.iH)(""),O=(0,V.iH)(""),Z=(0,V.iH)(""),E=(0,V.iH)(""),z=(0,V.iH)(""),Q=(0,V.iH)(""),B=(0,V.iH)(""),F=[],J=[],Y=(0,V.iH)(""),X=(0,V.iH)(""),tt=(0,V.iH)(""),et=(0,V.iH)(""),it=(0,V.iH)(""),at={name:"ListParticipant",setup(){return{IsAdministrator:(0,V.iH)(!0),txtMatchName:(0,V.iH)(C),txtTime:(0,V.iH)(U),txtAnnotationsMatchOriginal:(0,V.iH)(H),txtAnnotationsMatch:(0,V.iH)($),cbxArrivalOptions:(0,V.iH)(L),addParticipant:(0,V.iH)(!1),editParticipant:(0,V.iH)(!1),delParticipant:(0,V.iH)(!1),share:(0,V.iH)(!1),addTicketAssignment:(0,V.iH)(!1),editTicketAssignment:(0,V.iH)(!1),editTicketAssigned:(0,V.iH)(!1),delTicketAssignment:(0,V.iH)(!1),delTicketAssigned:(0,V.iH)(!1),intParticipantPosition:(0,V.iH)(S),txtParticipantParticipant:(0,V.iH)(N),txtParticipantArrival:(0,V.iH)(G),txtParticipantAnnotations:(0,V.iH)(D),txtParticipantAction:(0,V.iH)(K),txtParticipantReaction:(0,V.iH)(j),cbxActionOptions:["bin dabei","brauche Karte","meine Karte ist frei"],intTicketAssignmentPosition:(0,V.iH)(O),txtTicketParticipant:(0,V.iH)(Z),txtTicketArrival:(0,V.iH)(E),txtTicketAnnotations:(0,V.iH)(z),txtTicketAction:(0,V.iH)(Q),txtTicketReaction:(0,V.iH)(B),txtParticipantNew:(0,V.iH)(""),txtArrivalNew:(0,V.iH)(""),txtAnnotationsParticipantNew:(0,V.iH)(""),txtActionNew:(0,V.iH)("bin dabei"),cbxTicketAssignmentGivenOptions:(0,V.iH)(F),cbxTicketAssignmentRequiredOptions:(0,V.iH)(J),txtTicketAssignmentGiven:(0,V.iH)(Y),txtTicketAssignedGiven:(0,V.iH)(Y),txtTicketAssignmentRequired:(0,V.iH)(X),txtTicketAssignedRequired:(0,V.iH)(X),txtShare:(0,V.iH)(it)}},data(){return{URLMatch:"https://script.google.com/macros/s/AKfycbyh43MSF1Vz9W3TZ0_9e273B81CtCEk4se3yHj9HCbIvBlfw9g6tHE3d5O8eXW3yIkyog/exec?ID=1znyBnIzqghCeRImZ8fSVGB_gR6TESuqep20YbUhkhSU&SH=BGB-Match",URLParticipant:"https://script.google.com/macros/s/AKfycbz7shs3qaBAxwLyvDH7XZVuqFcX2Yg8mzVxZe8RcO3KWQuFCRKlBSKu5uMSvJTKQOGkDw/exec?ID=1HCZKuGO-dmNJwrEsFyN2acvnE-WMHabBW8jWdhO4ggI&SH=BGB-Participant",matchIndex:[],matchPosition:[],matchMatch:[],matchTime:[],matchAnnotations:[],matchDate:[],participantIndex:[],participantPosition:[],participantMatch:[],participantParticipant:[],participantListElement:[],participantArrival:[],participantAnnotations:[],participantAction:[],participantReaction:[],reservation:"",ticketIndex:[],ticketPosition:[],ticket:[],ticketParticipant:[],ticketListElement:[],ticketArrival:[],ticketAnnotations:[],ticketAction:[],ticketReaction:[],ticketGivenIndex:[],ticketGivenPosition:[],ticketGivenParticipant:[],ticketRequiredIndex:[],ticketRequiredPosition:[],ticketRequiredParticipant:[],ticketAssignedIndex:[],ticketAssignedPosition:[],ticketAssignedParticipant:[]}},computed:{},mounted(){this.getTableMatch()},methods:{getTableMatch(){this.matchIndex=[],this.matchPosition=[],this.matchMatch=[],this.matchTime=[],this.matchAnnotations=[],this.matchDate=[],console.log("URLMatch: "+this.URLMatch+"&func=Read&published=TRUE"),this.$axios(`${this.URLMatch}&func=Read&published=TRUE`).then((t=>{this.tableMatch=t.data.split("\n");for(let e=0;e<this.tableMatch.length-1;e++){const t=this.tableMatch[e].split(",");for(let i=0;i<t.length;i++)switch(i){case 0:this.matchIndex[e+1]=e+1,this.matchPosition[e+1]=t[i];break;case 2:this.matchMatch[e+1]=t[i];break;case 4:this.matchTime[e+1]=t[i].substr(0,5);break;case 5:this.matchAnnotations[e+1]=t[i];break;case 6:this.matchDate[e+1]=t[i];break;default:break}}this.onMatchClick(this.matchMatch[1],this.matchTime[1],this.matchAnnotations[1],this.matchDate[1])})).catch((t=>{console.log(t)}))},onPositionMatchMainClick(){console.log("Clicked on main button")},onMatchClick(t,e,i,a){console.log("onMatchClick: "+t+", "+e+", "+i+", "+a),I.value=t,U.value=e,M.value=a,C.value=t.trim()+" "+a.substr(0,6)+a.substr(8,2)+" - "+e.substr(0,5),this.loadReloadData(C.value,e,i)},loadReloadData(t,e,i){console.log("loadReloadData: "+t+", "+e+", "+i),this.setArrivalElements(e),this.getTableParticipant(t,e,i),this.getTableTicket(t),this.getTableTicketGiven(t),this.getTableTicketRequired(t),this.getTableTicketAssigned(t)},setTextShare(t){it.value=t+"\n\nAnwesend (Ankunft):\n"+tt.value,it.value+="\nKarte weitergeben oder bedarf (Karte hat dabei):\n"+et.value,it.value+="\n"+$.value,this.share=!0},onParticipantClick(t,e,i,a,n,s){console.log("Clicked on Participant: "+t+", "+e+", "+i+", "+a+", "+n+", "+s),S.value=t,N.value=e,G.value=i,D.value=a,K.value=n,j.value=""!==s?"habe Karte von "+s:s,this.editParticipant=!0},addParticipantSave(t,e,i,a,n,s,c){console.log("addParticipantSave: "+t+", "+e+", "+i+", "+a+", "+n+", "+s+", "+c),"bin dabei"!==a&&(e=""),this.$axios(`${this.URLParticipant}&func=Add&match=${n}&participant=${encodeURI(t.replace(","," "))}&arrival=${e}&annotations=${encodeURI(i.replace(",",";"))}&action=${a}&reaction=`).then((t=>{"Success, requested action completed"===t.data&&this.loadReloadData(n,s,c)})).catch((t=>{console.log(t)}))},editParticipantSave(t,e,i,a,n,s,c,l){console.log("editParticipantSave: "+t+", "+e+", "+i+", "+a+", "+n+", "+s+", "+c+", "+l),"bin dabei"!==n&&(i=""),this.$axios(`${this.URLParticipant}&func=Update&index=${t}&participant=${encodeURI(e.replace(","," "))}&arrival=${i}&annotations=${encodeURI(a.replace(",",";"))}&action=${n}`).then((t=>{"Success, requested action completed"===t.data&&this.loadReloadData(s,c,l)})).catch((t=>{console.log(t)}))},deleteParticipant(t,e,i,a){console.log("deleteParticipant: "+t+", "+e+", "+i+", "+a),this.$axios(`${this.URLParticipant}&func=Delete&index=${t}`).then((t=>{"Success, requested action completed"===t.data&&(this.editParticipant=!1,this.loadReloadData(e,i,a))})).catch((t=>{console.log(t)}))},onTicketAssignmentClick(t,e,i,a,n,s){console.log("Clicked on ticket assignment: "+t+", "+e+", "+i+", "+a+", "+n+", "+s),O.value=t,Z.value=e,E.value=i,z.value=a,Q.value=n,""!==s?(B.value="habe Karte von "+e,Y.value=e,X.value=s,this.editTicketAssignment=!1,this.editTicketAssigned=!0):(B.value="",X.value="",Y.value="",this.editTicketAssignment=!0,this.editTicketAssigned=!1)},addTicketAssignmentSave(t,e,i,a,n){console.log("addTicketAssignmentSave: "+t+", "+e+", "+i+", "+a+", "+n);let s=0;for(let l=1;l<this.ticketGivenParticipant.length;l++){const e=this.ticketGivenParticipant[l];e===t&&(s=this.ticketGivenPosition[l])}this.$axios(`${this.URLParticipant}&func=UpdateTicketGiven&index=${s}&reaction=${e}`).catch((t=>{console.log(t)}));let c=0;for(let l=1;l<this.ticketRequiredParticipant.length;l++){const t=this.ticketRequiredParticipant[l];t===e&&(c=this.ticketRequiredPosition[l])}this.$axios(`${this.URLParticipant}&func=UpdateTicketRequired&index=${c}&action=bin dabei&reaction=${t}`).then((t=>{"Success, requested action completed"===t.data&&this.loadReloadData(i,a,n)})).catch((t=>{console.log(t)}))},deleteTicketAssigned(t,e,i,a,n){console.log("deleteTicketAssigned: "+t+", "+e+", "+i+", "+a+", "+n);let s=0;for(let l=1;l<this.ticketAssignedParticipant.length;l++){const e=this.ticketAssignedParticipant[l];e===t&&(s=this.ticketAssignedPosition[l])}this.$axios(`${this.URLParticipant}&func=UpdateTicketGiven&index=${s}&reaction=`).catch((t=>{console.log(t)}));let c=0;for(let l=1;l<this.ticketAssignedParticipant.length;l++){const t=this.ticketAssignedParticipant[l];t===e&&(c=this.ticketAssignedPosition[l])}this.$axios(`${this.URLParticipant}&func=UpdateTicketRequired&index=${c}&action=brauche Karte&reaction=`).then((t=>{"Success, requested action completed"===t.data&&(this.editTicketAssigned=!1,this.loadReloadData(i,a,n))})).catch((t=>{console.log(t)}))},editTicketAssignmentSave(t,e,i,a,n,s,c,l){console.log("editTicketAssignmentSave: "+t+", "+e+", "+i+", "+a+", "+n+", "+s+", "+c+", "+l),"bin dabei"!==n&&(i=""),this.$axios(`${this.URLParticipant}&func=Update&index=${t}&participant=${encodeURI(e.replace(","," "))}&arrival=${i}&annotations=${encodeURI(a.replace(",",";"))}&action=${n}`).then((t=>{"Success, requested action completed"===t.data&&(this.editTicketAssignment=!1,this.loadReloadData(s,c,l))})).catch((t=>{console.log(t)}))},deleteTicketAssignment(t,e,i,a){console.log("deleteTicketAssignment: "+t+", "+e+", "+i+", "+a),this.$axios(`${this.URLParticipant}&func=Delete&index=${t}`).then((t=>{"Success, requested action completed"===t.data&&(this.editTicketAssignment=!1,this.loadReloadData(e,i,a))})).catch((t=>{console.log(t)}))},getTableParticipant(t,e,i){this.participantIndex=[],this.participantPosition=[],this.participantMatch=[],this.participantParticipant=[],this.participantListElement=[],this.participantArrival=[],this.participantAnnotations=[],this.participantAction=[],this.participantReaction=[],this.reservation="";let a="Read";this.IsAdministrator&&(a="ReadAdmin"),console.log("URLParticipant: "+this.URLParticipant+"&func=ReadAdmin&match="+t),this.$axios(`${this.URLParticipant}&func=${a}&match=${t}`).then((t=>{this.tableParticipant=t.data.split("\n");for(let i=0;i<this.tableParticipant.length-1;i++){const t=this.tableParticipant[i].split(",");for(let a=0;a<t.length;a++)switch(a){case 0:this.participantIndex[i+1]=i+1,this.participantPosition[i+1]=t[a];break;case 2:this.participantMatch[i+1]=t[a];break;case 3:this.participantParticipant[i+1]=t[a],this.participantListElement[i]=t[a];break;case 4:this.participantArrival[i+1]=t[a].substr(0,5),this.participantListElement[i]+=" ("+t[a].substr(0,5)+")",parseInt(this.participantArrival[i+1].substr(0,2))===parseInt(e.substr(0,2)-2)&&this.participantArrival[i+1].substr(3,2)===e.substr(3,2)?(""!==this.reservation&&(this.reservation+=", "),this.reservation+=this.participantParticipant[i+1].trim()):this.reservation+="";break;case 5:this.participantAnnotations[i+1]=t[a].replace(/§§§/g,"\n").trim(),""!==this.participantAnnotations[i+1]&&(this.participantListElement[i]+=" ("+this.participantAnnotations[i+1]+")");break;case 6:this.participantAction[i+1]=t[a];break;case 7:this.participantReaction[i+1]=t[a];break;default:break}}""!==this.reservation&&(this.reservation+=","),H.value=i,$.value=i.replace(/§§§/g,"\n").replace("<STANDARDTEXT>","Wer reserviert Plätze ("+parseInt(e.substr(0,2)-2)+":"+e.substr(3,2)+"): "+this.reservation+" die Fahne und die Socken"),tt.value="",this.participantListElement.forEach((t=>{tt.value+=t+"\n"}))})).catch((t=>{console.log(t)}))},getTableTicket(t){this.ticketIndex=[],this.ticketPosition=[],this.ticket=[],this.ticketParticipant=[],this.ticketListElement=[],this.ticketArrival=[],this.ticketAnnotations=[],this.ticketAction=[],this.ticketReaction=[],console.log("URLParticipant: "+this.URLParticipant+"&func=ReadTickets&match="+t),this.$axios(`${this.URLParticipant}&func=ReadTickets&match=${t}`).then((t=>{this.tableTicket=t.data.split("\n");for(let e=0;e<this.tableTicket.length-1;e++){const t=this.tableTicket[e].split(",");for(let i=0;i<t.length;i++){switch(i){case 0:this.ticketIndex[e+1]=e+1,this.ticketPosition[e+1]=t[i];break;case 3:this.ticketParticipant[e+1]=t[i];break;case 4:this.ticketArrival[e+1]=t[i];break;case 5:this.ticketAnnotations[e+1]=t[i].replace(/§§§/g,"\n").trim();break;case 6:this.ticketAction[e+1]=t[i],"brauche Karte"===this.ticketAction[e+1]&&(this.ticketListElement[e]="??? an "+this.ticketParticipant[e+1]+" ("+this.ticketAnnotations[e+1]+")");break;case 7:this.ticketReaction[e+1]=t[i],"meine Karte ist frei"===this.ticketAction[e+1]&&(this.ticketListElement[e]=this.ticketParticipant[e+1],""===this.ticketReaction[e+1]?this.ticketListElement[e]+=" an ??? ("+this.ticketAnnotations[e+1]+")":this.ticketListElement[e]+=" an "+this.ticketReaction[e+1]+" ("+this.ticketAnnotations[e+1]+")");break;default:break}"brauche Karte"===this.ticketAction[e+1]?this.ticket[e+1]="??? an "+this.ticketParticipant[e+1]:"meine Karte ist frei"===this.ticketAction[e+1]&&(""!==this.ticketReaction[e+1]?this.ticket[e+1]=this.ticketParticipant[e+1]+" an "+this.ticketReaction[e+1]:this.ticket[e+1]=this.ticketParticipant[e+1]+" an ???")}}et.value="",this.ticketListElement.forEach((t=>{et.value+=t+"\n"}))})).catch((t=>{console.log(t)}))},getTableTicketGiven(t){this.ticketGivenIndex=[],this.ticketGivenPosition=[],this.ticketGivenParticipant=[],console.log("URLParticipant: "+this.URLParticipant+"&func=ReadTicketsGiven&match="+t),this.$axios(`${this.URLParticipant}&func=ReadTicketsGiven&match=${t}`).then((t=>{this.tableTicket=t.data.split("\n");for(let e=0;e<this.tableTicket.length-1;e++){const t=this.tableTicket[e].split(",");for(let i=0;i<t.length;i++)switch(i){case 0:this.ticketGivenIndex[e+1]=e+1,this.ticketGivenPosition[e+1]=t[i];break;case 3:this.ticketGivenParticipant[e+1]=t[i];break;default:break}}F.length=0;for(let e=1;e<this.ticketGivenParticipant.length;e++)F[e-1]=this.ticketGivenParticipant[e]})).catch((t=>{console.log(t)}))},getTableTicketRequired(t){this.ticketRequiredIndex=[],this.ticketRequiredPosition=[],this.ticketRequiredParticipant=[],console.log("URLParticipant: "+this.URLParticipant+"&func=ReadTicketsRequired&match="+t),this.$axios(`${this.URLParticipant}&func=ReadTicketsRequired&match=${t}`).then((t=>{this.tableTicket=t.data.split("\n");for(let e=0;e<this.tableTicket.length-1;e++){const t=this.tableTicket[e].split(",");for(let i=0;i<t.length;i++)switch(i){case 0:this.ticketRequiredIndex[e+1]=e+1,this.ticketRequiredPosition[e+1]=t[i];break;case 3:this.ticketRequiredParticipant[e+1]=t[i];break;default:break}}J.length=0;for(let e=1;e<this.ticketRequiredParticipant.length;e++)J[e-1]=this.ticketRequiredParticipant[e]})).catch((t=>{console.log(t)}))},getTableTicketAssigned(t){this.ticketAssignedIndex=[],this.ticketAssignedPosition=[],this.ticketAssignedParticipant=[],console.log("URLParticipant: "+this.URLParticipant+"&func=ReadTicketsAssigned&match="+t),this.$axios(`${this.URLParticipant}&func=ReadTicketsAssigned&match=${t}`).then((t=>{this.tableTicket=t.data.split("\n");for(let e=0;e<this.tableTicket.length-1;e++){const t=this.tableTicket[e].split(",");for(let i=0;i<t.length;i++)switch(i){case 0:this.ticketAssignedIndex[e+1]=e+1,this.ticketAssignedPosition[e+1]=t[i];break;case 3:this.ticketAssignedParticipant[e+1]=t[i];break;default:break}}})).catch((t=>{console.log(t)}))},setArrivalElements(t){const e=t.substr(0,2),i=t.substr(3,2),a=15;L[1]="";for(let n=0;n<=8;n++){const t=parseInt(a*n);switch(i){case"00":0===t&&(L[n+2]=parseInt(e)-2+":00"),15===t&&(L[n+2]=parseInt(e)-2+":15"),30===t&&(L[n+2]=parseInt(e)-2+":30"),45===t&&(L[n+2]=parseInt(e)-2+":45"),60===t&&(L[n+2]=parseInt(e)-1+":00"),75===t&&(L[n+2]=parseInt(e)-1+":15"),90===t&&(L[n+2]=parseInt(e)-1+":30"),105===t&&(L[n+2]=parseInt(e)-1+":45"),120===t&&(L[n+2]=parseInt(e)-0+":00");break;case"15":0===t&&(L[n+2]=parseInt(e)-2+":15"),15===t&&(L[n+2]=parseInt(e)-2+":30"),30===t&&(L[n+2]=parseInt(e)-2+":45"),45===t&&(L[n+2]=parseInt(e)-1+":00"),60===t&&(L[n+2]=parseInt(e)-1+":15"),75===t&&(L[n+2]=parseInt(e)-1+":30"),90===t&&(L[n+2]=parseInt(e)-1+":45"),105===t&&(L[n+2]=parseInt(e)-0+":00"),120===t&&(L[n+2]=parseInt(e)-0+":15");break;case"30":0===t&&(L[n+2]=parseInt(e)-2+":30"),15===t&&(L[n+2]=parseInt(e)-2+":45"),30===t&&(L[n+2]=parseInt(e)-1+":00"),45===t&&(L[n+2]=parseInt(e)-1+":15"),60===t&&(L[n+2]=parseInt(e)-1+":30"),75===t&&(L[n+2]=parseInt(e)-1+":45"),90===t&&(L[n+2]=parseInt(e)-0+":00"),105===t&&(L[n+2]=parseInt(e)-0+":15"),120===t&&(L[n+2]=parseInt(e)-0+":30");break;case"45":0===t&&(L[n+2]=parseInt(e)-2+":45"),15===t&&(L[n+2]=parseInt(e)-1+":00"),30===t&&(L[n+2]=parseInt(e)-1+":15"),45===t&&(L[n+2]=parseInt(e)-1+":30"),60===t&&(L[n+2]=parseInt(e)-1+":45"),75===t&&(L[n+2]=parseInt(e)-0+":00"),90===t&&(L[n+2]=parseInt(e)-0+":15"),105===t&&(L[n+2]=parseInt(e)-0+":30"),120===t&&(L[n+2]=parseInt(e)-0+":45");break;default:break}}}}};var nt=i(1639),st=i(9885),ct=i(8479),lt=i(3246),ot=i(490),rt=i(1233),dt=i(3115),pt=i(4458),ht=i(335),mt=i(8879),ut=i(6611),kt=i(1663),xt=i(1973),gt=i(2074),bt=i(3190),At=i(926),wt=i(1821),Pt=i(4363),ft=i(1357),vt=i(1136),Tt=i(2146),Rt=i(9984),yt=i.n(Rt);const Wt=(0,nt.Z)(at,[["render",q],["__scopeId","data-v-c1fe9cb0"]]),_t=Wt;yt()(at,"components",{QPage:st.Z,QBtnDropdown:ct.Z,QList:lt.Z,QItem:ot.Z,QItemSection:rt.Z,QItemLabel:dt.Z,QCard:pt.Z,QImg:ht.Z,QBtn:mt.Z,QInput:ut.Z,QToolbar:kt.Z,QToolbarTitle:xt.Z,QDialog:gt.Z,QCardSection:bt.Z,QSeparator:At.Z,QCardActions:wt.Z,QSelect:Pt.Z,QAvatar:ft.Z}),yt()(at,"directives",{Ripple:vt.Z,ClosePopup:Tt.Z})}}]);