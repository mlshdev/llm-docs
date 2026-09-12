> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:iscolumnvalid:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:iscolumnvalid:))

# browser(\_:isColumnValid:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the contents of the specified column are valid.

## Declaration

```swift
@MainActor optional func browser(_ sender: NSBrowser, isColumnValid column: Int) -> Bool
```

## Parameters

- `sender`: The browser containing the column to validate.
- `column`: The index of the column to validate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the column’s contents are valid; otherwise, [false](https://developer.apple.com/documentation/swift/false). If [false](https://developer.apple.com/documentation/swift/false) is returned, `sender` reloads the column.

<a id="Discussion"></a>

## Discussion

This method is invoked in response to the [validateVisibleColumns()](../nsbrowser/validatevisiblecolumns%28%29.md)method of [NSBrowser](../nsbrowser.md) being sent to `sender`.

## See Also

### Getting Browser Information

- [browser(\_:numberOfRowsInColumn:)](browser%28__numberofrowsincolumn_%29.md): Returns the number of rows of data in the specified column.
- [browser(\_:numberOfChildrenOfItem:)](browser%28__numberofchildrenofitem_%29.md): Asks the delegate for the number of children the given item has.
- [browser(\_:titleOfColumn:)](browser%28__titleofcolumn_%29.md): Asks the delegate for the title to display above the specified column.

# browser:isColumnValid: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the contents of the specified column are valid.

## Declaration

```objectivec
- (BOOL) browser:(NSBrowser *) sender isColumnValid:(NSInteger) column;
```

## Parameters

- `sender`: The browser containing the column to validate.
- `column`: The index of the column to validate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the column’s contents are valid; otherwise, [false](https://developer.apple.com/documentation/swift/false). If [false](https://developer.apple.com/documentation/swift/false) is returned, `sender` reloads the column.

<a id="Discussion"></a>

## Discussion

This method is invoked in response to the [validateVisibleColumns](../nsbrowser/validatevisiblecolumns%28%29.md)method of [NSBrowser](../nsbrowser.md) being sent to `sender`.

## See Also

### Getting Browser Information

- [browser:numberOfRowsInColumn:](browser%28__numberofrowsincolumn_%29.md): Returns the number of rows of data in the specified column.
- [browser:numberOfChildrenOfItem:](browser%28__numberofchildrenofitem_%29.md): Asks the delegate for the number of children the given item has.
- [browser:titleOfColumn:](browser%28__titleofcolumn_%29.md): Asks the delegate for the title to display above the specified column.
