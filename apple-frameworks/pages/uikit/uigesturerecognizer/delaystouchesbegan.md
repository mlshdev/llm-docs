> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/delaystouchesbegan](https://developer.apple.com/documentation/uikit/uigesturerecognizer/delaystouchesbegan)

# delaysTouchesBegan (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the gesture recognizer delays sending touches in a begin phase to its view.

## Declaration

```swift
var delaysTouchesBegan: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), views analyze touch events in [UITouch.Phase.began](../uitouch/phase-swift.enum/began.md) and [UITouch.Phase.moved](../uitouch/phase-swift.enum/moved.md) in parallel with the gesture recognizer. When the value of the property is [true](https://developer.apple.com/documentation/swift/true), the window suspends delivery of touch objects in the [UITouch.Phase.began](../uitouch/phase-swift.enum/began.md) phase to the view. If the gesture recognizer subsequently recognizes its gesture, these touch objects are discarded. If the gesture recognizer, however, doesn’t recognize its gesture, the window delivers these objects to the view in a [touchesBegan(\_:with:)](../uiresponder/touchesbegan%28__with_%29.md) message (and possibly a follow-up [touchesMoved(\_:with:)](../uiresponder/touchesmoved%28__with_%29.md) message to inform it of the touches’ current locations). Set this property to [true](https://developer.apple.com/documentation/swift/true) to prevent views from processing any touches in the [UITouch.Phase.began](../uitouch/phase-swift.enum/began.md) phase that may be recognized as part of this gesture.

## See Also

### Canceling and delaying touches

- [cancelsTouchesInView](cancelstouchesinview.md): A Boolean value that determines whether touches are delivered to a view when a gesture is recognized.
- [delaysTouchesEnded](delaystouchesended.md): A Boolean value that determines whether the gesture recognizer delays sending touches in an end phase to its view.

# delaysTouchesBegan (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the gesture recognizer delays sending touches in a begin phase to its view.

## Declaration

```objectivec
@property (nonatomic) BOOL delaysTouchesBegan;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false) (the default), views analyze touch events in [UITouchPhaseBegan](../uitouch/phase-swift.enum/began.md) and [UITouchPhaseMoved](../uitouch/phase-swift.enum/moved.md) in parallel with the gesture recognizer. When the value of the property is [true](https://developer.apple.com/documentation/swift/true), the window suspends delivery of touch objects in the [UITouchPhaseBegan](../uitouch/phase-swift.enum/began.md) phase to the view. If the gesture recognizer subsequently recognizes its gesture, these touch objects are discarded. If the gesture recognizer, however, doesn’t recognize its gesture, the window delivers these objects to the view in a [touchesBegan:withEvent:](../uiresponder/touchesbegan%28__with_%29.md) message (and possibly a follow-up [touchesMoved:withEvent:](../uiresponder/touchesmoved%28__with_%29.md) message to inform it of the touches’ current locations). Set this property to [true](https://developer.apple.com/documentation/swift/true) to prevent views from processing any touches in the [UITouchPhaseBegan](../uitouch/phase-swift.enum/began.md) phase that may be recognized as part of this gesture.

## See Also

### Canceling and delaying touches

- [cancelsTouchesInView](cancelstouchesinview.md): A Boolean value that determines whether touches are delivered to a view when a gesture is recognized.
- [delaysTouchesEnded](delaystouchesended.md): A Boolean value that determines whether the gesture recognizer delays sending touches in an end phase to its view.
