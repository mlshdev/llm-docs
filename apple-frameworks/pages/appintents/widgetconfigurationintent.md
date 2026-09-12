> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/widgetconfigurationintent](https://developer.apple.com/documentation/appintents/widgetconfigurationintent)

# WidgetConfigurationIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS · watchOS 10.0+

An interface for configuring a WidgetKit widget.

## Declaration

```swift
protocol WidgetConfigurationIntent : AppIntent
```

<a id="overview"></a>

## Overview

The parameters of the intent define the configuration options for your widget. The system uses the intent’s title and description for the display name and description of the widget if those values aren’t set explicitly on the [AppIntentConfiguration](../widgetkit/appintentconfiguration.md).

```swift
import AppIntents

struct FavoriteBook: WidgetConfigurationIntent {
    static var title: LocalizedStringResource = "Favorite Book"
    static var description = IntentDescription("Shows a picture of your favorite book!")

    @Parameter(title: "Title", default: "The Swift Programming Language")
    var title: String

    @Parameter(title: "Author", default: "Apple Inc.")
    var author: String
}
```

Use [parameterSummary](appintent/parametersummary-4vgic.md) to configure the order of the parameters in the configuration UI, as well as dynamic presentation such as using the value of one parameter to determine whether to show or hide another.

```swift
enum RefreshInterval: String, AppEnum {
    case hourly, daily, weekly

    static var typeDisplayRepresentation: TypeDisplayRepresentation = "Refresh Interval"
    static var caseDisplayRepresentations: [RefreshInterval : DisplayRepresentation] = [
        .hourly: "Every Hour",
        .daily: "Every Day",
        .weekly: "Every Week",
    ]
}

struct FavoriteSoup: WidgetConfigurationIntent {
    static var title: LocalizedStringResource = "Favorite Soup"
    static var description = IntentDescription("Shows a picture of your favorite soup!")

    @Parameter(title: "Soup")
    var name: String?

    @Parameter(title: "Shuffle", default: true)
    var shuffle: Bool

    @Parameter(title: "Refresh", default: .daily)
    var interval: RefreshInterval

    static var parameterSummary: some ParameterSummary {
        When(\.$shuffle, .equalTo, true) {
            Summary {
                \.$name
                \.$shuffle
                \.$interval
            }
        } otherwise: {
            Summary {
                \.$name
                \.$shuffle
            }
        }
    }
}
```

When using this protocol, you don’t need to provide an implementation for [perform()](appintent/perform%28%29.md). You can, however, still implement `perform()` to use the same implementation for both widget configuration and as an actionable intent. For more information, refer to the [Emoji Rangers: Supporting Live Activities, interactivity, and animations](../widgetkit/emoji-rangers-supporting-live-activities-interactivity-and-animations.md) sample code project’s `EmojiRangerSelection` structure and [AppIntentTimelineProvider](../widgetkit/appintenttimelineprovider.md).

## Topics

### Widget families

- [IntentWidgetFamily](intentwidgetfamily.md)

### Associated Types

- [NeverResult](widgetconfigurationintent/neverresult.md)

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Widgets

- [Increasing the visibility of widgets in Smart Stacks](../widgetkit/widget-suggestions-in-smart-stacks.md): Provide contextual information and donate intents to the system to make sure your widget appears prominently in Smart Stacks.
- [Migrating widgets from SiriKit Intents to App Intents](../widgetkit/migrating-from-sirikit-intents-to-app-intents.md): Configure your widgets for backward compatibility.
- [WidgetKit](../widgetkit.md): Extend the reach of your app by creating widgets, watch complications, Live Activities, and controls.
