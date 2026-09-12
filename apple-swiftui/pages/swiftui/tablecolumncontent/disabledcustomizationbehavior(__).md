> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablecolumncontent/disabledcustomizationbehavior(_:)](https://developer.apple.com/documentation/swiftui/tablecolumncontent/disabledcustomizationbehavior(_:))

# disabledCustomizationBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Sets the disabled customization behavior for a table column.

## Declaration

```swift
@MainActor @preconcurrency func disabledCustomizationBehavior(_ behavior: TableColumnCustomizationBehavior) -> some TableColumnContent<Self.TableRowValue, Self.TableColumnSortComparator>

```

## Parameters

- `behavior`: The behavior to disable, or `.all` to not allow any customization.

<a id="discussion"></a>

## Discussion

When the containing `Table` is bound to some `TableColumnCustomization`, all columns will be able to be customized by the user on macOS by default (i.e. `TableColumnCustomizationBehavior.all`). This modifier allows disabling specific behavior.

This modifier has no effect on iOS since `Table` does not support any built-in user customization features.

This does not prevent programmatic changes to a table column customization.

## See Also

### Configuring the content

- [alignment(\_:)](alignment%28__%29.md): Sets the alignment of the column, applying to both its column header label and the row view content for that column.
- [customizationID(\_:)](customizationid%28__%29.md): Sets the identifier to be associated with a column when persisting its state with `TableColumnCustomization`.
- [defaultVisibility(\_:)](defaultvisibility%28__%29.md): Sets the default visibility of a table column.
