> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/appintentconfiguration](https://developer.apple.com/documentation/widgetkit/appintentconfiguration)

# AppIntentConfiguration

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 26.0+ · watchOS 10.0+

An object describing the content of a widget that uses a custom intent to provide user-configurable options.

## Declaration

```swift
@MainActor @preconcurrency struct AppIntentConfiguration<Intent, Content> where Intent : WidgetConfigurationIntent, Content : View
```

## Mentioned In

- [Creating a widget extension](creating-a-widget-extension.md)

<a id="overview"></a>

## Overview

The following example shows the configuration for a game widget that displays details about a chosen character.

```swift
struct CharacterDetailWidget: Widget {
    var body: some WidgetConfiguration {
        AppIntentConfiguration(
            kind: "com.mygame.character-detail",
            intent: SelectCharacterIntent.self,
            provider: CharacterDetailProvider(),
        ) { entry in
            CharacterDetailView(entry: entry)
        }
        .supportedFamilies([.systemSmall, .systemMedium, .systemLarge])
    }
}
```

Every widget has a unique `kind`, a string that you choose. You use this string to identify your widget when reloading its timeline with [WidgetCenter](widgetcenter.md).

The `intent` is a custom App Intent containing user-editable parameters.

The timeline provider is an object that determines the timeline for refreshing your widget. Providing future dates for updating your widget allows the system to optimize the refresh process.

The content closure contains the SwiftUI views that WidgetKit needs to render the widget. When WidgetKit invokes the content closure, it passes a timeline entry created by the widget provider’s [snapshot(for:in:)](appintenttimelineprovider/snapshot%28for_in_%29.md) or [timeline(for:in:)](appintenttimelineprovider/timeline%28for_in_%29.md) method.

Modifiers let you specify the families your widget supports, and the details shown when users add or edit their widgets.

## Topics

### Creating a widget configuration

- [init(kind:intent:provider:content:)](appintentconfiguration/init%28kind_intent_provider_content_%29.md): Conforms when `Intent` conforms to `WidgetConfigurationIntent` and `Content` conforms to `View`. Creates a configuration for a widget by using a custom intent to provide user-configurable options.
- [body](https://developer.apple.com/documentation/swiftui/widgetconfiguration/body-swift.property): The content and behavior of this widget.

### Setting the display name

- [configurationDisplayName(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/configurationdisplayname%28_:%29-2c3zv): Sets the name shown for a widget when a user adds or edits it using the specified string.
- [configurationDisplayName(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/configurationdisplayname%28_:%29-3sbn4): Sets the name shown for a widget when a user adds or edits it using the contents of a text view.
- [configurationDisplayName(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/configurationdisplayname%28_:%29-4v9q): Sets the localized name shown for a widget when a user adds or edits the widget.

### Setting the description

- [description(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/description%28_:%29-1bvuj): Sets the description shown for a widget when a user adds or edits it using the contents of a text view.
- [description(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/description%28_:%29-2bfr): Sets the description shown for a widget when a user adds or edits it using the specified string.
- [description(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/description%28_:%29-4q9pa): Sets the localized description shown for a widget when a user adds or edits the widget.

### Setting the supported families

- [supportedFamilies(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/supportedfamilies%28_:%29): Sets the sizes that a widget supports.

### Handling background network requests

- [backgroundTask(\_:action:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/backgroundtask%28_:action:%29): Runs the given action when the system provides a background task.
- [onBackgroundURLSessionEvents(matching:\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents%28matching:_:%29-2e152): Adds an action to perform when events related to a URL session identified by a closure are waiting to be processed.
- [onBackgroundURLSessionEvents(matching:\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/onbackgroundurlsessionevents%28matching:_:%29-fw6x): Adds an action to perform when events related to a URL session with a matching identifier are waiting to be processed.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [WidgetConfiguration](https://developer.apple.com/documentation/swiftui/widgetconfiguration)

## See Also

### Configurable widgets

- [Making a configurable widget](making-a-configurable-widget.md): Give people the option to customize their widgets by adding a custom app intent to your project.
- [Migrating widgets from SiriKit Intents to App Intents](migrating-from-sirikit-intents-to-app-intents.md): Configure your widgets for backward compatibility.
- [WidgetInfo](widgetinfo.md): A structure that contains information about user-configured widgets.
