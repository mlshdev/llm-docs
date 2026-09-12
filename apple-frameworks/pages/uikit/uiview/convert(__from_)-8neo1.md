> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/convert(_:from:)-8neo1](https://developer.apple.com/documentation/uikit/uiview/convert(_:from:)-8neo1)

# convert(\_:from:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Converts a point from the coordinate system of a given view to that of the receiver.

## Declaration

```swift
func convert(_ point: CGPoint, from view: UIView?) -> CGPoint
```

## Parameters

- `point`: A point specified in the local coordinate system (bounds) of `view`.
- `view`: The view with `point` in its coordinate system. If `view` is `nil`, this method instead converts from window base coordinates. Otherwise, both `view` and the receiver must belong to the same [UIWindow](../uiwindow.md) object.

<a id="return-value"></a>

## Return Value

The point converted to the local coordinate system (bounds) of the receiver.

## See Also

### Converting between view coordinate systems

- [convert(\_:to:)](convert%28__to_%29-1xizt.md): Converts a point from the receiver’s coordinate system to that of the specified view.
- [convert(\_:to:)](convert%28__to_%29-2kf3d.md): Converts a rectangle from the receiver’s coordinate system to that of another view.
- [convert(\_:from:)](convert%28__from_%29-7irzk.md): Converts a rectangle from the coordinate system of another view to that of the receiver.

# convertPoint:fromView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Converts a point from the coordinate system of a given view to that of the receiver.

## Declaration

```objectivec
- (CGPoint) convertPoint:(CGPoint) point fromView:(UIView *) view;
```

## Parameters

- `point`: A point specified in the local coordinate system (bounds) of `view`.
- `view`: The view with `point` in its coordinate system. If `view` is `nil`, this method instead converts from window base coordinates. Otherwise, both `view` and the receiver must belong to the same [UIWindow](../uiwindow.md) object.

<a id="return-value"></a>

## Return Value

The point converted to the local coordinate system (bounds) of the receiver.

## See Also

### Converting between view coordinate systems

- [convertPoint:toView:](convert%28__to_%29-1xizt.md): Converts a point from the receiver’s coordinate system to that of the specified view.
- [convertRect:toView:](convert%28__to_%29-2kf3d.md): Converts a rectangle from the receiver’s coordinate system to that of another view.
- [convertRect:fromView:](convert%28__from_%29-7irzk.md): Converts a rectangle from the coordinate system of another view to that of the receiver.
