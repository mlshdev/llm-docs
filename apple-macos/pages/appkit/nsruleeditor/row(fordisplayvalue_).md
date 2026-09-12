> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/row(fordisplayvalue:)](https://developer.apple.com/documentation/appkit/nsruleeditor/row(fordisplayvalue:))

# row(forDisplayValue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the row containing a given value.

## Declaration

```swift
func row(forDisplayValue displayValue: Any) -> Int
```

## Parameters

- `displayValue`: The display value (string, view, or menu item) of an item in the receiver. This value must not be `nil`.

  > **Important**

  >  Raises `NSInvalidArgumentException` if `displayValue` is `nil`.

<a id="return-value"></a>

## Return Value

The index of the row containing `displayValue`, or `NSNotFound`.

<a id="Discussion"></a>

## Discussion

This method searches each row via pointer equality for the given display value, which may be present as an alternative in a popup menu for that row.

## See Also

### Obtaining Row Information

- [numberOfRows](numberofrows.md): The number of rows in the rule editor.
- [parentRow(forRow:)](parentrow%28forrow_%29.md): Returns the index of the parent of a given row.
- [rowType(forRow:)](rowtype%28forrow_%29.md): Returns the type of a given row.
- [NSRuleEditor.RowType](rowtype.md): Specifies a type for row types.
- [subrowIndexes(forRow:)](subrowindexes%28forrow_%29.md): Returns the immediate subrows of a given row.

# rowForDisplayValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the index of the row containing a given value.

## Declaration

```objectivec
- (NSInteger) rowForDisplayValue:(id) displayValue;
```

## Parameters

- `displayValue`: The display value (string, view, or menu item) of an item in the receiver. This value must not be `nil`.

  > **Important**

  >  Raises `NSInvalidArgumentException` if `displayValue` is `nil`.

<a id="return-value"></a>

## Return Value

The index of the row containing `displayValue`, or `NSNotFound`.

<a id="Discussion"></a>

## Discussion

This method searches each row via pointer equality for the given display value, which may be present as an alternative in a popup menu for that row.

## See Also

### Obtaining Row Information

- [numberOfRows](numberofrows.md): The number of rows in the rule editor.
- [parentRowForRow:](parentrow%28forrow_%29.md): Returns the index of the parent of a given row.
- [rowTypeForRow:](rowtype%28forrow_%29.md): Returns the type of a given row.
- [NSRuleEditorRowType](rowtype.md): Specifies a type for row types.
- [subrowIndexesForRow:](subrowindexes%28forrow_%29.md): Returns the immediate subrows of a given row.
