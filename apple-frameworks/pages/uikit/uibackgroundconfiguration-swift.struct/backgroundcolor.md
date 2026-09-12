> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-swift.struct/backgroundcolor](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-swift.struct/backgroundcolor)

# backgroundColor

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The color of the background.

## Declaration

```swift
var backgroundColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is `nil`, the background color is the view’s tint color. Use [clear](../uicolor/clear.md) for a transparent background with no color.

## See Also

### Customizing the background

- [customView](customview.md): A custom view for the background.
- [cornerRadius](cornerradius.md): The preferred corner radius, using a continuous corner curve, for the background and stroke.
- [backgroundInsets](backgroundinsets.md): The insets (or outsets, if negative) for the background and stroke, relative to the edges of the containing view.
- [edgesAddingLayoutMarginsToBackgroundInsets](edgesaddinglayoutmarginstobackgroundinsets.md): The edges on which the configuration adds the containing view’s layout margins to the background insets.
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
