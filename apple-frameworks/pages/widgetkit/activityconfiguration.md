> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/activityconfiguration](https://developer.apple.com/documentation/widgetkit/activityconfiguration)

# ActivityConfiguration

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

An object that describes the content of a Live Activity.

## Declaration

```swift
@MainActor @preconcurrency struct ActivityConfiguration<Attributes> where Attributes : ActivityAttributes
```

## Mentioned In

- [Creating a widget extension](creating-a-widget-extension.md)

<a id="overview"></a>

## Overview

To learn more about offering Live Activities for your app, see [ActivityKit](https://developer.apple.com/documentation/activitykit).

## Topics

### Creating a Live Activity configuration

- [ActivityViewContext](activityviewcontext.md): A structure that describes the view context for creating the views of a Live Activity.
- [init(for:content:dynamicIsland:)](activityconfiguration/init%28for_content_dynamicisland_%29.md): Creates a configuration object for a Live Activity.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [WidgetConfiguration](https://developer.apple.com/documentation/swiftui/widgetconfiguration)

## See Also

### Live Activity setup

- [Displaying live data with Live Activities](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities): Display up-to-date data and offer quick interactions in the Dynamic Island, on the Lock Screen, in CarPlay, and on a paired Mac or Apple Watch.
- [ActivityKit](https://developer.apple.com/documentation/activitykit): Share live updates from your app as Live Activities on iPhone, iPad, Apple Watch, and the Mac.
- [Creating a widget extension](creating-a-widget-extension.md): Display your app’s content in a convenient, informative widget on various devices.
- [Emoji Rangers: Supporting Live Activities, interactivity, and animations](emoji-rangers-supporting-live-activities-interactivity-and-animations.md): Offer Live Activities, controls, animate data updates, and add interactivity to widgets.
- [DynamicIsland](dynamicisland.md): The layout and configuration for a Live Activity that appears in the Dynamic Island.
- [NSUserActivityTypeLiveActivity](nsuseractivitytypeliveactivity.md): A string that the system passes to the app on launch from a Live Activity that doesn’t provide a URL.
- [ActivityPreviewViewKind](activitypreviewviewkind.md): Values that represent Live Activity presentations for use in Xcode previews.
- [ActivityFamily](activityfamily.md): A family that defines the Live Activity’s size.
