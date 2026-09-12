> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/close()](https://developer.apple.com/documentation/appkit/nsdrawer/close())

# close() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

If the receiver is open, this method closes it.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
func close()
```

<a id="Discussion"></a>

## Discussion

Calling `close` on a closed drawer does nothing. You can get the state of a drawer by sending it [state](state-swift.property.md).

## See Also

### Opening and Closing Drawers

- [close(\_:)](close%28__%29.md): Deprecated. An action method to close the receiver.
- [open()](open%28%29.md): Deprecated. If the receiver is closed, this method opens it.
- [open(\_:)](open%28__%29.md): Deprecated. An action method to open the drawer.
- [open(on:)](open%28on_%29.md): Deprecated. Causes the receiver to open on the specified edge of the parent window.
- [toggle(\_:)](toggle%28__%29.md): Deprecated. Toggles the drawer open or closed.
- [state](state-swift.property.md): Deprecated. The state of the receiver.

# close (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

If the receiver is open, this method closes it.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
- (void) close;
```

<a id="Discussion"></a>

## Discussion

Calling `close` on a closed drawer does nothing. You can get the state of a drawer by sending it [state](state-swift.property.md).

## See Also

### Opening and Closing Drawers

- [close:](close%28__%29.md): Deprecated. An action method to close the receiver.
- [open](open%28%29.md): Deprecated. If the receiver is closed, this method opens it.
- [open:](open%28__%29.md): Deprecated. An action method to open the drawer.
- [openOnEdge:](open%28on_%29.md): Deprecated. Causes the receiver to open on the specified edge of the parent window.
- [toggle:](toggle%28__%29.md): Deprecated. Toggles the drawer open or closed.
- [state](state-swift.property.md): Deprecated. The state of the receiver.
