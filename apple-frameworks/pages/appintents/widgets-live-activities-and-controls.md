> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/widgets-live-activities-and-controls](https://developer.apple.com/documentation/appintents/widgets-live-activities-and-controls)

# Widgets, Live Activities, and Controls

**Framework:** App Intents  
**Kind:** API Collection

Implement interactive widgets, controls, watch complications, and Live Activities using app intents.

<a id="Overview"></a>

## Overview

You can make widgets, Live Activities, and other experiences interactive by adding buttons and toggles to their interfaces. When someone interacts with one of those controls, you respond by creating an app intent. Use those app intents to perform the associated actions in your app.

## Topics

### Essentials

- [Adding interactivity to widgets and Live Activities](../widgetkit/adding-interactivity-to-widgets-and-live-activities.md): Include buttons or toggles in a widget or Live Activity to offer app functionality without launching the app.
- [Developing a WidgetKit strategy](../widgetkit/developing-a-widgetkit-strategy.md): Explore features, tasks, related frameworks, and constraints as you make a plan to implement widgets, controls, watch complications, and Live Activities.

### Controls (WidgetKit)

- [Controls](../widgetkit/controls-collection.md): Offer controls that people place in Control Center, on the Lock Screen, and on the Action button to quickly perform an action from your app.
- [ControlConfigurationIntent](controlconfigurationintent.md): An interface for configuring a Control Center module.

### Live Activities

- [Live Activities](../widgetkit/liveactivities-collection.md): Let people track updates from your app with Live Activities.
- [LiveActivityIntent](liveactivityintent.md): An intent that starts, pauses, or otherwise modifies a Live Activity when it runs.
- [ActivityKit](https://developer.apple.com/documentation/activitykit): Share live updates from your app as Live Activities on iPhone, iPad, Apple Watch, and the Mac.

### Widgets

- [Increasing the visibility of widgets in Smart Stacks](../widgetkit/widget-suggestions-in-smart-stacks.md): Provide contextual information and donate intents to the system to make sure your widget appears prominently in Smart Stacks.
- [Migrating widgets from SiriKit Intents to App Intents](../widgetkit/migrating-from-sirikit-intents-to-app-intents.md): Configure your widgets for backward compatibility.
- [WidgetConfigurationIntent](widgetconfigurationintent.md): An interface for configuring a WidgetKit widget.
- [WidgetKit](../widgetkit.md): Extend the reach of your app by creating widgets, watch complications, Live Activities, and controls.

## See Also

### Feature integration

- [Adopting App Intents to support system experiences](adopting-app-intents-to-support-system-experiences.md): Create app intents and entities so people can use your app’s content and actions across system experiences.
- [Apple Intelligence and Siri AI](apple-intelligence-and-siri-ai.md): Integrate your app with Apple Intelligence and bring it to Siri AI.
- [Spotlight integration](spotlight.md): Add your entities to your app’s Spotlight index, and automate the indexing of your content.
- [App Shortcuts](app-shortcuts.md): Improve the experience of using your app intents and entities in system experiences like Siri, Spotlight, and the Shortcuts app.
- [Hardware interactions](hardware-interactions.md): Run your App Shortcuts from the Action button on iPhone or Apple Watch, or launch your own conversational app from the side button on iPhone.
- [Focus](focus.md): Adjust your app’s behavior and filter incoming notifications when the current Focus changes.
- [Visual intelligence](visual-intelligence.md): Match images to your app’s content and report the results to the Visual Intelligence framework using an app intent.
