> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/clearscontextbeforedrawing](https://developer.apple.com/documentation/uikit/uiview/clearscontextbeforedrawing)

# clearsContextBeforeDrawing (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.

## Declaration

```swift
var clearsContextBeforeDrawing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the drawing buffer is automatically cleared to transparent black before the [draw(\_:)](draw%28__%29.md) method is called. This behavior ensures that there are no visual artifacts left over when the view’s contents are redrawn. If the view’s [isOpaque](isopaque.md) property is also set to [true](https://developer.apple.com/documentation/swift/true), the [backgroundColor](backgroundcolor.md) property of the view must not be `nil` or drawing errors may occur. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If you set the value of this property to [false](https://developer.apple.com/documentation/swift/false), you are responsible for ensuring the contents of the view are drawn properly in your [draw(\_:)](draw%28__%29.md) method. If your drawing code is already heavily optimized, setting this property is [false](https://developer.apple.com/documentation/swift/false) can improve performance, especially during scrolling when only a portion of the view might need to be redrawn.

## See Also

### Configuring a view’s visual appearance

- [backgroundColor](backgroundcolor.md): The view’s background color.
- [isHidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [alpha](alpha.md): The view’s alpha value.
- [isOpaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.
- [tintAdjustmentMode](tintadjustmentmode-swift.property.md): The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.
- [clipsToBounds](clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.
- [mask](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.

# clearsContextBeforeDrawing (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.

## Declaration

```objectivec
@property (nonatomic) BOOL clearsContextBeforeDrawing;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the drawing buffer is automatically cleared to transparent black before the [drawRect:](draw%28__%29.md) method is called. This behavior ensures that there are no visual artifacts left over when the view’s contents are redrawn. If the view’s [opaque](isopaque.md) property is also set to [true](https://developer.apple.com/documentation/swift/true), the [backgroundColor](backgroundcolor.md) property of the view must not be `nil` or drawing errors may occur. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If you set the value of this property to [false](https://developer.apple.com/documentation/swift/false), you are responsible for ensuring the contents of the view are drawn properly in your [drawRect:](draw%28__%29.md) method. If your drawing code is already heavily optimized, setting this property is [false](https://developer.apple.com/documentation/swift/false) can improve performance, especially during scrolling when only a portion of the view might need to be redrawn.

## See Also

### Configuring a view’s visual appearance

- [backgroundColor](backgroundcolor.md): The view’s background color.
- [hidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [alpha](alpha.md): The view’s alpha value.
- [opaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.
- [tintAdjustmentMode](tintadjustmentmode-swift.property.md): The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.
- [clipsToBounds](clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.
- [maskView](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.
