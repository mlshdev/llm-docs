> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/convert(_:to:)-2kf3d](https://developer.apple.com/documentation/uikit/uiview/convert(_:to:)-2kf3d)

# convert(\_:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Converts a rectangle from the receiver’s coordinate system to that of another view.

## Declaration

```swift
func convert(_ rect: CGRect, to view: UIView?) -> CGRect
```

## Parameters

- `rect`: A rectangle specified in the local coordinate system (bounds) of the receiver.
- `view`: The view that is the target of the conversion operation. If `view` is `nil`, this method instead converts to window base coordinates. Otherwise, both `view` and the receiver must belong to the same [UIWindow](../uiwindow.md) object.

<a id="return-value"></a>

## Return Value

The converted rectangle.

## See Also

### Converting between view coordinate systems

- [convert(\_:to:)](convert%28__to_%29-1xizt.md): Converts a point from the receiver’s coordinate system to that of the specified view.
- [convert(\_:from:)](convert%28__from_%29-8neo1.md): Converts a point from the coordinate system of a given view to that of the receiver.
- [convert(\_:from:)](convert%28__from_%29-7irzk.md): Converts a rectangle from the coordinate system of another view to that of the receiver.

# convertRect:toView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Converts a rectangle from the receiver’s coordinate system to that of another view.

## Declaration

```objectivec
- (CGRect) convertRect:(CGRect) rect toView:(UIView *) view;
```

## Parameters

- `rect`: A rectangle specified in the local coordinate system (bounds) of the receiver.
- `view`: The view that is the target of the conversion operation. If `view` is `nil`, this method instead converts to window base coordinates. Otherwise, both `view` and the receiver must belong to the same [UIWindow](../uiwindow.md) object.

<a id="return-value"></a>

## Return Value

The converted rectangle.

## See Also

### Converting between view coordinate systems

- [convertPoint:toView:](convert%28__to_%29-1xizt.md): Converts a point from the receiver’s coordinate system to that of the specified view.
- [convertPoint:fromView:](convert%28__from_%29-8neo1.md): Converts a point from the coordinate system of a given view to that of the receiver.
- [convertRect:fromView:](convert%28__from_%29-7irzk.md): Converts a rectangle from the coordinate system of another view to that of the receiver.
