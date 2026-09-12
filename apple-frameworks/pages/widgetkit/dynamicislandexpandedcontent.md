> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/dynamicislandexpandedcontent](https://developer.apple.com/documentation/widgetkit/dynamicislandexpandedcontent)

# DynamicIslandExpandedContent

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

A view that describes the expanded presentation of a Live Activity that appears in the Dynamic Island.

## Declaration

```swift
struct DynamicIslandExpandedContent<Content> where Content : View
```

<a id="overview"></a>

## Overview

This view holds the intermediate content for the [DynamicIslandExpandedContentBuilder](dynamicislandexpandedcontentbuilder.md).

## See Also

### Creating the expanded presentation

- [init(\_:priority:content:)](dynamicislandexpandedregion/init%28__priority_content_%29.md): Creates the object that defines and positions the content of an expanded Live Activity in the Dynamic Island.
- [DynamicIslandExpandedRegionPosition](dynamicislandexpandedregionposition.md): View positions of an expanded Live Activity that appears in the Dynamic Island.
- [dynamicIsland(verticalPlacement:)](https://developer.apple.com/documentation/swiftui/view/dynamicisland%28verticalplacement:%29): Specifies the vertical placement for a view of an expanded Live Activity that appears in the Dynamic Island.
- [DynamicIslandExpandedRegionVerticalPlacement](dynamicislandexpandedregionverticalplacement.md): Vertical view positions of an expanded Live Activity that appears in the Dynamic Island.
- [DynamicIslandExpandedContentBuilder](dynamicislandexpandedcontentbuilder.md): A result builder that constructs the content of an expanded Live Activity in the Dynamic Island.
