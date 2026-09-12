> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uirectfillusingblendmode(_:_:)](https://developer.apple.com/documentation/uikit/uirectfillusingblendmode(_:_:))

# UIRectFillUsingBlendMode(\_:\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Fills a rectangle with the current fill color using the specified blend mode.

## Declaration

```swift
func UIRectFillUsingBlendMode(_ rect: CGRect, _ blendMode: CGBlendMode)
```

## Parameters

- `rect`: The rectangle defining the area in which to draw.
- `blendMode`: The blend mode to use during drawing.

<a id="Discussion"></a>

## Discussion

This function draws the rectangle in the current graphics context. If the current graphics context is `nil`, this function does nothing.

This function may be called from any thread of your app.

## See Also

### Paths

- [UIBezierPath](uibezierpath.md): A path that consists of straight and curved line segments that you can render in your custom views.
- [UIRectFill(\_:)](uirectfill%28__%29.md): Fills the specified rectangle with the current color.
- [UIRectFrame(\_:)](uirectframe%28__%29.md): Draws a frame around the inside of the specified rectangle.
- [UIRectFrameUsingBlendMode(\_:\_:)](uirectframeusingblendmode%28____%29.md): Draws a frame around the inside of a rectangle using the specified blend mode.

# UIRectFillUsingBlendMode (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Fills a rectangle with the current fill color using the specified blend mode.

## Declaration

```objectivec
extern void UIRectFillUsingBlendMode(CGRect rect, CGBlendMode blendMode);
```

## Parameters

- `rect`: The rectangle defining the area in which to draw.
- `blendMode`: The blend mode to use during drawing.

<a id="Discussion"></a>

## Discussion

This function draws the rectangle in the current graphics context. If the current graphics context is `nil`, this function does nothing.

This function may be called from any thread of your app.

## See Also

### Paths

- [UIBezierPath](uibezierpath.md): A path that consists of straight and curved line segments that you can render in your custom views.
- [UIRectFill](uirectfill%28__%29.md): Fills the specified rectangle with the current color.
- [UIRectFrame](uirectframe%28__%29.md): Draws a frame around the inside of the specified rectangle.
- [UIRectFrameUsingBlendMode](uirectframeusingblendmode%28____%29.md): Draws a frame around the inside of a rectangle using the specified blend mode.
