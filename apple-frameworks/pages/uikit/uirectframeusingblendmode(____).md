> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uirectframeusingblendmode(_:_:)](https://developer.apple.com/documentation/uikit/uirectframeusingblendmode(_:_:))

# UIRectFrameUsingBlendMode(\_:\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Draws a frame around the inside of a rectangle using the specified blend mode.

## Declaration

```swift
func UIRectFrameUsingBlendMode(_ rect: CGRect, _ blendMode: CGBlendMode)
```

## Parameters

- `rect`: The rectangle defining the area in which to draw.
- `blendMode`: The blend mode to use during drawing.

<a id="Discussion"></a>

## Discussion

This function draws a frame around the inside of rect in the fill color of the current graphics context and using the specified blend mode. The width is equal to 1.0 in the current coordinate system. Since the frame is drawn inside the rectangle, it’s visible even if drawing is clipped to the rectangle. If the current graphics context is `nil`, this function does nothing.

Because this function doesn’t draw directly on the line, but rather inside it, it uses the current fill color (not stroke color) when drawing.

This function may be called from any thread of your app.

## See Also

### Paths

- [UIBezierPath](uibezierpath.md): A path that consists of straight and curved line segments that you can render in your custom views.
- [UIRectFill(\_:)](uirectfill%28__%29.md): Fills the specified rectangle with the current color.
- [UIRectFillUsingBlendMode(\_:\_:)](uirectfillusingblendmode%28____%29.md): Fills a rectangle with the current fill color using the specified blend mode.
- [UIRectFrame(\_:)](uirectframe%28__%29.md): Draws a frame around the inside of the specified rectangle.

# UIRectFrameUsingBlendMode (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Draws a frame around the inside of a rectangle using the specified blend mode.

## Declaration

```objectivec
extern void UIRectFrameUsingBlendMode(CGRect rect, CGBlendMode blendMode);
```

## Parameters

- `rect`: The rectangle defining the area in which to draw.
- `blendMode`: The blend mode to use during drawing.

<a id="Discussion"></a>

## Discussion

This function draws a frame around the inside of rect in the fill color of the current graphics context and using the specified blend mode. The width is equal to 1.0 in the current coordinate system. Since the frame is drawn inside the rectangle, it’s visible even if drawing is clipped to the rectangle. If the current graphics context is `nil`, this function does nothing.

Because this function doesn’t draw directly on the line, but rather inside it, it uses the current fill color (not stroke color) when drawing.

This function may be called from any thread of your app.

## See Also

### Paths

- [UIBezierPath](uibezierpath.md): A path that consists of straight and curved line segments that you can render in your custom views.
- [UIRectFill](uirectfill%28__%29.md): Fills the specified rectangle with the current color.
- [UIRectFillUsingBlendMode](uirectfillusingblendmode%28____%29.md): Fills a rectangle with the current fill color using the specified blend mode.
- [UIRectFrame](uirectframe%28__%29.md): Draws a frame around the inside of the specified rectangle.
