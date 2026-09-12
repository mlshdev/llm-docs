> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/app-schema-domain-assistant](https://developer.apple.com/documentation/appintents/app-schema-domain-assistant)

# Assistant

**Framework:** App Intents  
**Kind:** API Collection

Enable people in Japan to launch your voice-based conversational app from the side button of iPhone.

<a id="overview"></a>

## Overview

The `.assistant` domain defines a single app intent schema, [activate](appschema/assistantintent/activate.md), that registers your app as a side button action on iPhone. This schema is available only in Japan.

> **Tip**

> Xcode generates a template implementation when you type `assistant_` and select a schema from the suggestions list.

For more information about app schemas, see [App schema domains](app-schema-domains.md).

## Topics

### Essentials

- [Launching your voice-based conversational app from the side button of iPhone](launching-your-voice-based-conversational-app-from-the-side-button-of-iphone.md): Let people in Japan configure the side button of iPhone to launch your voice-based conversational app.

### Actions

- [activate](appschema/assistantintent/activate.md): The app intent conforms to the schema for launching your voice-based conversational app from the side button on iPhone in Japan.
- [AppSchema.AssistantIntent](appschema/assistantintent.md): Assistant schema conformance for app intents that offer support for the side button on iPhone in Japan.

## See Also

### Single-purpose domains

- [Visual intelligence](app-schema-domain-visual-intelligence.md): Display search results from your app when people point the camera at relevant content.
