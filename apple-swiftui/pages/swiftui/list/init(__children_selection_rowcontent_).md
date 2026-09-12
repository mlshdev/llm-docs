> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/list/init(_:children:selection:rowcontent:)](https://developer.apple.com/documentation/swiftui/list/init(_:children:selection:rowcontent:))

# init(\_:children:selection:rowContent:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a hierarchical list that computes its rows on demand from a binding to an underlying collection of identifiable data and allowing users to have exactly one row always selected.

## Declaration

```swift
nonisolated init<Data, RowContent>(_ data: Binding<Data>, children: WritableKeyPath<Data.Element, Data?>, selection: Binding<SelectionValue>, @ContentBuilder rowContent: @escaping (Binding<Data.Element>) -> RowContent) where Content == OutlineGroup<Binding<Data>, Data.Element.ID, RowContent, RowContent, DisclosureGroup<RowContent, OutlineSubgroupChildren>>, Data : MutableCollection, Data : RandomAccessCollection, RowContent : View, Data.Element : Identifiable
```

## Parameters

- `data`: The identifiable data for computing the list.
- `children`: A key path to a property whose non-`nil` value gives the children of `data`. A non-`nil` but empty value denotes a node capable of having children that is currently childless, such as an empty directory in a file system. On the other hand, if the property at the key path is `nil`, then `data` is treated as a leaf node in the tree, like a regular file in a file system.
- `selection`: A binding to a non optional selected value.
- `rowContent`: A content builder that creates the view for a single row of the list.

## See Also

### Creating a list from hierarchical data

- [init(\_:children:rowContent:)](init%28__children_rowcontent_%29.md): Conforms when `SelectionValue` is `Never` and `Content` conforms to `View`. Creates a hierarchical list that computes its rows on demand from a binding to an underlying collection of identifiable data.
- [init(\_:id:children:rowContent:)](init%28__id_children_rowcontent_%29.md): Conforms when `SelectionValue` is `Never` and `Content` conforms to `View`. Creates a hierarchical list that identifies its rows based on a key path to the identifier of the underlying data.
- [init(\_:id:children:selection:rowContent:)](init%28__id_children_selection_rowcontent_%29.md): Conforms when `SelectionValue` conforms to `Hashable` and `Content` conforms to `View`. Creates a hierarchical list that identifies its rows based on a key path to the identifier of the underlying data and allowing users to have exactly one row always selected.
