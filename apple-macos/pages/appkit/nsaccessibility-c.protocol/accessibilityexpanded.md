> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityexpanded](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityexpanded)

# accessibilityExpanded

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that determines whether the accessibility element is in an expanded state.

## Declaration

```objectivec
@property (getter=isAccessibilityExpanded) BOOL accessibilityExpanded;
```

<a id="Discussion"></a>

## Discussion

Use this property on elements that can expand to reveal additional information, such as outline rows and combo boxes.

## See Also

### Configuring table and outline views

- [accessibilityColumnHeaderUIElements](accessibilitycolumnheaderuielements.md): The column header accessibility elements for the table or outline.
- [accessibilityColumns](accessibilitycolumns.md): The column accessibility elements for the table or outline.
- [accessibilityColumnTitles](accessibilitycolumntitles.md): The column titles for the accessibility element.
- [accessibilityHeader](accessibilityheader.md): The header for the table view.
- [accessibilityIndex](accessibilityindex.md): The index of the row or column that the accessibility element represents.
- [accessibilityRowHeaderUIElements](accessibilityrowheaderuielements.md): The row header accessibility elements for the table or outline.
- [accessibilityRows](accessibilityrows.md): The row accessibility elements for the table or outline.
- [accessibilitySelectedColumns](accessibilityselectedcolumns.md): The currently selected columns for the table or outline.
- [accessibilitySelectedRows](accessibilityselectedrows.md): The currently selected rows for the table or outline.
- [accessibilitySortDirection](accessibilitysortdirection.md): The accessibility element’s sort direction.
- [accessibilityVisibleColumns](accessibilityvisiblecolumns.md): The visible columns for the table or outline.
- [accessibilityVisibleRows](accessibilityvisiblerows.md): The visible rows for the table or outline.
- [NSAccessibilitySortDirection](../nsaccessibilitysortdirection.md): Values that indicate the sort direction of a column.
