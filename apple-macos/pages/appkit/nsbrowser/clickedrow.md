> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/clickedrow](https://developer.apple.com/documentation/appkit/nsbrowser/clickedrow)

# clickedRow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The row number of the cell that the user clicked to display a context menu.

## Declaration

```swift
var clickedRow: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `-1` if no context menu is active.

## See Also

### Handling Mouse-Click Events

- [doClick(\_:)](doclick%28__%29.md): Responds to (single) mouse clicks in a column of the browser.
- [doDoubleClick(\_:)](dodoubleclick%28__%29.md): Responds to double clicks in a column of the browser.
- [clickedColumn](clickedcolumn.md): The column number of the cell that the user clicked to display a context menu.

# clickedRow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The row number of the cell that the user clicked to display a context menu.

## Declaration

```objectivec
@property (readonly) NSInteger clickedRow;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `-1` if no context menu is active.

## See Also

### Handling Mouse-Click Events

- [doClick:](doclick%28__%29.md): Responds to (single) mouse clicks in a column of the browser.
- [doDoubleClick:](dodoubleclick%28__%29.md): Responds to double clicks in a column of the browser.
- [clickedColumn](clickedcolumn.md): The column number of the cell that the user clicked to display a context menu.
