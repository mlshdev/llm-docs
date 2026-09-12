> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/itemprovider(_:)](https://developer.apple.com/documentation/swiftui/view/itemprovider(_:))

# itemProvider(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Provides a closure that vends the drag representation to be used for a particular data element.

## Declaration

```swift
nonisolated func itemProvider(_ action: Optional<() -> NSItemProvider?>) -> some View

```

## See Also

### Moving items using item providers

- [onDrag(\_:preview:)](ondrag%28__preview_%29.md): Activates this view as the source of a drag and drop operation.
- [onDrag(\_:)](ondrag%28__%29.md): Activates this view as the source of a drag and drop operation.
- [onDrop(of:isTargeted:perform:)](ondrop%28of_istargeted_perform_%29.md): Defines the destination of a drag-and-drop operation that handles the dropped content with a closure that you specify.
- [onDrop(of:delegate:)](ondrop%28of_delegate_%29.md): Defines the destination of a drag and drop operation using behavior controlled by the delegate that you provide.
- [DropDelegate](../dropdelegate.md): An interface that you implement to interact with a drop operation in a view modified to accept drops.
- [DropProposal](../dropproposal.md): The behavior of a drop.
- [DropOperation](../dropoperation.md): Operation types that determine how a drag and drop session resolves when the user drops a drag item.
- [DropInfo](../dropinfo.md): The current state of a drop.
