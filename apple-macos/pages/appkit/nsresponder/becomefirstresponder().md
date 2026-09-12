> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/becomefirstresponder()](https://developer.apple.com/documentation/appkit/nsresponder/becomefirstresponder())

# becomeFirstResponder() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies the receiver that it’s about to become first responder in its [NSWindow](../nswindow.md).

## Declaration

```swift
func becomeFirstResponder() -> Bool
```

<a id="Discussion"></a>

## Discussion

The default implementation returns [true](https://developer.apple.com/documentation/swift/true), accepting first responder status. Subclasses can override this method to update state or perform some action such as highlighting the selection, or to return [false](https://developer.apple.com/documentation/swift/false), refusing first responder status.

Use the `NSWindow` [makeFirstResponder(\_:)](../nswindow/makefirstresponder%28__%29.md) method, not this method, to make an object the first responder. Never invoke this method directly.

## See Also

### Changing the First Responder

- [acceptsFirstResponder](acceptsfirstresponder.md): A Boolean value that indicates whether the responder accepts first responder status.
- [resignFirstResponder()](resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.
- [validateProposedFirstResponder(\_:for:)](validateproposedfirstresponder%28__for_%29.md): Allows controls to determine when they should become first responder.

# becomeFirstResponder (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies the receiver that it’s about to become first responder in its [NSWindow](../nswindow.md).

## Declaration

```objectivec
- (BOOL) becomeFirstResponder;
```

<a id="Discussion"></a>

## Discussion

The default implementation returns [true](https://developer.apple.com/documentation/swift/true), accepting first responder status. Subclasses can override this method to update state or perform some action such as highlighting the selection, or to return [false](https://developer.apple.com/documentation/swift/false), refusing first responder status.

Use the `NSWindow` [makeFirstResponder:](../nswindow/makefirstresponder%28__%29.md) method, not this method, to make an object the first responder. Never invoke this method directly.

## See Also

### Changing the First Responder

- [acceptsFirstResponder](acceptsfirstresponder.md): A Boolean value that indicates whether the responder accepts first responder status.
- [resignFirstResponder](resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.
- [validateProposedFirstResponder:forEvent:](validateproposedfirstresponder%28__for_%29.md): Allows controls to determine when they should become first responder.
