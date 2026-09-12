> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/previouslocation(in:)-22sws](https://developer.apple.com/documentation/uikit/uitouch/previouslocation(in:)-22sws)

# previousLocation(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the previous location of the touch in the coordinate system of the given view.

## Declaration

```swift
func previousLocation(in view: UIView?) -> CGPoint
```

## Parameters

- `view`: The view object in whose coordinate system you want the touch located. A custom view that is handling the touch may specify `self` to get the touch location in its own coordinate system. Pass `nil` to get the touch location in the window’s coordinates.

<a id="return-value"></a>

## Return Value

This method returns the previous location of a [UITouch](../uitouch.md) object in the coordinate system of the specified view. Because the touch object might have been forwarded to a view from another view, this method performs any necessary conversion of the touch location to the coordinate system of the specified view.

## See Also

### Getting the location of a touch

- [location(in:)](location%28in_%29-8rd36.md): Returns the current location of the touch in the coordinate system of the given view.
- [view](view.md): The view to which touches are being delivered, if any.
- [window](window.md): The window in which the touch initially occurred.
- [majorRadius](majorradius.md): The radius (in points) of the touch.
- [majorRadiusTolerance](majorradiustolerance.md): The tolerance (in points) of the touch’s radius.
- [preciseLocation(in:)](preciselocation%28in_%29.md): Returns a precise location for the touch, when available.
- [precisePreviousLocation(in:)](precisepreviouslocation%28in_%29.md): Returns a precise previous location for the touch, when available.

# previousLocationInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the previous location of the touch in the coordinate system of the given view.

## Declaration

```objectivec
- (CGPoint) previousLocationInView:(UIView *) view;
```

## Parameters

- `view`: The view object in whose coordinate system you want the touch located. A custom view that is handling the touch may specify `self` to get the touch location in its own coordinate system. Pass `nil` to get the touch location in the window’s coordinates.

<a id="return-value"></a>

## Return Value

This method returns the previous location of a [UITouch](../uitouch.md) object in the coordinate system of the specified view. Because the touch object might have been forwarded to a view from another view, this method performs any necessary conversion of the touch location to the coordinate system of the specified view.

## See Also

### Getting the location of a touch

- [locationInView:](location%28in_%29-8rd36.md): Returns the current location of the touch in the coordinate system of the given view.
- [view](view.md): The view to which touches are being delivered, if any.
- [window](window.md): The window in which the touch initially occurred.
- [majorRadius](majorradius.md): The radius (in points) of the touch.
- [majorRadiusTolerance](majorradiustolerance.md): The tolerance (in points) of the touch’s radius.
- [preciseLocationInView:](preciselocation%28in_%29.md): Returns a precise location for the touch, when available.
- [precisePreviousLocationInView:](precisepreviouslocation%28in_%29.md): Returns a precise previous location for the touch, when available.
