> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/location(in:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/location(in:))

# location(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the point computed as the location in a given view of the gesture represented by the gesture recognizer.

## Declaration

```swift
func location(in view: UIView?) -> CGPoint
```

## Parameters

- `view`: A [UIView](../uiview.md) object on which the gesture took place. Specify `nil` to indicate the window.

<a id="return-value"></a>

## Return Value

A point in the local coordinate system of `view` that identifies the location of the gesture. If `nil` is specified for `view`, the method returns the gesture location in the window’s base coordinate system.

<a id="Discussion"></a>

## Discussion

The returned value is a generic single-point location for the gesture computed by the UIKit framework. It is usually the centroid of the touches involved in the gesture. For objects of the [UISwipeGestureRecognizer](../uiswipegesturerecognizer.md) and [UITapGestureRecognizer](../uitapgesturerecognizer.md) classes, the location returned by this method has a significance special to the gesture. This significance is documented in the reference for those classes.

## See Also

### Getting the touches and location of a gesture

- [location(ofTouch:in:)](location%28oftouch_in_%29.md): Returns the location of one of the gesture’s touches in the local coordinate system of a given view.
- [numberOfTouches](numberoftouches.md): The number of touches involved in the gesture represented by the gesture recognizer.

# locationInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the point computed as the location in a given view of the gesture represented by the gesture recognizer.

## Declaration

```objectivec
- (CGPoint) locationInView:(UIView *) view;
```

## Parameters

- `view`: A [UIView](../uiview.md) object on which the gesture took place. Specify `nil` to indicate the window.

<a id="return-value"></a>

## Return Value

A point in the local coordinate system of `view` that identifies the location of the gesture. If `nil` is specified for `view`, the method returns the gesture location in the window’s base coordinate system.

<a id="Discussion"></a>

## Discussion

The returned value is a generic single-point location for the gesture computed by the UIKit framework. It is usually the centroid of the touches involved in the gesture. For objects of the [UISwipeGestureRecognizer](../uiswipegesturerecognizer.md) and [UITapGestureRecognizer](../uitapgesturerecognizer.md) classes, the location returned by this method has a significance special to the gesture. This significance is documented in the reference for those classes.

## See Also

### Getting the touches and location of a gesture

- [locationOfTouch:inView:](location%28oftouch_in_%29.md): Returns the location of one of the gesture’s touches in the local coordinate system of a given view.
- [numberOfTouches](numberoftouches.md): The number of touches involved in the gesture represented by the gesture recognizer.
