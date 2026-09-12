> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendertarget/descriptorset](https://developer.apple.com/documentation/realitykit/lowlevelrendertarget/descriptorset)

# LowLevelRenderTarget.DescriptorSet

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An unordered set of render target descriptors that defines the output format combination a pipeline state or mesh instance array is compatible with.

## Declaration

```swift
struct DescriptorSet
```

<a id="overview"></a>

## Overview

`DescriptorSet` conforms to `ExpressibleByArrayLiteral`, so you can initialize it directly with an array literal of [LowLevelRenderTarget.Descriptor](descriptor.md) values.

## Topics

### Creating a descriptor set

- [init(arrayLiteral:)](descriptorset/init%28arrayliteral_%29.md): Creates a descriptor set from an array literal of render target descriptors.

### Initializers

- [init(\_:)](descriptorset/init%28__%29.md): Creates a descriptor set from an array of render target descriptors.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing the render target

- [LowLevelRenderTarget.Descriptor](descriptor.md): A color and depth pixel format combination for a render pass.
