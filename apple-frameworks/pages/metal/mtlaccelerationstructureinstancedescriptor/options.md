> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureinstancedescriptor/options](https://developer.apple.com/documentation/metal/mtlaccelerationstructureinstancedescriptor/options)

# options (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The options for the instance.

## Declaration

```swift
var options: MTLAccelerationStructureInstanceOptions
```

## See Also

### Customizing intersection and hit tests for the instance

- [intersectionFunctionTableOffset](intersectionfunctiontableoffset.md): An offset for determining which function in the intersection function table Metal needs to call when testing a ray against the instance.
- [mask](mask.md): A mask to use for the instance when testing a ray against the geometry.

# options (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The options for the instance.

## Declaration

```objectivec
MTLAccelerationStructureInstanceOptions options;
```

## See Also

### Customizing intersection and hit tests for the instance

- [intersectionFunctionTableOffset](intersectionfunctiontableoffset.md): An offset for determining which function in the intersection function table Metal needs to call when testing a ray against the instance.
- [mask](mask.md): A mask to use for the instance when testing a ray against the geometry.
