> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/nsuseractivitytypeliveactivity](https://developer.apple.com/documentation/widgetkit/nsuseractivitytypeliveactivity)

# NSUserActivityTypeLiveActivity (Swift)

**Framework:** WidgetKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A string that the system passes to the app on launch from a Live Activity that doesn’t provide a URL.

## Declaration

```swift
let NSUserActivityTypeLiveActivity: String
```

<a id="discussion"></a>

## Discussion

In many cases, you use  [widgetURL(\_:)](https://developer.apple.com/documentation/swiftui/view/widgeturl%28_:%29) to allow users to tap a Live Activity and open a screen in the app with functionality that best fits the Live Activity. If you don’t use the `widgetURL(_:)` modifier to provide a URL, the system launches your app and passes `NSUserActivityTypeLiveActivity` as the [activityType](../foundation/nsuseractivity/activitytype.md) of [NSUserActivity](../foundation/nsuseractivity.md) upon launch. Check for this value on launch to open a screen in your app that fits the context of the active Live Activity.

## See Also

### Live Activity setup

- [Displaying live data with Live Activities](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities): Display up-to-date data and offer quick interactions in the Dynamic Island, on the Lock Screen, in CarPlay, and on a paired Mac or Apple Watch.
- [ActivityKit](https://developer.apple.com/documentation/activitykit): Share live updates from your app as Live Activities on iPhone, iPad, Apple Watch, and the Mac.
- [Creating a widget extension](creating-a-widget-extension.md): Display your app’s content in a convenient, informative widget on various devices.
- [Emoji Rangers: Supporting Live Activities, interactivity, and animations](emoji-rangers-supporting-live-activities-interactivity-and-animations.md): Offer Live Activities, controls, animate data updates, and add interactivity to widgets.
- [ActivityConfiguration](activityconfiguration.md): An object that describes the content of a Live Activity.
- [DynamicIsland](dynamicisland.md): The layout and configuration for a Live Activity that appears in the Dynamic Island.
- [ActivityPreviewViewKind](activitypreviewviewkind.md): Values that represent Live Activity presentations for use in Xcode previews.
- [ActivityFamily](activityfamily.md): A family that defines the Live Activity’s size.

# NSUserActivityTypeLiveActivity (Objective-C)

**Framework:** WidgetKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A string that the system passes to the app on launch from a Live Activity that doesn’t provide a URL.

## Declaration

```objectivec
extern NSString * const NSUserActivityTypeLiveActivity;
```

<a id="discussion"></a>

## Discussion

In many cases, you use  [widgetURL(\_:)](https://developer.apple.com/documentation/swiftui/view/widgeturl%28_:%29) to allow users to tap a Live Activity and open a screen in the app with functionality that best fits the Live Activity. If you don’t use the `widgetURL(_:)` modifier to provide a URL, the system launches your app and passes `NSUserActivityTypeLiveActivity` as the [activityType](../foundation/nsuseractivity/activitytype.md) of [NSUserActivity](../foundation/nsuseractivity.md) upon launch. Check for this value on launch to open a screen in your app that fits the context of the active Live Activity.

## See Also

### Live Activity setup

- [Creating a widget extension](creating-a-widget-extension.md): Display your app’s content in a convenient, informative widget on various devices.
