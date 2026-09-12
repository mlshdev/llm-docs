> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makeargumentencoder(arguments:)](https://developer.apple.com/documentation/metal/mtldevice/makeargumentencoder(arguments:))

# makeArgumentEncoder(arguments:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new argument encoder for an array of arguments.

## Declaration

```swift
func makeArgumentEncoder(arguments: [MTLArgumentDescriptor]) -> (any MTLArgumentEncoder)?
```

## Parameters

- `arguments`: An array of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances that you need to sort by their [index](../mtlargumentdescriptor/index.md) properties in monotonically increasing order.

## See Also

### Creating argument buffer encoders

- [argumentBuffersSupport](argumentbufferssupport.md): Returns the GPU device’s support tier for argument buffers.
- [maxArgumentBufferSamplerCount](maxargumentbuffersamplercount.md): The maximum number of unique argument buffer samplers per app.
- [makeArgumentEncoder(bufferBinding:)](makeargumentencoder%28bufferbinding_%29.md): Creates a new argument encoder for a buffer binding.

# newArgumentEncoderWithArguments: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new argument encoder for an array of arguments.

## Declaration

```objectivec
- (id<MTLArgumentEncoder>) newArgumentEncoderWithArguments:(NSArray<MTLArgumentDescriptor *> *) arguments;
```

## Parameters

- `arguments`: An array of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances that you need to sort by their [index](../mtlargumentdescriptor/index.md) properties in monotonically increasing order.

## See Also

### Creating argument buffer encoders

- [argumentBuffersSupport](argumentbufferssupport.md): Returns the GPU device’s support tier for argument buffers.
- [maxArgumentBufferSamplerCount](maxargumentbuffersamplercount.md): The maximum number of unique argument buffer samplers per app.
- [newArgumentEncoderWithBufferBinding:](makeargumentencoder%28bufferbinding_%29.md): Creates a new argument encoder for a buffer binding.
