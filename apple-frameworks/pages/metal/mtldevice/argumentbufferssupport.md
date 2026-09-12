> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/argumentbufferssupport](https://developer.apple.com/documentation/metal/mtldevice/argumentbufferssupport)

# argumentBuffersSupport (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns the GPU device’s support tier for argument buffers.

## Declaration

```swift
var argumentBuffersSupport: MTLArgumentBuffersTier { get }
```

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

## Topics

### Argument buffer tiers

- [MTLArgumentBuffersTier](../mtlargumentbufferstier.md): The values that determine the limits and capabilities of argument buffers.

## See Also

### Creating argument buffer encoders

- [maxArgumentBufferSamplerCount](maxargumentbuffersamplercount.md): The maximum number of unique argument buffer samplers per app.
- [makeArgumentEncoder(arguments:)](makeargumentencoder%28arguments_%29.md): Creates a new argument encoder for an array of arguments.
- [makeArgumentEncoder(bufferBinding:)](makeargumentencoder%28bufferbinding_%29.md): Creates a new argument encoder for a buffer binding.

# argumentBuffersSupport (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns the GPU device’s support tier for argument buffers.

## Declaration

```objectivec
@property (readonly) MTLArgumentBuffersTier argumentBuffersSupport;
```

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

## Topics

### Argument buffer tiers

- [MTLArgumentBuffersTier](../mtlargumentbufferstier.md): The values that determine the limits and capabilities of argument buffers.

## See Also

### Creating argument buffer encoders

- [maxArgumentBufferSamplerCount](maxargumentbuffersamplercount.md): The maximum number of unique argument buffer samplers per app.
- [newArgumentEncoderWithArguments:](makeargumentencoder%28arguments_%29.md): Creates a new argument encoder for an array of arguments.
- [newArgumentEncoderWithBufferBinding:](makeargumentencoder%28bufferbinding_%29.md): Creates a new argument encoder for a buffer binding.
