> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/activitypreviewviewkind](https://developer.apple.com/documentation/widgetkit/activitypreviewviewkind)

# ActivityPreviewViewKind

**Framework:** WidgetKit  
**Kind:** Enumeration  
**Availability:** iOS 16.2+ · iPadOS 16.2+

Values that represent Live Activity presentations for use in Xcode previews.

## Declaration

```swift
@preconcurrency enum ActivityPreviewViewKind
```

## Topics

### Live Activity preview types

- [ActivityPreviewViewKind.content](activitypreviewviewkind/content.md): The Live Activity presentation that appears on the Lock Screen and as a banner on devices that don’t support the Dynamic Island.
- [ActivityPreviewViewKind.dynamicIsland(\_:)](activitypreviewviewkind/dynamicisland%28__%29.md): The Live Activity presentation that appears in the Dynamic Island.
- [ActivityPreviewViewKind.DynamicIslandPreviewViewState](activitypreviewviewkind/dynamicislandpreviewviewstate.md): Values that represent the different presentations of a Live Activity in the Dynamic Island for use in Xcode previews.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Live Activity setup

- [Displaying live data with Live Activities](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities): Display up-to-date data and offer quick interactions in the Dynamic Island, on the Lock Screen, in CarPlay, and on a paired Mac or Apple Watch.
- [ActivityKit](https://developer.apple.com/documentation/activitykit): Share live updates from your app as Live Activities on iPhone, iPad, Apple Watch, and the Mac.
- [Creating a widget extension](creating-a-widget-extension.md): Display your app’s content in a convenient, informative widget on various devices.
- [Emoji Rangers: Supporting Live Activities, interactivity, and animations](emoji-rangers-supporting-live-activities-interactivity-and-animations.md): Offer Live Activities, controls, animate data updates, and add interactivity to widgets.
- [ActivityConfiguration](activityconfiguration.md): An object that describes the content of a Live Activity.
- [DynamicIsland](dynamicisland.md): The layout and configuration for a Live Activity that appears in the Dynamic Island.
- [NSUserActivityTypeLiveActivity](nsuseractivitytypeliveactivity.md): A string that the system passes to the app on launch from a Live Activity that doesn’t provide a URL.
- [ActivityFamily](activityfamily.md): A family that defines the Live Activity’s size.
