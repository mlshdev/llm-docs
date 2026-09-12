> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makeargumentencoder(bufferbinding:)](https://developer.apple.com/documentation/metal/mtldevice/makeargumentencoder(bufferbinding:))

# makeArgumentEncoder(bufferBinding:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new argument encoder for a buffer binding.

## Declaration

```swift
func makeArgumentEncoder(bufferBinding: any MTLBufferBinding) -> any MTLArgumentEncoder
```

## Parameters

- `bufferBinding`: An [MTLBufferBinding](../mtlbufferbinding.md) instance.

## See Also

### Creating argument buffer encoders

- [argumentBuffersSupport](argumentbufferssupport.md): Returns the GPU device’s support tier for argument buffers.
- [maxArgumentBufferSamplerCount](maxargumentbuffersamplercount.md): The maximum number of unique argument buffer samplers per app.
- [makeArgumentEncoder(arguments:)](makeargumentencoder%28arguments_%29.md): Creates a new argument encoder for an array of arguments.

# newArgumentEncoderWithBufferBinding: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new argument encoder for a buffer binding.

## Declaration

```objectivec
- (id<MTLArgumentEncoder>) newArgumentEncoderWithBufferBinding:(id<MTLBufferBinding>) bufferBinding;
```

## Parameters

- `bufferBinding`: An [MTLBufferBinding](../mtlbufferbinding.md) instance.

## See Also

### Creating argument buffer encoders

- [argumentBuffersSupport](argumentbufferssupport.md): Returns the GPU device’s support tier for argument buffers.
- [maxArgumentBufferSamplerCount](maxargumentbuffersamplercount.md): The maximum number of unique argument buffer samplers per app.
- [newArgumentEncoderWithArguments:](makeargumentencoder%28arguments_%29.md): Creates a new argument encoder for an array of arguments.
