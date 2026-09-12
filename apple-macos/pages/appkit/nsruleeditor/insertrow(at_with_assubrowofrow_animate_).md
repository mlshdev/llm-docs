> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsruleeditor/insertrow(at:with:assubrowofrow:animate:)](https://developer.apple.com/documentation/appkit/nsruleeditor/insertrow(at:with:assubrowofrow:animate:))

# insertRow(at:with:asSubrowOfRow:animate:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a new row of a given type at a given location.

## Declaration

```swift
func insertRow(at rowIndex: Int, with rowType: NSRuleEditor.RowType, asSubrowOfRow parentRow: Int, animate shouldAnimate: Bool)
```

## Parameters

- `rowIndex`: The index at which the new row should be inserted. `rowIndex` must be greater than `parentRow`, and much specify a row that does not fall amongst the children of some other parent.
- `rowType`: The type of the new row.
- `parentRow`: The index of the row of which the new row is a child. Pass `-1` to indicate that the new row should be a root row.
- `shouldAnimate`: [true](https://developer.apple.com/documentation/swift/true) if creation of the new row should be animated, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Important**

>  If `parentRow` is greater than or equal to `rowIndex`, or if `rowIndex` would fall amongst the children of some other parent, or if the nesting mode forbids this configuration, an `NSInvalidArgumentException` is raised.

## See Also

### Manipulating Rows

- [addRow(\_:)](addrow%28__%29.md): Adds a row to the receiver.
- [removeRow(at:)](removerow%28at_%29.md): Removes the row at a given index.
- [removeRows(at:includeSubrows:)](removerows%28at_includesubrows_%29.md): Removes the rows at given indexes.

# insertRowAtIndex:withType:asSubrowOfRow:animate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds a new row of a given type at a given location.

## Declaration

```objectivec
- (void) insertRowAtIndex:(NSInteger) rowIndex withType:(NSRuleEditorRowType) rowType asSubrowOfRow:(NSInteger) parentRow animate:(BOOL) shouldAnimate;
```

## Parameters

- `rowIndex`: The index at which the new row should be inserted. `rowIndex` must be greater than `parentRow`, and much specify a row that does not fall amongst the children of some other parent.
- `rowType`: The type of the new row.
- `parentRow`: The index of the row of which the new row is a child. Pass `-1` to indicate that the new row should be a root row.
- `shouldAnimate`: [true](https://developer.apple.com/documentation/swift/true) if creation of the new row should be animated, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Important**

>  If `parentRow` is greater than or equal to `rowIndex`, or if `rowIndex` would fall amongst the children of some other parent, or if the nesting mode forbids this configuration, an `NSInvalidArgumentException` is raised.

## See Also

### Manipulating Rows

- [addRow:](addrow%28__%29.md): Adds a row to the receiver.
- [removeRowAtIndex:](removerow%28at_%29.md): Removes the row at a given index.
- [removeRowsAtIndexes:includeSubrows:](removerows%28at_includesubrows_%29.md): Removes the rows at given indexes.
