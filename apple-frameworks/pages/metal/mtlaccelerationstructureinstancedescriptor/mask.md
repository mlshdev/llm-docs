> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureinstancedescriptor/mask](https://developer.apple.com/documentation/metal/mtlaccelerationstructureinstancedescriptor/mask)

# mask (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A mask to use for the instance when testing a ray against the geometry.

## Declaration

```swift
var mask: UInt32
```

<a id="discussion"></a>

## Discussion

Metal reserves the top 24 bits for future use.

## See Also

### Customizing intersection and hit tests for the instance

- [intersectionFunctionTableOffset](intersectionfunctiontableoffset.md): An offset for determining which function in the intersection function table Metal needs to call when testing a ray against the instance.
- [options](options.md): The options for the instance.

# mask (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A mask to use for the instance when testing a ray against the geometry.

## Declaration

```objectivec
uint32_t mask;
```

<a id="discussion"></a>

## Discussion

Metal reserves the top 24 bits for future use.

## See Also

### Customizing intersection and hit tests for the instance

- [intersectionFunctionTableOffset](intersectionfunctiontableoffset.md): An offset for determining which function in the intersection function table Metal needs to call when testing a ray against the instance.
- [options](options.md): The options for the instance.
