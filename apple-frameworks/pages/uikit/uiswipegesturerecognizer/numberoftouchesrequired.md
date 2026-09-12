> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswipegesturerecognizer/numberoftouchesrequired](https://developer.apple.com/documentation/uikit/uiswipegesturerecognizer/numberoftouchesrequired)

# numberOfTouchesRequired (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of touches necessary for swipe recognition.

## Declaration

```swift
var numberOfTouchesRequired: Int { get set }
```

## Mentioned In

- [Handling swipe gestures](../handling-swipe-gestures.md)

<a id="Discussion"></a>

## Discussion

The default value is `1`.

## See Also

### Configuring the gesture

- [direction](direction-swift.property.md): The permitted direction of the swipe for this gesture recognizer.
- [UISwipeGestureRecognizer.Direction](direction-swift.struct.md): The direction of the swipe.

# numberOfTouchesRequired (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of touches necessary for swipe recognition.

## Declaration

```objectivec
@property (nonatomic) NSUInteger numberOfTouchesRequired;
```

## Mentioned In

- [Handling swipe gestures](../handling-swipe-gestures.md)

<a id="Discussion"></a>

## Discussion

The default value is `1`.

## See Also

### Configuring the gesture

- [direction](direction-swift.property.md): The permitted direction of the swipe for this gesture recognizer.
- [UISwipeGestureRecognizerDirection](direction-swift.struct.md): The direction of the swipe.
