> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/tintcolor](https://developer.apple.com/documentation/uikit/uiview/tintcolor)

# tintColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.

## Declaration

```swift
var tintColor: UIColor! { get set }
```

<a id="Discussion"></a>

## Discussion

If the system cannot find a nondefault color in the hierarchy, this property’s value is a system-defined color instead.

If the view’s [tintAdjustmentMode](tintadjustmentmode-swift.property.md) property’s value is [UIView.TintAdjustmentMode.dimmed](tintadjustmentmode-swift.enum/dimmed.md), then the [tintColor](tintcolor.md) property value is automatically dimmed.

To refresh subview rendering when this property changes, override the [tintColorDidChange()](tintcolordidchange%28%29.md) method.

Colors that are pattern colors (as described in [UIColor](../uicolor.md)) are not supported.

> **Important**

>  If you attempt to use a pattern color as a tint color, the system raises an exception.

## See Also

### Related Documentation

- [tintColorDidChange()](tintcolordidchange%28%29.md): Called by the system when the tint color property changes.

### Configuring a view’s visual appearance

- [backgroundColor](backgroundcolor.md): The view’s background color.
- [isHidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [alpha](alpha.md): The view’s alpha value.
- [isOpaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintAdjustmentMode](tintadjustmentmode-swift.property.md): The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.
- [clipsToBounds](clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.
- [clearsContextBeforeDrawing](clearscontextbeforedrawing.md): A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.
- [mask](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.

# tintColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.

## Declaration

```objectivec
@property (nonatomic, strong, null_resettable) UIColor * tintColor;
```

<a id="Discussion"></a>

## Discussion

If the system cannot find a nondefault color in the hierarchy, this property’s value is a system-defined color instead.

If the view’s [tintAdjustmentMode](tintadjustmentmode-swift.property.md) property’s value is [UIViewTintAdjustmentModeDimmed](tintadjustmentmode-swift.enum/dimmed.md), then the [tintColor](tintcolor.md) property value is automatically dimmed.

To refresh subview rendering when this property changes, override the [tintColorDidChange](tintcolordidchange%28%29.md) method.

Colors that are pattern colors (as described in [UIColor](../uicolor.md)) are not supported.

> **Important**

>  If you attempt to use a pattern color as a tint color, the system raises an exception.

## See Also

### Related Documentation

- [tintColorDidChange](tintcolordidchange%28%29.md): Called by the system when the tint color property changes.

### Configuring a view’s visual appearance

- [backgroundColor](backgroundcolor.md): The view’s background color.
- [hidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [alpha](alpha.md): The view’s alpha value.
- [opaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintAdjustmentMode](tintadjustmentmode-swift.property.md): The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.
- [clipsToBounds](clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.
- [clearsContextBeforeDrawing](clearscontextbeforedrawing.md): A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.
- [maskView](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.
