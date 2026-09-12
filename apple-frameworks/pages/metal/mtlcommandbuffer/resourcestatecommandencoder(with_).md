> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/resourcestatecommandencoder(with:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/resourcestatecommandencoder(with:))

# resourceStateCommandEncoder(with:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a resource state command encoder from a descriptor.

## Declaration

```swift
func resourceStateCommandEncoder(with resourceStatePassDescriptor: MTLResourceStatePassDescriptor) -> (any MTLResourceStateCommandEncoder)?
```

## Parameters

- `resourceStatePassDescriptor`: An [MTLResourceStatePassDescriptor](../mtlresourcestatepassdescriptor.md) instance that configures the [MTLResourceStateCommandEncoder](../mtlresourcestatecommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

Use an [MTLResourceStateCommandEncoder](../mtlresourcestatecommandencoder.md) instance’s methods to create a pass that updates the state of one or more sparse textures.

## See Also

### Creating resource state encoders

- [makeResourceStateCommandEncoder()](makeresourcestatecommandencoder%28%29.md): Creates a resource state command encoder that uses default settings.

# resourceStateCommandEncoderWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a resource state command encoder from a descriptor.

## Declaration

```objectivec
- (id<MTLResourceStateCommandEncoder>) resourceStateCommandEncoderWithDescriptor:(MTLResourceStatePassDescriptor *) resourceStatePassDescriptor;
```

## Parameters

- `resourceStatePassDescriptor`: An [MTLResourceStatePassDescriptor](../mtlresourcestatepassdescriptor.md) instance that configures the [MTLResourceStateCommandEncoder](../mtlresourcestatecommandencoder.md) the method returns.

<a id="discussion"></a>

## Discussion

Use an [MTLResourceStateCommandEncoder](../mtlresourcestatecommandencoder.md) instance’s methods to create a pass that updates the state of one or more sparse textures.

## See Also

### Creating resource state encoders

- [resourceStateCommandEncoder](makeresourcestatecommandencoder%28%29.md): Creates a resource state command encoder that uses default settings.
