> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowserdelegate/browser(_:numberofchildrenofitem:)](https://developer.apple.com/documentation/appkit/nsbrowserdelegate/browser(_:numberofchildrenofitem:))

# browser(\_:numberOfChildrenOfItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate for the number of children the given item has.

## Declaration

```swift
@MainActor optional func browser(_ browser: NSBrowser, numberOfChildrenOfItem item: Any?) -> Int
```

## Parameters

- `browser`: The browser.
- `item`: The item that has some number of children.

<a id="return-value"></a>

## Return Value

The number of children.

## See Also

### Getting Browser Information

- [browser(\_:isColumnValid:)](browser%28__iscolumnvalid_%29.md): Returns whether the contents of the specified column are valid.
- [browser(\_:numberOfRowsInColumn:)](browser%28__numberofrowsincolumn_%29.md): Returns the number of rows of data in the specified column.
- [browser(\_:titleOfColumn:)](browser%28__titleofcolumn_%29.md): Asks the delegate for the title to display above the specified column.

# browser:numberOfChildrenOfItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate for the number of children the given item has.

## Declaration

```objectivec
- (NSInteger) browser:(NSBrowser *) browser numberOfChildrenOfItem:(id) item;
```

## Parameters

- `browser`: The browser.
- `item`: The item that has some number of children.

<a id="return-value"></a>

## Return Value

The number of children.

## See Also

### Getting Browser Information

- [browser:isColumnValid:](browser%28__iscolumnvalid_%29.md): Returns whether the contents of the specified column are valid.
- [browser:numberOfRowsInColumn:](browser%28__numberofrowsincolumn_%29.md): Returns the number of rows of data in the specified column.
- [browser:titleOfColumn:](browser%28__titleofcolumn_%29.md): Asks the delegate for the title to display above the specified column.
