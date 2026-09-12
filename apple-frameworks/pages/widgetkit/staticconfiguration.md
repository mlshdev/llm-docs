> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/staticconfiguration](https://developer.apple.com/documentation/widgetkit/staticconfiguration)

# StaticConfiguration

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

An object describing the content of a widget that has no user-configurable options.

## Declaration

```swift
@MainActor @preconcurrency struct StaticConfiguration<Content> where Content : View
```

## Mentioned In

- [Creating a widget extension](creating-a-widget-extension.md)

<a id="overview"></a>

## Overview

The following example shows the configuration for the leaderboard widget of the [Emoji Rangers: Supporting Live Activities, interactivity, and animations](emoji-rangers-supporting-live-activities-interactivity-and-animations.md) sample code project.

```swift
struct LeaderboardWidget: Widget {

    public var body: some WidgetConfiguration {
        StaticConfiguration(kind: EmojiRanger.LeaderboardWidgetKind, provider: LeaderboardProvider()) { entry in
            LeaderboardWidgetEntryView(entry: entry)
        }
        .configurationDisplayName("Ranger Leaderboard")
        .description("See all the rangers.")
        .supportedFamilies(LeaderboardWidget.supportedFamilies)
    }
}
```

Every widget has a unique `kind`, a string that you choose. You use this string to identify your widget when reloading its timeline with [WidgetCenter](widgetcenter.md).

The timeline provider is an object that determines the timeline for refreshing your widget. Providing future dates for updating your widget allows the system to optimize the refresh process.

The content closure contains the SwiftUI views that WidgetKit needs to render the widget. When WidgetKit invokes the content closure, it passes a timeline entry created by the widget provider’s [getSnapshot(in:completion:)](timelineprovider/getsnapshot%28in_completion_%29.md) or [getTimeline(in:completion:)](timelineprovider/gettimeline%28in_completion_%29.md) method.

Modifiers let you specify the families your widget supports, and the details shown when users add or edit their widgets.

## Topics

### Creating a widget configuration

- [init(kind:provider:content:)](staticconfiguration/init%28kind_provider_content_%29.md): Conforms when `Content` conforms to `View`. Creates a configuration for a widget, with no user-configurable options.
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
- [supplementalActivityFamilies(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/supplementalactivityfamilies%28_:%29): Sets the sizes that a Live Activity supports.

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

### Widget creation

- [Creating a widget extension](creating-a-widget-extension.md): Display your app’s content in a convenient, informative widget on various devices.
- [Developing a WidgetKit strategy](developing-a-widgetkit-strategy.md): Explore features, tasks, related frameworks, and constraints as you make a plan to implement widgets, controls, watch complications, and Live Activities.
- [Emoji Rangers: Supporting Live Activities, interactivity, and animations](emoji-rangers-supporting-live-activities-interactivity-and-animations.md): Offer Live Activities, controls, animate data updates, and add interactivity to widgets.
- [Preparing widgets for additional platforms, contexts, and appearances](preparing-widgets-for-additional-contexts-and-appearances.md): Create widgets that support additional platforms and adapt to their context.
- [Widget](https://developer.apple.com/documentation/swiftui/widget): The configuration and content of a widget to display on the Home screen or in Notification Center.
- [WidgetFamily](widgetfamily.md): Values that define the widget’s size and shape.
