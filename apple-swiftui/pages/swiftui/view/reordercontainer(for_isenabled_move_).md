> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/reordercontainer(for:isenabled:move:)](https://developer.apple.com/documentation/swiftui/view/reordercontainer(for:isenabled:move:))

# reorderContainer(for:isEnabled:move:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Defines a container of reorderable views.

## Declaration

```swift
nonisolated func reorderContainer<Item>(for item: Item.Type, isEnabled: Bool = true, move: @escaping (ReorderDifference<Item.ID, ReorderableSingleCollectionIdentifier>) -> ()) -> some View where Item : Identifiable, Item.ID : Sendable

```

## Parameters

- `item`: The type of reorderable items in the container.
- `isEnabled`: Whether the container allows reordering.
- `move`: A closure that provides the change at the end of a session.

## Mentioned In

- [Reordering items in lists, stacks, grids, and custom layouts](../reordering-items-in-lists-stacks-grids-and-custom-layouts.md)

<a id="discussion"></a>

## Discussion

Declare this modifier on your list, stack, grid, or custom layout to define a reorderable container. Then, apply [reorderable()](../dynamicviewcontent/reorderable%28%29.md) to the content of your container to make those views reorderable.

Use this overload if your container only has one collection within it. If you have multiple collections of reorderable views, use [reorderContainer(for:in:isEnabled:move:)](reordercontainer%28for_in_isenabled_move_%29.md) instead and provide a type for collection identifiers.

A person can lift a reorderable view within the container using a drag gesture. As they lift the item, the system puts a placeholder view in its place to indicate where the view can drop. As they move the item through the container, the position of the placeholder updates to reflect which view the person drags over. When they drop the view, the system calls the `move` closure and provides the change.

The system provides the change as a different to the closure. The difference contains the identifiers of items to move, in the order that the person selected them. It also contains a destination value, which indicates where to insert the item or items.

The following example shows a list of landmark views that a person can move to reorder inside the [VStack](../vstack.md):

```swift
struct ContentView: View {
    @State private var landmarks: [Landmark] = []

    var body: some View {
        VStack {
            ForEach(landmarks) { landmark in
                LandmarkView(landmark)
            }
            .reorderable()
        }
        .reorderContainer(for: Landmark.self) { difference in
            apply(difference: difference)
        }
    }
}
```

## See Also

### Reordering items

- [Making a card game with drag, drop, and reordering in SwiftUI](../making-a-card-game-with-drag-drop-and-reordering-in-swiftui.md): Move cards between positions in a card game using drag, drop, and reordering modifiers.
- [reorderable()](../dynamicviewcontent/reorderable%28%29.md): Enables reordering of views from this content inside the scope of a reorderable container modifier.
- [reorderable(collectionID:)](../dynamicviewcontent/reorderable%28collectionid_%29.md): Enables reordering views from this content within and between sections in the scope of a reorderable container modifier.
- [ReorderableSingleCollectionIdentifier](../reorderablesinglecollectionidentifier.md): An opaque, empty type used to identify reorderable containers and modifiers with only a single collection.
- [reorderContainer(for:in:isEnabled:move:)](reordercontainer%28for_in_isenabled_move_%29.md): Defines a container of reorderable views, with a type you specify to identify sections.
- [reorderContainer(for:itemID:isEnabled:move:)](reordercontainer%28for_itemid_isenabled_move_%29.md): Defines a container of reorderable views, with a type and keypath you specify to identify items.
- [reorderContainer(for:itemID:in:isEnabled:move:)](reordercontainer%28for_itemid_in_isenabled_move_%29.md): Defines a container of reorderable views, with a type and keypath you use to identify items and a type you use to identify collections.
- [reorderDestination(for:in:)](../dropsession/reorderdestination%28for_in_%29.md): Provides the destination value of a reordering operation that occurred in the container associated with this drop destination modifier.
- [reorderDestination(for:itemID:in:)](../dropsession/reorderdestination%28for_itemid_in_%29.md): Provides the destination value of a reordering operation that occurred in the container associated with this drop destination modifier.
- [ReorderDifference](../reorderdifference.md): The difference that a reordering operation produces.
