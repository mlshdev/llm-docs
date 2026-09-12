> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dynamicviewcontent/onmove(perform:)](https://developer.apple.com/documentation/swiftui/dynamicviewcontent/onmove(perform:))

# onMove(perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the move action for the dynamic view.

## Declaration

```swift
nonisolated func onMove(perform action: Optional<(IndexSet, Int) -> Void>) -> some DynamicViewContent

```

## Parameters

- `action`: A closure that SwiftUI invokes when elements in the dynamic view are moved. The closure takes two arguments that represent the offset relative to the dynamic view’s underlying collection of data. Pass `nil` to disable the ability to move items.

<a id="return-value"></a>

## Return Value

A view that calls `action` when elements are moved within the original view.

## Mentioned In

- [Making a view into a drag source](../making-a-view-into-a-drag-source.md)

## See Also

### Responding to updates

- [onDelete(perform:)](ondelete%28perform_%29.md): Sets the deletion action for the dynamic view. You must delete the corresponding item within `action`, as it will be called after the row has already been removed from the [List](../list.md).
- [onInsert(of:perform:)](oninsert%28of_perform_%29.md): Sets the insert action for the dynamic view.
- [dropDestination(for:action:)](dropdestination%28for_action_%29.md): Sets the insert action for the dynamic view.
