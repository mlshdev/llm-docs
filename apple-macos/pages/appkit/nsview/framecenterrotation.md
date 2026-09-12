> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/framecenterrotation](https://developer.apple.com/documentation/appkit/nsview/framecenterrotation)

# frameCenterRotation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The rotation angle of the view around the center of its layer.

## Declaration

```swift
var frameCenterRotation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the angle of rotation of the view’s frame around its center. If you changed the underlying layer’s [anchorPoint](https://developer.apple.com/documentation/quartzcore/calayer/anchorpoint) property, the result of setting this property is undefined.

## See Also

### Managing Layer-Related Properties

- [alphaValue](alphavalue.md): The opacity of the view.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [compositingFilter](compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [contentFilters](contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.
- [shadow](shadow.md): The shadow displayed underneath the view.

# frameCenterRotation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The rotation angle of the view around the center of its layer.

## Declaration

```objectivec
@property CGFloat frameCenterRotation;
```

<a id="Discussion"></a>

## Discussion

This property contains the angle of rotation of the view’s frame around its center. If you changed the underlying layer’s [anchorPoint](https://developer.apple.com/documentation/quartzcore/calayer/anchorpoint) property, the result of setting this property is undefined.

## See Also

### Managing Layer-Related Properties

- [alphaValue](alphavalue.md): The opacity of the view.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [compositingFilter](compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [contentFilters](contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.
- [shadow](shadow.md): The shadow displayed underneath the view.
