> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/draggable(_:preview:)](https://developer.apple.com/documentation/swiftui/view/draggable(_:preview:))

# draggable(\_:preview:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Activates this view as the source of a drag and drop operation.

## Declaration

```swift
nonisolated func draggable<V, T>(_ payload: @autoclosure @escaping () -> T, @ContentBuilder preview: () -> V) -> some View where V : View, T : Transferable

```

## Parameters

- `payload`: A closure that returns a single class instance or a value conforming to `Transferable` that represents the draggable data from this view.
- `preview`: A [View](../view.md) to use as the source for the dragging preview, once the drag operation has begun. The preview is centered over the source view.

<a id="return-value"></a>

## Return Value

A view that activates this view as the source of a drag and drop operation, beginning with user gesture input.

## Mentioned In

- [Making a view into a drag source](../making-a-view-into-a-drag-source.md)

<a id="discussion"></a>

## Discussion

Applying the `draggable(_:preview:)` modifier adds the appropriate gestures for drag and drop to this view. When a drag operation begins, a rendering of `preview` is generated and used as the preview image.

```swift
var title: String
var body: some View {
Color.pink
    .frame(width: 400, height: 400)
    .draggable(title) {
         Text("Drop me")
     }
}
```

To customize the lift preview, shown while the system transitions to show your custom `preview`, apply a [contentShape(\_:\_:eoFill:)](contentshape%28____eofill_%29.md) with a [dragPreview](../contentshapekinds/dragpreview.md) kind. For example, you can change the preview’s corner radius or use a nested view as the preview.

> **Important**

> Don’t perform work on the main actor while exporting the item. Doing so isn’t supported and might cause a hang. Make sure `T`‘s exporting closure doesn’t dispatch to the main actor.

## See Also

### Moving transferable items

- [draggable(\_:)](draggable%28__%29.md): Activates this view as the source of a drag and drop operation.
- [draggable(\_:containerNamespace:\_:)](draggable%28__containernamespace___%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:id:containerNamespace:\_:)](draggable%28__id_containernamespace___%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:id:item:containerNamespace:)](draggable%28__id_item_containernamespace_%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:item:containerNamespace:)](draggable%28__item_containernamespace_%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.
- [draggable(containerItemID:containerNamespace:)](draggable%28containeritemid_containernamespace_%29.md): Inside a drag container, activates this view as the source of a drag and drop operation. Supports lazy drag containers.
