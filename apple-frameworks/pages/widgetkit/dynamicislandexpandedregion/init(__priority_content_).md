> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/dynamicislandexpandedregion/init(_:priority:content:)](https://developer.apple.com/documentation/widgetkit/dynamicislandexpandedregion/init(_:priority:content:))

# init(\_:priority:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 16.1+ · iPadOS 16.1+

Creates the object that defines and positions the content of an expanded Live Activity in the Dynamic Island.

## Declaration

```swift
init(_ position: DynamicIslandExpandedRegionPosition, priority: Double = 0, @ViewBuilder content: () -> Content)
```

## Parameters

- `position`: The position for Live Activity content.
- `priority`: The priority that tells the system which content to prioritize when it sizes the content of an expanded Live Activity in the Dynamic Island.
- `content`: The content of an expanded Live Activity.

## See Also

### Creating the expanded presentation

- [DynamicIslandExpandedRegionPosition](../dynamicislandexpandedregionposition.md): View positions of an expanded Live Activity that appears in the Dynamic Island.
- [dynamicIsland(verticalPlacement:)](https://developer.apple.com/documentation/swiftui/view/dynamicisland%28verticalplacement:%29): Specifies the vertical placement for a view of an expanded Live Activity that appears in the Dynamic Island.
- [DynamicIslandExpandedRegionVerticalPlacement](../dynamicislandexpandedregionverticalplacement.md): Vertical view positions of an expanded Live Activity that appears in the Dynamic Island.
- [DynamicIslandExpandedContent](../dynamicislandexpandedcontent.md): A view that describes the expanded presentation of a Live Activity that appears in the Dynamic Island.
- [DynamicIslandExpandedContentBuilder](../dynamicislandexpandedcontentbuilder.md): A result builder that constructs the content of an expanded Live Activity in the Dynamic Island.
