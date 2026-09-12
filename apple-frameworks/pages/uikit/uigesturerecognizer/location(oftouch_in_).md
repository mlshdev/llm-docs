> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigesturerecognizer/location(oftouch:in:)](https://developer.apple.com/documentation/uikit/uigesturerecognizer/location(oftouch:in:))

# location(ofTouch:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the location of one of the gesture’s touches in the local coordinate system of a given view.

## Declaration

```swift
func location(ofTouch touchIndex: Int, in view: UIView?) -> CGPoint
```

## Parameters

- `touchIndex`: The index of a [UITouch](../uitouch.md) object in a private array maintained by the receiver. This touch object represents a touch of the current gesture.
- `view`: A [UIView](../uiview.md) object on which the gesture took place. Specify `nil` to indicate the window.

<a id="return-value"></a>

## Return Value

A point in the local coordinate system of `view` that identifies the location of the touch. If `nil` is specified for `view`, the method returns the touch location in the window’s base coordinate system.

## See Also

### Getting the touches and location of a gesture

- [location(in:)](location%28in_%29.md): Returns the point computed as the location in a given view of the gesture represented by the gesture recognizer.
- [numberOfTouches](numberoftouches.md): The number of touches involved in the gesture represented by the gesture recognizer.

# locationOfTouch:inView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the location of one of the gesture’s touches in the local coordinate system of a given view.

## Declaration

```objectivec
- (CGPoint) locationOfTouch:(NSUInteger) touchIndex inView:(UIView *) view;
```

## Parameters

- `touchIndex`: The index of a [UITouch](../uitouch.md) object in a private array maintained by the receiver. This touch object represents a touch of the current gesture.
- `view`: A [UIView](../uiview.md) object on which the gesture took place. Specify `nil` to indicate the window.

<a id="return-value"></a>

## Return Value

A point in the local coordinate system of `view` that identifies the location of the touch. If `nil` is specified for `view`, the method returns the touch location in the window’s base coordinate system.

## See Also

### Getting the touches and location of a gesture

- [locationInView:](location%28in_%29.md): Returns the point computed as the location in a given view of the gesture represented by the gesture recognizer.
- [numberOfTouches](numberoftouches.md): The number of touches involved in the gesture represented by the gesture recognizer.
