> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/acceptsfirstresponder](https://developer.apple.com/documentation/appkit/nscell/acceptsfirstresponder)

# acceptsFirstResponder (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell accepts first responder status.

## Declaration

```swift
var acceptsFirstResponder: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell is able to become the first responder. The default value of this property is [true](https://developer.apple.com/documentation/swift/true) when the cell is enabled. Subclasses may override this method to return a different value.

## See Also

### Respond to Keyboard Events

- [showsFirstResponder](showsfirstresponder.md): A Boolean value indicating whether the cell provides a visual indication that it is the first responder.
- [refusesFirstResponder](refusesfirstresponder.md): A Boolean value indicating whether the cell refuses the first responder status.
- [performClick(\_:)](performclick%28__%29.md): Simulates a single mouse click on the receiver.

# acceptsFirstResponder (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the cell accepts first responder status.

## Declaration

```objectivec
@property (readonly) BOOL acceptsFirstResponder;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell is able to become the first responder. The default value of this property is [true](https://developer.apple.com/documentation/swift/true) when the cell is enabled. Subclasses may override this method to return a different value.

## See Also

### Respond to Keyboard Events

- [showsFirstResponder](showsfirstresponder.md): A Boolean value indicating whether the cell provides a visual indication that it is the first responder.
- [refusesFirstResponder](refusesfirstresponder.md): A Boolean value indicating whether the cell refuses the first responder status.
- [performClick:](performclick%28__%29.md): Simulates a single mouse click on the receiver.
