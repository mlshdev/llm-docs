> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/makeaccelerationstructurecommandencoder(descriptor:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/makeaccelerationstructurecommandencoder(descriptor:))

# makeAccelerationStructureCommandEncoder(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a ray-tracing acceleration structure command encoder from a descriptor.

## Declaration

```swift
func makeAccelerationStructureCommandEncoder(descriptor: MTLAccelerationStructurePassDescriptor) -> any MTLAccelerationStructureCommandEncoder
```

## Parameters

- `descriptor`: An [MTLAccelerationStructurePassDescriptor](../mtlaccelerationstructurepassdescriptor.md) instance that configures the [MTLAccelerationStructureCommandEncoder](../mtlaccelerationstructurecommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

Use an [MTLAccelerationStructureCommandEncoder](../mtlaccelerationstructurecommandencoder.md) instance’s methods to set up a single ray-tracing pass.

## See Also

### Creating acceleration structure encoders

- [makeAccelerationStructureCommandEncoder()](makeaccelerationstructurecommandencoder%28%29.md): Creates a ray-tracing acceleration structure command encoder that uses default settings.

# accelerationStructureCommandEncoderWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a ray-tracing acceleration structure command encoder from a descriptor.

## Declaration

```objectivec
- (id<MTLAccelerationStructureCommandEncoder>) accelerationStructureCommandEncoderWithDescriptor:(MTLAccelerationStructurePassDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLAccelerationStructurePassDescriptor](../mtlaccelerationstructurepassdescriptor.md) instance that configures the [MTLAccelerationStructureCommandEncoder](../mtlaccelerationstructurecommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

Use an [MTLAccelerationStructureCommandEncoder](../mtlaccelerationstructurecommandencoder.md) instance’s methods to set up a single ray-tracing pass.

## See Also

### Creating acceleration structure encoders

- [accelerationStructureCommandEncoder](makeaccelerationstructurecommandencoder%28%29.md): Creates a ray-tracing acceleration structure command encoder that uses default settings.
