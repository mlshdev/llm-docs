> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/draggable(containeritemid:containernamespace:)](https://developer.apple.com/documentation/swiftui/view/draggable(containeritemid:containernamespace:))

# draggable(containerItemID:containerNamespace:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 26.0+ · visionOS 27.0+

Inside a drag container, activates this view as the source of a drag and drop operation. Supports lazy drag containers.

## Declaration

```swift
nonisolated func draggable<ItemID>(containerItemID: ItemID, containerNamespace: Namespace.ID? = nil) -> some View where ItemID : Hashable, ItemID : Sendable

```

## Parameters

- `containerItemID`: An identifier of the associated drag payload.
- `containerNamespace`: A namespace of the associated drag container.

<a id="return-value"></a>

## Return Value

A view that activates this view as the source of a drag and drop operation, beginning with user gesture input.

<a id="discussion"></a>

## Discussion

This modifier marks the view as a draggable element of an enclosing `dragContainer(_:containerNamespace:_:)`. Since this modifier does not require to provide the payload, only its identifier, it works lazily (the framework asks to provide the actual dragged items only when drag starts; also, the framework doesn’t have to render a view in order to access its payload).

Applying the `draggable(containerItemID:containerNamespace:)` modifier to a view inside a drag container adds the appropriate gestures for drag and drop to this view. SwiftUI generates a default drag preview for drag.

Below, each `FruitView` is assigned an identifier: a code of a fruit it represents. When dragging begins, the `dragContainer` closure is called with the codes of the selected fruit, or, if a user drags a view that is not selected, the closure receives the identifier of that view as a parameter.

```swift
var fruits: [Fruit]
var selectedFruitCodes: [UUID]

var body: some View {
    VStack {
        ForEach(fruits) { fruit in
            FruitView(fruit)
                .draggable(containerItemID: fruit.code)
        }
    }
    .dragContainer { codes in
        fruits(with: codes)
    }
    .dragContainerSelection(selectedFruitCodes)
}

func fruits(with codes: [UUID]) -> [Fruit] { ... }

struct Fruit: Transferable {
    var code: UUID
    ...
}
```

## See Also

### Moving transferable items

- [draggable(\_:)](draggable%28__%29.md): Activates this view as the source of a drag and drop operation.
- [draggable(\_:preview:)](draggable%28__preview_%29.md): Activates this view as the source of a drag and drop operation.
- [draggable(\_:containerNamespace:\_:)](draggable%28__containernamespace___%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:id:containerNamespace:\_:)](draggable%28__id_containernamespace___%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:id:item:containerNamespace:)](draggable%28__id_item_containernamespace_%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:item:containerNamespace:)](draggable%28__item_containernamespace_%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.
