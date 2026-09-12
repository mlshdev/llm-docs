> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitytable/accessibilityvisiblecolumns()](https://developer.apple.com/documentation/appkit/nsaccessibilitytable/accessibilityvisiblecolumns())

# accessibilityVisibleColumns() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the visible columns for the table.

## Declaration

```swift
optional func accessibilityVisibleColumns() -> [Any]?
```

<a id="return-value"></a>

## Return Value

An array containing the currently visible columns.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityVisibleColumns](../nsaccessibility-c.protocol/accessibilityvisiblecolumns.md) property.

## See Also

### Supporting Accessibility

- [accessibilityColumnHeaderUIElements()](accessibilitycolumnheaderuielements%28%29.md): Returns the column header accessibility elements for the table.
- [accessibilityColumns()](accessibilitycolumns%28%29.md): Returns the column accessibility elements for the table.
- [accessibilityLabel()](accessibilitylabel%28%29.md): Returns a short description of the table.
- [accessibilityRowHeaderUIElements()](accessibilityrowheaderuielements%28%29.md): Returns the row header accessibility elements for the table.
- [accessibilityRows()](accessibilityrows%28%29.md): Returns the row accessibility elements for the table.
- [accessibilitySelectedCells()](accessibilityselectedcells%28%29.md): The currently selected cells for the table.
- [accessibilitySelectedColumns()](accessibilityselectedcolumns%28%29.md): Returns the currently selected columns for the table.
- [accessibilitySelectedRows()](accessibilityselectedrows%28%29.md): Returns the currently selected rows for the table.
- [accessibilityVisibleCells()](accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [accessibilityVisibleRows()](accessibilityvisiblerows%28%29.md): Returns the visible rows for the table.
- [setAccessibilitySelectedRows(\_:)](setaccessibilityselectedrows%28__%29.md): Sets the table’s currently selected rows.
- [accessibilityHeaderGroup()](accessibilityheadergroup%28%29.md): Deprecated. Returns the header group for the table.

# accessibilityVisibleColumns (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the visible columns for the table.

## Declaration

```objectivec
- (NSArray *) accessibilityVisibleColumns;
```

<a id="return-value"></a>

## Return Value

An array containing the currently visible columns.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityVisibleColumns](../nsaccessibility-c.protocol/accessibilityvisiblecolumns.md) property.

## See Also

### Related Documentation

- [accessibilityVisibleColumns](../nsaccessibility-c.protocol/accessibilityvisiblecolumns.md): The visible columns for the table or outline.

### Supporting Accessibility

- [accessibilityColumnHeaderUIElements](accessibilitycolumnheaderuielements%28%29.md): Returns the column header accessibility elements for the table.
- [accessibilityColumns](accessibilitycolumns%28%29.md): Returns the column accessibility elements for the table.
- [accessibilityLabel](accessibilitylabel%28%29.md): Returns a short description of the table.
- [accessibilityRowHeaderUIElements](accessibilityrowheaderuielements%28%29.md): Returns the row header accessibility elements for the table.
- [accessibilityRows](accessibilityrows%28%29.md): Returns the row accessibility elements for the table.
- [accessibilitySelectedCells](accessibilityselectedcells%28%29.md): The currently selected cells for the table.
- [accessibilitySelectedColumns](accessibilityselectedcolumns%28%29.md): Returns the currently selected columns for the table.
- [accessibilitySelectedRows](accessibilityselectedrows%28%29.md): Returns the currently selected rows for the table.
- [accessibilityVisibleCells](accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [accessibilityVisibleRows](accessibilityvisiblerows%28%29.md): Returns the visible rows for the table.
- [setAccessibilitySelectedRows:](setaccessibilityselectedrows%28__%29.md): Sets the table’s currently selected rows.
- [accessibilityHeaderGroup](accessibilityheadergroup%28%29.md): Deprecated. Returns the header group for the table.
