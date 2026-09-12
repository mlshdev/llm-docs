> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/dropdestination(for:isenabled:action:)](https://developer.apple.com/documentation/swiftui/view/dropdestination(for:isenabled:action:))

# dropDestination(for:isEnabled:action:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Defines the destination of a drag and drop operation that provides a drop operation proposal and handles the dropped content with a closure that you specify.

## Declaration

```swift
nonisolated func dropDestination<T>(for type: T.Type = T.self, isEnabled: Bool = true, action: @escaping ([T], DropSession) -> Void) -> some View where T : Transferable

```

## Parameters

- `type`: The expected type of the dropped models.
- `isEnabled`: The Boolean value indicating if the view accepts drop interactions.
- `action`: A closure that takes the dropped content and responds appropriately. The first parameter to `action` contains the dropped items. The second parameter contains the drop session description.

<a id="return-value"></a>

## Return Value

A view that provides a drop destination for a drop operation of the specified type.

## Mentioned In

- [Reordering items in lists, stacks, grids, and custom layouts](../reordering-items-in-lists-stacks-grids-and-custom-layouts.md)

<a id="discussion"></a>

## Discussion

The dropped content can be provided as binary data, file URLs, or file promises.

The drop destination is the same size and position as this view.

```swift
@State private var isDropTargeted = false
@Binding var isDropEnabled: Bool

var body: some View {
    Color.pink
        .frame(width: 400, height: 400)
        .dropDestination(
            for: String.self, isEnabled: isDropEnabled
        ) { receivedTitles, session in
            animateDrop(at: session.location)
            process(titles: receivedTitles)
        }
}

func process(titles: [String]) { ... }
func animateDrop(at: CGPoint) { ... }
```

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
- [dropPreviewsFormation(\_:)](droppreviewsformation%28__%29.md): Describes the way previews for a drop are composed.
- [itemProvider(\_:)](itemprovider%28__%29.md): Provides a closure that vends the drag representation to be used for a particular data element.
