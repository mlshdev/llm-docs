> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/delegate](https://developer.apple.com/documentation/uikit/uigesturerecognizer/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate of the gesture recognizer.

## Declaration

```swift
weak var delegate: (any UIGestureRecognizerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The gesture recognizer maintains a weak reference to its delegate. The delegate must adopt the [UIGestureRecognizerDelegate](../uigesturerecognizerdelegate.md) protocol and implement one or more of its methods.

## See Also

### Managing gesture-related interactions

- [UIGestureRecognizerDelegate](../uigesturerecognizerdelegate.md): A set of methods implemented by the delegate of a gesture recognizer to fine-tune an app’s gesture-recognition behavior.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate of the gesture recognizer.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIGestureRecognizerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The gesture recognizer maintains a weak reference to its delegate. The delegate must adopt the [UIGestureRecognizerDelegate](../uigesturerecognizerdelegate.md) protocol and implement one or more of its methods.

## See Also

### Managing gesture-related interactions

- [UIGestureRecognizerDelegate](../uigesturerecognizerdelegate.md): A set of methods implemented by the delegate of a gesture recognizer to fine-tune an app’s gesture-recognition behavior.
