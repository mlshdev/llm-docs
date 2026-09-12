> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumncontent/customizationid(_:)](https://developer.apple.com/documentation/swiftui/tablecolumncontent/customizationid(_:))

# customizationID(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Sets the identifier to be associated with a column when persisting its state with `TableColumnCustomization`.

## Declaration

```swift
@MainActor @preconcurrency func customizationID(_ id: String) -> some TableColumnContent<Self.TableRowValue, Self.TableColumnSortComparator>

```

## Parameters

- `id`: The identifier to associate with a column.

<a id="discussion"></a>

## Discussion

This is required to allow user customization of a specific table column, in addition to the table as a whole being provided a binding to a `TableColumnCustomization`.

The identifier needs to be stable, including across app version updates, since it is used to persist the user customization.

## See Also

### Configuring the content

- [alignment(\_:)](alignment%28__%29.md): Sets the alignment of the column, applying to both its column header label and the row view content for that column.
- [defaultVisibility(\_:)](defaultvisibility%28__%29.md): Sets the default visibility of a table column.
- [disabledCustomizationBehavior(\_:)](disabledcustomizationbehavior%28__%29.md): Sets the disabled customization behavior for a table column.
