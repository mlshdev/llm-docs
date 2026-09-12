> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/minificationfilter](https://developer.apple.com/documentation/quartzcore/calayer/minificationfilter)

# minificationFilter (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The filter used when reducing the size of the content.

## Declaration

```swift
var minificationFilter: CALayerContentsFilter { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values for this property are listed in [Scaling Filters](../scaling-filters.md).

The default value of this property is [linear](../calayercontentsfilter/linear.md).

## See Also

### Layer filters

- [filters](filters.md): An array of Core Image filters to apply to the contents of the layer and its sublayers. Animatable.
- [compositingFilter](compositingfilter.md): A CoreImage filter used to composite the layer and the content behind it. Animatable.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the content immediately behind the layer. Animatable.
- [minificationFilterBias](minificationfilterbias.md): The bias factor used by the minification filter to determine the levels of detail.
- [magnificationFilter](magnificationfilter.md): The filter used when increasing the size of the content.

# minificationFilter (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The filter used when reducing the size of the content.

## Declaration

```objectivec
@property (copy) CALayerContentsFilter minificationFilter;
```

<a id="Discussion"></a>

## Discussion

The possible values for this property are listed in [Scaling Filters](../scaling-filters.md).

The default value of this property is [kCAFilterLinear](../calayercontentsfilter/linear.md).

## See Also

### Layer filters

- [filters](filters.md): An array of Core Image filters to apply to the contents of the layer and its sublayers. Animatable.
- [compositingFilter](compositingfilter.md): A CoreImage filter used to composite the layer and the content behind it. Animatable.
- [backgroundFilters](backgroundfilters.md): An array of Core Image filters to apply to the content immediately behind the layer. Animatable.
- [minificationFilterBias](minificationfilterbias.md): The bias factor used by the minification filter to determine the levels of detail.
- [magnificationFilter](magnificationfilter.md): The filter used when increasing the size of the content.
