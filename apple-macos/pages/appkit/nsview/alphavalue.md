> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/alphavalue](https://developer.apple.com/documentation/appkit/nsview/alphavalue)

# alphaValue (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The opacity of the view.

## Declaration

```swift
var alphaValue: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the [opacity](https://developer.apple.com/documentation/quartzcore/calayer/opacity) value from the view’s layer. The acceptable range of values for this property are between `0.0` (transparent) and `1.0` (opaque). The default value of this property is `1.0`.

## See Also

### Managing Layer-Related Properties

- [frameCenterRotation](framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [compositingFilter](compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [contentFilters](contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.
- [shadow](shadow.md): The shadow displayed underneath the view.

# alphaValue (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The opacity of the view.

## Declaration

```objectivec
@property CGFloat alphaValue;
```

<a id="Discussion"></a>

## Discussion

This property contains the [opacity](https://developer.apple.com/documentation/quartzcore/calayer/opacity) value from the view’s layer. The acceptable range of values for this property are between `0.0` (transparent) and `1.0` (opaque). The default value of this property is `1.0`.

## See Also

### Managing Layer-Related Properties

- [frameCenterRotation](framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [compositingFilter](compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [contentFilters](contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.
- [shadow](shadow.md): The shadow displayed underneath the view.
