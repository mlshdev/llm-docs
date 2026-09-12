> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/list/init(_:id:editactions:selection:rowcontent:)](https://developer.apple.com/documentation/swiftui/list/init(_:id:editactions:selection:rowcontent:))

# init(\_:id:editActions:selection:rowContent:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a list that computes its rows on demand from an underlying collection of identifiable data, enables editing the collection, and requires a selection of a single row.

## Declaration

```swift
nonisolated init<Data, ID, RowContent>(_ data: Binding<Data>, id: KeyPath<Data.Element, ID>, editActions: EditActions<Data>, selection: Binding<SelectionValue>, @ContentBuilder rowContent: @escaping (Binding<Data.Element>) -> RowContent) where Content == ForEach<IndexedIdentifierCollection<Data, ID>, ID, EditableCollectionContent<RowContent, Data>>, Data : MutableCollection, Data : RandomAccessCollection, ID : Hashable, RowContent : View, Data.Index : Hashable
```

## Parameters

- `data`: The identifiable data for computing and to be edited by the list.
- `id`: The key path to the data model’s identifier.
- `editActions`: The edit actions that are synthesized on `data`.
- `selection`: A binding to a non optional selected value.
- `rowContent`: A content builder that creates the view for a single row of

<a id="discussion"></a>

## Discussion

The following example creates a list to display a collection of favorite foods allowing the user to delete or move elements from the collection, and selects a single row.

```swift
List(
    $foods,
    editActions: [.delete, .move],
    selection: $selectedFood
) { $food in
   HStack {
       Text(food.name)
       Toggle("Favorite", isOn: $food.isFavorite)
   }
}
```

Use [deleteDisabled(\_:)](../view/deletedisabled%28__%29.md) and [moveDisabled(\_:)](../view/movedisabled%28__%29.md) to disable respectively delete or move actions on a per-row basis.

Explicit `DynamicViewContent.onDelete(perform:)`, `DynamicViewContent.onMove(perform:)`, or `View.swipeActions(edge:allowsFullSwipe:content:)` modifiers will override any synthesized action

## See Also

### Creating a list from editable data

- [init(\_:editActions:rowContent:)](init%28__editactions_rowcontent_%29.md): Conforms when `SelectionValue` is `Never` and `Content` conforms to `View`. Creates a list that computes its rows on demand from an underlying collection of identifiable data and enables editing the collection.
- [init(\_:editActions:selection:rowContent:)](init%28__editactions_selection_rowcontent_%29.md): Conforms when `SelectionValue` conforms to `Hashable` and `Content` conforms to `View`. Creates a list that computes its rows on demand from an underlying collection of identifiable data, enables editing the collection, and requires a selection of a single row.
- [init(\_:id:editActions:rowContent:)](init%28__id_editactions_rowcontent_%29.md): Conforms when `SelectionValue` is `Never` and `Content` conforms to `View`. Creates a list that computes its rows on demand from an underlying collection of identifiable data and enables editing the collection.
