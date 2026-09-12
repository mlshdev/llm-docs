> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuregeometrydescriptor/label](https://developer.apple.com/documentation/metal/mtlaccelerationstructuregeometrydescriptor/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A label for the geometry structure, suitable for debugging.

## Declaration

```swift
var label: String? { get set }
```

## See Also

### Specifying base geometry properties

- [intersectionFunctionTableOffset](intersectionfunctiontableoffset.md): An index into the intersection table for determining which intersection function Metal calls when it intersects a ray with the acceleration structure.
- [opaque](opaque.md): A Boolean value that determines whether the geometry data in the acceleration structure needs to skip triangle-intersection tests.
- [allowDuplicateIntersectionFunctionInvocation](allowduplicateintersectionfunctioninvocation.md): A Boolean value that indicates whether Metal calls the ray-intersection test more than once per primitive on the structure.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

A label for the geometry structure, suitable for debugging.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * label;
```

## See Also

### Specifying base geometry properties

- [intersectionFunctionTableOffset](intersectionfunctiontableoffset.md): An index into the intersection table for determining which intersection function Metal calls when it intersects a ray with the acceleration structure.
- [opaque](opaque.md): A Boolean value that determines whether the geometry data in the acceleration structure needs to skip triangle-intersection tests.
- [allowDuplicateIntersectionFunctionInvocation](allowduplicateintersectionfunctioninvocation.md): A Boolean value that indicates whether Metal calls the ray-intersection test more than once per primitive on the structure.
