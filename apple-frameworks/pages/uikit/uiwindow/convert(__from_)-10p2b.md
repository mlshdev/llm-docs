> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/convert(_:from:)-10p2b](https://developer.apple.com/documentation/uikit/uiwindow/convert(_:from:)-10p2b)

# convert(\_:from:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Converts a rectangle from the coordinate system of another window to coordinate system of the current window.

## Declaration

```swift
func convert(_ rect: CGRect, from window: UIWindow?) -> CGRect
```

## Parameters

- `rect`: A rectangle in the coordinate system of `window`.
- `window`: The source window containing the specified `rect`. Specify `nil` to convert the rectangle from the logical coordinate system of the screen, which is measured in points.

<a id="return-value"></a>

## Return Value

The converted rectangle.

## See Also

### Converting coordinates

- [convert(\_:to:)](convert%28__to_%29-687rw.md): Converts a point from the current window’s coordinate system to the coordinate system of another window.
- [convert(\_:from:)](convert%28__from_%29-1gbm1.md): Converts a point from the coordinate system of a given window to the coordinate system of the current window.
- [convert(\_:to:)](convert%28__to_%29-7k3l0.md): Converts a rectangle from the current window’s coordinate system to the coordinate system of another window.

# convertRect:fromWindow: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Converts a rectangle from the coordinate system of another window to coordinate system of the current window.

## Declaration

```objectivec
- (CGRect) convertRect:(CGRect) rect fromWindow:(UIWindow *) window;
```

## Parameters

- `rect`: A rectangle in the coordinate system of `window`.
- `window`: The source window containing the specified `rect`. Specify `nil` to convert the rectangle from the logical coordinate system of the screen, which is measured in points.

<a id="return-value"></a>

## Return Value

The converted rectangle.

## See Also

### Converting coordinates

- [convertPoint:toWindow:](convert%28__to_%29-687rw.md): Converts a point from the current window’s coordinate system to the coordinate system of another window.
- [convertPoint:fromWindow:](convert%28__from_%29-1gbm1.md): Converts a point from the coordinate system of a given window to the coordinate system of the current window.
- [convertRect:toWindow:](convert%28__to_%29-7k3l0.md): Converts a rectangle from the current window’s coordinate system to the coordinate system of another window.
