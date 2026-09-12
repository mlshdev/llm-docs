> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundconfiguration-swift.struct/imagecontentmode](https://developer.apple.com/documentation/uikit/uibackgroundconfiguration-swift.struct/imagecontentmode)

# imageContentMode

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

A property that determines the layout of a background image in a view when its bounds change.

## Declaration

```swift
var imageContentMode: UIView.ContentMode { get set }
```

<a id="Discussion"></a>

## Discussion

The content mode specifies how the background image adjusts when the view’s bounds change. You can use this property to specify that you want to scale the background image (either with or without distortion) or pin it to a particular spot on the view.

For a list of values you can assign to this property, see [UIView.ContentMode](../uiview/contentmode-swift.enum.md). The default value of this property is [UIView.ContentMode.scaleToFill](../uiview/contentmode-swift.enum/scaletofill.md).

## See Also

### Customizing the background

- [customView](customview.md): A custom view for the background.
- [cornerRadius](cornerradius.md): The preferred corner radius, using a continuous corner curve, for the background and stroke.
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
