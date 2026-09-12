> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/subrowindexes(forrow:)](https://developer.apple.com/documentation/appkit/nsruleeditor/subrowindexes(forrow:))

# subrowIndexes(forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the immediate subrows of a given row.

## Declaration

```swift
func subrowIndexes(forRow rowIndex: Int) -> IndexSet
```

## Parameters

- `rowIndex`: The index of a row in the receiver, or `-1` to get the top-level rows.

  > **Important**

  >  Raises an `NSRangeException` if `rowIndex` is less than `-1` or greater than or equal to the number of rows.

<a id="return-value"></a>

## Return Value

The immediate subrows of the row at `rowIndex`.

<a id="Discussion"></a>

## Discussion

Rows are numbered starting at `0`.

## See Also

### Obtaining Row Information

- [numberOfRows](numberofrows.md): The number of rows in the rule editor.
- [parentRow(forRow:)](parentrow%28forrow_%29.md): Returns the index of the parent of a given row.
- [row(forDisplayValue:)](row%28fordisplayvalue_%29.md): Returns the index of the row containing a given value.
- [rowType(forRow:)](rowtype%28forrow_%29.md): Returns the type of a given row.
- [NSRuleEditor.RowType](rowtype.md): Specifies a type for row types.

# subrowIndexesForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the immediate subrows of a given row.

## Declaration

```objectivec
- (NSIndexSet *) subrowIndexesForRow:(NSInteger) rowIndex;
```

## Parameters

- `rowIndex`: The index of a row in the receiver, or `-1` to get the top-level rows.

  > **Important**

  >  Raises an `NSRangeException` if `rowIndex` is less than `-1` or greater than or equal to the number of rows.

<a id="return-value"></a>

## Return Value

The immediate subrows of the row at `rowIndex`.

<a id="Discussion"></a>

## Discussion

Rows are numbered starting at `0`.

## See Also

### Obtaining Row Information

- [numberOfRows](numberofrows.md): The number of rows in the rule editor.
- [parentRowForRow:](parentrow%28forrow_%29.md): Returns the index of the parent of a given row.
- [rowForDisplayValue:](row%28fordisplayvalue_%29.md): Returns the index of the row containing a given value.
- [rowTypeForRow:](rowtype%28forrow_%29.md): Returns the type of a given row.
- [NSRuleEditorRowType](rowtype.md): Specifies a type for row types.
