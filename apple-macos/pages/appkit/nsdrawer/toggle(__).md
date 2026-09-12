> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawer/toggle(_:)](https://developer.apple.com/documentation/appkit/nsdrawer/toggle(_:))

# toggle(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Toggles the drawer open or closed.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```swift
func toggle(_ sender: Any?)
```

## Parameters

- `sender`: The sender of the message.

<a id="Discussion"></a>

## Discussion

If the receiver is closed, or in the process of either opening or closing, it is opened. Otherwise, the drawer is closed.

## See Also

### Opening and Closing Drawers

- [close()](close%28%29.md): Deprecated. If the receiver is open, this method closes it.
- [close(\_:)](close%28__%29.md): Deprecated. An action method to close the receiver.
- [open()](open%28%29.md): Deprecated. If the receiver is closed, this method opens it.
- [open(\_:)](open%28__%29.md): Deprecated. An action method to open the drawer.
- [open(on:)](open%28on_%29.md): Deprecated. Causes the receiver to open on the specified edge of the parent window.
- [state](state-swift.property.md): Deprecated. The state of the receiver.

# toggle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Toggles the drawer open or closed.

> Drawers are deprecated; consider using NSSplitViewController

## Declaration

```objectivec
- (void) toggle:(id) sender;
```

## Parameters

- `sender`: The sender of the message.

<a id="Discussion"></a>

## Discussion

If the receiver is closed, or in the process of either opening or closing, it is opened. Otherwise, the drawer is closed.

## See Also

### Opening and Closing Drawers

- [close](close%28%29.md): Deprecated. If the receiver is open, this method closes it.
- [close:](close%28__%29.md): Deprecated. An action method to close the receiver.
- [open](open%28%29.md): Deprecated. If the receiver is closed, this method opens it.
- [open:](open%28__%29.md): Deprecated. An action method to open the drawer.
- [openOnEdge:](open%28on_%29.md): Deprecated. Causes the receiver to open on the specified edge of the parent window.
- [state](state-swift.property.md): Deprecated. The state of the receiver.
