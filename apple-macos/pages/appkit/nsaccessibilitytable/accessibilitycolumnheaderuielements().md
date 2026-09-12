> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitytable/accessibilitycolumnheaderuielements()](https://developer.apple.com/documentation/appkit/nsaccessibilitytable/accessibilitycolumnheaderuielements())

# accessibilityColumnHeaderUIElements() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the column header accessibility elements for the table.

## Declaration

```swift
optional func accessibilityColumnHeaderUIElements() -> [Any]?
```

<a id="return-value"></a>

## Return Value

The column header element.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibilityProtocol](../nsaccessibilityprotocol.md) protocol’s [accessibilityColumnHeaderUIElements](../nsaccessibility-c.protocol/accessibilitycolumnheaderuielements.md) property.

## See Also

### Supporting Accessibility

- [accessibilityColumns()](accessibilitycolumns%28%29.md): Returns the column accessibility elements for the table.
- [accessibilityLabel()](accessibilitylabel%28%29.md): Returns a short description of the table.
- [accessibilityRowHeaderUIElements()](accessibilityrowheaderuielements%28%29.md): Returns the row header accessibility elements for the table.
- [accessibilityRows()](accessibilityrows%28%29.md): Returns the row accessibility elements for the table.
- [accessibilitySelectedCells()](accessibilityselectedcells%28%29.md): The currently selected cells for the table.
- [accessibilitySelectedColumns()](accessibilityselectedcolumns%28%29.md): Returns the currently selected columns for the table.
- [accessibilitySelectedRows()](accessibilityselectedrows%28%29.md): Returns the currently selected rows for the table.
- [accessibilityVisibleCells()](accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [accessibilityVisibleColumns()](accessibilityvisiblecolumns%28%29.md): Returns the visible columns for the table.
- [accessibilityVisibleRows()](accessibilityvisiblerows%28%29.md): Returns the visible rows for the table.
- [setAccessibilitySelectedRows(\_:)](setaccessibilityselectedrows%28__%29.md): Sets the table’s currently selected rows.
- [accessibilityHeaderGroup()](accessibilityheadergroup%28%29.md): Deprecated. Returns the header group for the table.

# accessibilityColumnHeaderUIElements (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the column header accessibility elements for the table.

## Declaration

```objectivec
- (NSArray *) accessibilityColumnHeaderUIElements;
```

<a id="return-value"></a>

## Return Value

The column header element.

<a id="Discussion"></a>

## Discussion

This method is the getter for the [NSAccessibility](../nsaccessibilityprotocol.md) protocol’s [accessibilityColumnHeaderUIElements](../nsaccessibility-c.protocol/accessibilitycolumnheaderuielements.md) property.

## See Also

### Related Documentation

- [accessibilityColumnHeaderUIElements](../nsaccessibility-c.protocol/accessibilitycolumnheaderuielements.md): The column header accessibility elements for the table or outline.

### Supporting Accessibility

- [accessibilityColumns](accessibilitycolumns%28%29.md): Returns the column accessibility elements for the table.
- [accessibilityLabel](accessibilitylabel%28%29.md): Returns a short description of the table.
- [accessibilityRowHeaderUIElements](accessibilityrowheaderuielements%28%29.md): Returns the row header accessibility elements for the table.
- [accessibilityRows](accessibilityrows%28%29.md): Returns the row accessibility elements for the table.
- [accessibilitySelectedCells](accessibilityselectedcells%28%29.md): The currently selected cells for the table.
- [accessibilitySelectedColumns](accessibilityselectedcolumns%28%29.md): Returns the currently selected columns for the table.
- [accessibilitySelectedRows](accessibilityselectedrows%28%29.md): Returns the currently selected rows for the table.
- [accessibilityVisibleCells](accessibilityvisiblecells%28%29.md): Returns the visible cells for the table.
- [accessibilityVisibleColumns](accessibilityvisiblecolumns%28%29.md): Returns the visible columns for the table.
- [accessibilityVisibleRows](accessibilityvisiblerows%28%29.md): Returns the visible rows for the table.
- [setAccessibilitySelectedRows:](setaccessibilityselectedrows%28__%29.md): Sets the table’s currently selected rows.
- [accessibilityHeaderGroup](accessibilityheadergroup%28%29.md): Deprecated. Returns the header group for the table.
