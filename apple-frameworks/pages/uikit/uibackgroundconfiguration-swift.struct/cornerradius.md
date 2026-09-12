> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-swift.struct/cornerradius](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-swift.struct/cornerradius)

# cornerRadius

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The preferred corner radius, using a continuous corner curve, for the background and stroke.

## Declaration

```swift
var cornerRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This value doesn’t apply to the custom view. The default value is `0.0`.

If the view is too small to fit the requested radius, the system adjusts the corner curve and radius to fit.

## See Also

### Customizing the background

- [customView](customview.md): A custom view for the background.
- [backgroundInsets](backgroundinsets.md): The insets (or outsets, if negative) for the background and stroke, relative to the edges of the containing view.
- [edgesAddingLayoutMarginsToBackgroundInsets](edgesaddinglayoutmarginstobackgroundinsets.md): The edges on which the configuration adds the containing view’s layout margins to the background insets.
- [backgroundColor](backgroundcolor.md): The color of the background.
- [backgroundColorTransformer](backgroundcolortransformer.md): The color transformer for resolving the background color.
- [resolvedBackgroundColor(for:)](resolvedbackgroundcolor%28for_%29.md): Generates the resolved background color for the specified tint color, using the background color and color transformer.
- [visualEffect](visualeffect.md): The visual effect that the configuration applies to the background.
- [shadowProperties](shadowproperties.md)
- [UIShadowProperties](../uishadowproperties-swift.struct.md)
- [strokeColor](strokecolor.md): The color of the stroke.
- [strokeColorTransformer](strokecolortransformer.md): The color transformer for resolving the stroke color.
- [resolvedStrokeColor(for:)](resolvedstrokecolor%28for_%29.md): Generates the resolved stroke color for the specified tint color, using the stroke color and color transformer.
- [strokeWidth](strokewidth.md): The width of the stroke.
- [strokeOutset](strokeoutset.md): The outset (or inset, if negative) for the stroke.
- [image](image.md): The image displayed in the view’s background.
