> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/requiresexclusivetouchtype](https://developer.apple.com/documentation/uikit/uigesturerecognizer/requiresexclusivetouchtype)

# requiresExclusiveTouchType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 13.1+ · tvOS 9.1+ · visionOS 1.0+

A Boolean value that indicates whether the gesture recognizer considers touches of different types simultaneously.

## Declaration

```swift
var requiresExclusiveTouchType: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the gesture recognizer automatically ignores new touches whose type doesn’t match the type of the initial touch. When the value is [false](https://developer.apple.com/documentation/swift/false), the gesture recognizer receives all touches whose types are listed in the [allowedTouchTypes](allowedtouchtypes.md) property.

## See Also

### Recognizing different gestures

- [allowedPressTypes](allowedpresstypes.md): An array of press types used to distinguish the type of button press.
- [allowedTouchTypes](allowedtouchtypes.md): An array of touch types used to distinguish type of touches.

# requiresExclusiveTouchType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 13.1+ · tvOS 9.1+ · visionOS 1.0+

A Boolean value that indicates whether the gesture recognizer considers touches of different types simultaneously.

## Declaration

```objectivec
@property (nonatomic) BOOL requiresExclusiveTouchType;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the gesture recognizer automatically ignores new touches whose type doesn’t match the type of the initial touch. When the value is [false](https://developer.apple.com/documentation/swift/false), the gesture recognizer receives all touches whose types are listed in the [allowedTouchTypes](allowedtouchtypes.md) property.

## See Also

### Recognizing different gestures

- [allowedPressTypes](allowedpresstypes.md): An array of press types used to distinguish the type of button press.
- [allowedTouchTypes](allowedtouchtypes.md): An array of touch types used to distinguish type of touches.
