> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:titleofcolumn:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:titleofcolumn:))

# browser(\_:titleOfColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for the title to display above the specified column.

## Declaration

```swift
@MainActor optional func browser(_ sender: NSBrowser, titleOfColumn column: Int) -> String?
```

## Parameters

- `sender`: The browser.
- `column`: The index the column to be titled.

<a id="return-value"></a>

## Return Value

The title of the specified column.

## See Also

### Related Documentation

- [setTitle(\_:ofColumn:)](../nsbrowser/settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [title(ofColumn:)](../nsbrowser/title%28ofcolumn_%29.md): Returns the title displayed for the given column.

### Getting Browser Information

- [browser(\_:isColumnValid:)](browser%28__iscolumnvalid_%29.md): Returns whether the contents of the specified column are valid.
- [browser(\_:numberOfRowsInColumn:)](browser%28__numberofrowsincolumn_%29.md): Returns the number of rows of data in the specified column.
- [browser(\_:numberOfChildrenOfItem:)](browser%28__numberofchildrenofitem_%29.md): Asks the delegate for the number of children the given item has.

# browser:titleOfColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate for the title to display above the specified column.

## Declaration

```objectivec
- (NSString *) browser:(NSBrowser *) sender titleOfColumn:(NSInteger) column;
```

## Parameters

- `sender`: The browser.
- `column`: The index the column to be titled.

<a id="return-value"></a>

## Return Value

The title of the specified column.

## See Also

### Related Documentation

- [setTitle:ofColumn:](../nsbrowser/settitle%28__ofcolumn_%29.md): Sets the title of the given column.
- [titleOfColumn:](../nsbrowser/title%28ofcolumn_%29.md): Returns the title displayed for the given column.

### Getting Browser Information

- [browser:isColumnValid:](browser%28__iscolumnvalid_%29.md): Returns whether the contents of the specified column are valid.
- [browser:numberOfRowsInColumn:](browser%28__numberofrowsincolumn_%29.md): Returns the number of rows of data in the specified column.
- [browser:numberOfChildrenOfItem:](browser%28__numberofchildrenofitem_%29.md): Asks the delegate for the number of children the given item has.
