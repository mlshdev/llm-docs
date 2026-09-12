> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlmutability](https://developer.apple.com/documentation/metal/mtlmutability)

# MTLMutability (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The options that determine the mutability of a buffer’s contents.

## Declaration

```swift
enum MTLMutability
```

## Topics

### Enumeration cases

- [MTLMutability.default](mtlmutability/default.md): The default behavior, based on the buffer’s type.
- [MTLMutability.mutable](mtlmutability/mutable.md): An option that states that you can modify the buffer’s contents.
- [MTLMutability.immutable](mtlmutability/immutable.md): An option that states that you can’t modify the buffer’s contents.

### Initializers

- [init(rawValue:)](mtlmutability/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting buffer mutability

- [mutability](mtlpipelinebufferdescriptor/mutability.md): A mutability option that determines whether you can update a buffer’s contents before related commands use the buffer.

# MTLMutability (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The options that determine the mutability of a buffer’s contents.

## Declaration

```objectivec
enum MTLMutability : NSUInteger;
```

## Topics

### Enumeration cases

- [MTLMutabilityDefault](mtlmutability/default.md): The default behavior, based on the buffer’s type.
- [MTLMutabilityMutable](mtlmutability/mutable.md): An option that states that you can modify the buffer’s contents.
- [MTLMutabilityImmutable](mtlmutability/immutable.md): An option that states that you can’t modify the buffer’s contents.

## See Also

### Setting buffer mutability

- [mutability](mtlpipelinebufferdescriptor/mutability.md): A mutability option that determines whether you can update a buffer’s contents before related commands use the buffer.
