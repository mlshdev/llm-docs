> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/list/init(_:rowcontent:)](https://developer.apple.com/documentation/swiftui/list/init(_:rowcontent:))

# init(\_:rowContent:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a list that computes its rows on demand from an underlying collection of identifiable data.

## Declaration

```swift
@export(implementation) nonisolated init<Data, RowContent>(_ data: Binding<Data>, @ContentBuilder rowContent: @escaping (Binding<Data.Element>) -> RowContent) where Content == ForEach<LazyMapSequence<Data.Indices, (Data.Index, Data.Element.ID)>, Data.Element.ID, RowContent>, Data : MutableCollection, Data : RandomAccessCollection, RowContent : View, Data.Element : Identifiable, Data.Index : Hashable
```

## Parameters

- `data`: A collection of identifiable data for computing the list.
- `rowContent`: A content builder that creates the view for a single row of the list.

## See Also

### Creating a list from enumerated data

- [init(\_:selection:rowContent:)](init%28__selection_rowcontent_%29.md): Conforms when `SelectionValue` conforms to `Hashable` and `Content` conforms to `View`. Creates a list that computes its rows on demand from an underlying collection of identifiable data, optionally allowing users to select a single row.
- [init(\_:id:rowContent:)](init%28__id_rowcontent_%29.md): Conforms when `SelectionValue` is `Never` and `Content` conforms to `View`. Creates a list that identifies its rows based on a key path to the identifier of the underlying data.
- [init(\_:id:selection:rowContent:)](init%28__id_selection_rowcontent_%29.md): Conforms when `SelectionValue` conforms to `Hashable` and `Content` conforms to `View`. Creates a list that identifies its rows based on a key path to the identifier of the underlying data, optionally allowing users to select a single row.
