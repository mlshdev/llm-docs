> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dynamicviewcontent/oninsert(of:perform:)](https://developer.apple.com/documentation/swiftui/dynamicviewcontent/oninsert(of:perform:))

# onInsert(of:perform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets the insert action for the dynamic view.

## Declaration

```swift
nonisolated func onInsert(of supportedContentTypes: [UTType], perform action: @escaping (Int, [NSItemProvider]) -> Void) -> some DynamicViewContent

```

## Parameters

- `supportedContentTypes`: An array of UTI types that the dynamic view supports.
- `action`: A closure that SwiftUI invokes when elements are added to the view. The closure takes two arguments: The first argument is the offset relative to the dynamic view’s underlying collection of data. The second argument is an array of [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) items that represents the data that you want to insert.

<a id="return-value"></a>

## Return Value

A view that calls `action` when elements are inserted into the original view.

## See Also

### Responding to updates

- [onDelete(perform:)](ondelete%28perform_%29.md): Sets the deletion action for the dynamic view. You must delete the corresponding item within `action`, as it will be called after the row has already been removed from the [List](../list.md).
- [onMove(perform:)](onmove%28perform_%29.md): Sets the move action for the dynamic view.
- [dropDestination(for:action:)](dropdestination%28for_action_%29.md): Sets the insert action for the dynamic view.
