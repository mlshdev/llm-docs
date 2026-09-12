> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/tablecolumnheaders(_:)](https://developer.apple.com/documentation/swiftui/view/tablecolumnheaders(_:))

# tableColumnHeaders(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Controls the visibility of a `Table`’s column header views.

## Declaration

```swift
nonisolated func tableColumnHeaders(_ visibility: Visibility) -> some View

```

## Parameters

- `visibility`: A value of `visible` will show table columns, `hidden` will remove them, and `automatic` will defer to default behavior.

<a id="discussion"></a>

## Discussion

By default, `Table` will display a global header view with the labels of each table column. This area is also where users can sort, resize, and rearrange the columns. For simple cases that don’t require those features, this header can be hidden.

This will not affect the header of any `Section`s in a table.

```swift
Table(article.authors) {
    TableColumn("Name", value: \.name)
    TableColumn("Title", value: \.title)
}
.tableColumnHeaders(.hidden)
```

## See Also

### Customizing columns

- [TableColumnCustomization](../tablecolumncustomization.md): A representation of the state of the columns in a table.
- [TableColumnCustomizationBehavior](../tablecolumncustomizationbehavior.md): A set of customization behaviors of a column that a table can offer to a user.
