> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/backgroundcolor](https://developer.apple.com/documentation/uikit/uiview/backgroundcolor)

# backgroundColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The view’s background color.

## Declaration

```swift
@NSCopying var backgroundColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

Changes to this property can be animated. The default value is `nil`, which results in a transparent background color.

## See Also

### Configuring a view’s visual appearance

- [isHidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [alpha](alpha.md): The view’s alpha value.
- [isOpaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.
- [tintAdjustmentMode](tintadjustmentmode-swift.property.md): The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.
- [clipsToBounds](clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.
- [clearsContextBeforeDrawing](clearscontextbeforedrawing.md): A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.
- [mask](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.

# backgroundColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The view’s background color.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

Changes to this property can be animated. The default value is `nil`, which results in a transparent background color.

## See Also

### Configuring a view’s visual appearance

- [hidden](ishidden.md): A Boolean value that determines whether the view is hidden.
- [alpha](alpha.md): The view’s alpha value.
- [opaque](isopaque.md): A Boolean value that determines whether the view is opaque.
- [tintColor](tintcolor.md): The first nondefault tint color value in the view’s hierarchy, ascending from and starting with the view itself.
- [tintAdjustmentMode](tintadjustmentmode-swift.property.md): The first non-default tint adjustment mode value in the view’s hierarchy, ascending from and starting with the view itself.
- [clipsToBounds](clipstobounds.md): A Boolean value that determines whether subviews are confined to the bounds of the view.
- [clearsContextBeforeDrawing](clearscontextbeforedrawing.md): A Boolean value that determines whether the view’s bounds should be automatically cleared before drawing.
- [maskView](mask.md): An optional view whose alpha channel is used to mask a view’s content.
- [layerClass](layerclass.md): Returns the class used to create the layer for instances of this class.
- [layer](layer.md): The view’s Core Animation layer to use for rendering.
