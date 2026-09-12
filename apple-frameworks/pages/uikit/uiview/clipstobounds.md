> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/clipstobounds](https://developer.apple.com/documentation/uikit/uiview/clipstobounds)

# clipsToBounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value that determines whether subviews are confined to the bounds of the view.

## Declaration

```swift
var clipsToBounds: Bool { get set }
```

## Mentioned In

- [Using responders and the responder chain to handle events](../using-responders-and-the-responder-chain-to-handle-events.md)

<a id="Discussion"></a>

## Discussion

Setting this value to [true](https://developer.apple.com/documentation/swift/true) causes subviews to be clipped to the bounds of the view. If set to [false](https://developer.apple.com/documentation/swift/false), subviews whose frames extend beyond the visible bounds of the view aren’t clipped.

The default value is [false](https://developer.apple.com/documentation/swift/false). Some subclasses of [UIView](../uiview.md), like [UIScrollView](../uiscrollview.md), override the default value to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring a view’s visual appearance

- [backgroundColor](backgroundcolor.md): The view’s background color.
- [isHidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [alpha](alpha.md): The view’s alpha value.
- [isOpaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.
- [tintAdjustmentMode](tintadjustmentmode-swift.property.md): The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.
- [clearsContextBeforeDrawing](clearscontextbeforedrawing.md): A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.
- [mask](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.

# clipsToBounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A Boolean value that determines whether subviews are confined to the bounds of the view.

## Declaration

```objectivec
@property (nonatomic) BOOL clipsToBounds;
```

## Mentioned In

- [Using responders and the responder chain to handle events](../using-responders-and-the-responder-chain-to-handle-events.md)

<a id="Discussion"></a>

## Discussion

Setting this value to [true](https://developer.apple.com/documentation/swift/true) causes subviews to be clipped to the bounds of the view. If set to [false](https://developer.apple.com/documentation/swift/false), subviews whose frames extend beyond the visible bounds of the view aren’t clipped.

The default value is [false](https://developer.apple.com/documentation/swift/false). Some subclasses of [UIView](../uiview.md), like [UIScrollView](../uiscrollview.md), override the default value to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring a view’s visual appearance

- [backgroundColor](backgroundcolor.md): The view’s background color.
- [hidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [alpha](alpha.md): The view’s alpha value.
- [opaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.
- [tintAdjustmentMode](tintadjustmentmode-swift.property.md): The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.
- [clearsContextBeforeDrawing](clearscontextbeforedrawing.md): A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.
- [maskView](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.
