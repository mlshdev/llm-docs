> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/draggable(_:item:containernamespace:)](https://developer.apple.com/documentation/swiftui/view/draggable(_:item:containernamespace:))

# draggable(\_:item:containerNamespace:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 26.0+ · visionOS 27.0+

Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.

## Declaration

```swift
nonisolated func draggable<Item>(_ itemType: Item.Type = Item.self, item: @autoclosure @escaping () -> Item?, containerNamespace: Namespace.ID? = nil) -> some View where Item : Transferable, Item : Identifiable, Item.ID : Sendable

```

## Parameters

- `itemType`: A type of the dragged item.
- `item`: A closure that returns a single instance or a value conforming to [Transferable](https://developer.apple.com/documentation/coretransferable/transferable) that represents the draggable data from this view.
- `containerNamespace`: A namespace of the associated drag container.

<a id="return-value"></a>

## Return Value

A view that activates this view as the source of a drag and drop operation, beginning with user gesture input.

<a id="discussion"></a>

## Discussion

Applying the `draggable(_:_:containerNamespace:)` modifier adds the appropriate gestures for drag and drop to this view. When a drag operation begins, a rendering of this view is generated and used as the preview image.

If the view is enclosed in a `dragContainer(for:in:_)`, the view becomes its draggable element, and the item’s identifier is used as drag payload identifier.

```swift
var fruits: [Fruit]
var selectedFruits: [Fruit.ID]

var body: some View {
    ScrollView {
        VStack {
            ForEach(fruits) { fruit in
                FruitView(fruit)
                    .draggable(fruit)
            }
        }
    }
    .dragContainer(for: Fruit.self) { identifiers in
        fruits(with: identifiers)
    }
}

func fruits(with: [Fruit.ID]) -> [Fruit] { ... }
struct Fruit: Identifiable, Transferable { ... }
```

## See Also

### Moving transferable items

- [draggable(\_:)](draggable%28__%29.md): Activates this view as the source of a drag and drop operation.
- [draggable(\_:preview:)](draggable%28__preview_%29.md): Activates this view as the source of a drag and drop operation.
- [draggable(\_:containerNamespace:\_:)](draggable%28__containernamespace___%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional identifiable payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:id:containerNamespace:\_:)](draggable%28__id_containernamespace___%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(\_:id:item:containerNamespace:)](draggable%28__id_item_containernamespace_%29.md): Activates this view as the source of a drag and drop operation, allowing to provide optional payload and specify the namespace of the drag container this view belongs to.
- [draggable(containerItemID:containerNamespace:)](draggable%28containeritemid_containernamespace_%29.md): Inside a drag container, activates this view as the source of a drag and drop operation. Supports lazy drag containers.
