> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/name](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/name)

# name (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A name associated with a filter.

## Declaration

```swift
var name: String { get set }
```

<a id="Discussion"></a>

## Discussion

You use a filter’s name to construct key paths to its attributes when the filter is attached to a Core Animation layer. For example, if a [CALayer](../../quartzcore/calayer.md) object has an attached [CIFilter](../cifilter-swift.class.md) instance whose name is `myExposureFilter`, you can refer to attributes of the filter using a key path such as `filters.myExposureFilter.inputEV`. Layer animations may also access filter attributes via these key paths.

Core Animation can animate this property on a layer.

The default value for this property is `nil`.

## See Also

### Getting filter parameters and attributes

- [isEnabled](isenabled.md): A Boolean value that determines whether the filter is enabled. Animatable.
- [attributes](attributes.md): A dictionary of key-value pairs that describe the filter.
- [inputKeys](inputkeys.md): The names of all input parameters to the filter.
- [outputKeys](outputkeys.md): The names of all output parameters from the filter.
- [outputImage](outputimage.md): Returns a [CIImage](../ciimage.md) object that encapsulates the operations configured in the filter.

# name (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A name associated with a filter.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * name;
```

<a id="Discussion"></a>

## Discussion

You use a filter’s name to construct key paths to its attributes when the filter is attached to a Core Animation layer. For example, if a [CALayer](../../quartzcore/calayer.md) object has an attached [CIFilter](../cifilter-swift.class.md) instance whose name is `myExposureFilter`, you can refer to attributes of the filter using a key path such as `filters.myExposureFilter.inputEV`. Layer animations may also access filter attributes via these key paths.

Core Animation can animate this property on a layer.

The default value for this property is `nil`.

## See Also

### Getting filter parameters and attributes

- [enabled](isenabled.md): A Boolean value that determines whether the filter is enabled. Animatable.
- [attributes](attributes.md): A dictionary of key-value pairs that describe the filter.
- [inputKeys](inputkeys.md): The names of all input parameters to the filter.
- [outputKeys](outputkeys.md): The names of all output parameters from the filter.
- [outputImage](outputimage.md): Returns a [CIImage](../ciimage.md) object that encapsulates the operations configured in the filter.
