> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphsdpadescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphsdpadescriptor)

# MPSGraphSDPADescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A descriptor that configures a scaled dot product attention (SDPA) operation.

## Declaration

```swift
class MPSGraphSDPADescriptor
```

<a id="overview"></a>

## Overview

Use this descriptor with [scaledDotProductAttention(query:key:value:descriptor:name:)](mpsgraph/scaleddotproductattention%28query_key_value_descriptor_name_%29.md) to specify optional features such as an attention mask, causal masking, and attention sinks.

## Topics

### Initializers

- [init(scale:)](mpsgraphsdpadescriptor/init%28scale_%29.md): Creates a descriptor with the given scale and all other properties set to their defaults (no mask, isCausal = NO, no sinks).

### Instance Properties

- [isCausal](mpsgraphsdpadescriptor/iscausal.md): When YES, a causal (lower-triangular) mask is applied so that each query position attends only to key positions at or before it. Mutually exclusive with [maskTensor](mpsgraphsdpadescriptor/masktensor.md).
- [maskTensor](mpsgraphsdpadescriptor/masktensor.md): An optional additive mask tensor applied to the scaled QK^T scores before softmax. Must be broadcast-compatible with shape `[batch, heads, T_q, T_kv]`. Mutually exclusive with [isCausal](mpsgraphsdpadescriptor/iscausal.md).
- [scale](mpsgraphsdpadescriptor/scale.md): The scale applied to the result of the query–key matrix multiply before softmax. Typically set to `1/sqrt(headDimension)`.
- [sinksTensor](mpsgraphsdpadescriptor/sinkstensor.md): An optional attention-sinks tensor of shape `[nHeads]`. Each element seeds the online-softmax accumulator for the corresponding query head with a virtual token logit, causing real-token attention weights to sum to less than one.

## Relationships

### Inherits From

- [MPSGraphObject](mpsgraphobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MPSGraphSDPADescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A descriptor that configures a scaled dot product attention (SDPA) operation.

## Declaration

```objectivec
@interface MPSGraphSDPADescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

Use this descriptor with [scaledDotProductAttentionWithQueryTensor:keyTensor:valueTensor:descriptor:name:](mpsgraph/scaleddotproductattention%28query_key_value_descriptor_name_%29.md) to specify optional features such as an attention mask, causal masking, and attention sinks.

## Topics

### Instance Properties

- [isCausal](mpsgraphsdpadescriptor/iscausal.md): When YES, a causal (lower-triangular) mask is applied so that each query position attends only to key positions at or before it. Mutually exclusive with [maskTensor](mpsgraphsdpadescriptor/masktensor.md).
- [maskTensor](mpsgraphsdpadescriptor/masktensor.md): An optional additive mask tensor applied to the scaled QK^T scores before softmax. Must be broadcast-compatible with shape `[batch, heads, T_q, T_kv]`. Mutually exclusive with [isCausal](mpsgraphsdpadescriptor/iscausal.md).
- [scale](mpsgraphsdpadescriptor/scale.md): The scale applied to the result of the query–key matrix multiply before softmax. Typically set to `1/sqrt(headDimension)`.
- [sinksTensor](mpsgraphsdpadescriptor/sinkstensor.md): An optional attention-sinks tensor of shape `[nHeads]`. Each element seeds the online-softmax accumulator for the corresponding query head with a virtual token logit, causing real-token attention weights to sum to less than one.

### Type Methods

- [descriptorWithScale:](mpsgraphsdpadescriptor/init%28scale_%29.md): Creates a descriptor with the given scale and all other properties set to their defaults (no mask, isCausal = NO, no sinks).

## Relationships

### Inherits From

- [MPSGraphObject](mpsgraphobject.md)
