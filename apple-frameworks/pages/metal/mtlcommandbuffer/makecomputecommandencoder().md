> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/makecomputecommandencoder()](https://developer.apple.com/documentation/metal/mtlcommandbuffer/makecomputecommandencoder())

# makeComputeCommandEncoder() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a compute command encoder that uses default settings.

## Declaration

```swift
func makeComputeCommandEncoder() -> (any MTLComputeCommandEncoder)?
```

<a id="discussion"></a>

## Discussion

Use an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance’s methods to set up a single compute pass. The encoder this method returns dispatches its compute commands serially (see [MTLDispatchType.serial](../mtldispatchtype/serial.md)). To create a compute command encoder that dispatches commands concurrently (see [MTLDispatchType.concurrent](../mtldispatchtype/concurrent.md)), use the [makeComputeCommandEncoder(dispatchType:)](makecomputecommandencoder%28dispatchtype_%29.md) or [makeComputeCommandEncoder(descriptor:)](makecomputecommandencoder%28descriptor_%29.md) method.

## See Also

### Creating compute encoders

- [makeComputeCommandEncoder(descriptor:)](makecomputecommandencoder%28descriptor_%29.md): Creates a compute command encoder from a descriptor.
- [makeComputeCommandEncoder(dispatchType:)](makecomputecommandencoder%28dispatchtype_%29.md): Creates a compute command encoder with a dispatch type.
- [MTLDispatchType](../mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.

# computeCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a compute command encoder that uses default settings.

## Declaration

```objectivec
- (id<MTLComputeCommandEncoder>) computeCommandEncoder;
```

<a id="discussion"></a>

## Discussion

Use an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance’s methods to set up a single compute pass. The encoder this method returns dispatches its compute commands serially (see [MTLDispatchTypeSerial](../mtldispatchtype/serial.md)). To create a compute command encoder that dispatches commands concurrently (see [MTLDispatchTypeConcurrent](../mtldispatchtype/concurrent.md)), use the [computeCommandEncoderWithDispatchType:](makecomputecommandencoder%28dispatchtype_%29.md) or [computeCommandEncoderWithDescriptor:](makecomputecommandencoder%28descriptor_%29.md) method.

## See Also

### Creating compute encoders

- [computeCommandEncoderWithDescriptor:](makecomputecommandencoder%28descriptor_%29.md): Creates a compute command encoder from a descriptor.
- [computeCommandEncoderWithDispatchType:](makecomputecommandencoder%28dispatchtype_%29.md): Creates a compute command encoder with a dispatch type.
- [MTLDispatchType](../mtldispatchtype.md): The type of dispatch method to use when calling encoded functions.
