> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/view](https://developer.apple.com/documentation/uikit/uitouch/view)

# view (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view to which touches are being delivered, if any.

## Declaration

```swift
var view: UIView? { get }
```

## Mentioned In

- [Using responders and the responder chain to handle events](../using-responders-and-the-responder-chain-to-handle-events.md)

<a id="Discussion"></a>

## Discussion

The value of this property is the view object to which touches are being delivered, which is not necessarily the view the touch is currently in. For example, when a gesture recognizer recognizes the touch, this property is `nil` because no view is receiving the touch.

## See Also

### Getting the location of a touch

- [location(in:)](location%28in_%29-8rd36.md): Returns the current location of the touch in the coordinate system of the given view.
- [previousLocation(in:)](previouslocation%28in_%29-22sws.md): Returns the previous location of the touch in the coordinate system of the given view.
- [window](window.md): The window in which the touch initially occurred.
- [majorRadius](majorradius.md): The radius (in points) of the touch.
- [majorRadiusTolerance](majorradiustolerance.md): The tolerance (in points) of the touch’s radius.
- [preciseLocation(in:)](preciselocation%28in_%29.md): Returns a precise location for the touch, when available.
- [precisePreviousLocation(in:)](precisepreviouslocation%28in_%29.md): Returns a precise previous location for the touch, when available.

# view (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view to which touches are being delivered, if any.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIView * view;
```

## Mentioned In

- [Using responders and the responder chain to handle events](../using-responders-and-the-responder-chain-to-handle-events.md)

<a id="Discussion"></a>

## Discussion

The value of this property is the view object to which touches are being delivered, which is not necessarily the view the touch is currently in. For example, when a gesture recognizer recognizes the touch, this property is `nil` because no view is receiving the touch.

## See Also

### Getting the location of a touch

- [locationInView:](location%28in_%29-8rd36.md): Returns the current location of the touch in the coordinate system of the given view.
- [previousLocationInView:](previouslocation%28in_%29-22sws.md): Returns the previous location of the touch in the coordinate system of the given view.
- [window](window.md): The window in which the touch initially occurred.
- [majorRadius](majorradius.md): The radius (in points) of the touch.
- [majorRadiusTolerance](majorradiustolerance.md): The tolerance (in points) of the touch’s radius.
- [preciseLocationInView:](preciselocation%28in_%29.md): Returns a precise location for the touch, when available.
- [precisePreviousLocationInView:](precisepreviouslocation%28in_%29.md): Returns a precise previous location for the touch, when available.
