> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/convert(_:to:)-1xizt](https://developer.apple.com/documentation/uikit/uiview/convert(_:to:)-1xizt)

# convert(\_:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Converts a point from the receiver’s coordinate system to that of the specified view.

## Declaration

```swift
func convert(_ point: CGPoint, to view: UIView?) -> CGPoint
```

## Parameters

- `point`: A point specified in the local coordinate system (bounds) of the receiver.
- `view`: The view into whose coordinate system `point` is to be converted. If `view` is `nil`, this method instead converts to window base coordinates. Otherwise, both `view` and the receiver must belong to the same [UIWindow](../uiwindow.md) object.

<a id="return-value"></a>

## Return Value

The point converted to the coordinate system of `view`.

## See Also

### Converting between view coordinate systems

- [convert(\_:from:)](convert%28__from_%29-8neo1.md): Converts a point from the coordinate system of a given view to that of the receiver.
- [convert(\_:to:)](convert%28__to_%29-2kf3d.md): Converts a rectangle from the receiver’s coordinate system to that of another view.
- [convert(\_:from:)](convert%28__from_%29-7irzk.md): Converts a rectangle from the coordinate system of another view to that of the receiver.

# convertPoint:toView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Converts a point from the receiver’s coordinate system to that of the specified view.

## Declaration

```objectivec
- (CGPoint) convertPoint:(CGPoint) point toView:(UIView *) view;
```

## Parameters

- `point`: A point specified in the local coordinate system (bounds) of the receiver.
- `view`: The view into whose coordinate system `point` is to be converted. If `view` is `nil`, this method instead converts to window base coordinates. Otherwise, both `view` and the receiver must belong to the same [UIWindow](../uiwindow.md) object.

<a id="return-value"></a>

## Return Value

The point converted to the coordinate system of `view`.

## See Also

### Converting between view coordinate systems

- [convertPoint:fromView:](convert%28__from_%29-8neo1.md): Converts a point from the coordinate system of a given view to that of the receiver.
- [convertRect:toView:](convert%28__to_%29-2kf3d.md): Converts a rectangle from the receiver’s coordinate system to that of another view.
- [convertRect:fromView:](convert%28__from_%29-7irzk.md): Converts a rectangle from the coordinate system of another view to that of the receiver.
