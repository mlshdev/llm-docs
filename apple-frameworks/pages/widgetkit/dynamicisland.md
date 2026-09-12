> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/dynamicisland](https://developer.apple.com/documentation/widgetkit/dynamicisland)

# DynamicIsland

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

The layout and configuration for a Live Activity that appears in the Dynamic Island.

## Declaration

```swift
struct DynamicIsland
```

## Topics

### Creating the view for the Dynamic Island

- [init(expanded:compactLeading:compactTrailing:minimal:)](dynamicisland/init%28expanded_compactleading_compacttrailing_minimal_%29.md): Creates a configuration object with views that appear in the Dynamic Island.
- [DynamicIslandExpandedRegion](dynamicislandexpandedregion.md): A structure that defines and positions the content of an expanded Live Activity in the Dynamic Island.

### Deep linking

- [widgetURL(\_:)](dynamicisland/widgeturl%28__%29.md): Sets the URL that opens the corresponding app of a Live Activity when a user taps on the Live Activity.

### Setting a tint color

- [keylineTint(\_:)](dynamicisland/keylinetint%28__%29.md): Applies a subtle tint color to the surrounding border of a Live Activity that appears in the Dynamic Island.

### Specifying content margins

- [contentMargins(\_:\_:for:)](dynamicisland/contentmargins%28____for_%29.md): Overrides default content margins for the provided content modes in the Dynamic Island.
- [DynamicIslandMode](dynamicislandmode.md): A structure that offers values that describe the content mode for a Live Activity.

## See Also

### Live Activity setup

- [Displaying live data with Live Activities](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities): Display up-to-date data and offer quick interactions in the Dynamic Island, on the Lock Screen, in CarPlay, and on a paired Mac or Apple Watch.
- [ActivityKit](https://developer.apple.com/documentation/activitykit): Share live updates from your app as Live Activities on iPhone, iPad, Apple Watch, and the Mac.
- [Creating a widget extension](creating-a-widget-extension.md): Display your app’s content in a convenient, informative widget on various devices.
- [Emoji Rangers: Supporting Live Activities, interactivity, and animations](emoji-rangers-supporting-live-activities-interactivity-and-animations.md): Offer Live Activities, controls, animate data updates, and add interactivity to widgets.
- [ActivityConfiguration](activityconfiguration.md): An object that describes the content of a Live Activity.
- [NSUserActivityTypeLiveActivity](nsuseractivitytypeliveactivity.md): A string that the system passes to the app on launch from a Live Activity that doesn’t provide a URL.
- [ActivityPreviewViewKind](activitypreviewviewkind.md): Values that represent Live Activity presentations for use in Xcode previews.
- [ActivityFamily](activityfamily.md): A family that defines the Live Activity’s size.
