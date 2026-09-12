> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/open(_:)](https://developer.apple.com/documentation/appkit/nsdrawer/open(_:))

# open(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

An action method to open the drawer.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
func open(_ sender: Any?)
```

## Parameters

- `sender`: A user interface element, such as a button or menu item, that invokes the action method.

<a id="Discussion"></a>

## Discussion

This method is an action method and likely would not be invoked programatically. Rather, it is an action that is commonly connected in Interface Builder.

## See Also

### Opening and Closing Drawers

- [close()](close%28%29.md): Deprecated. If the receiver is open, this method closes it.
- [close(\_:)](close%28__%29.md): Deprecated. An action method to close the receiver.
- [open()](open%28%29.md): Deprecated. If the receiver is closed, this method opens it.
- [open(on:)](open%28on_%29.md): Deprecated. Causes the receiver to open on the specified edge of the parent window.
- [toggle(\_:)](toggle%28__%29.md): Deprecated. Toggles the drawer open or closed.
- [state](state-swift.property.md): Deprecated. The state of the receiver.

# open: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

An action method to open the drawer.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
- (void) open:(id) sender;
```

## Parameters

- `sender`: A user interface element, such as a button or menu item, that invokes the action method.

<a id="Discussion"></a>

## Discussion

This method is an action method and likely would not be invoked programatically. Rather, it is an action that is commonly connected in Interface Builder.

## See Also

### Opening and Closing Drawers

- [close](close%28%29.md): Deprecated. If the receiver is open, this method closes it.
- [close:](close%28__%29.md): Deprecated. An action method to close the receiver.
- [open](open%28%29.md): Deprecated. If the receiver is closed, this method opens it.
- [openOnEdge:](open%28on_%29.md): Deprecated. Causes the receiver to open on the specified edge of the parent window.
- [toggle:](toggle%28__%29.md): Deprecated. Toggles the drawer open or closed.
- [state](state-swift.property.md): Deprecated. The state of the receiver.
