> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/ondrag(_:preview:)](https://developer.apple.com/documentation/swiftui/view/ondrag(_:preview:))

# onDrag(\_:preview:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Activates this view as the source of a drag and drop operation.

## Declaration

```swift
nonisolated func onDrag<V>(_ data: @escaping () -> NSItemProvider, @ContentBuilder preview: () -> V) -> some View where V : View

```

## Parameters

- `data`: A closure that returns a single [NSItemProvider](https://developer.apple.com/documentation/foundation/nsitemprovider) that represents the draggable data from this view.
- `preview`: A [View](../view.md) to use as the source for the dragging preview, once the drag operation has begun. The preview is centered over the source view.

<a id="return-value"></a>

## Return Value

A view that activates this view as the source of a drag-and- drop operation, beginning with user gesture input.

<a id="discussion"></a>

## Discussion

Applying the `onDrag(_:preview:)` modifier adds the appropriate gestures for drag and drop to this view. When a drag operation begins, a rendering of `preview` is generated and used as the preview image.

To customize the lift preview, shown while the system transitions to show your custom `preview`, apply a [contentShape(\_:\_:eoFill:)](contentshape%28____eofill_%29.md) with a [dragPreview](../contentshapekinds/dragpreview.md) kind. For example, you can change the preview’s corner radius or use a nested view as the preview.

To use `Transferable` types directly and access a richer feature set — including multi-item drag via [dragContainer(for:in:\_:)](dragcontainer%28for_in___%29.md) — use [draggable(\_:)](draggable%28__%29.md) instead.

> **Important**

> Don’t dispatch work to the main actor while exporting the item. Doing so isn’t supported and might cause a hang. If you register data representations on the item provider yourself, make sure their completion handlers don’t dispatch to the main thread.

## See Also

### Moving items using item providers

- [itemProvider(\_:)](itemprovider%28__%29.md): Provides a closure that vends the drag representation to be used for a particular data element.
- [onDrag(\_:)](ondrag%28__%29.md): Activates this view as the source of a drag and drop operation.
- [onDrop(of:isTargeted:perform:)](ondrop%28of_istargeted_perform_%29.md): Defines the destination of a drag-and-drop operation that handles the dropped content with a closure that you specify.
- [onDrop(of:delegate:)](ondrop%28of_delegate_%29.md): Defines the destination of a drag and drop operation using behavior controlled by the delegate that you provide.
- [DropDelegate](../dropdelegate.md): An interface that you implement to interact with a drop operation in a view modified to accept drops.
- [DropProposal](../dropproposal.md): The behavior of a drop.
- [DropOperation](../dropoperation.md): Operation types that determine how a drag and drop session resolves when the user drops a drag item.
- [DropInfo](../dropinfo.md): The current state of a drop.
