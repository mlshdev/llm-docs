> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/open()](https://developer.apple.com/documentation/appkit/nsdrawer/open())

# open() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

If the receiver is closed, this method opens it.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
func open()
```

<a id="Discussion"></a>

## Discussion

Calling `open` on an open drawer does nothing. You can get the state of a drawer by sending it [state](state-swift.property.md). If an edge is not specified, an attempt will be made to choose an edge based on the space available to display the drawer onscreen. If you need to ensure that a drawer opens on a particular edge, use [open(on:)](open%28on_%29.md).

## See Also

### Opening and Closing Drawers

- [close()](close%28%29.md): Deprecated. If the receiver is open, this method closes it.
- [close(\_:)](close%28__%29.md): Deprecated. An action method to close the receiver.
- [open(\_:)](open%28__%29.md): Deprecated. An action method to open the drawer.
- [open(on:)](open%28on_%29.md): Deprecated. Causes the receiver to open on the specified edge of the parent window.
- [toggle(\_:)](toggle%28__%29.md): Deprecated. Toggles the drawer open or closed.
- [state](state-swift.property.md): Deprecated. The state of the receiver.

# open (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

If the receiver is closed, this method opens it.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
- (void) open;
```

<a id="Discussion"></a>

## Discussion

Calling `open` on an open drawer does nothing. You can get the state of a drawer by sending it [state](state-swift.property.md). If an edge is not specified, an attempt will be made to choose an edge based on the space available to display the drawer onscreen. If you need to ensure that a drawer opens on a particular edge, use [openOnEdge:](open%28on_%29.md).

## See Also

### Opening and Closing Drawers

- [close](close%28%29.md): Deprecated. If the receiver is open, this method closes it.
- [close:](close%28__%29.md): Deprecated. An action method to close the receiver.
- [open:](open%28__%29.md): Deprecated. An action method to open the drawer.
- [openOnEdge:](open%28on_%29.md): Deprecated. Causes the receiver to open on the specified edge of the parent window.
- [toggle:](toggle%28__%29.md): Deprecated. Toggles the drawer open or closed.
- [state](state-swift.property.md): Deprecated. The state of the receiver.
