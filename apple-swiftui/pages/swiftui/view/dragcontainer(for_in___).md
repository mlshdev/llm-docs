> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/dragcontainer(for:in:_:)](https://developer.apple.com/documentation/swiftui/view/dragcontainer(for:in:_:))

# dragContainer(for:in:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 26.0+ · visionOS 27.0+

A container with draggable views where the drag payload is based on multiple identifiers of dragged items.

## Declaration

```swift
nonisolated func dragContainer<Item, Data>(for itemType: Item.Type = Item.self, in namespace: Namespace.ID? = nil, _ payload: @escaping (Array<Item.ID>) -> Data) -> some View where Item : Transferable, Item : Identifiable, Item == Data.Element, Data : Collection, Item.ID : Sendable

```

## Parameters

- `itemType`: A type of the dragged items.
- `namespace`: A namespace that identifies the drag container.
- `payload`: A closure which is called when a drag operation begins. As an argument, the closure receives either the identifiers of all the selected items, if the dragged item is a part of selection or only the identifier of the dragged item, if it is not part of the selection. With the passed identifiers, put together the payload to drag, and return from the closure. Return an empty `Collection` to disable the drag.

<a id="return-value"></a>

## Return Value

A view that can be activated as the source of a drag and drop operation, beginning with user gesture input.

## Mentioned In

- [Reordering items in lists, stacks, grids, and custom layouts](../reordering-items-in-lists-stacks-grids-and-custom-layouts.md)

<a id="discussion"></a>

## Discussion

Provide the selected identifiers list to SwiftUI using `dragContainerSelection(_:containerNamespace)` modifier. In a case when there’s no selection information available, SwiftUI passes the dragged item identifier to the `payload` closure.

In an example below, an app presents a view with `Fruit` values. When a user starts drag, SwiftUI uses the selection to put together the list of item identifiers to drag.

```swift
var fruits: [Fruit]
@State private var selection: [Fruit.ID]

var body: some View {
    VStack {
        ForEach(fruits) { fruit in
            FruitView(fruit)
                .draggable(containerItemID: fruit.id)
        }
    }
    .dragContainer(for: Fruit.self) { ids in
       fruits(with: ids)
    }
    .dragContainerSelection(selection)
}

func fruits(with ids: [UUID]) -> [Fruit] { ... }

struct Fruit: Transferable, Identifiable { ... }
```

To enable multi-item drag, apply this modifier to a container view and mark each draggable child with [draggable(\_:)](draggable%28__%29.md) or [draggable(containerItemID:containerNamespace:)](draggable%28containeritemid_containernamespace_%29.md).

## See Also

### Configuring drag-and-drop behavior

- [dragConfiguration(\_:)](dragconfiguration%28__%29.md): Configures a drag session.
- [DragConfiguration](../dragconfiguration.md): The behavior of the drag, proposed by the dragging source. A value that describes the drag operations a drag source supports.
- [dropConfiguration(\_:)](dropconfiguration%28__%29.md): Configures a drop session.
- [DropConfiguration](../dropconfiguration.md): Describes the behavior of the drop.
- [dragContainer(for:itemID:in:\_:)](dragcontainer%28for_itemid_in___%29.md): A container with draggable views.
- [dragContainerSelection(\_:containerNamespace:)](dragcontainerselection%28__containernamespace_%29.md): Provides multiple item selection support for drag containers.
