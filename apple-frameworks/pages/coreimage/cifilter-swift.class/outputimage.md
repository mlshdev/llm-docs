> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/outputimage](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/outputimage)

# outputImage (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Returns a [CIImage](../ciimage.md) object that encapsulates the operations configured in the filter.

## Declaration

```swift
var outputImage: CIImage? { get }
```

## See Also

### Getting filter parameters and attributes

- [name](name.md): A name associated with a filter.
- [isEnabled](isenabled.md): A Boolean value that determines whether the filter is enabled. Animatable.
- [attributes](attributes.md): A dictionary of key-value pairs that describe the filter.
- [inputKeys](inputkeys.md): The names of all input parameters to the filter.
- [outputKeys](outputkeys.md): The names of all output parameters from the filter.

# outputImage (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

Returns a [CIImage](../ciimage.md) object that encapsulates the operations configured in the filter.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CIImage * outputImage;
```

## See Also

### Getting filter parameters and attributes

- [name](name.md): A name associated with a filter.
- [enabled](isenabled.md): A Boolean value that determines whether the filter is enabled. Animatable.
- [attributes](attributes.md): A dictionary of key-value pairs that describe the filter.
- [inputKeys](inputkeys.md): The names of all input parameters to the filter.
- [outputKeys](outputkeys.md): The names of all output parameters from the filter.
