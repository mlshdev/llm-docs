> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/delaysothermousebuttonevents](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/delaysothermousebuttonevents)

# delaysOtherMouseButtonEvents (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether other mouse button events are delivered only after gesture recognition fails.

## Declaration

```swift
var delaysOtherMouseButtonEvents: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), other mouse button events are delivered to the target view only after gesture recognition fails. Set this property to [true](https://developer.apple.com/documentation/swift/true) to prevent the view from processing events that might be recognized as part of a gesture. Once gesture recognition begins, all types of events are delayed until gesture recognition fails.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Delaying Events

- [delaysPrimaryMouseButtonEvents](delaysprimarymousebuttonevents.md): A Boolean value that indicates whether primary mouse button events are delivered only after gesture recognition fails.
- [delaysSecondaryMouseButtonEvents](delayssecondarymousebuttonevents.md): A Boolean value that indicates whether secondary mouse button events are delivered only after gesture recognition fails.
- [delaysKeyEvents](delayskeyevents.md): A Boolean value that indicates whether key events are delivered only after gesture recognition fails.
- [delaysMagnificationEvents](delaysmagnificationevents.md): A Boolean value that indicates whether magnification events are delivered only after gesture recognition fails.
- [delaysRotationEvents](delaysrotationevents.md): A Boolean value that indicates whether rotation events are delivered only after gesture recognition fails.

# delaysOtherMouseButtonEvents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether other mouse button events are delivered only after gesture recognition fails.

## Declaration

```objectivec
@property BOOL delaysOtherMouseButtonEvents;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), other mouse button events are delivered to the target view only after gesture recognition fails. Set this property to [true](https://developer.apple.com/documentation/swift/true) to prevent the view from processing events that might be recognized as part of a gesture. Once gesture recognition begins, all types of events are delayed until gesture recognition fails.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Delaying Events

- [delaysPrimaryMouseButtonEvents](delaysprimarymousebuttonevents.md): A Boolean value that indicates whether primary mouse button events are delivered only after gesture recognition fails.
- [delaysSecondaryMouseButtonEvents](delayssecondarymousebuttonevents.md): A Boolean value that indicates whether secondary mouse button events are delivered only after gesture recognition fails.
- [delaysKeyEvents](delayskeyevents.md): A Boolean value that indicates whether key events are delivered only after gesture recognition fails.
- [delaysMagnificationEvents](delaysmagnificationevents.md): A Boolean value that indicates whether magnification events are delivered only after gesture recognition fails.
- [delaysRotationEvents](delaysrotationevents.md): A Boolean value that indicates whether rotation events are delivered only after gesture recognition fails.
