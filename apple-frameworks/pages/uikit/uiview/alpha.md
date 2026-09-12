> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/alpha](https://developer.apple.com/documentation/uikit/uiview/alpha)

# alpha (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The view’s alpha value.

## Declaration

```swift
var alpha: CGFloat { get set }
```

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)

<a id="Discussion"></a>

## Discussion

The value of this property is a floating-point number in the range `0.0` to `1.0`, where `0.0` represents totally transparent and `1.0` represents totally opaque. Changing the value of this property updates the alpha value of the current view only. However, the transparency imparted by that alpha value affects all of the view’s contents, including its subviews. For example, a subview with an alpha value of `1.0` that is embedded in a parent view with an alpha value of `0.5,` appears onscreen as if its alpha value is also `0.5`.

Changes to this property can be animated.

## See Also

### Configuring a view’s visual appearance

- [backgroundColor](backgroundcolor.md): The view’s background color.
- [isHidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [isOpaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.
- [tintAdjustmentMode](tintadjustmentmode-swift.property.md): The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.
- [clipsToBounds](clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.
- [clearsContextBeforeDrawing](clearscontextbeforedrawing.md): A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.
- [mask](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.

# alpha (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The view’s alpha value.

## Declaration

```objectivec
@property (nonatomic) CGFloat alpha;
```

## Mentioned In

- [Configuring the cells for your table](../configuring-the-cells-for-your-table.md)

<a id="Discussion"></a>

## Discussion

The value of this property is a floating-point number in the range `0.0` to `1.0`, where `0.0` represents totally transparent and `1.0` represents totally opaque. Changing the value of this property updates the alpha value of the current view only. However, the transparency imparted by that alpha value affects all of the view’s contents, including its subviews. For example, a subview with an alpha value of `1.0` that is embedded in a parent view with an alpha value of `0.5,` appears onscreen as if its alpha value is also `0.5`.

Changes to this property can be animated.

## See Also

### Configuring a view’s visual appearance

- [backgroundColor](backgroundcolor.md): The view’s background color.
- [hidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [opaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.
- [tintAdjustmentMode](tintadjustmentmode-swift.property.md): The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.
- [clipsToBounds](clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.
- [clearsContextBeforeDrawing](clearscontextbeforedrawing.md): A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.
- [maskView](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.
