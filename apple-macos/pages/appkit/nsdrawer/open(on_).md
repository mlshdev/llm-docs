> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/open(on:)](https://developer.apple.com/documentation/appkit/nsdrawer/open(on:))

# open(on:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Causes the receiver to open on the specified edge of the parent window.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
func open(on edge: NSRectEdge)
```

## Parameters

- `edge`: The edge of the parent window on which to open the receiver. See Constants for a list of edge constants and locations.

## See Also

### Opening and Closing Drawers

- [close()](close%28%29.md): Deprecated. If the receiver is open, this method closes it.
- [close(\_:)](close%28__%29.md): Deprecated. An action method to close the receiver.
- [open()](open%28%29.md): Deprecated. If the receiver is closed, this method opens it.
- [open(\_:)](open%28__%29.md): Deprecated. An action method to open the drawer.
- [toggle(\_:)](toggle%28__%29.md): Deprecated. Toggles the drawer open or closed.
- [state](state-swift.property.md): Deprecated. The state of the receiver.

# openOnEdge: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Causes the receiver to open on the specified edge of the parent window.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
- (void) openOnEdge:(NSRectEdge) edge;
```

## Parameters

- `edge`: The edge of the parent window on which to open the receiver. See Constants for a list of edge constants and locations.

## See Also

### Opening and Closing Drawers

- [close](close%28%29.md): Deprecated. If the receiver is open, this method closes it.
- [close:](close%28__%29.md): Deprecated. An action method to close the receiver.
- [open](open%28%29.md): Deprecated. If the receiver is closed, this method opens it.
- [open:](open%28__%29.md): Deprecated. An action method to open the drawer.
- [toggle:](toggle%28__%29.md): Deprecated. Toggles the drawer open or closed.
- [state](state-swift.property.md): Deprecated. The state of the receiver.
