> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/dynamicislandexpandedregionverticalplacement](https://developer.apple.com/documentation/widgetkit/dynamicislandexpandedregionverticalplacement)

# DynamicIslandExpandedRegionVerticalPlacement

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+

Vertical view positions of an expanded Live Activity that appears in the Dynamic Island.

## Declaration

```swift
struct DynamicIslandExpandedRegionVerticalPlacement
```

## Topics

### Configuring vertical content placement

- [default](dynamicislandexpandedregionverticalplacement/default.md): The system’s default vertical placement.
- [belowIfTooWide](dynamicislandexpandedregionverticalplacement/belowiftoowide.md): Vertical placement below the default vertical position for content that’s too wide to fit next to the TrueDepth camera.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Creating the expanded presentation

- [init(\_:priority:content:)](dynamicislandexpandedregion/init%28__priority_content_%29.md): Creates the object that defines and positions the content of an expanded Live Activity in the Dynamic Island.
- [DynamicIslandExpandedRegionPosition](dynamicislandexpandedregionposition.md): View positions of an expanded Live Activity that appears in the Dynamic Island.
- [dynamicIsland(verticalPlacement:)](https://developer.apple.com/documentation/swiftui/view/dynamicisland%28verticalplacement:%29): Specifies the vertical placement for a view of an expanded Live Activity that appears in the Dynamic Island.
- [DynamicIslandExpandedContent](dynamicislandexpandedcontent.md): A view that describes the expanded presentation of a Live Activity that appears in the Dynamic Island.
- [DynamicIslandExpandedContentBuilder](dynamicislandexpandedcontentbuilder.md): A result builder that constructs the content of an expanded Live Activity in the Dynamic Island.
