> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uigesturerecognizer/allowedtouchtypes

# allowedTouchTypes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An array of touch types used to distinguish type of touches.

## Declaration

```swift
var allowedTouchTypes: [NSNumber] { get set }
```

<a id="Discussion"></a>

## Discussion

This property is an array of touch types that recognizes whether the touch is direct or indirect. For a list of all possible touch types, see [UITouch.TouchType](../uitouch/touchtype.md) enumeration in [UITouch](../uitouch.md). The default value of this property contains all touch types.

## See Also

### Recognizing different gestures

- [allowedPressTypes](allowedpresstypes.md): An array of press types used to distinguish the type of button press.
- [requiresExclusiveTouchType](requiresexclusivetouchtype.md): A Boolean value that indicates whether the gesture recognizer considers touches of different types simultaneously.

# allowedTouchTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An array of touch types used to distinguish type of touches.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSNumber *> * allowedTouchTypes;
```

<a id="Discussion"></a>

## Discussion

This property is an array of touch types that recognizes whether the touch is direct or indirect. For a list of all possible touch types, see [UITouchType](../uitouch/touchtype.md) enumeration in [UITouch](../uitouch.md). The default value of this property contains all touch types.

## See Also

### Recognizing different gestures

- [allowedPressTypes](allowedpresstypes.md): An array of press types used to distinguish the type of button press.
- [requiresExclusiveTouchType](requiresexclusivetouchtype.md): A Boolean value that indicates whether the gesture recognizer considers touches of different types simultaneously.
