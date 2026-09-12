> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/makeaccelerationstructurecommandencoder()](https://developer.apple.com/documentation/metal/mtlcommandbuffer/makeaccelerationstructurecommandencoder())

# makeAccelerationStructureCommandEncoder() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a ray-tracing acceleration structure command encoder that uses default settings.

## Declaration

```swift
func makeAccelerationStructureCommandEncoder() -> (any MTLAccelerationStructureCommandEncoder)?
```

<a id="discussion"></a>

## Discussion

Use an [MTLAccelerationStructureCommandEncoder](../mtlaccelerationstructurecommandencoder.md) instance’s methods to set up a single ray-tracing pass.

## See Also

### Creating acceleration structure encoders

- [makeAccelerationStructureCommandEncoder(descriptor:)](makeaccelerationstructurecommandencoder%28descriptor_%29.md): Creates a ray-tracing acceleration structure command encoder from a descriptor.

# accelerationStructureCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a ray-tracing acceleration structure command encoder that uses default settings.

## Declaration

```objectivec
- (id<MTLAccelerationStructureCommandEncoder>) accelerationStructureCommandEncoder;
```

<a id="discussion"></a>

## Discussion

Use an [MTLAccelerationStructureCommandEncoder](../mtlaccelerationstructurecommandencoder.md) instance’s methods to set up a single ray-tracing pass.

## See Also

### Creating acceleration structure encoders

- [accelerationStructureCommandEncoderWithDescriptor:](makeaccelerationstructurecommandencoder%28descriptor_%29.md): Creates a ray-tracing acceleration structure command encoder from a descriptor.
