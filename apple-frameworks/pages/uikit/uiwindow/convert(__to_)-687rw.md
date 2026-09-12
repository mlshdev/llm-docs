> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/convert(_:to:)-687rw](https://developer.apple.com/documentation/uikit/uiwindow/convert(_:to:)-687rw)

# convert(\_:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Converts a point from the current window’s coordinate system to the coordinate system of another window.

## Declaration

```swift
func convert(_ point: CGPoint, to window: UIWindow?) -> CGPoint
```

## Parameters

- `point`: A point specifying a location in the logical coordinate system of the current window object.
- `window`: The window defining the destination coordinate system for `point`. Specify `nil` to convert the point to the logical coordinate system of the screen, which is measured in points.

<a id="return-value"></a>

## Return Value

The point converted to the coordinate system of `window`.

## See Also

### Converting coordinates

- [convert(\_:from:)](convert%28__from_%29-1gbm1.md): Converts a point from the coordinate system of a given window to the coordinate system of the current window.
- [convert(\_:to:)](convert%28__to_%29-7k3l0.md): Converts a rectangle from the current window’s coordinate system to the coordinate system of another window.
- [convert(\_:from:)](convert%28__from_%29-10p2b.md): Converts a rectangle from the coordinate system of another window to coordinate system of the current window.

# convertPoint:toWindow: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Converts a point from the current window’s coordinate system to the coordinate system of another window.

## Declaration

```objectivec
- (CGPoint) convertPoint:(CGPoint) point toWindow:(UIWindow *) window;
```

## Parameters

- `point`: A point specifying a location in the logical coordinate system of the current window object.
- `window`: The window defining the destination coordinate system for `point`. Specify `nil` to convert the point to the logical coordinate system of the screen, which is measured in points.

<a id="return-value"></a>

## Return Value

The point converted to the coordinate system of `window`.

## See Also

### Converting coordinates

- [convertPoint:fromWindow:](convert%28__from_%29-1gbm1.md): Converts a point from the coordinate system of a given window to the coordinate system of the current window.
- [convertRect:toWindow:](convert%28__to_%29-7k3l0.md): Converts a rectangle from the current window’s coordinate system to the coordinate system of another window.
- [convertRect:fromWindow:](convert%28__from_%29-10p2b.md): Converts a rectangle from the coordinate system of another window to coordinate system of the current window.
