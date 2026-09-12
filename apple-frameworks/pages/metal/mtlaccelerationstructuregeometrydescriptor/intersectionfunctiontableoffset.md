> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuregeometrydescriptor/intersectionfunctiontableoffset](https://developer.apple.com/documentation/metal/mtlaccelerationstructuregeometrydescriptor/intersectionfunctiontableoffset)

# intersectionFunctionTableOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An index into the intersection table for determining which intersection function Metal calls when it intersects a ray with the acceleration structure.

## Declaration

```swift
var intersectionFunctionTableOffset: Int { get set }
```

## See Also

### Specifying base geometry properties

- [label](label.md): A label for the geometry structure, suitable for debugging.
- [opaque](opaque.md): A Boolean value that determines whether the geometry data in the acceleration structure needs to skip triangle-intersection tests.
- [allowDuplicateIntersectionFunctionInvocation](allowduplicateintersectionfunctioninvocation.md): A Boolean value that indicates whether Metal calls the ray-intersection test more than once per primitive on the structure.

# intersectionFunctionTableOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An index into the intersection table for determining which intersection function Metal calls when it intersects a ray with the acceleration structure.

## Declaration

```objectivec
@property (nonatomic) NSUInteger intersectionFunctionTableOffset;
```

## See Also

### Specifying base geometry properties

- [label](label.md): A label for the geometry structure, suitable for debugging.
- [opaque](opaque.md): A Boolean value that determines whether the geometry data in the acceleration structure needs to skip triangle-intersection tests.
- [allowDuplicateIntersectionFunctionInvocation](allowduplicateintersectionfunctioninvocation.md): A Boolean value that indicates whether Metal calls the ray-intersection test more than once per primitive on the structure.
