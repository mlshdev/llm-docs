> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/showsfirstresponder](https://developer.apple.com/documentation/appkit/nscell/showsfirstresponder)

# showsFirstResponder (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell provides a visual indication that it is the first responder.

## Declaration

```swift
var showsFirstResponder: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the cell becomes the first responder, the cell performs additional drawing to indicate that it is the first responder. The `NSCell` class itself does not draw a first-responder indicator. Subclasses may use the value in this property to determine whether or not they should draw one.

## See Also

### Respond to Keyboard Events

- [acceptsFirstResponder](acceptsfirstresponder.md): A Boolean value indicating whether the cell accepts first responder status.
- [refusesFirstResponder](refusesfirstresponder.md): A Boolean value indicating whether the cell refuses the first responder status.
- [performClick(\_:)](performclick%28__%29.md): Simulates a single mouse click on the receiver.

# showsFirstResponder (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell provides a visual indication that it is the first responder.

## Declaration

```objectivec
@property BOOL showsFirstResponder;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the cell becomes the first responder, the cell performs additional drawing to indicate that it is the first responder. The `NSCell` class itself does not draw a first-responder indicator. Subclasses may use the value in this property to determine whether or not they should draw one.

## See Also

### Respond to Keyboard Events

- [acceptsFirstResponder](acceptsfirstresponder.md): A Boolean value indicating whether the cell accepts first responder status.
- [refusesFirstResponder](refusesfirstresponder.md): A Boolean value indicating whether the cell refuses the first responder status.
- [performClick:](performclick%28__%29.md): Simulates a single mouse click on the receiver.
