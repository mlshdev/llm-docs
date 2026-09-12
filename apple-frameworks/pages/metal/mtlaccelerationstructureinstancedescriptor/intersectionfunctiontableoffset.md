> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureinstancedescriptor/intersectionfunctiontableoffset](https://developer.apple.com/documentation/metal/mtlaccelerationstructureinstancedescriptor/intersectionfunctiontableoffset)

# intersectionFunctionTableOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An offset for determining which function in the intersection function table Metal needs to call when testing a ray against the instance.

## Declaration

```swift
var intersectionFunctionTableOffset: UInt32
```

<a id="discussion"></a>

## Discussion

By default, after Metal finds an intersection between a ray and a primitive, it runs your specified intersection function to determine whether the ray actually hit the primitive. To determine which function in the intersection table to call, Metal adds this property to the value in the instance’s [intersectionFunctionTableOffset](../mtlaccelerationstructuregeometrydescriptor/intersectionfunctiontableoffset.md), and looks up the entry at that index.

## See Also

### Customizing intersection and hit tests for the instance

- [options](options.md): The options for the instance.
- [mask](mask.md): A mask to use for the instance when testing a ray against the geometry.

# intersectionFunctionTableOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An offset for determining which function in the intersection function table Metal needs to call when testing a ray against the instance.

## Declaration

```objectivec
uint32_t intersectionFunctionTableOffset;
```

<a id="discussion"></a>

## Discussion

By default, after Metal finds an intersection between a ray and a primitive, it runs your specified intersection function to determine whether the ray actually hit the primitive. To determine which function in the intersection table to call, Metal adds this property to the value in the instance’s [intersectionFunctionTableOffset](../mtlaccelerationstructuregeometrydescriptor/intersectionfunctiontableoffset.md), and looks up the entry at that index.

## See Also

### Customizing intersection and hit tests for the instance

- [options](options.md): The options for the instance.
- [mask](mask.md): A mask to use for the instance when testing a ray against the geometry.
