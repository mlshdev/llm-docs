> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/performclose(_:)](https://developer.apple.com/documentation/appkit/nspopover/performclose(_:))

# performClose(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Attempts to close the popover.

## Declaration

```swift
@IBAction func performClose(_ sender: Any?)
```

## Parameters

- `sender`: The sender of the action message.

<a id="Discussion"></a>

## Discussion

The popover will not be closed if it has a delegate and the delegate implements the returns [popoverShouldClose(\_:)](../nspopoverdelegate/popovershouldclose%28__%29.md) method returning [false](https://developer.apple.com/documentation/swift/false), or if a subclass of the NSPopover class implements `popoverShouldClose:` and returns [false](https://developer.apple.com/documentation/swift/false)).

The operation will fail if the popover is displaying a nested popover or if it has a child window. A window will attempt to close its popovers when it receives a [performClose(\_:)](../nswindow/performclose%28__%29.md) message.

The popover animates out when closed unless the [animates](animates.md) property is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Closing a Popover

- [close()](close%28%29.md): Forces the popover to close without consulting its delegate.

# performClose: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Attempts to close the popover.

## Declaration

```objectivec
- (void) performClose:(id) sender;
```

## Parameters

- `sender`: The sender of the action message.

<a id="Discussion"></a>

## Discussion

The popover will not be closed if it has a delegate and the delegate implements the returns [popoverShouldClose:](../nspopoverdelegate/popovershouldclose%28__%29.md) method returning [false](https://developer.apple.com/documentation/swift/false), or if a subclass of the NSPopover class implements `popoverShouldClose:` and returns [false](https://developer.apple.com/documentation/swift/false)).

The operation will fail if the popover is displaying a nested popover or if it has a child window. A window will attempt to close its popovers when it receives a [performClose:](../nswindow/performclose%28__%29.md) message.

The popover animates out when closed unless the [animates](animates.md) property is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Closing a Popover

- [close](close%28%29.md): Forces the popover to close without consulting its delegate.
