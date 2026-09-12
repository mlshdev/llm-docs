> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/makecomputecommandencoder(descriptor:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/makecomputecommandencoder(descriptor:))

# makeComputeCommandEncoder(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a compute command encoder from a descriptor.

## Declaration

```swift
func makeComputeCommandEncoder(descriptor computePassDescriptor: MTLComputePassDescriptor) -> (any MTLComputeCommandEncoder)?
```

## Parameters

- `computePassDescriptor`: An [MTLComputePassDescriptor](../mtlcomputepassdescriptor.md) instance that configures the [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

Use an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance’s methods to set up a single compute pass.

## See Also

### Creating compute encoders

- [makeComputeCommandEncoder()](makecomputecommandencoder%28%29.md): Creates a compute command encoder that uses default settings.
- [makeComputeCommandEncoder(dispatchType:)](makecomputecommandencoder%28dispatchtype_%29.md): Creates a compute command encoder with a dispatch type.
- [MTLDispatchType](../mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.

# computeCommandEncoderWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a compute command encoder from a descriptor.

## Declaration

```objectivec
- (id<MTLComputeCommandEncoder>) computeCommandEncoderWithDescriptor:(MTLComputePassDescriptor *) computePassDescriptor;
```

## Parameters

- `computePassDescriptor`: An [MTLComputePassDescriptor](../mtlcomputepassdescriptor.md) instance that configures the [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

Use an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance’s methods to set up a single compute pass.

## See Also

### Creating compute encoders

- [computeCommandEncoder](makecomputecommandencoder%28%29.md): Creates a compute command encoder that uses default settings.
- [computeCommandEncoderWithDispatchType:](makecomputecommandencoder%28dispatchtype_%29.md): Creates a compute command encoder with a dispatch type.
- [MTLDispatchType](../mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.
