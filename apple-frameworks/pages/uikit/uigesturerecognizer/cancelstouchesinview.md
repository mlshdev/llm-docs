> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/cancelstouchesinview](https://developer.apple.com/documentation/uikit/uigesturerecognizer/cancelstouchesinview)

# cancelsTouchesInView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether touches are delivered to a view when a gesture is recognized.

## Declaration

```swift
var cancelsTouchesInView: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) (the default) and the gesture recognizer recognizes its gesture, the touches of that gesture that are pending aren’t delivered to the view and previously delivered touches are canceled through a [touchesCancelled(\_:with:)](../uiresponder/touchescancelled%28__with_%29.md) message sent to the view. If a gesture recognizer doesn’t recognize its gesture or if the value of this property is [false](https://developer.apple.com/documentation/swift/false), the view receives all touches in the multi-touch sequence.

## See Also

### Canceling and delaying touches

- [delaysTouchesBegan](delaystouchesbegan.md): A Boolean value that determines whether the gesture recognizer delays sending touches in a begin phase to its view.
- [delaysTouchesEnded](delaystouchesended.md): A Boolean value that determines whether the gesture recognizer delays sending touches in an end phase to its view.

# cancelsTouchesInView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether touches are delivered to a view when a gesture is recognized.

## Declaration

```objectivec
@property (nonatomic) BOOL cancelsTouchesInView;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true) (the default) and the gesture recognizer recognizes its gesture, the touches of that gesture that are pending aren’t delivered to the view and previously delivered touches are canceled through a [touchesCancelled:withEvent:](../uiresponder/touchescancelled%28__with_%29.md) message sent to the view. If a gesture recognizer doesn’t recognize its gesture or if the value of this property is [false](https://developer.apple.com/documentation/swift/false), the view receives all touches in the multi-touch sequence.

## See Also

### Canceling and delaying touches

- [delaysTouchesBegan](delaystouchesbegan.md): A Boolean value that determines whether the gesture recognizer delays sending touches in a begin phase to its view.
- [delaysTouchesEnded](delaystouchesended.md): A Boolean value that determines whether the gesture recognizer delays sending touches in an end phase to its view.
