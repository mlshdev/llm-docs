> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/convert(_:to:)-7k3l0](https://developer.apple.com/documentation/uikit/uiwindow/convert(_:to:)-7k3l0)

# convert(\_:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Converts a rectangle from the current window’s coordinate system to the coordinate system of another window.

## Declaration

```swift
func convert(_ rect: CGRect, to window: UIWindow?) -> CGRect
```

## Parameters

- `rect`: A rectangle in the current window’s coordinate system.
- `window`: The window defining the destination coordinate system for `rect`. Specify `nil` to convert the rectangle to the logical coordinate system of the screen, which is measured in points.

<a id="return-value"></a>

## Return Value

The rectangle converted to the coordinate system of `window`.

## See Also

### Converting coordinates

- [convert(\_:to:)](convert%28__to_%29-687rw.md): Converts a point from the current window’s coordinate system to the coordinate system of another window.
- [convert(\_:from:)](convert%28__from_%29-1gbm1.md): Converts a point from the coordinate system of a given window to the coordinate system of the current window.
- [convert(\_:from:)](convert%28__from_%29-10p2b.md): Converts a rectangle from the coordinate system of another window to coordinate system of the current window.

# convertRect:toWindow: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Converts a rectangle from the current window’s coordinate system to the coordinate system of another window.

## Declaration

```objectivec
- (CGRect) convertRect:(CGRect) rect toWindow:(UIWindow *) window;
```

## Parameters

- `rect`: A rectangle in the current window’s coordinate system.
- `window`: The window defining the destination coordinate system for `rect`. Specify `nil` to convert the rectangle to the logical coordinate system of the screen, which is measured in points.

<a id="return-value"></a>

## Return Value

The rectangle converted to the coordinate system of `window`.

## See Also

### Converting coordinates

- [convertPoint:toWindow:](convert%28__to_%29-687rw.md): Converts a point from the current window’s coordinate system to the coordinate system of another window.
- [convertPoint:fromWindow:](convert%28__from_%29-1gbm1.md): Converts a point from the coordinate system of a given window to the coordinate system of the current window.
- [convertRect:fromWindow:](convert%28__from_%29-10p2b.md): Converts a rectangle from the coordinate system of another window to coordinate system of the current window.
