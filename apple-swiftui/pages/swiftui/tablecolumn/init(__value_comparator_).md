> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumn/init(_:value:comparator:)](https://developer.apple.com/documentation/swiftui/tablecolumn/init(_:value:comparator:))

# init(\_:value:comparator:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.6+ · iPadOS 16.6+ · Mac Catalyst 16.6+ · macOS 13.5+ · visionOS 1.0+

Creates a sortable column that displays a string property, and generates its label from a localized string resource.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, value: KeyPath<RowValue, String>, comparator: String.StandardComparator = .localizedStandard) where Content == Text
```

## Parameters

- `titleResource`: Text resource for the column’s localized title.
- `value`: The path to the property associated with the column, to display verbatim as text in each row of a table, and the key path used to create a sort comparator when sorting the column.
- `comparator`: The `SortComparator` used to order the string values.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view for you. For more information about localizing strings, see [Text](../text.md).

## See Also

### Creating a sortable column

- [init(\_:value:content:)](init%28__value_content_%29.md): Conforms when `RowValue` inherits `NSObject`, `RowValue` conforms to `Identifiable`, `Sort` is `SortDescriptor<RowValue>`, `Content` conforms to `View`, and `Label` is `Text`. Creates a sortable column for Boolean values that generates its label from a localized string resource.
- [init(\_:value:comparator:content:)](init%28__value_comparator_content_%29.md): Conforms when `RowValue` inherits `NSObject`, `RowValue` conforms to `Identifiable`, `Sort` is `SortDescriptor<RowValue>`, `Content` conforms to `View`, and `Label` is `Text`. Creates a sortable column that generates its label from a localized string resource.
- [init(\_:sortUsing:content:)](init%28__sortusing_content_%29.md): Conforms when `RowValue` conforms to `Identifiable`, `RowValue` is `Sort.Compared`, `Sort` conforms to `SortComparator`, `Content` conforms to `View`, and `Label` is `Text`. Creates a sortable column that generates its label from a localized string resource.
