> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitytable/accessibilityselectedcolumns()](https://developer.apple.com/documentation/appkit/nsaccessibilitytable/accessibilityselectedcolumns())

# accessibilitySelectedColumns() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the currently selected columns for the table.

## Declaration

```swift
optional func accessibilitySelectedColumns() -> [Any]?
```

<a id="return-value"></a>

## Return Value

An array containing the currently selected columns for the table.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilitySelectedColumns](../nsaccessibility-c.protocol/accessibilityselectedcolumns.md) property. Additionally, your class needs to send a [selectedColumnsChanged](../nsaccessibility-swift.struct/notification/selectedcolumnschanged.md) notification whenever the table’s selected columns change.

## See Also

### Supporting Accessibility

- [accessibilityColumnHeaderUIElements()](accessibilitycolumnheaderuielements%28%29.md): Returns the column header accessibility elements for the table.
- [accessibilityColumns()](accessibilitycolumns%28%29.md): Returns the column accessibility elements for the table.
- [accessibilityLabel()](accessibilitylabel%28%29.md): Returns a short description of the table.
- [accessibilityRowHeaderUIElements()](accessibilityrowheaderuielements%28%29.md): Returns the row header accessibility elements for the table.
- [accessibilityRows()](accessibilityrows%28%29.md): Returns the row accessibility elements for the table.
- [accessibilitySelectedCells()](accessibilityselectedcells%28%29.md): The currently selected cells for the table.
- [accessibilitySelectedRows()](accessibilityselectedrows%28%29.md): Returns the currently selected rows for the table.
- [accessibilityVisibleCells()](accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [accessibilityVisibleColumns()](accessibilityvisiblecolumns%28%29.md): Returns the visible columns for the table.
- [accessibilityVisibleRows()](accessibilityvisiblerows%28%29.md): Returns the visible rows for the table.
- [setAccessibilitySelectedRows(\_:)](setaccessibilityselectedrows%28__%29.md): Sets the table’s currently selected rows.
- [accessibilityHeaderGroup()](accessibilityheadergroup%28%29.md): Deprecated. Returns the header group for the table.

# accessibilitySelectedColumns (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the currently selected columns for the table.

## Declaration

```objectivec
- (NSArray *) accessibilitySelectedColumns;
```

<a id="return-value"></a>

## Return Value

An array containing the currently selected columns for the table.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilitySelectedColumns](../nsaccessibility-c.protocol/accessibilityselectedcolumns.md) property. Additionally, your class needs to send a [NSAccessibilitySelectedColumnsChangedNotification](../nsaccessibility-swift.struct/notification/selectedcolumnschanged.md) notification whenever the table’s selected columns change.

## See Also

### Related Documentation

- [accessibilitySelectedColumns](../nsaccessibility-c.protocol/accessibilityselectedcolumns.md): The currently selected columns for the table or outline.

### Supporting Accessibility

- [accessibilityColumnHeaderUIElements](accessibilitycolumnheaderuielements%28%29.md): Returns the column header accessibility elements for the table.
- [accessibilityColumns](accessibilitycolumns%28%29.md): Returns the column accessibility elements for the table.
- [accessibilityLabel](accessibilitylabel%28%29.md): Returns a short description of the table.
- [accessibilityRowHeaderUIElements](accessibilityrowheaderuielements%28%29.md): Returns the row header accessibility elements for the table.
- [accessibilityRows](accessibilityrows%28%29.md): Returns the row accessibility elements for the table.
- [accessibilitySelectedCells](accessibilityselectedcells%28%29.md): The currently selected cells for the table.
- [accessibilitySelectedRows](accessibilityselectedrows%28%29.md): Returns the currently selected rows for the table.
- [accessibilityVisibleCells](accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [accessibilityVisibleColumns](accessibilityvisiblecolumns%28%29.md): Returns the visible columns for the table.
- [accessibilityVisibleRows](accessibilityvisiblerows%28%29.md): Returns the visible rows for the table.
- [setAccessibilitySelectedRows:](setaccessibilityselectedrows%28__%29.md): Sets the table’s currently selected rows.
- [accessibilityHeaderGroup](accessibilityheadergroup%28%29.md): Deprecated. Returns the header group for the table.
