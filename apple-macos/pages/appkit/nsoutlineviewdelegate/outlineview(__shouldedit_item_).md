> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldedit:item:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldedit:item:))

# outlineView(\_:shouldEdit:item:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the outline view should allow editing of a given item in a given table column.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, shouldEdit tableColumn: NSTableColumn?, item: Any) -> Bool
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: The table column.
- `item`: The item.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit `outlineView` to edit the cell specified by `tableColumn` and `item`, [false](https://developer.apple.com/documentation/swift/false) to deny permission.

<a id="Discussion"></a>

## Discussion

If this method returns [true](https://developer.apple.com/documentation/swift/true), the cell may still not be editable—for example, if you have set up a custom `NSTextFieldCell` as a data cell, it must return [true](https://developer.apple.com/documentation/swift/true) for `isEditable` to allow editing.

The delegate can implement this method to disallow editing of specific cells.

## See Also

### Related Documentation

- [outlineView(\_:setObjectValue:for:byItem:)](../nsoutlineviewdatasource/outlineview%28__setobjectvalue_for_byitem_%29.md): Set the data object for a given item in a given column.

# outlineView:shouldEditTableColumn:item: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the outline view should allow editing of a given item in a given table column.

## Declaration

```objectivec
- (BOOL) outlineView:(NSOutlineView *) outlineView shouldEditTableColumn:(NSTableColumn *) tableColumn item:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `tableColumn`: The table column.
- `item`: The item.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to permit `outlineView` to edit the cell specified by `tableColumn` and `item`, [false](https://developer.apple.com/documentation/swift/false) to deny permission.

<a id="Discussion"></a>

## Discussion

If this method returns [true](https://developer.apple.com/documentation/swift/true), the cell may still not be editable—for example, if you have set up a custom `NSTextFieldCell` as a data cell, it must return [true](https://developer.apple.com/documentation/swift/true) for `isEditable` to allow editing.

The delegate can implement this method to disallow editing of specific cells.

## See Also

### Related Documentation

- [outlineView:setObjectValue:forTableColumn:byItem:](../nsoutlineviewdatasource/outlineview%28__setobjectvalue_for_byitem_%29.md): Set the data object for a given item in a given column.
