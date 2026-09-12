> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dynamicviewcontent/ondelete(perform:)](https://developer.apple.com/documentation/swiftui/dynamicviewcontent/ondelete(perform:))

# onDelete(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the deletion action for the dynamic view. You must delete the corresponding item within `action`, as it will be called after the row has already been removed from the [List](../list.md).

## Declaration

```swift
nonisolated func onDelete(perform action: Optional<(IndexSet) -> Void>) -> some DynamicViewContent

```

## Parameters

- `action`: The action that you want SwiftUI to perform when elements in the view are deleted. SwiftUI passes a set of indices to the closure that’s relative to the dynamic view’s underlying collection of data.

<a id="return-value"></a>

## Return Value

A view that calls `action` when elements are deleted from the original view.

## Mentioned In

- [Picking container views for your content](../picking-container-views-for-your-content.md)

## See Also

### Responding to updates

- [onInsert(of:perform:)](oninsert%28of_perform_%29.md): Sets the insert action for the dynamic view.
- [onMove(perform:)](onmove%28perform_%29.md): Sets the move action for the dynamic view.
- [dropDestination(for:action:)](dropdestination%28for_action_%29.md): Sets the insert action for the dynamic view.
