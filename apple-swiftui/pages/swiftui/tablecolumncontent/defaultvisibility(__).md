> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumncontent/defaultvisibility(_:)](https://developer.apple.com/documentation/swiftui/tablecolumncontent/defaultvisibility(_:))

# defaultVisibility(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Sets the default visibility of a table column.

## Declaration

```swift
@MainActor @preconcurrency func defaultVisibility(_ visibility: Visibility) -> some TableColumnContent<Self.TableRowValue, Self.TableColumnSortComparator>

```

## Parameters

- `visibility`: The default visibility to apply to columns.

<a id="discussion"></a>

## Discussion

A `hidden` column will not be visible, unless the `Table` is also bound to `TableColumnCustomization` and either modified programmatically or by the user.

## See Also

### Configuring the content

- [alignment(\_:)](alignment%28__%29.md): Sets the alignment of the column, applying to both its column header label and the row view content for that column.
- [customizationID(\_:)](customizationid%28__%29.md): Sets the identifier to be associated with a column when persisting its state with `TableColumnCustomization`.
- [disabledCustomizationBehavior(\_:)](disabledcustomizationbehavior%28__%29.md): Sets the disabled customization behavior for a table column.
