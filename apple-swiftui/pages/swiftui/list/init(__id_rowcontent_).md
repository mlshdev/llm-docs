> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/list/init(_:id:rowcontent:)](https://developer.apple.com/documentation/swiftui/list/init(_:id:rowcontent:))

# init(\_:id:rowContent:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a list that identifies its rows based on a key path to the identifier of the underlying data.

## Declaration

```swift
@export(implementation) nonisolated init<Data, ID, RowContent>(_ data: Binding<Data>, id: KeyPath<Data.Element, ID>, @ContentBuilder rowContent: @escaping (Binding<Data.Element>) -> RowContent) where Content == ForEach<LazyMapSequence<Data.Indices, (Data.Index, ID)>, ID, RowContent>, Data : MutableCollection, Data : RandomAccessCollection, ID : Hashable, RowContent : View, Data.Index : Hashable
```

## Parameters

- `data`: The data for populating the list.
- `id`: The key path to the data model’s identifier.
- `rowContent`: A content builder that creates the view for a single row of the list.

## See Also

### Creating a list from enumerated data

- [init(\_:rowContent:)](init%28__rowcontent_%29.md): Conforms when `SelectionValue` is `Never` and `Content` conforms to `View`. Creates a list that computes its rows on demand from an underlying collection of identifiable data.
- [init(\_:selection:rowContent:)](init%28__selection_rowcontent_%29.md): Conforms when `SelectionValue` conforms to `Hashable` and `Content` conforms to `View`. Creates a list that computes its rows on demand from an underlying collection of identifiable data, optionally allowing users to select a single row.
- [init(\_:id:selection:rowContent:)](init%28__id_selection_rowcontent_%29.md): Conforms when `SelectionValue` conforms to `Hashable` and `Content` conforms to `View`. Creates a list that identifies its rows based on a key path to the identifier of the underlying data, optionally allowing users to select a single row.
