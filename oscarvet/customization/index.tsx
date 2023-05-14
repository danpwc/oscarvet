import { customize } from "customization-api";

import OscarChatBubbleComponent from "./components/OscarChatBubbleComponent";

const userCustomization = customize({
  components: {
    videoCall: {
      chat: {
        chatBubble: OscarChatBubbleComponent,
      },
    },
  },
});

export default userCustomization;