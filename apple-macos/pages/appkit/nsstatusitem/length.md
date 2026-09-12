> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/length](https://developer.apple.com/documentation/appkit/nsstatusitem/length)

# length (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The amount of space in the status bar that should be allocated to the status item.

## Declaration

```swift
var length: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If the status bar is horizontal, the value of this property is the width of the status item. In addition to a fixed length, this value can be NSSquareStatusItemLength or NSVariableStatusItemLength (see `NSStatusBar` Constants) to allow the status bar to allocate (and adjust) the space according to either the status bar’s thickness or the status item’s true size.

## See Also

### Configuring the status item’s appearance

- [isVisible](isvisible.md): A Boolean value indicating if the menu bar currently displays the status item.
- [squareLength](squarelength.md): A status item length that is equal to the status bar’s thickness.
- [variableLength](variablelength.md): A status item length that dynamically adjusts to the width of its contents.
- [view](view.md): The custom view the status item displays at its position in the status bar.

# length (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The amount of space in the status bar that should be allocated to the status item.

## Declaration

```objectivec
@property CGFloat length;
```

<a id="Discussion"></a>

## Discussion

If the status bar is horizontal, the value of this property is the width of the status item. In addition to a fixed length, this value can be NSSquareStatusItemLength or NSVariableStatusItemLength (see `NSStatusBar` Constants) to allow the status bar to allocate (and adjust) the space according to either the status bar’s thickness or the status item’s true size.

## See Also

### Configuring the status item’s appearance

- [visible](isvisible.md): A Boolean value indicating if the menu bar currently displays the status item.
- [NSSquareStatusItemLength](squarelength.md): A status item length that is equal to the status bar’s thickness.
- [NSVariableStatusItemLength](variablelength.md): A status item length that dynamically adjusts to the width of its contents.
- [view](view.md): The custom view the status item displays at its position in the status bar.
