> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/tintadjustmentmode-swift.property](https://developer.apple.com/documentation/uikit/uiview/tintadjustmentmode-swift.property)

# tintAdjustmentMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.

## Declaration

```swift
var tintAdjustmentMode: UIView.TintAdjustmentMode { get set }
```

<a id="Discussion"></a>

## Discussion

When this property’s value is [UIView.TintAdjustmentMode.dimmed](tintadjustmentmode-swift.enum/dimmed.md), the value of the [tintColor](tintcolor.md) property is modified to provide a dimmed appearance.

If the system cannot find a non-default value in the subview hierarchy when you query this property, the value is [UIView.TintAdjustmentMode.normal](tintadjustmentmode-swift.enum/normal.md).

When this property’s value changes (either by the view’s value changing or by one of its superview’s values changing), the system calls the [tintColorDidChange()](tintcolordidchange%28%29.md) method to allow the view to refresh its rendering.

## See Also

### Configuring a view’s visual appearance

- [backgroundColor](backgroundcolor.md): The view’s background color.
- [isHidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [alpha](alpha.md): The view’s alpha value.
- [isOpaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.
- [clipsToBounds](clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.
- [clearsContextBeforeDrawing](clearscontextbeforedrawing.md): A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.
- [mask](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.

# tintAdjustmentMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.

## Declaration

```objectivec
@property (nonatomic) UIViewTintAdjustmentMode tintAdjustmentMode;
```

<a id="Discussion"></a>

## Discussion

When this property’s value is [UIViewTintAdjustmentModeDimmed](tintadjustmentmode-swift.enum/dimmed.md), the value of the [tintColor](tintcolor.md) property is modified to provide a dimmed appearance.

If the system cannot find a non-default value in the subview hierarchy when you query this property, the value is [UIViewTintAdjustmentModeNormal](tintadjustmentmode-swift.enum/normal.md).

When this property’s value changes (either by the view’s value changing or by one of its superview’s values changing), the system calls the [tintColorDidChange](tintcolordidchange%28%29.md) method to allow the view to refresh its rendering.

## See Also

### Configuring a view’s visual appearance

- [backgroundColor](backgroundcolor.md): The view’s background color.
- [hidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [alpha](alpha.md): The view’s alpha value.
- [opaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.
- [clipsToBounds](clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.
- [clearsContextBeforeDrawing](clearscontextbeforedrawing.md): A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.
- [maskView](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.
