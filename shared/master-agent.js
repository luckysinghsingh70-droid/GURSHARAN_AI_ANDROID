
const sensitive=["payment","pay","otp","one time password","pin","password","banking","bank account","bank transfer","upi","financial"];
function route(text="",speaker="Owner"){
 const t=text.toLowerCase();
 if(sensitive.some(x=>t.includes(x))) return {agent:"Security Agent",action:"request_owner_authorization",security:true,allowed:false};
 if(/bored|दिल की बात|सलाह|राय|बात करनी|conversation/.test(t)) return {agent:"Personal Companion",action:"conversation"};
 if(/nx|mold|mould|dfm|injection|tooling|cad|cam|engineering/.test(t)) return {agent:"Engineering Agent",action:"engineering_assistance"};
 if(/notepad|calculator|calc|explorer|computer|software/.test(t)) return {agent:"Computer Agent",action:"computer_action"};
 if(/linkedin|whatsapp|instagram|youtube|email/.test(t)) return {agent:"Communication Agent",action:"communication_action"};
 if(/search|browser|website|web/.test(t)) return {agent:"Web & Research Agent",action:"web_action"};
 return {agent:"Master Agent",action:"conversation"};
}
module.exports={route};
