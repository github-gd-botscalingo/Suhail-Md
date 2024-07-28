const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94764313558";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_13_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgwLFxuICAgICAgICA3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM1LFxuICAgICAgICA5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIklGMytmdTNwYjVPUXlxMGhWVjRicnRPTWk3eHRnN1BCWDVaaFBJZVIrV009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjQzMTM1NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMyQTgxNEJCOENDNkVFQUZBRUMyN0MwQjVBOEI4MTg1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE4MzIxNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRRVFZYndhb1E1ZXl3ai0xc2FfQ1JnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM2Y2RiYjdkLThiMjUtNGM3OC05YTg5LWFjOWMwNGU1ODczZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAxNixcbiAgICAgIDE3MixcbiAgICAgIDMzLFxuICAgICAgOTksXG4gICAgICAxMSxcbiAgICAgIDE1MCxcbiAgICAgIDUxLFxuICAgICAgNDAsXG4gICAgICA4MSxcbiAgICAgIDE4NixcbiAgICAgIDE0MCxcbiAgICAgIDI1MixcbiAgICAgIDc1LFxuICAgICAgNyxcbiAgICAgIDI3LFxuICAgICAgMTQsXG4gICAgICA5OCxcbiAgICAgIDIwNCxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDE0MyxcbiAgICAgIDg2LFxuICAgICAgMjAzLFxuICAgICAgMTUsXG4gICAgICA5NyxcbiAgICAgIDE1NCxcbiAgICAgIDEzNCxcbiAgICAgIDExNixcbiAgICAgIDM4LFxuICAgICAgMTIwLFxuICAgICAgMjM1LFxuICAgICAgODgsXG4gICAgICAxNzIsXG4gICAgICAxNjIsXG4gICAgICA2NCxcbiAgICAgIDExNyxcbiAgICAgIDExNyxcbiAgICAgIDczLFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE5R0tWM1RRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NDMxMzU1ODo3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc5MTg2MTM2Mjg5MzMxOjc4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01tSzI1WUNFS2JjbWJVR0dDUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTXU4WEsvdld3clBNakxsbUdIUi9VY3ZBaHN0dTlIa2c3TE1jWHF3cWVBST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFRXc0bjlMQm9mbi9tb1RseU8rN0REZkxTR2d6N2QwMUU0cVlMbk9sOEFPeHJheEo1QTIvNnNRUnNwblR6bDU3cVpIa0dCL1U1UzJpQ2tuRGFYKzdCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlWVFWeEJyNkRZV3kvSkZqNUs5ckx0ajdYWEJwMGRWY0JtTHg2QVJwZlpwYUNKek1XcSsvaFNiRDkrckErNE00dVJPLytMZW85WUx3RzNTczNBV0RBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NDMxMzU1ODo3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxODMyMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCWE5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJYTi5qc29uIjogIntcImtleURhdGFcIjpcImlNbWQweU9KdzZVcm5kdjlxZll5czBUbDNVZ1NiQkNtdkN4dlQrSkxuZ2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTg0NTAwNTUzLFwiY3VycmVudEluZGV4XCI6MjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsNSw2LDIyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Gihan",
  packname: process.env.PACK_NAME || "Gihan ",
  botname : process.env.BOT_NAME  || "Gihan",
  ownername:process.env.OWNER_NAME|| "Gihan_Dulakshana",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
