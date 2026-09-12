> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/majorradiustolerance](https://developer.apple.com/documentation/uikit/uitouch/majorradiustolerance)

# majorRadiusTolerance (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tolerance (in points) of the touch’s radius.

## Declaration

```swift
var majorRadiusTolerance: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This value determines the accuracy of the value in the [majorRadius](majorradius.md) property. Add this value to the radius to get the maximum touch radius. Subtract the value to get the minimum touch radius.

## See Also

### Getting the location of a touch

- [location(in:)](location%28in_%29-8rd36.md): Returns the current location of the touch in the coordinate system of the given view.
- [previousLocation(in:)](previouslocation%28in_%29-22sws.md): Returns the previous location of the touch in the coordinate system of the given view.
- [view](view.md): The view to which touches are being delivered, if any.
- [window](window.md): The window in which the touch initially occurred.
- [majorRadius](majorradius.md): The radius (in points) of the touch.
- [preciseLocation(in:)](preciselocation%28in_%29.md): Returns a precise location for the touch, when available.
- [precisePreviousLocation(in:)](precisepreviouslocation%28in_%29.md): Returns a precise previous location for the touch, when available.

# majorRadiusTolerance (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tolerance (in points) of the touch’s radius.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat majorRadiusTolerance;
```

<a id="Discussion"></a>

## Discussion

This value determines the accuracy of the value in the [majorRadius](majorradius.md) property. Add this value to the radius to get the maximum touch radius. Subtract the value to get the minimum touch radius.

## See Also

### Getting the location of a touch

- [locationInView:](location%28in_%29-8rd36.md): Returns the current location of the touch in the coordinate system of the given view.
- [previousLocationInView:](previouslocation%28in_%29-22sws.md): Returns the previous location of the touch in the coordinate system of the given view.
- [view](view.md): The view to which touches are being delivered, if any.
- [window](window.md): The window in which the touch initially occurred.
- [majorRadius](majorradius.md): The radius (in points) of the touch.
- [preciseLocationInView:](preciselocation%28in_%29.md): Returns a precise location for the touch, when available.
- [precisePreviousLocationInView:](precisepreviouslocation%28in_%29.md): Returns a precise previous location for the touch, when available.
