> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dynamicviewcontent/reorderable(collectionid:)](https://developer.apple.com/documentation/swiftui/dynamicviewcontent/reorderable(collectionid:))

# reorderable(collectionID:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Enables reordering views from this content within and between sections in the scope of a reorderable container modifier.

## Declaration

```swift
nonisolated func reorderable(collectionID: some Hashable & Sendable) -> some DynamicViewContent<Self.Data>

```

## Parameters

- `collectionID`: The identifier that represents this collection. Its value is used in the destination value when reordering.

## Mentioned In

- [Reordering items in lists, stacks, grids, and custom layouts](../reordering-items-in-lists-stacks-grids-and-custom-layouts.md)

<a id="discussion"></a>

## Discussion

Declare this modifier on [DynamicViewContent](../dynamicviewcontent.md) within a reorderable container to allow people to reorder the items in the content using a system drag gesture. A reorderable container is a list, stack, grid, or custom layout that you define with the [reorderContainer(for:in:isEnabled:move:)](../view/reordercontainer%28for_in_isenabled_move_%29.md) modifier.

Use this modifier when you have multiple collections in the container. Provide a collection identifier to uniquely identify the collection. If your container has a single collection, provide [ReorderableSingleCollectionIdentifier](../reorderablesinglecollectionidentifier.md) as the identifier, or use [reorderable()](reorderable%28%29.md) instead.

This example shows a sectioned list of reminders:

```swift
struct ContentView: View {
    @State private var model = ReminderModel()

    var body: some View {
        List {
            ForEach(model.sections) { section in
                Section(section.name) {
                    ForEach(section.reminders) { reminder in
                        ReminderView(reminder)
                    }
                    .reorderable(collectionID: section.id)
                }
            }
        }
        .reorderContainer(
            for: Reminder.self, in: ReminderModel.Section.ID.self
        ) { difference in
            model.apply(difference: difference)
        }
    }
}
```

## See Also

### Reordering items

- [Making a card game with drag, drop, and reordering in SwiftUI](../making-a-card-game-with-drag-drop-and-reordering-in-swiftui.md): Move cards between positions in a card game using drag, drop, and reordering modifiers.
- [reorderable()](reorderable%28%29.md): Enables reordering of views from this content inside the scope of a reorderable container modifier.
- [ReorderableSingleCollectionIdentifier](../reorderablesinglecollectionidentifier.md): An opaque, empty type used to identify reorderable containers and modifiers with only a single collection.
- [reorderContainer(for:isEnabled:move:)](../view/reordercontainer%28for_isenabled_move_%29.md): Defines a container of reorderable views.
- [reorderContainer(for:in:isEnabled:move:)](../view/reordercontainer%28for_in_isenabled_move_%29.md): Defines a container of reorderable views, with a type you specify to identify sections.
- [reorderContainer(for:itemID:isEnabled:move:)](../view/reordercontainer%28for_itemid_isenabled_move_%29.md): Defines a container of reorderable views, with a type and keypath you specify to identify items.
- [reorderContainer(for:itemID:in:isEnabled:move:)](../view/reordercontainer%28for_itemid_in_isenabled_move_%29.md): Defines a container of reorderable views, with a type and keypath you use to identify items and a type you use to identify collections.
- [reorderDestination(for:in:)](../dropsession/reorderdestination%28for_in_%29.md): Provides the destination value of a reordering operation that occurred in the container associated with this drop destination modifier.
- [reorderDestination(for:itemID:in:)](../dropsession/reorderdestination%28for_itemid_in_%29.md): Provides the destination value of a reordering operation that occurred in the container associated with this drop destination modifier.
- [ReorderDifference](../reorderdifference.md): The difference that a reordering operation produces.
