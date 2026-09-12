> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/activityfamily](https://developer.apple.com/documentation/widgetkit/activityfamily)

# ActivityFamily

**Framework:** WidgetKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A family that defines the Live Activity’s size.

## Declaration

```swift
enum ActivityFamily
```

<a id="overview"></a>

## Overview

Live Activities support one or more sizes, giving you the flexibility to configure them for different devices. A Live Activity renders for a specific family, depending on both the device and the location in which it’s displayed.

A Live Activity initiated on one device can be sent to a remote device that renders the Live Activity at a different family size. For example, if your Live Activity is running on an iOS or iPadOS device, it natively renders with an [ActivityFamily.medium](activityfamily/medium.md) family. If you want to opt in to customize the rendering for a Live Activity for the watchOS Smart Stack, use the [ActivityFamily.small](activityfamily/small.md) family modifier.

When you define your Live Activity’s configuration, specify the sizes your Live Activity supports using the [supplementalActivityFamilies(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/supplementalactivityfamilies%28_:%29) property modifier.

When you render the content of the Live Activity, use [activityFamily](https://developer.apple.com/documentation/swiftui/environmentvalues/activityfamily) to read the current family and lay out your content appropriately. The code below uses [supplementalActivityFamilies(\_:)](https://developer.apple.com/documentation/swiftui/widgetconfiguration/supplementalactivityfamilies%28_:%29) to specify the size of the Live Activity for devices on iOS and watchOS.

```swift
// A RideSharingActivity that supports the watchOS Smart Stack and the iOS Lock Screen.
struct RideSharingActivity: Widget {
   var body: some WidgetConfiguration {
       ActivityConfiguration(for: RideAttributes.self) { context in
           RideSharingView(context: context)
       } dynamicIsland: { context in
           DynamicIsland {
               DynamicIslandExpandedRegion(.bottom) {
                   RideShareDetails()
               }
           } compactLeading: {
               AppLogo()
           } compactTrailing: {
               ETAView()
           } minimal: {
               ETAView()
           }
       }
       .supplementalActivityFamilies([.small, .medium])
   }
}
```

## Topics

### Accessing system families

- [ActivityFamily.small](activityfamily/small.md): A size family of a Live Activity on watchOS.
- [ActivityFamily.medium](activityfamily/medium.md): A size family of a Live Activity on iOS and macOS.

### Environment keys

- [SupportedActivityFamiliesEnvironmentKey](supportedactivityfamiliesenvironmentkey.md): An environment key for the size of a rendered Live Activity.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Live Activity setup

- [Displaying live data with Live Activities](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities): Display up-to-date data and offer quick interactions in the Dynamic Island, on the Lock Screen, in CarPlay, and on a paired Mac or Apple Watch.
- [ActivityKit](https://developer.apple.com/documentation/activitykit): Share live updates from your app as Live Activities on iPhone, iPad, Apple Watch, and the Mac.
- [Creating a widget extension](creating-a-widget-extension.md): Display your app’s content in a convenient, informative widget on various devices.
- [Emoji Rangers: Supporting Live Activities, interactivity, and animations](emoji-rangers-supporting-live-activities-interactivity-and-animations.md): Offer Live Activities, controls, animate data updates, and add interactivity to widgets.
- [ActivityConfiguration](activityconfiguration.md): An object that describes the content of a Live Activity.
- [DynamicIsland](dynamicisland.md): The layout and configuration for a Live Activity that appears in the Dynamic Island.
- [NSUserActivityTypeLiveActivity](nsuseractivitytypeliveactivity.md): A string that the system passes to the app on launch from a Live Activity that doesn’t provide a URL.
- [ActivityPreviewViewKind](activitypreviewviewkind.md): Values that represent Live Activity presentations for use in Xcode previews.
