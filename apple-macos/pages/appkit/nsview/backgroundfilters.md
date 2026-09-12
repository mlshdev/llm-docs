> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/backgroundfilters](https://developer.apple.com/documentation/appkit/nsview/backgroundfilters)

# backgroundFilters (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of Core Image filters to apply to the view’s background.

## Declaration

```swift
var backgroundFilters: [CIFilter] { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [CIFilter](https://developer.apple.com/documentation/coreimage/cifilter-swift.class) objects. This array represents the background filters stored in the [backgroundFilters](https://developer.apple.com/documentation/quartzcore/calayer/backgroundfilters) property of the view’s layer. If the view does not have a layer, setting the value of this property has no effect.

The default value of this property is an empty array.

## See Also

### Managing Layer-Related Properties

- [alphaValue](alphavalue.md): The opacity of the view.
- [frameCenterRotation](framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [compositingFilter](compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [contentFilters](contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.
- [shadow](shadow.md): The shadow displayed underneath the view.

# backgroundFilters (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of Core Image filters to apply to the view’s background.

## Declaration

```objectivec
@property (copy) NSArray<__kindof CIFilter *> * backgroundFilters;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [CIFilter](https://developer.apple.com/documentation/coreimage/cifilter-swift.class) objects. This array represents the background filters stored in the [backgroundFilters](https://developer.apple.com/documentation/quartzcore/calayer/backgroundfilters) property of the view’s layer. If the view does not have a layer, setting the value of this property has no effect.

The default value of this property is an empty array.

## See Also

### Managing Layer-Related Properties

- [alphaValue](alphavalue.md): The opacity of the view.
- [frameCenterRotation](framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [compositingFilter](compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [contentFilters](contentfilters.md): An array of Core Image filters to apply to the contents of the view and its sublayers.
- [shadow](shadow.md): The shadow displayed underneath the view.
