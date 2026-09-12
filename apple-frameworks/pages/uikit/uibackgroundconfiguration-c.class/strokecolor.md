> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-c.class/strokecolor](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-c.class/strokecolor)

# strokeColor

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The color of the stroke.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * strokeColor;
```

<a id="Discussion"></a>

## Discussion

If the value is `nil`, the stroke color is the view’s tint color. Use [clearColor](../uicolor/clear.md) for a transparent stroke with no color.

## See Also

### Customizing the background

- [customView](customview.md): A custom view for the background.
- [cornerRadius](cornerradius.md): The preferred corner radius, using a continuous corner curve, for the background and stroke.
- [backgroundInsets](backgroundinsets.md): The insets (or outsets, if negative) for the background and stroke, relative to the edges of the containing view.
- [edgesAddingLayoutMarginsToBackgroundInsets](edgesaddinglayoutmarginstobackgroundinsets.md): The edges on which the configuration adds the containing view’s layout margins to the background insets.
- [backgroundColor](backgroundcolor.md): The color of the background.
- [backgroundColorTransformer](backgroundcolortransformer.md): The color transformer for resolving the background color.
- [resolvedBackgroundColorForTintColor:](resolvedbackgroundcolorfortintcolor_.md): Generates the resolved background color for the specified tint color, using the background color and color transformer.
- [visualEffect](visualeffect.md): The visual effect that the configuration applies to the background.
- [shadowProperties](shadowproperties.md): Describes a shadow applied by the background. Defaults to no shadow (i.e. a shadow with an opacity of 0.0).
- [UIShadowProperties](../uishadowproperties-c.class.md)
- [strokeColorTransformer](strokecolortransformer.md): The color transformer for resolving the stroke color.
- [resolvedStrokeColorForTintColor:](resolvedstrokecolorfortintcolor_.md): Generates the resolved stroke color for the specified tint color, using the stroke color and color transformer.
- [strokeWidth](strokewidth.md): The width of the stroke.
- [strokeOutset](strokeoutset.md): The outset (or inset, if negative) for the stroke.
- [image](image.md): The image displayed in the view’s background.
