> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumn/init(_:sortusing:content:)](https://developer.apple.com/documentation/swiftui/tablecolumn/init(_:sortusing:content:))

# init(\_:sortUsing:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.6+ · iPadOS 16.6+ · Mac Catalyst 16.6+ · macOS 13.5+ · visionOS 1.0+

Creates a sortable column that generates its label from a localized string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, sortUsing comparator: Sort, @ContentBuilder content: @escaping (RowValue) -> Content)
```

## Parameters

- `titleResource`: Text resource for the column’s localized title.
- `comparator`: The prototype sort comparator to use when representing this column. When a person taps or clicks the column header, the containing table’s `sortOrder` incorporates this value, potentially with a flipped order.
- `content`: The view content to display for each row in a table.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view on your behalf. For more information about localizing strings, see[Text](../text.md).

## See Also

### Creating a sortable column

- [init(\_:value:content:)](init%28__value_content_%29.md): Conforms when `RowValue` inherits `NSObject`, `RowValue` conforms to `Identifiable`, `Sort` is `SortDescriptor<RowValue>`, `Content` conforms to `View`, and `Label` is `Text`. Creates a sortable column for Boolean values that generates its label from a localized string resource.
- [init(\_:value:comparator:)](init%28__value_comparator_%29.md): Conforms when `RowValue` conforms to `Identifiable`, `Sort` is `KeyPathComparator<RowValue>`, `Content` conforms to `View`, and `Label` is `Text`. Creates a sortable column that displays a string property, and generates its label from a localized string resource.
- [init(\_:value:comparator:content:)](init%28__value_comparator_content_%29.md): Conforms when `RowValue` inherits `NSObject`, `RowValue` conforms to `Identifiable`, `Sort` is `SortDescriptor<RowValue>`, `Content` conforms to `View`, and `Label` is `Text`. Creates a sortable column that generates its label from a localized string resource.
