> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uirectfill(_:)](https://developer.apple.com/documentation/uikit/uirectfill(_:))

# UIRectFill(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Fills the specified rectangle with the current color.

## Declaration

```swift
func UIRectFill(_ rect: CGRect)
```

## Parameters

- `rect`: The rectangle defining the area in which to draw.

<a id="Discussion"></a>

## Discussion

Fills the specified rectangle using the fill color of the current graphics context and the `kCGBlendModeCopy` blend mode.

This function may be called from any thread of your app.

## See Also

### Paths

- [UIBezierPath](uibezierpath.md): A path that consists of straight and curved line segments that you can render in your custom views.
- [UIRectFillUsingBlendMode(\_:\_:)](uirectfillusingblendmode%28____%29.md): Fills a rectangle with the current fill color using the specified blend mode.
- [UIRectFrame(\_:)](uirectframe%28__%29.md): Draws a frame around the inside of the specified rectangle.
- [UIRectFrameUsingBlendMode(\_:\_:)](uirectframeusingblendmode%28____%29.md): Draws a frame around the inside of a rectangle using the specified blend mode.

# UIRectFill (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Fills the specified rectangle with the current color.

## Declaration

```objectivec
extern void UIRectFill(CGRect rect);
```

## Parameters

- `rect`: The rectangle defining the area in which to draw.

<a id="Discussion"></a>

## Discussion

Fills the specified rectangle using the fill color of the current graphics context and the `kCGBlendModeCopy` blend mode.

This function may be called from any thread of your app.

## See Also

### Paths

- [UIBezierPath](uibezierpath.md): A path that consists of straight and curved line segments that you can render in your custom views.
- [UIRectFillUsingBlendMode](uirectfillusingblendmode%28____%29.md): Fills a rectangle with the current fill color using the specified blend mode.
- [UIRectFrame](uirectframe%28__%29.md): Draws a frame around the inside of the specified rectangle.
- [UIRectFrameUsingBlendMode](uirectframeusingblendmode%28____%29.md): Draws a frame around the inside of a rectangle using the specified blend mode.
