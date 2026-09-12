> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/setimageblocksize(width:height:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/setimageblocksize(width:height:))

# setImageblockSize(width:height:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the size, in pixels, of imageblock data in tile memory.

## Declaration

```swift
func setImageblockSize(width: Int, height: Int)
```

## Parameters

- `width`: The width of the imageblock, in pixels.
- `height`: The height of the imageblock, in pixels.

## See Also

### Configuring the pass

- [setComputePipelineState(\_:)](setcomputepipelinestate%28__%29.md): Configures this encoder with a compute pipeline state that applies to your subsequent dispatch commands.
- [setArgumentTable(\_:)](setargumenttable%28__%29.md): Sets an argument table for the compute shader stage of this pipeline.
- [setThreadgroupMemoryLength(\_:index:)](setthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the compute shader function.

# setImageblockWidth:height: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the size, in pixels, of imageblock data in tile memory.

## Declaration

```objectivec
- (void) setImageblockWidth:(NSUInteger) width height:(NSUInteger) height;
```

## Parameters

- `width`: The width of the imageblock, in pixels.
- `height`: The height of the imageblock, in pixels.

## See Also

### Configuring the pass

- [setComputePipelineState:](setcomputepipelinestate%28__%29.md): Configures this encoder with a compute pipeline state that applies to your subsequent dispatch commands.
- [setArgumentTable:](setargumenttable%28__%29.md): Sets an argument table for the compute shader stage of this pipeline.
- [setThreadgroupMemoryLength:atIndex:](setthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the compute shader function.
