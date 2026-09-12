> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/rowtype(forrow:)](https://developer.apple.com/documentation/appkit/nsruleeditor/rowtype(forrow:))

# rowType(forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the type of a given row.

## Declaration

```swift
func rowType(forRow rowIndex: Int) -> NSRuleEditor.RowType
```

## Parameters

- `rowIndex`: The index of a row in the receiver.

  > **Important**

  >  Raises an `NSRangeException` if `rowIndex` is less than `0` or greater than or equal to the number of rows.

<a id="return-value"></a>

## Return Value

The type of the row at `rowIndex`.

## See Also

### Obtaining Row Information

- [numberOfRows](numberofrows.md): The number of rows in the rule editor.
- [parentRow(forRow:)](parentrow%28forrow_%29.md): Returns the index of the parent of a given row.
- [row(forDisplayValue:)](row%28fordisplayvalue_%29.md): Returns the index of the row containing a given value.
- [NSRuleEditor.RowType](rowtype.md): Specifies a type for row types.
- [subrowIndexes(forRow:)](subrowindexes%28forrow_%29.md): Returns the immediate subrows of a given row.

# rowTypeForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the type of a given row.

## Declaration

```objectivec
- (NSRuleEditorRowType) rowTypeForRow:(NSInteger) rowIndex;
```

## Parameters

- `rowIndex`: The index of a row in the receiver.

  > **Important**

  >  Raises an `NSRangeException` if `rowIndex` is less than `0` or greater than or equal to the number of rows.

<a id="return-value"></a>

## Return Value

The type of the row at `rowIndex`.

## See Also

### Obtaining Row Information

- [numberOfRows](numberofrows.md): The number of rows in the rule editor.
- [parentRowForRow:](parentrow%28forrow_%29.md): Returns the index of the parent of a given row.
- [rowForDisplayValue:](row%28fordisplayvalue_%29.md): Returns the index of the row containing a given value.
- [NSRuleEditorRowType](rowtype.md): Specifies a type for row types.
- [subrowIndexesForRow:](subrowindexes%28forrow_%29.md): Returns the immediate subrows of a given row.
