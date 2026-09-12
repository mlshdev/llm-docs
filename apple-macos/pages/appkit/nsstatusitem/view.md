> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/view](https://developer.apple.com/documentation/appkit/nsstatusitem/view)

# view (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The custom view the status item displays at its position in the status bar.

## Declaration

```swift
var view: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a custom view overrides the appearance and behavior settings that [NSStatusItem](../nsstatusitem.md) defines. The custom view is responsible for drawing itself and providing its own behaviors, such as processing mouse clicks and sending action messages.

## See Also

### Configuring the status item’s appearance

- [isVisible](isvisible.md): A Boolean value indicating if the menu bar currently displays the status item.
- [length](length.md): The amount of space in the status bar that should be allocated to the status item.
- [squareLength](squarelength.md): A status item length that is equal to the status bar’s thickness.
- [variableLength](variablelength.md): A status item length that dynamically adjusts to the width of its contents.

# view (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The custom view the status item displays at its position in the status bar.

## Declaration

```objectivec
@property (strong, nullable) NSView * view;
```

<a id="Discussion"></a>

## Discussion

Setting a custom view overrides the appearance and behavior settings that [NSStatusItem](../nsstatusitem.md) defines. The custom view is responsible for drawing itself and providing its own behaviors, such as processing mouse clicks and sending action messages.

## See Also

### Configuring the status item’s appearance

- [visible](isvisible.md): A Boolean value indicating if the menu bar currently displays the status item.
- [length](length.md): The amount of space in the status bar that should be allocated to the status item.
- [NSSquareStatusItemLength](squarelength.md): A status item length that is equal to the status bar’s thickness.
- [NSVariableStatusItemLength](variablelength.md): A status item length that dynamically adjusts to the width of its contents.
