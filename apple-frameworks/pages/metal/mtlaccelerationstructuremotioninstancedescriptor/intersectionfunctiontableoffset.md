> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuremotioninstancedescriptor/intersectionfunctiontableoffset](https://developer.apple.com/documentation/metal/mtlaccelerationstructuremotioninstancedescriptor/intersectionfunctiontableoffset)

# intersectionFunctionTableOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An offset into the intersection-function table for ray tracing, which applies to the next acceleration-structure motion instance you create with the descriptor.

## Declaration

```swift
var intersectionFunctionTableOffset: UInt32
```

<a id="discussion"></a>

## Discussion

By default, after Metal finds an intersection between a ray and a primitive, it runs your specified intersection function to determine whether the ray actually hit the primitive. To determine which function in the intersection table to call, Metal adds this property to the value specified in the instance’s [intersectionFunctionTableOffset](../mtlaccelerationstructuregeometrydescriptor/intersectionfunctiontableoffset.md), and looks up the entry at that index.

## See Also

### Customizing intersection and hit tests for the instance

- [options](options.md): An option set which applies to the next acceleration structure motion-instance you create with the descriptor.
- [mask](mask.md): A mask for testing ray-tracing rays with a scene’s geometry, which applies to the next acceleration-structure motion instance you create with the descriptor.

# intersectionFunctionTableOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An offset into the intersection-function table for ray tracing, which applies to the next acceleration-structure motion instance you create with the descriptor.

## Declaration

```objectivec
uint32_t intersectionFunctionTableOffset;
```

<a id="discussion"></a>

## Discussion

By default, after Metal finds an intersection between a ray and a primitive, it runs your specified intersection function to determine whether the ray actually hit the primitive. To determine which function in the intersection table to call, Metal adds this property to the value specified in the instance’s [intersectionFunctionTableOffset](../mtlaccelerationstructuregeometrydescriptor/intersectionfunctiontableoffset.md), and looks up the entry at that index.

## See Also

### Customizing intersection and hit tests for the instance

- [options](options.md): An option set which applies to the next acceleration structure motion-instance you create with the descriptor.
- [mask](mask.md): A mask for testing ray-tracing rays with a scene’s geometry, which applies to the next acceleration-structure motion instance you create with the descriptor.
