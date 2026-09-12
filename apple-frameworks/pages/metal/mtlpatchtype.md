> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpatchtype](https://developer.apple.com/documentation/metal/mtlpatchtype)

# MTLPatchType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Types of tessellation patches that can be inputs of a post-tessellation vertex function.

## Declaration

```swift
enum MTLPatchType
```

## Topics

### Patch types

- [MTLPatchType.none](mtlpatchtype/none.md): An option that indicates that this isn’t a post-tessellation vertex function.
- [MTLPatchType.triangle](mtlpatchtype/triangle.md): A triangle patch.
- [MTLPatchType.quad](mtlpatchtype/quad.md): A quad patch.

### Initializers

- [init(rawValue:)](mtlpatchtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the tessellation patch

- [patchType](mtlfunction/patchtype.md): The tessellation patch type of a post-tessellation vertex function.
- [patchControlPointCount](mtlfunction/patchcontrolpointcount.md): The number of patch control points in the post-tessellation vertex function.

# MTLPatchType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Types of tessellation patches that can be inputs of a post-tessellation vertex function.

## Declaration

```objectivec
enum MTLPatchType : NSUInteger;
```

## Topics

### Patch types

- [MTLPatchTypeNone](mtlpatchtype/none.md): An option that indicates that this isn’t a post-tessellation vertex function.
- [MTLPatchTypeTriangle](mtlpatchtype/triangle.md): A triangle patch.
- [MTLPatchTypeQuad](mtlpatchtype/quad.md): A quad patch.

## See Also

### Identifying the tessellation patch

- [patchType](mtlfunction/patchtype.md): The tessellation patch type of a post-tessellation vertex function.
- [patchControlPointCount](mtlfunction/patchcontrolpointcount.md): The number of patch control points in the post-tessellation vertex function.
