> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/contentfilters](https://developer.apple.com/documentation/appkit/nsview/contentfilters)

# contentFilters (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of Core Image filters to apply to the contents of the view and its sublayers.

## Declaration

```swift
var contentFilters: [CIFilter] { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [CIFilter](https://developer.apple.com/documentation/coreimage/cifilter-swift.class) objects. This array represents the filters stored in the [filters](https://developer.apple.com/documentation/quartzcore/calayer/filters) property of the view’s layer. If the view does not have a layer, setting the value of this property has no effect.

The default value of this property is an empty array.

## See Also

### Managing Layer-Related Properties

- [alphaValue](alphavalue.md): The opacity of the view.
- [frameCenterRotation](framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [compositingFilter](compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [shadow](shadow.md): The shadow displayed underneath the view.

# contentFilters (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array of Core Image filters to apply to the contents of the view and its sublayers.

## Declaration

```objectivec
@property (copy) NSArray<__kindof CIFilter *> * contentFilters;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [CIFilter](https://developer.apple.com/documentation/coreimage/cifilter-swift.class) objects. This array represents the filters stored in the [filters](https://developer.apple.com/documentation/quartzcore/calayer/filters) property of the view’s layer. If the view does not have a layer, setting the value of this property has no effect.

The default value of this property is an empty array.

## See Also

### Managing Layer-Related Properties

- [alphaValue](alphavalue.md): The opacity of the view.
- [frameCenterRotation](framecenterrotation.md): The rotation angle of the view around the center of its layer.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the view’s background.
- [compositingFilter](compositingfilter.md): The Core Image filter used to composite the view’s contents with its background.
- [shadow](shadow.md): The shadow displayed underneath the view.
