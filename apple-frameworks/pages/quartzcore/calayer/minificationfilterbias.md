> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/minificationfilterbias](https://developer.apple.com/documentation/quartzcore/calayer/minificationfilterbias)

# minificationFilterBias (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The bias factor used by the minification filter to determine the levels of detail.

## Declaration

```swift
var minificationFilterBias: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This value is used by the [minificationFilter](minificationfilter.md) when it is set to [trilinear](../calayercontentsfilter/trilinear.md).

The default value of this property is `0.0`.

## See Also

### Layer filters

- [filters](filters.md): An array of Core Image filters to apply to the contents of the layer and its sublayers. Animatable.
- [compositingFilter](compositingfilter.md): A CoreImage filter used to composite the layer and the content behind it. Animatable.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the content immediately behind the layer. Animatable.
- [minificationFilter](minificationfilter.md): The filter used when reducing the size of the content.
- [magnificationFilter](magnificationfilter.md): The filter used when increasing the size of the content.

# minificationFilterBias (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The bias factor used by the minification filter to determine the levels of detail.

## Declaration

```objectivec
@property float minificationFilterBias;
```

<a id="Discussion"></a>

## Discussion

This value is used by the [minificationFilter](minificationfilter.md) when it is set to [kCAFilterTrilinear](../calayercontentsfilter/trilinear.md).

The default value of this property is `0.0`.

## See Also

### Layer filters

- [filters](filters.md): An array of Core Image filters to apply to the contents of the layer and its sublayers. Animatable.
- [compositingFilter](compositingfilter.md): A CoreImage filter used to composite the layer and the content behind it. Animatable.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the content immediately behind the layer. Animatable.
- [minificationFilter](minificationfilter.md): The filter used when reducing the size of the content.
- [magnificationFilter](magnificationfilter.md): The filter used when increasing the size of the content.
