> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/precisepreviouslocation(in:)](https://developer.apple.com/documentation/uikit/uitouch/precisepreviouslocation(in:))

# precisePreviousLocation(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a precise previous location for the touch, when available.

## Declaration

```swift
func precisePreviousLocation(in view: UIView?) -> CGPoint
```

## Parameters

- `view`: The view that contained the touch.

<a id="return-value"></a>

## Return Value

A precise previous location for the touch.

<a id="Discussion"></a>

## Discussion

Use this method to get additional precision for a touch’s previous location (when available). Do not use the returned point for hit testing. In some cases, hit testing can indicate that the touch is within a view, but hit testing against the more precise location may indicate that the touch is outside of the view.

## See Also

### Getting the location of a touch

- [location(in:)](location%28in_%29-8rd36.md): Returns the current location of the touch in the coordinate system of the given view.
- [previousLocation(in:)](previouslocation%28in_%29-22sws.md): Returns the previous location of the touch in the coordinate system of the given view.
- [view](view.md): The view to which touches are being delivered, if any.
- [window](window.md): The window in which the touch initially occurred.
- [majorRadius](majorradius.md): The radius (in points) of the touch.
- [majorRadiusTolerance](majorradiustolerance.md): The tolerance (in points) of the touch’s radius.
- [preciseLocation(in:)](preciselocation%28in_%29.md): Returns a precise location for the touch, when available.

# precisePreviousLocationInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a precise previous location for the touch, when available.

## Declaration

```objectivec
- (CGPoint) precisePreviousLocationInView:(UIView *) view;
```

## Parameters

- `view`: The view that contained the touch.

<a id="return-value"></a>

## Return Value

A precise previous location for the touch.

<a id="Discussion"></a>

## Discussion

Use this method to get additional precision for a touch’s previous location (when available). Do not use the returned point for hit testing. In some cases, hit testing can indicate that the touch is within a view, but hit testing against the more precise location may indicate that the touch is outside of the view.

## See Also

### Getting the location of a touch

- [locationInView:](location%28in_%29-8rd36.md): Returns the current location of the touch in the coordinate system of the given view.
- [previousLocationInView:](previouslocation%28in_%29-22sws.md): Returns the previous location of the touch in the coordinate system of the given view.
- [view](view.md): The view to which touches are being delivered, if any.
- [window](window.md): The window in which the touch initially occurred.
- [majorRadius](majorradius.md): The radius (in points) of the touch.
- [majorRadiusTolerance](majorradiustolerance.md): The tolerance (in points) of the touch’s radius.
- [preciseLocationInView:](preciselocation%28in_%29.md): Returns a precise location for the touch, when available.
