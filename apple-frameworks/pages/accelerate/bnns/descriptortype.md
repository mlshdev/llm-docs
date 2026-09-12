> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/descriptortype](https://developer.apple.com/documentation/accelerate/bnns/descriptortype)

# BNNS.DescriptorType

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Constants that describe the input and output types of an arithmetic operation.

> Use the BNNSGraph API instead.

## Declaration

```swift
enum DescriptorType
```

## Topics

### Descriptor Types

- [BNNS.DescriptorType.constant](descriptortype/constant.md): Deprecated. A constant that doesn’t have a gradient.
- [BNNS.DescriptorType.parameter](descriptortype/parameter.md): Deprecated. A parameter that’s trainable, such as weights or bias.
- [BNNS.DescriptorType.sample](descriptortype/sample.md): Deprecated. A sample such as input or output.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
