> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:numberofrowsincolumn:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:numberofrowsincolumn:))

# browser(\_:numberOfRowsInColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of rows of data in the specified column.

## Declaration

```swift
@MainActor optional func browser(_ sender: NSBrowser, numberOfRowsInColumn column: Int) -> Int
```

## Parameters

- `sender`: The browser.
- `column`: The index of the column.

<a id="return-value"></a>

## Return Value

The number of rows of data.

<a id="Discussion"></a>

## Discussion

Either this method or [browser(\_:createRowsForColumn:in:)](browser%28__createrowsforcolumn_in_%29.md) must be implemented, but not both.

## See Also

### Related Documentation

- [browser(\_:willDisplayCell:atRow:column:)](browser%28__willdisplaycell_atrow_column_%29.md): Gives the delegate the opportunity to modify the specified cell at the given row and column location before the browser displays it.

### Getting Browser Information

- [browser(\_:isColumnValid:)](browser%28__iscolumnvalid_%29.md): Returns whether the contents of the specified column are valid.
- [browser(\_:numberOfChildrenOfItem:)](browser%28__numberofchildrenofitem_%29.md): Asks the delegate for the number of children the given item has.
- [browser(\_:titleOfColumn:)](browser%28__titleofcolumn_%29.md): Asks the delegate for the title to display above the specified column.

# browser:numberOfRowsInColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the number of rows of data in the specified column.

## Declaration

```objectivec
- (NSInteger) browser:(NSBrowser *) sender numberOfRowsInColumn:(NSInteger) column;
```

## Parameters

- `sender`: The browser.
- `column`: The index of the column.

<a id="return-value"></a>

## Return Value

The number of rows of data.

<a id="Discussion"></a>

## Discussion

Either this method or [browser:createRowsForColumn:inMatrix:](browser%28__createrowsforcolumn_in_%29.md) must be implemented, but not both.

## See Also

### Related Documentation

- [browser:willDisplayCell:atRow:column:](browser%28__willdisplaycell_atrow_column_%29.md): Gives the delegate the opportunity to modify the specified cell at the given row and column location before the browser displays it.

### Getting Browser Information

- [browser:isColumnValid:](browser%28__iscolumnvalid_%29.md): Returns whether the contents of the specified column are valid.
- [browser:numberOfChildrenOfItem:](browser%28__numberofchildrenofitem_%29.md): Asks the delegate for the number of children the given item has.
- [browser:titleOfColumn:](browser%28__titleofcolumn_%29.md): Asks the delegate for the title to display above the specified column.
