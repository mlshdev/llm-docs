> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/compositingfilter](https://developer.apple.com/documentation/appkit/nsview/compositingfilter)

# compositingFilter (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The Core Image filter used to composite the view’s contents with its background.

## Declaration

```swift
var compositingFilter: CIFilter? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the compositing filter stored in the [compositingFilter](https://developer.apple.com/documentation/quartzcore/calayer/compositingfilter) property of the view’s layer. If the view does not have a layer, setting the value of this property has no effect.

The default value of this property is `nil`, which causes content to be rendered without any special compositing effects.

## See Also

### Managing Layer-Related Properties

- [alphaValue](alphavalue.md): The opacity of the view.
- [frameCenterRotation](framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [contentFilters](contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.
- [shadow](shadow.md): The shadow displayed underneath the view.

# compositingFilter (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The Core Image filter used to composite the view’s contents with its background.

## Declaration

```objectivec
@property (strong, nullable) CIFilter * compositingFilter;
```

<a id="Discussion"></a>

## Discussion

This property contains the compositing filter stored in the [compositingFilter](https://developer.apple.com/documentation/quartzcore/calayer/compositingfilter) property of the view’s layer. If the view does not have a layer, setting the value of this property has no effect.

The default value of this property is `nil`, which causes content to be rendered without any special compositing effects.

## See Also

### Managing Layer-Related Properties

- [alphaValue](alphavalue.md): The opacity of the view.
- [frameCenterRotation](framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [contentFilters](contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.
- [shadow](shadow.md): The shadow displayed underneath the view.
