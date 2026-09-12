> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpipelinebufferdescriptor/mutability](https://developer.apple.com/documentation/metal/mtlpipelinebufferdescriptor/mutability)

# mutability (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A mutability option that determines whether you can update a buffer’s contents before related commands use the buffer.

## Declaration

```swift
var mutability: MTLMutability { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [MTLMutability.default](../mtlmutability/default.md).

If you don’t explicitly declare mutability, Metal uses the following default behaviors:

- Regular buffers are mutable by default, and Metal treats [MTLMutability.default](../mtlmutability/default.md) as if it were [MTLMutability.mutable](../mtlmutability/mutable.md).
- Argument buffers are immutable by default, and Metal treats [MTLMutability.default](../mtlmutability/default.md) as if it were [MTLMutability.immutable](../mtlmutability/immutable.md).

## See Also

### Setting buffer mutability

- [MTLMutability](../mtlmutability.md): The options that determine the mutability of a buffer’s contents.

# mutability (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A mutability option that determines whether you can update a buffer’s contents before related commands use the buffer.

## Declaration

```objectivec
@property (nonatomic) MTLMutability mutability;
```

<a id="discussion"></a>

## Discussion

The default value is [MTLMutabilityDefault](../mtlmutability/default.md).

If you don’t explicitly declare mutability, Metal uses the following default behaviors:

- Regular buffers are mutable by default, and Metal treats [MTLMutabilityDefault](../mtlmutability/default.md) as if it were [MTLMutabilityMutable](../mtlmutability/mutable.md).
- Argument buffers are immutable by default, and Metal treats [MTLMutabilityDefault](../mtlmutability/default.md) as if it were [MTLMutabilityImmutable](../mtlmutability/immutable.md).

## See Also

### Setting buffer mutability

- [MTLMutability](../mtlmutability.md): The options that determine the mutability of a buffer’s contents.
