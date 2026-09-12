> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/state-swift.enum](https://developer.apple.com/documentation/uikit/uigesturerecognizer/state-swift.enum)

# UIGestureRecognizer.State (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that represent the current state a gesture recognizer is in.

## Declaration

```swift
enum State
```

<a id="overview"></a>

## Overview

Gesture recognizers recognize a discrete event such as a tap or a swipe but don’t report changes within the gesture. In other words, discrete gestures don’t transition through the Began and Changed states and they can’t fail or be canceled.

## Topics

### Constants

- [UIGestureRecognizer.State.possible](state-swift.enum/possible.md): The gesture recognizer hasn’t yet recognized its gesture, but may be evaluating touch events.
- [UIGestureRecognizer.State.began](state-swift.enum/began.md): The gesture recognizer has received touch objects recognized as a continuous gesture.
- [UIGestureRecognizer.State.changed](state-swift.enum/changed.md): The gesture recognizer has received touches recognized as a change to a continuous gesture.
- [UIGestureRecognizer.State.ended](state-swift.enum/ended.md): The gesture recognizer has received touches recognized as the end of a continuous gesture.
- [UIGestureRecognizer.State.cancelled](state-swift.enum/cancelled.md): The gesture recognizer has received touches resulting in the cancellation of a continuous gesture.
- [UIGestureRecognizer.State.failed](state-swift.enum/failed.md): The gesture recognizer has received a multi-touch sequence that it can’t recognize as its gesture.
- [recognized](state-swift.enum/recognized.md): The gesture recognizer has received a multitouch sequence that it recognizes as its gesture.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the recognizer’s state and view

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [view](view.md): The view the gesture recognizer is attached to.
- [isEnabled](isenabled.md): A Boolean property that indicates whether the gesture recognizer is enabled.
- [buttonMask](buttonmask.md): A bit mask of the buttons in the gesture represented by the gesture recognizer.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags in the gesture represented by the gesture recognizer.

# UIGestureRecognizerState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that represent the current state a gesture recognizer is in.

## Declaration

```objectivec
enum UIGestureRecognizerState : NSInteger;
```

<a id="overview"></a>

## Overview

Gesture recognizers recognize a discrete event such as a tap or a swipe but don’t report changes within the gesture. In other words, discrete gestures don’t transition through the Began and Changed states and they can’t fail or be canceled.

## Topics

### Constants

- [UIGestureRecognizerStatePossible](state-swift.enum/possible.md): The gesture recognizer hasn’t yet recognized its gesture, but may be evaluating touch events.
- [UIGestureRecognizerStateBegan](state-swift.enum/began.md): The gesture recognizer has received touch objects recognized as a continuous gesture.
- [UIGestureRecognizerStateChanged](state-swift.enum/changed.md): The gesture recognizer has received touches recognized as a change to a continuous gesture.
- [UIGestureRecognizerStateEnded](state-swift.enum/ended.md): The gesture recognizer has received touches recognized as the end of a continuous gesture.
- [UIGestureRecognizerStateCancelled](state-swift.enum/cancelled.md): The gesture recognizer has received touches resulting in the cancellation of a continuous gesture.
- [UIGestureRecognizerStateFailed](state-swift.enum/failed.md): The gesture recognizer has received a multi-touch sequence that it can’t recognize as its gesture.
- [UIGestureRecognizerStateRecognized](state-swift.enum/recognized.md): The gesture recognizer has received a multitouch sequence that it recognizes as its gesture.

## See Also

### Getting the recognizer’s state and view

- [state](state-swift.property.md): The current state of the gesture recognizer.
- [view](view.md): The view the gesture recognizer is attached to.
- [enabled](isenabled.md): A Boolean property that indicates whether the gesture recognizer is enabled.
- [buttonMask](buttonmask.md): A bit mask of the buttons in the gesture represented by the gesture recognizer.
- [modifierFlags](modifierflags.md): The bit mask of modifier flags in the gesture represented by the gesture recognizer.
