> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/shadow](https://developer.apple.com/documentation/appkit/nsview/shadow)

# shadow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The shadow displayed underneath the view.

## Declaration

```swift
@NSCopying var shadow: NSShadow? { get set }
```

<a id="return-value"></a>

## Return Value

An instance of `NSShadow` that is created using the [shadowColor](https://developer.apple.com/documentation/quartzcore/calayer/shadowcolor),[shadowOffset](https://developer.apple.com/documentation/quartzcore/calayer/shadowoffset), [shadowOpacity](https://developer.apple.com/documentation/quartzcore/calayer/shadowopacity), and [shadowRadius](https://developer.apple.com/documentation/quartzcore/calayer/shadowradius) properties of the view’s layer.

<a id="Discussion"></a>

## Discussion

The default value of this property is normally `nil`. When you configure any of the shadow-related properties on the view’s layer, such as the [shadowColor](https://developer.apple.com/documentation/quartzcore/calayer/shadowcolor),[shadowOffset](https://developer.apple.com/documentation/quartzcore/calayer/shadowoffset), [shadowOpacity](https://developer.apple.com/documentation/quartzcore/calayer/shadowopacity) or [shadowRadius](https://developer.apple.com/documentation/quartzcore/calayer/shadowradius) properties, this property contains the [NSShadow](../nsshadow.md) object that encapsulates that information. Assigning a new shadow object to this property sets the corresponding shadow-related properties on the view’s layer.

If the view does not have a layer, setting the value of this property has no effect.

## See Also

### Managing Layer-Related Properties

- [alphaValue](alphavalue.md): The opacity of the view.
- [frameCenterRotation](framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [compositingFilter](compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [contentFilters](contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.

# shadow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The shadow displayed underneath the view.

## Declaration

```objectivec
@property (copy, nullable) NSShadow * shadow;
```

<a id="return-value"></a>

## Return Value

An instance of `NSShadow` that is created using the [shadowColor](https://developer.apple.com/documentation/quartzcore/calayer/shadowcolor),[shadowOffset](https://developer.apple.com/documentation/quartzcore/calayer/shadowoffset), [shadowOpacity](https://developer.apple.com/documentation/quartzcore/calayer/shadowopacity), and [shadowRadius](https://developer.apple.com/documentation/quartzcore/calayer/shadowradius) properties of the view’s layer.

<a id="Discussion"></a>

## Discussion

The default value of this property is normally `nil`. When you configure any of the shadow-related properties on the view’s layer, such as the [shadowColor](https://developer.apple.com/documentation/quartzcore/calayer/shadowcolor),[shadowOffset](https://developer.apple.com/documentation/quartzcore/calayer/shadowoffset), [shadowOpacity](https://developer.apple.com/documentation/quartzcore/calayer/shadowopacity) or [shadowRadius](https://developer.apple.com/documentation/quartzcore/calayer/shadowradius) properties, this property contains the [NSShadow](../nsshadow.md) object that encapsulates that information. Assigning a new shadow object to this property sets the corresponding shadow-related properties on the view’s layer.

If the view does not have a layer, setting the value of this property has no effect.

## See Also

### Managing Layer-Related Properties

- [alphaValue](alphavalue.md): The opacity of the view.
- [frameCenterRotation](framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [compositingFilter](compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [contentFilters](contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.
