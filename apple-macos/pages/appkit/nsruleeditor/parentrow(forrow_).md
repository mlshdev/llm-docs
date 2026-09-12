> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/parentrow(forrow:)](https://developer.apple.com/documentation/appkit/nsruleeditor/parentrow(forrow:))

# parentRow(forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the parent of a given row.

## Declaration

```swift
func parentRow(forRow rowIndex: Int) -> Int
```

## Parameters

- `rowIndex`: The index of a row in the receiver.

  > **Important**

  >  Raises an `NSRangeException` if `rowIndex` is less than `0` or greater than or equal to the number of rows.

<a id="return-value"></a>

## Return Value

The index of the parent of the row at `rowIndex`. If the row at `rowIndex` is a root row, returns `-1`.

## See Also

### Obtaining Row Information

- [numberOfRows](numberofrows.md): The number of rows in the rule editor.
- [row(forDisplayValue:)](row%28fordisplayvalue_%29.md): Returns the index of the row containing a given value.
- [rowType(forRow:)](rowtype%28forrow_%29.md): Returns the type of a given row.
- [NSRuleEditor.RowType](rowtype.md): Specifies a type for row types.
- [subrowIndexes(forRow:)](subrowindexes%28forrow_%29.md): Returns the immediate subrows of a given row.

# parentRowForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the parent of a given row.

## Declaration

```objectivec
- (NSInteger) parentRowForRow:(NSInteger) rowIndex;
```

## Parameters

- `rowIndex`: The index of a row in the receiver.

  > **Important**

  >  Raises an `NSRangeException` if `rowIndex` is less than `0` or greater than or equal to the number of rows.

<a id="return-value"></a>

## Return Value

The index of the parent of the row at `rowIndex`. If the row at `rowIndex` is a root row, returns `-1`.

## See Also

### Obtaining Row Information

- [numberOfRows](numberofrows.md): The number of rows in the rule editor.
- [rowForDisplayValue:](row%28fordisplayvalue_%29.md): Returns the index of the row containing a given value.
- [rowTypeForRow:](rowtype%28forrow_%29.md): Returns the type of a given row.
- [NSRuleEditorRowType](rowtype.md): Specifies a type for row types.
- [subrowIndexesForRow:](subrowindexes%28forrow_%29.md): Returns the immediate subrows of a given row.
