> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uirectframe(_:)](https://developer.apple.com/documentation/uikit/uirectframe(_:))

# UIRectFrame(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Draws a frame around the inside of the specified rectangle.

## Declaration

```swift
func UIRectFrame(_ rect: CGRect)
```

## Parameters

- `rect`: The rectangle defining the area in which to draw.

<a id="Discussion"></a>

## Discussion

This function draws a frame around the inside of `rect` in the stroke color of the current graphics context and using the `kCGBlendModeCopy` blend mode. The width is equal to 1.0 in the current coordinate system. Because the frame is drawn inside the rectangle, it is visible even if drawing is clipped to the rectangle. If the current graphics context is `nil`, this function does nothing.

This function may be called from any thread of your app.

## See Also

### Paths

- [UIBezierPath](uibezierpath.md): A path that consists of straight and curved line segments that you can render in your custom views.
- [UIRectFill(\_:)](uirectfill%28__%29.md): Fills the specified rectangle with the current color.
- [UIRectFillUsingBlendMode(\_:\_:)](uirectfillusingblendmode%28____%29.md): Fills a rectangle with the current fill color using the specified blend mode.
- [UIRectFrameUsingBlendMode(\_:\_:)](uirectframeusingblendmode%28____%29.md): Draws a frame around the inside of a rectangle using the specified blend mode.

# UIRectFrame (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Draws a frame around the inside of the specified rectangle.

## Declaration

```objectivec
extern void UIRectFrame(CGRect rect);
```

## Parameters

- `rect`: The rectangle defining the area in which to draw.

<a id="Discussion"></a>

## Discussion

This function draws a frame around the inside of `rect` in the stroke color of the current graphics context and using the `kCGBlendModeCopy` blend mode. The width is equal to 1.0 in the current coordinate system. Because the frame is drawn inside the rectangle, it is visible even if drawing is clipped to the rectangle. If the current graphics context is `nil`, this function does nothing.

This function may be called from any thread of your app.

## See Also

### Paths

- [UIBezierPath](uibezierpath.md): A path that consists of straight and curved line segments that you can render in your custom views.
- [UIRectFill](uirectfill%28__%29.md): Fills the specified rectangle with the current color.
- [UIRectFillUsingBlendMode](uirectfillusingblendmode%28____%29.md): Fills a rectangle with the current fill color using the specified blend mode.
- [UIRectFrameUsingBlendMode](uirectframeusingblendmode%28____%29.md): Draws a frame around the inside of a rectangle using the specified blend mode.
