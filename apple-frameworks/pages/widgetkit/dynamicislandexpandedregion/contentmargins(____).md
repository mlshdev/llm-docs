> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/dynamicislandexpandedregion/contentmargins(_:_:)](https://developer.apple.com/documentation/widgetkit/dynamicislandexpandedregion/contentmargins(_:_:))

# contentMargins(\_:\_:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+

Overrides default content margins for the provided edges in the Dynamic Island.

## Declaration

```swift
func contentMargins(_ edges: Edge.Set = .all, _ length: Double) -> DynamicIslandExpandedRegion<Content>
```

## Parameters

- `edges`: The edges that use the custom content margins.
- `length`: The length of the custom margin for the given `edges`.

<a id="return-value"></a>

## Return Value

The view for the Dynamic Island expanded region with the updated content margins.

<a id="discussion"></a>

## Discussion

If you repeatedly use the `contentMargins(_:_:)` modifier, the system uses the innermost specified values. The following example results in a margin of 8 points for the trailing, top, and bottom edges, and uses the default margin for the leading edge:

```swift
DynamicIslandContentRegion(.trailing) {
    ContainerRelativeShape()
    .aspectRatio(1, contentMode:.fit)
}.contentMargins([.trailing, .top, .bottom], 8)
```

Note that the system applies the provided custom content margins to content that’s adjacent to the modified content margin edges.
