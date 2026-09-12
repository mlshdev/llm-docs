> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/refusesfirstresponder](https://developer.apple.com/documentation/appkit/nscell/refusesfirstresponder)

# refusesFirstResponder (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell refuses the first responder status.

## Declaration

```swift
var refusesFirstResponder: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to prevent the cell from becoming the first responder. To determine whether the cell can become first responder right now, get the value of the [acceptsFirstResponder](acceptsfirstresponder.md) property.

## See Also

### Respond to Keyboard Events

- [acceptsFirstResponder](acceptsfirstresponder.md): A Boolean value indicating whether the cell accepts first responder status.
- [showsFirstResponder](showsfirstresponder.md): A Boolean value indicating whether the cell provides a visual indication that it is the first responder.
- [performClick(\_:)](performclick%28__%29.md): Simulates a single mouse click on the receiver.

# refusesFirstResponder (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell refuses the first responder status.

## Declaration

```objectivec
@property BOOL refusesFirstResponder;
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to prevent the cell from becoming the first responder. To determine whether the cell can become first responder right now, get the value of the [acceptsFirstResponder](acceptsfirstresponder.md) property.

## See Also

### Respond to Keyboard Events

- [acceptsFirstResponder](acceptsfirstresponder.md): A Boolean value indicating whether the cell accepts first responder status.
- [showsFirstResponder](showsfirstresponder.md): A Boolean value indicating whether the cell provides a visual indication that it is the first responder.
- [performClick:](performclick%28__%29.md): Simulates a single mouse click on the receiver.
