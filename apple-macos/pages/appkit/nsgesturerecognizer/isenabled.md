> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/isenabled](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/isenabled)

# isEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the gesture recognizer is able to handle events.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the gesture recognizer receives events and uses them to determine when its gesture is performed. When the value is [false](https://developer.apple.com/documentation/swift/false), the gesture recognizer does not receive events. Changing the value from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false) while the gesture recognizer is in the process of recognizing a gesture changes the state of the gesture recognizer to [NSGestureRecognizer.State.cancelled](state-swift.enum/cancelled.md).

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the Recognizer’s State

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [view](view.md): The view to which the gesture recognizer is attached.

# enabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the gesture recognizer is able to handle events.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the gesture recognizer receives events and uses them to determine when its gesture is performed. When the value is [false](https://developer.apple.com/documentation/swift/false), the gesture recognizer does not receive events. Changing the value from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false) while the gesture recognizer is in the process of recognizing a gesture changes the state of the gesture recognizer to [NSGestureRecognizerStateCancelled](state-swift.enum/cancelled.md).

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing the Recognizer’s State

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [view](view.md): The view to which the gesture recognizer is attached.
