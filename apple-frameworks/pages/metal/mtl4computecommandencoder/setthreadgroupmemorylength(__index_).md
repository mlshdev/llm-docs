> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/setthreadgroupmemorylength(_:index:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/setthreadgroupmemorylength(_:index:))

# setThreadgroupMemoryLength(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the size of a threadgroup memory buffer for a threadgroup argument in the compute shader function.

## Declaration

```swift
func setThreadgroupMemoryLength(_ length: Int, index: Int)
```

## Parameters

- `length`: The size of the threadgroup memory, in bytes. Use a multiple of `16` bytes.
- `index`: An integer that corresponds to the index of the argument you annotate with attribute `[[threadgroup(index)]]` in the shader function.

## See Also

### Configuring the pass

- [setComputePipelineState(\_:)](setcomputepipelinestate%28__%29.md): Configures this encoder with a compute pipeline state that applies to your subsequent dispatch commands.
- [setArgumentTable(\_:)](setargumenttable%28__%29.md): Sets an argument table for the compute shader stage of this pipeline.
- [setImageblockSize(width:height:)](setimageblocksize%28width_height_%29.md): Specifies the size, in pixels, of imageblock data in tile memory.

# setThreadgroupMemoryLength:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the size of a threadgroup memory buffer for a threadgroup argument in the compute shader function.

## Declaration

```objectivec
- (void) setThreadgroupMemoryLength:(NSUInteger) length atIndex:(NSUInteger) index;
```

## Parameters

- `length`: The size of the threadgroup memory, in bytes. Use a multiple of `16` bytes.
- `index`: An integer that corresponds to the index of the argument you annotate with attribute `[[threadgroup(index)]]` in the shader function.

## See Also

### Configuring the pass

- [setComputePipelineState:](setcomputepipelinestate%28__%29.md): Configures this encoder with a compute pipeline state that applies to your subsequent dispatch commands.
- [setArgumentTable:](setargumenttable%28__%29.md): Sets an argument table for the compute shader stage of this pipeline.
- [setImageblockWidth:height:](setimageblocksize%28width_height_%29.md): Specifies the size, in pixels, of imageblock data in tile memory.
