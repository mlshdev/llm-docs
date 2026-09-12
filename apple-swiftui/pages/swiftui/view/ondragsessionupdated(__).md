> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/ondragsessionupdated(_:)](https://developer.apple.com/documentation/swiftui/view/ondragsessionupdated(_:))

# onDragSessionUpdated(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 26.0+ · visionOS 27.0+

Specifies an action to perform on each update of an ongoing dragging operation activated by `draggable(_:)` or anther drag modifiers.

## Declaration

```swift
nonisolated func onDragSessionUpdated(_ onUpdate: @escaping (DragSession) -> Void) -> some View

```

<a id="discussion"></a>

## Discussion

Below is an example of a view that displays a book and supports dragging to copy, move, and delete. If the session ends with moving or deleting the item, in the `onUpdate` closure, the view lets the model layer know that the book should be deleted from the source.

```swift
struct DraggableBookView: View {
    var id: UUID

    var body: some View {
        BookView()
            .draggable(Book(id: id))
            .dragConfiguration(
                DragConfiguration(
                    operationsWithinApp: .init(allowMove: true, allowDelete: true),
                    operationsOutsideApp: .init(allowMove: true, allowDelete: true)
                ))
            .onDragSessionUpdated { session in
                switch session.phase {
                case .ended(at: _, with: let operation):
                    if operation == .move || operation == .delete {
                        if let id = session.draggedItemIDs(type: UUID.self).first {
                            removeBook(id: id)
                        }
                    }
                default:
                    break
                }
            }
    }
}

func removeBook(id: UUID) { }
```

The `onUpdate` closure is called when the closest drag session in the child view hierarchy becomes active.

## See Also

### Drag and drop

- [dragConfiguration(\_:)](dragconfiguration%28__%29.md): Configures a drag session.
- [dragContainer(for:in:\_:)](dragcontainer%28for_in___%29.md): A container with draggable views where the drag payload is based on multiple identifiers of dragged items.
- [dragContainer(for:itemID:in:\_:)](dragcontainer%28for_itemid_in___%29.md): A container with draggable views.
- [dragContainerSelection(\_:containerNamespace:)](dragcontainerselection%28__containernamespace_%29.md): Provides multiple item selection support for drag containers.
- [dragPreviewsFormation(\_:)](dragpreviewsformation%28__%29.md): Describes the way dragged previews are visually composed.
- [draggable(\_:)](draggable%28__%29.md): Activates this view as the source of a drag and drop operation.
- [draggable(\_:preview:)](draggable%28__preview_%29.md): Activates this view as the source of a drag and drop operation.
- [draggable(\_:containerNamespace:\_:)](draggable%28__containernamespace___%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:id:containerNamespace:\_:)](draggable%28__id_containernamespace___%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:id:item:containerNamespace:)](draggable%28__id_item_containernamespace_%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:item:containerNamespace:)](draggable%28__item_containernamespace_%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.
- [draggable(containerItemID:containerNamespace:)](draggable%28containeritemid_containernamespace_%29.md): Inside a drag container, activates this view as the source of a drag and drop operation. Supports lazy drag containers.
- [dropConfiguration(\_:)](dropconfiguration%28__%29.md): Configures a drop session.
- [dropDestination(for:isEnabled:action:)](dropdestination%28for_isenabled_action_%29.md): Defines the destination of a drag and drop operation that provides a drop operation proposal and handles the dropped content with a closure that you specify.
- [dropPreviewsFormation(\_:)](droppreviewsformation%28__%29.md): Describes the way previews for a drop are composed.
