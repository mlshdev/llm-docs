> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuregeometrydescriptor/opaque](https://developer.apple.com/documentation/metal/mtlaccelerationstructuregeometrydescriptor/opaque)

# opaque (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that determines whether the geometry data in the acceleration structure needs to skip triangle-intersection tests.

## Declaration

```swift
var opaque: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default, after Metal finds an intersection between a ray and a primitive, it runs your specified intersection function to determine whether the ray actually hit the primitive. If you specify that triangle geometry is opaque, Metal skips the intersection function and processes any intersection as a hit.

If you are using bounding box geometry, Metal calls your intersection function, passing a Boolean value that indicates that the bounding box that the ray intersected with is opaque.

## See Also

### Specifying base geometry properties

- [label](label.md): A label for the geometry structure, suitable for debugging.
- [intersectionFunctionTableOffset](intersectionfunctiontableoffset.md): An index into the intersection table for determining which intersection function Metal calls when it intersects a ray with the acceleration structure.
- [allowDuplicateIntersectionFunctionInvocation](allowduplicateintersectionfunctioninvocation.md): A Boolean value that indicates whether Metal calls the ray-intersection test more than once per primitive on the structure.

# opaque (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that determines whether the geometry data in the acceleration structure needs to skip triangle-intersection tests.

## Declaration

```objectivec
@property (nonatomic) BOOL opaque;
```

<a id="discussion"></a>

## Discussion

By default, after Metal finds an intersection between a ray and a primitive, it runs your specified intersection function to determine whether the ray actually hit the primitive. If you specify that triangle geometry is opaque, Metal skips the intersection function and processes any intersection as a hit.

If you are using bounding box geometry, Metal calls your intersection function, passing a Boolean value that indicates that the bounding box that the ray intersected with is opaque.

## See Also

### Specifying base geometry properties

- [label](label.md): A label for the geometry structure, suitable for debugging.
- [intersectionFunctionTableOffset](intersectionfunctiontableoffset.md): An index into the intersection table for determining which intersection function Metal calls when it intersects a ray with the acceleration structure.
- [allowDuplicateIntersectionFunctionInvocation](allowduplicateintersectionfunctioninvocation.md): A Boolean value that indicates whether Metal calls the ray-intersection test more than once per primitive on the structure.
