> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/dynamicislandexpandedregion](https://developer.apple.com/documentation/widgetkit/dynamicislandexpandedregion)

# DynamicIslandExpandedRegion

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

A structure that defines and positions the content of an expanded Live Activity in the Dynamic Island.

## Declaration

```swift
struct DynamicIslandExpandedRegion<Content> where Content : View
```

<a id="overview"></a>

## Overview

The expanded presentation of a Live Activity in the Dynamic Island consists of four regions:

- [center](dynamicislandexpandedregionposition/center.md) places content right below the TrueDepth camera.
- [leading](dynamicislandexpandedregionposition/leading.md) places content along the leading edge of the expanded Live Activity next to the TrueDepth camera and wraps additional content below it.
- [trailing](dynamicislandexpandedregionposition/trailing.md) places content along the trailing edge of the expanded Live Activity next to the TrueDepth camera and wraps additional content below it.
- [bottom](dynamicislandexpandedregionposition/bottom.md) places content below leading, trailing, and center content.

## Topics

### Creating the expanded presentation

- [init(\_:priority:content:)](dynamicislandexpandedregion/init%28__priority_content_%29.md): Creates the object that defines and positions the content of an expanded Live Activity in the Dynamic Island.
- [DynamicIslandExpandedRegionPosition](dynamicislandexpandedregionposition.md): View positions of an expanded Live Activity that appears in the Dynamic Island.
- [dynamicIsland(verticalPlacement:)](https://developer.apple.com/documentation/swiftui/view/dynamicisland%28verticalplacement:%29): Specifies the vertical placement for a view of an expanded Live Activity that appears in the Dynamic Island.
- [DynamicIslandExpandedRegionVerticalPlacement](dynamicislandexpandedregionverticalplacement.md): Vertical view positions of an expanded Live Activity that appears in the Dynamic Island.
- [DynamicIslandExpandedContent](dynamicislandexpandedcontent.md): A view that describes the expanded presentation of a Live Activity that appears in the Dynamic Island.
- [DynamicIslandExpandedContentBuilder](dynamicislandexpandedcontentbuilder.md): A result builder that constructs the content of an expanded Live Activity in the Dynamic Island.

### Specifying custom content margins

- [contentMargins(\_:\_:)](dynamicislandexpandedregion/contentmargins%28____%29.md): Overrides default content margins for the provided edges in the Dynamic Island.

## See Also

### Creating the view for the Dynamic Island

- [init(expanded:compactLeading:compactTrailing:minimal:)](dynamicisland/init%28expanded_compactleading_compacttrailing_minimal_%29.md): Creates a configuration object with views that appear in the Dynamic Island.
