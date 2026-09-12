> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/close()](https://developer.apple.com/documentation/appkit/nspopover/close())

# close() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Forces the popover to close without consulting its delegate.

## Declaration

```swift
func close()
```

<a id="Discussion"></a>

## Discussion

Any popovers nested within the popovers will also receive a [close()](close%28%29.md) message. When a window is closed in response to the [close()](../nswindow/close%28%29.md) message being sent, all of its popovers are closed. The popover animates out when closed unless the [animates](animates.md) property is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Closing a Popover

- [performClose(\_:)](performclose%28__%29.md): Attempts to close the popover.

# close (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Forces the popover to close without consulting its delegate.

## Declaration

```objectivec
- (void) close;
```

<a id="Discussion"></a>

## Discussion

Any popovers nested within the popovers will also receive a [close](close%28%29.md) message. When a window is closed in response to the [close](../nswindow/close%28%29.md) message being sent, all of its popovers are closed. The popover animates out when closed unless the [animates](animates.md) property is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Closing a Popover

- [performClose:](performclose%28__%29.md): Attempts to close the popover.
