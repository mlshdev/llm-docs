> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/majorradius](https://developer.apple.com/documentation/uikit/uitouch/majorradius)

# majorRadius (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The radius (in points) of the touch.

## Declaration

```swift
var majorRadius: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Use the value in this property to determine the size of the touch that was reported by the hardware. This value is an approximation of the size and can vary by the amount specified in the [majorRadiusTolerance](majorradiustolerance.md) property.

## See Also

### Getting the location of a touch

- [location(in:)](location%28in_%29-8rd36.md): Returns the current location of the touch in the coordinate system of the given view.
- [previousLocation(in:)](previouslocation%28in_%29-22sws.md): Returns the previous location of the touch in the coordinate system of the given view.
- [view](view.md): The view to which touches are being delivered, if any.
- [window](window.md): The window in which the touch initially occurred.
- [majorRadiusTolerance](majorradiustolerance.md): The tolerance (in points) of the touch’s radius.
- [preciseLocation(in:)](preciselocation%28in_%29.md): Returns a precise location for the touch, when available.
- [precisePreviousLocation(in:)](precisepreviouslocation%28in_%29.md): Returns a precise previous location for the touch, when available.

# majorRadius (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The radius (in points) of the touch.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat majorRadius;
```

<a id="Discussion"></a>

## Discussion

Use the value in this property to determine the size of the touch that was reported by the hardware. This value is an approximation of the size and can vary by the amount specified in the [majorRadiusTolerance](majorradiustolerance.md) property.

## See Also

### Getting the location of a touch

- [locationInView:](location%28in_%29-8rd36.md): Returns the current location of the touch in the coordinate system of the given view.
- [previousLocationInView:](previouslocation%28in_%29-22sws.md): Returns the previous location of the touch in the coordinate system of the given view.
- [view](view.md): The view to which touches are being delivered, if any.
- [window](window.md): The window in which the touch initially occurred.
- [majorRadiusTolerance](majorradiustolerance.md): The tolerance (in points) of the touch’s radius.
- [preciseLocationInView:](preciselocation%28in_%29.md): Returns a precise location for the touch, when available.
- [precisePreviousLocationInView:](precisepreviouslocation%28in_%29.md): Returns a precise previous location for the touch, when available.
