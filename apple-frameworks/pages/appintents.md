> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents](https://developer.apple.com/documentation/appintents)

# App Intents

**Framework:** App Intents  
**Kind:** Framework  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Make content and actions discoverable by Apple Intelligence and support system experiences like Siri, Spotlight, Shortcuts, and widgets.

<a id="Overview"></a>

## Overview

Make your app’s actions and data available outside your app using the App Intents framework. Every app has code to perform specific actions, such as playing music or displaying photos. Apps also have data, such as songs or photos, that people might want to use outside your app.

![A hero image of an App Intents framework icon.](https://developer.apple.com/images/com.apple.AppIntents/app-intents-hero@2x.png)

With App Intents, you express your app’s actions and data in a structured way that makes them discoverable by Apple Intelligence and provides deeper integration with system features people use frequently. For example:

- People can interact with your app’s content through Siri.
- Spotlight helps people navigate to your data directly from search results.
- The Shortcuts app helps people configure workflows that include your app’s actions.
- People can configure Apple Pencil or the Action button on iPhone to perform your app’s actions when pressed.
- [Widgets](widgetkit.md), [controls](widgetkit/controls-collection.md), and [Live Activities](https://developer.apple.com/documentation/activitykit) can use your app’s actions to perform relevant tasks.
- You can define custom Focus modes, and respond to Focus changes.

Use this framework to declare the actions your app performs as one or more *app intents*. You can also create *app entities* and *app enums* to make your app’s key data types available to the system. For example, a music app might define entities for the songs and albums it manages, and define an app intent to play them. During compilation, the compiler generates information that Apple Intelligence, Siri, and other system features need to discover and use your intents, entities, and app enum types.

For design guidance on how to implement features that involve [Widgets](https://developer.apple.com/design/human-interface-guidelines/widgets), [Controls](https://developer.apple.com/design/human-interface-guidelines/controls), [App Shortcuts](https://developer.apple.com/design/human-interface-guidelines/app-shortcuts), [Siri](https://developer.apple.com/design/human-interface-guidelines/siri), or the [Action button](https://developer.apple.com/design/human-interface-guidelines/action-button), see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines).

## Topics

### Essentials

Learn the fundamentals of the App Intents framework.

- [Getting started with the App Intents framework](appintents/getting-started-with-the-app-intents-framework.md): Make your app’s actions and content available to the rest of the system using the App Intents framework.
- [App Intents updates](https://developer.apple.com/documentation/updates/appintents): Learn about important changes in App Intents.

### App-specific content

Define the actions, data, and types that represent your app’s capabilities to the system.

- [App intents](appintents/app-intents.md): Make your app’s custom actions available to the system by using app intent types.
- [App entities](appintents/app-entities.md): Make your app’s core types and data concepts available to the system using app entity types.
- [App enums](appintents/app-enums.md): Make your app’s enumerations and predefined values available to the system by using app enum types.
- [Common data types](appintents/common-data-types.md): Use framework-defined types for common parameter and result data types such as contacts, files, currencies, and more.
- [App extension](appintents/app-extension.md): Deliver app intents in an app extension or other package that lives outside your app’s code.

### System integration

Adopt schemas for well-known actions, display visual results, and donate behavioral signals to  Apple Intelligence.

- [App schema domains](appintents/app-schema-domains.md): Declare support for well-known actions and content by applying system-defined schemas to your app intents, app entities, and app enumerations.
- [Visual presentation](appintents/visual-presentation.md): Display app intents and app entities visually using snippets, and associate intents and entities with your app’s scenes and views.
- [Donations and discovery](appintents/donations-and-discovery.md): Donate your app’s intents and entities to the system to help it identify trends and predict future behaviors.

### Feature integration

Make your app intents and entities available to Siri, Spotlight, Shortcuts, widgets, and other system features.

- [Adopting App Intents to support system experiences](appintents/adopting-app-intents-to-support-system-experiences.md): Create app intents and entities so people can use your app’s content and actions across system experiences.
- [Apple Intelligence and Siri AI](appintents/apple-intelligence-and-siri-ai.md): Integrate your app with Apple Intelligence and bring it to Siri AI.
- [Spotlight integration](appintents/spotlight.md): Add your entities to your app’s Spotlight index, and automate the indexing of your content.
- [App Shortcuts](appintents/app-shortcuts.md): Improve the experience of using your app intents and entities in system experiences like Siri, Spotlight, and the Shortcuts app.
- [Widgets, Live Activities, and Controls](appintents/widgets-live-activities-and-controls.md): Implement interactive widgets, controls, watch complications, and Live Activities using app intents.
- [Hardware interactions](appintents/hardware-interactions.md): Run your App Shortcuts from the Action button on iPhone or Apple Watch, or launch your own conversational app from the side button on iPhone.
- [Focus](appintents/focus.md): Adjust your app’s behavior and filter incoming notifications when the current Focus changes.
- [Visual intelligence](appintents/visual-intelligence.md): Match images to your app’s content and report the results to the Visual Intelligence framework using an app intent.

### Testing

Verify that your intent, entity, query, and enum types work correctly.

- [Verifying your App Intents implementation](appintents/verifying-your-app-intents-implementation.md): Confirm that your app intents work correctly, the system can understand your content, and that it can run your app’s actions.
- [Testing your App Intents code](https://developer.apple.com/documentation/appintentstesting/testing-your-app-intents-code): Evaluate intents, entities, and queries, and verify your integration with system features like Spotlight and Siri.
- [App Intents Testing](https://developer.apple.com/documentation/appintentstesting): Test your app intents, entities, queries, and integration with system features like Siri or Spotlight.

### Errors

Handle errors that occur when running your app intents.

- [AppIntentError](appintents/appintenterror.md): An error that indicates a problem occurred while performing an app intent.
- [CustomAppIntentErrorConvertible](appintents/customappintenterrorconvertible.md): A type that the system automatically converts to an app intent error.

### Deprecated

Avoid deprecated classes and protocols in your apps.

- [Deprecated symbols](appintents/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Structures

- [EmptySnippetIntent](appintents/emptysnippetintent.md): A snippet intent that renders an empty view.
