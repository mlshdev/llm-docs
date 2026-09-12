> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitytable/accessibilityselectedrows()](https://developer.apple.com/documentation/appkit/nsaccessibilitytable/accessibilityselectedrows())

# accessibilitySelectedRows() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the currently selected rows for the table.

## Declaration

```swift
optional func accessibilitySelectedRows() -> [any NSAccessibilityRow]?
```

<a id="return-value"></a>

## Return Value

An array containing the currently selected rows for the table.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilitySelectedRows](../nsaccessibility-c.protocol/accessibilityselectedrows.md) property. Additionally, your class needs to send a [selectedRowsChanged](../nsaccessibility-swift.struct/notification/selectedrowschanged.md) notification whenever the table’s selected rows change.

## See Also

### Supporting Accessibility

- [accessibilityColumnHeaderUIElements()](accessibilitycolumnheaderuielements%28%29.md): Returns the column header accessibility elements for the table.
- [accessibilityColumns()](accessibilitycolumns%28%29.md): Returns the column accessibility elements for the table.
- [accessibilityLabel()](accessibilitylabel%28%29.md): Returns a short description of the table.
- [accessibilityRowHeaderUIElements()](accessibilityrowheaderuielements%28%29.md): Returns the row header accessibility elements for the table.
- [accessibilityRows()](accessibilityrows%28%29.md): Returns the row accessibility elements for the table.
- [accessibilitySelectedCells()](accessibilityselectedcells%28%29.md): The currently selected cells for the table.
- [accessibilitySelectedColumns()](accessibilityselectedcolumns%28%29.md): Returns the currently selected columns for the table.
- [accessibilityVisibleCells()](accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [accessibilityVisibleColumns()](accessibilityvisiblecolumns%28%29.md): Returns the visible columns for the table.
- [accessibilityVisibleRows()](accessibilityvisiblerows%28%29.md): Returns the visible rows for the table.
- [setAccessibilitySelectedRows(\_:)](setaccessibilityselectedrows%28__%29.md): Sets the table’s currently selected rows.
- [accessibilityHeaderGroup()](accessibilityheadergroup%28%29.md): Deprecated. Returns the header group for the table.

# accessibilitySelectedRows (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the currently selected rows for the table.

## Declaration

```objectivec
- (NSArray<id<NSAccessibilityRow>> *) accessibilitySelectedRows;
```

<a id="return-value"></a>

## Return Value

An array containing the currently selected rows for the table.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilitySelectedRows](../nsaccessibility-c.protocol/accessibilityselectedrows.md) property. Additionally, your class needs to send a [NSAccessibilitySelectedRowsChangedNotification](../nsaccessibility-swift.struct/notification/selectedrowschanged.md) notification whenever the table’s selected rows change.

## See Also

### Related Documentation

- [accessibilitySelectedRows](../nsaccessibility-c.protocol/accessibilityselectedrows.md): The currently selected rows for the table or outline.

### Supporting Accessibility

- [accessibilityColumnHeaderUIElements](accessibilitycolumnheaderuielements%28%29.md): Returns the column header accessibility elements for the table.
- [accessibilityColumns](accessibilitycolumns%28%29.md): Returns the column accessibility elements for the table.
- [accessibilityLabel](accessibilitylabel%28%29.md): Returns a short description of the table.
- [accessibilityRowHeaderUIElements](accessibilityrowheaderuielements%28%29.md): Returns the row header accessibility elements for the table.
- [accessibilityRows](accessibilityrows%28%29.md): Returns the row accessibility elements for the table.
- [accessibilitySelectedCells](accessibilityselectedcells%28%29.md): The currently selected cells for the table.
- [accessibilitySelectedColumns](accessibilityselectedcolumns%28%29.md): Returns the currently selected columns for the table.
- [accessibilityVisibleCells](accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [accessibilityVisibleColumns](accessibilityvisiblecolumns%28%29.md): Returns the visible columns for the table.
- [accessibilityVisibleRows](accessibilityvisiblerows%28%29.md): Returns the visible rows for the table.
- [setAccessibilitySelectedRows:](setaccessibilityselectedrows%28__%29.md): Sets the table’s currently selected rows.
- [accessibilityHeaderGroup](accessibilityheadergroup%28%29.md): Deprecated. Returns the header group for the table.
