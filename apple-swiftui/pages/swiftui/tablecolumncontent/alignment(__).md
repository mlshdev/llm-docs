> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumncontent/alignment(_:)](https://developer.apple.com/documentation/swiftui/tablecolumncontent/alignment(_:))

# alignment(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Sets the alignment of the column, applying to both its column header label and the row view content for that column.

## Declaration

```swift
@MainActor @preconcurrency func alignment(_ alignment: TableColumnAlignment) -> some TableColumnContent<Self.TableRowValue, Self.TableColumnSortComparator>

```

## Parameters

- `alignment`: The alignment to apply to the column.

## See Also

### Configuring the content

- [customizationID(\_:)](customizationid%28__%29.md): Sets the identifier to be associated with a column when persisting its state with `TableColumnCustomization`.
- [defaultVisibility(\_:)](defaultvisibility%28__%29.md): Sets the default visibility of a table column.
- [disabledCustomizationBehavior(\_:)](disabledcustomizationbehavior%28__%29.md): Sets the disabled customization behavior for a table column.
