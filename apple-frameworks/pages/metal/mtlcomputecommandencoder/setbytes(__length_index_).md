> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setbytes(_:length:index:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setbytes(_:length:index:))

# setBytes(\_:length:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Copies data directly to the GPU to populate an entry in the buffer argument table.

## Declaration

```swift
func setBytes(_ bytes: UnsafeRawPointer, length: Int, index: Int)
```

## Parameters

- `bytes`: A pointer to where the data to copy starts.
- `length`: The number of bytes to copy.
- `index`: The index the data binds to in the argument table.

<a id="discussion"></a>

## Discussion

> **Important**

>  This method only works for data smaller than 4 kilobytes that doesn’t persist. Create an [MTLBuffer](../mtlbuffer.md) instance if your data exceeds 4 KB, needs to persist on the GPU, or you access results on the CPU.

This method allows Metal to copy data efficiently onto the GPU without the need for your own buffer. Binding data directly can improve performance, especially when making many small allocations.

## See Also

### Binding raw bytes

- [setBytes(\_:length:attributeStride:index:)](setbytes%28__length_attributestride_index_%29.md): Copies data with a given stride directly to the GPU to populate an entry in the buffer argument table.

# setBytes:length:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.3+ · iPadOS 8.3+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Copies data directly to the GPU to populate an entry in the buffer argument table.

## Declaration

```objectivec
- (void) setBytes:(const void *) bytes length:(NSUInteger) length atIndex:(NSUInteger) index;
```

## Parameters

- `bytes`: A pointer to where the data to copy starts.
- `length`: The number of bytes to copy.
- `index`: The index the data binds to in the argument table.

<a id="discussion"></a>

## Discussion

> **Important**

>  This method only works for data smaller than 4 kilobytes that doesn’t persist. Create an [MTLBuffer](../mtlbuffer.md) instance if your data exceeds 4 KB, needs to persist on the GPU, or you access results on the CPU.

This method allows Metal to copy data efficiently onto the GPU without the need for your own buffer. Binding data directly can improve performance, especially when making many small allocations.

## See Also

### Binding raw bytes

- [setBytes:length:attributeStride:atIndex:](setbytes%28__length_attributestride_index_%29.md): Copies data with a given stride directly to the GPU to populate an entry in the buffer argument table.
