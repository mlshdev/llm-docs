> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/ondrop(of:delegate:)](https://developer.apple.com/documentation/swiftui/view/ondrop(of:delegate:))

# onDrop(of:delegate:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Defines the destination of a drag and drop operation using behavior controlled by the delegate that you provide.

## Declaration

```swift
nonisolated func onDrop(of supportedContentTypes: [UTType], delegate: any DropDelegate) -> some View

```

## Parameters

- `supportedContentTypes`: The uniform type identifiers that describe the types of content this view can accept through drag and drop. If the drag and drop operation doesn’t contain any of the supported types, then this drop destination doesn’t activate and `isTargeted` doesn’t update.
- `delegate`: A type that conforms to the [DropDelegate](../dropdelegate.md) protocol. You have comprehensive control over drop behavior when you use a delegate.

<a id="return-value"></a>

## Return Value

A view that provides a drop destination for a drag operation of the specified types.

<a id="discussion"></a>

## Discussion

To use `Transferable` types directly and access a richer feature set — including support for [DropSession](../dropsession.md) — use [dropDestination(for:isEnabled:action:)](dropdestination%28for_isenabled_action_%29.md) instead.

## See Also

### Moving items using item providers

- [itemProvider(\_:)](itemprovider%28__%29.md): Provides a closure that vends the drag representation to be used for a particular data element.
- [onDrag(\_:preview:)](ondrag%28__preview_%29.md): Activates this view as the source of a drag and drop operation.
- [onDrag(\_:)](ondrag%28__%29.md): Activates this view as the source of a drag and drop operation.
- [onDrop(of:isTargeted:perform:)](ondrop%28of_istargeted_perform_%29.md): Defines the destination of a drag-and-drop operation that handles the dropped content with a closure that you specify.
- [DropDelegate](../dropdelegate.md): An interface that you implement to interact with a drop operation in a view modified to accept drops.
- [DropProposal](../dropproposal.md): The behavior of a drop.
- [DropOperation](../dropoperation.md): Operation types that determine how a drag and drop session resolves when the user drops a drag item.
- [DropInfo](../dropinfo.md): The current state of a drop.
