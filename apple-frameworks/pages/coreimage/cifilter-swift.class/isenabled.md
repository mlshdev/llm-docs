> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/isenabled](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/isenabled)

# isEnabled (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value that determines whether the filter is enabled. Animatable.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The filter is applied to its input when this property is set to `true` (the default).

Use this property in conjunction with the [name](name.md) property when attaching filters to Core Animation layers and accessing or animating filter properties through key-value animations.  Core Animation can animate this property on a layer.

## See Also

### Getting filter parameters and attributes

- [name](name.md): A name associated with a filter.
- [attributes](attributes.md): A dictionary of key-value pairs that describe the filter.
- [inputKeys](inputkeys.md): The names of all input parameters to the filter.
- [outputKeys](outputkeys.md): The names of all output parameters from the filter.
- [outputImage](outputimage.md): Returns a [CIImage](../ciimage.md) object that encapsulates the operations configured in the filter.

# enabled (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value that determines whether the filter is enabled. Animatable.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

The filter is applied to its input when this property is set to `true` (the default).

Use this property in conjunction with the [name](name.md) property when attaching filters to Core Animation layers and accessing or animating filter properties through key-value animations.  Core Animation can animate this property on a layer.

## See Also

### Getting filter parameters and attributes

- [name](name.md): A name associated with a filter.
- [attributes](attributes.md): A dictionary of key-value pairs that describe the filter.
- [inputKeys](inputkeys.md): The names of all input parameters to the filter.
- [outputKeys](outputkeys.md): The names of all output parameters from the filter.
- [outputImage](outputimage.md): Returns a [CIImage](../ciimage.md) object that encapsulates the operations configured in the filter.
