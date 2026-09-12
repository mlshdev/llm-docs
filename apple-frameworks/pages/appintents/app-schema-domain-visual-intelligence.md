> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/app-schema-domain-visual-intelligence](https://developer.apple.com/documentation/appintents/app-schema-domain-visual-intelligence)

# Visual intelligence

**Framework:** App Intents  
**Kind:** API Collection

Display search results from your app when people point the camera at relevant content.

<a id="overview"></a>

## Overview

The `.visualIntelligence` domain defines app schemas that connect your app to the camera control. Apply the [semanticContentSearch](appschema/visualintelligenceintent/semanticcontentsearch.md) schema to make your app appear as a search destination in Visual Intelligence. The [Visual Intelligence](../visualintelligence.md) framework provides the types that describe what visual intelligence captures from the camera or a screenshot. Your app implements an [IntentValueQuery](intentvaluequery.md) to receive these types, find matching content, and return app entities.

> **Tip**

> Xcode generates a template implementation when you type `visualIntelligence_` and select a schema from the suggestions list.

## Topics

### Essentials

- [Integrating your app with visual intelligence](../visualintelligence/integrating-your-app-with-visual-intelligence.md): Enable people to find app content that matches their surroundings or objects onscreen with visual intelligence.

### Actions

- [semanticContentSearch](appschema/visualintelligenceintent/semanticcontentsearch.md): An intent schema that shows more and richer visual search results in the app.
- [AppSchema.VisualIntelligenceIntent](appschema/visualintelligenceintent.md): Identifies intent schemas in the visual intelligence domain.

## See Also

### Single-purpose domains

- [Assistant](app-schema-domain-assistant.md): Enable people in Japan to launch your voice-based conversational app from the side button of iPhone.
