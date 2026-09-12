> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/acceptsfirstresponder](https://developer.apple.com/documentation/appkit/nsresponder/acceptsfirstresponder)

# acceptsFirstResponder (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the responder accepts first responder status.

## Declaration

```swift
var acceptsFirstResponder: Bool { get }
```

<a id="Discussion"></a>

## Discussion

As first responder, the receiver is the first object in the responder chain to be sent key events and action messages. By default, this property is [false](https://developer.apple.com/documentation/swift/false). Subclasses set this property to [true](https://developer.apple.com/documentation/swift/true) if the receiver accepts first responder status.

## See Also

### Related Documentation

- [needsPanelToBecomeKey](../nsview/needspaneltobecomekey.md): A Boolean value indicating whether the view needs its panel to become the key window before it can handle keyboard input and navigation.
- [NSResponder](../nsresponder.md): An abstract class that forms the basis of event and command processing in AppKit.

### Changing the First Responder

- [becomeFirstResponder()](becomefirstresponder%28%29.md): Notifies the receiver that it’s about to become first responder in its [NSWindow](../nswindow.md).
- [resignFirstResponder()](resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.
- [validateProposedFirstResponder(\_:for:)](validateproposedfirstresponder%28__for_%29.md): Allows controls to determine when they should become first responder.

# acceptsFirstResponder (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the responder accepts first responder status.

## Declaration

```objectivec
@property (readonly) BOOL acceptsFirstResponder;
```

<a id="Discussion"></a>

## Discussion

As first responder, the receiver is the first object in the responder chain to be sent key events and action messages. By default, this property is [false](https://developer.apple.com/documentation/swift/false). Subclasses set this property to [true](https://developer.apple.com/documentation/swift/true) if the receiver accepts first responder status.

## See Also

### Related Documentation

- [needsPanelToBecomeKey](../nsview/needspaneltobecomekey.md): A Boolean value indicating whether the view needs its panel to become the key window before it can handle keyboard input and navigation.
- [NSResponder](../nsresponder.md): An abstract class that forms the basis of event and command processing in AppKit.

### Changing the First Responder

- [becomeFirstResponder](becomefirstresponder%28%29.md): Notifies the receiver that it’s about to become first responder in its [NSWindow](../nswindow.md).
- [resignFirstResponder](resignfirstresponder%28%29.md): Notifies the receiver that it’s been asked to relinquish its status as first responder in its window.
- [validateProposedFirstResponder:forEvent:](validateproposedfirstresponder%28__for_%29.md): Allows controls to determine when they should become first responder.
