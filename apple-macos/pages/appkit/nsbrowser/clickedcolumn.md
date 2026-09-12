> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/clickedcolumn](https://developer.apple.com/documentation/appkit/nsbrowser/clickedcolumn)

# clickedColumn (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The column number of the cell that the user clicked to display a context menu.

## Declaration

```swift
var clickedColumn: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `-1` if no context menu is active.

## See Also

### Handling Mouse-Click Events

- [doClick(\_:)](doclick%28__%29.md): Responds to (single) mouse clicks in a column of the browser.
- [doDoubleClick(\_:)](dodoubleclick%28__%29.md): Responds to double clicks in a column of the browser.
- [clickedRow](clickedrow.md): The row number of the cell that the user clicked to display a context menu.

# clickedColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The column number of the cell that the user clicked to display a context menu.

## Declaration

```objectivec
@property (readonly) NSInteger clickedColumn;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `-1` if no context menu is active.

## See Also

### Handling Mouse-Click Events

- [doClick:](doclick%28__%29.md): Responds to (single) mouse clicks in a column of the browser.
- [doDoubleClick:](dodoubleclick%28__%29.md): Responds to double clicks in a column of the browser.
- [clickedRow](clickedrow.md): The row number of the cell that the user clicked to display a context menu.
