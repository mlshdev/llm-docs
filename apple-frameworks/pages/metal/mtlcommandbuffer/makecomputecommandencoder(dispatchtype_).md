> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/makecomputecommandencoder(dispatchtype:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/makecomputecommandencoder(dispatchtype:))

# makeComputeCommandEncoder(dispatchType:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates a compute command encoder with a dispatch type.

## Declaration

```swift
func makeComputeCommandEncoder(dispatchType: MTLDispatchType) -> (any MTLComputeCommandEncoder)?
```

## Parameters

- `dispatchType`: An [MTLDispatchType](../mtldispatchtype.md) instance that indicates whether the compute pass the encoder creates runs commands serially or concurrently.

<a id="discussion"></a>

## Discussion

Use an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance’s methods to set up a single compute pass.

## See Also

### Creating compute encoders

- [makeComputeCommandEncoder(descriptor:)](makecomputecommandencoder%28descriptor_%29.md): Creates a compute command encoder from a descriptor.
- [makeComputeCommandEncoder()](makecomputecommandencoder%28%29.md): Creates a compute command encoder that uses default settings.
- [MTLDispatchType](../mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.

# computeCommandEncoderWithDispatchType: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Creates a compute command encoder with a dispatch type.

## Declaration

```objectivec
- (id<MTLComputeCommandEncoder>) computeCommandEncoderWithDispatchType:(MTLDispatchType) dispatchType;
```

## Parameters

- `dispatchType`: An [MTLDispatchType](../mtldispatchtype.md) instance that indicates whether the compute pass the encoder creates runs commands serially or concurrently.

<a id="discussion"></a>

## Discussion

Use an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance’s methods to set up a single compute pass.

## See Also

### Creating compute encoders

- [computeCommandEncoderWithDescriptor:](makecomputecommandencoder%28descriptor_%29.md): Creates a compute command encoder from a descriptor.
- [computeCommandEncoder](makecomputecommandencoder%28%29.md): Creates a compute command encoder that uses default settings.
- [MTLDispatchType](../mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.
