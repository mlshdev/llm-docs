> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/dragcontainerselection(_:containernamespace:)](https://developer.apple.com/documentation/swiftui/view/dragcontainerselection(_:containernamespace:))

# dragContainerSelection(\_:containerNamespace:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 26.0+ · visionOS 27.0+

Provides multiple item selection support for drag containers.

## Declaration

```swift
nonisolated func dragContainerSelection<ItemID>(_ selection: @autoclosure @escaping () -> Array<ItemID>, containerNamespace: Namespace.ID? = nil) -> some View where ItemID : Hashable, ItemID : Sendable

```

## Parameters

- `selection`: A closure that provides identifiers of selected items.
- `containerNamespace`: An optional namespace of the drag container.

<a id="discussion"></a>

## Discussion

A drag container finds the nearest enclosing `dragContainerSelection(_:containerNamespace:)` with the same item identifier type and same namespace, if specified. Drag container uses the provided selected item identifiers to determine what the drag payload should be.

If the dragged view is associated with a selected identifier, the payload should contain all the selected items. If the dragged view is not selected, the payload should not contain the whole selection, just the dragged item. With `dragContainerSelection(_:containerNamespace:)`, you get fine-grained control over what items are included in the drag payload.

```swift
 struct FruitContainer: View {
      @State private var fruits: [Fruit]
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

    func fruits(with ids: [Fruit.ID]) -> [Fruit] { ... }

    struct Fruit: Transferable, Identifiable {
        let id: String
        ...
    }

    struct FruitView: View {
        init(_ fruit: Fruit) { ... }
    }
}
```

## See Also

### Configuring drag-and-drop behavior

- [dragConfiguration(\_:)](dragconfiguration%28__%29.md): Configures a drag session.
- [DragConfiguration](../dragconfiguration.md): The behavior of the drag, proposed by the dragging source. A value that describes the drag operations a drag source supports.
- [dropConfiguration(\_:)](dropconfiguration%28__%29.md): Configures a drop session.
- [DropConfiguration](../dropconfiguration.md): Describes the behavior of the drop.
- [dragContainer(for:in:\_:)](dragcontainer%28for_in___%29.md): A container with draggable views where the drag payload is based on multiple identifiers of dragged items.
- [dragContainer(for:itemID:in:\_:)](dragcontainer%28for_itemid_in___%29.md): A container with draggable views.
