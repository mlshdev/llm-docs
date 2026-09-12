> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makebuffer(length:options:)](https://developer.apple.com/documentation/metal/mtldevice/makebuffer(length:options:))

# makeBuffer(length:options:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a buffer the method clears with zero values.

## Declaration

```swift
func makeBuffer(length: Int, options: MTLResourceOptions = []) -> (any MTLBuffer)?
```

## Parameters

- `length`: The size of the new buffer, in bytes.
- `options`: An [MTLResourceOptions](../mtlresourceoptions.md) instance that sets the buffer’s storage and hazard-tracking modes. See [Resource fundamentals](../resource-fundamentals.md) and [Setting resource storage modes](../setting-resource-storage-modes.md) for more information.

<a id="return-value"></a>

## Return Value

A new [MTLBuffer](../mtlbuffer.md) instance if the method completed successfully; otherwise `nil`.

## Mentioned In

- [Copying data to a private resource](../copying-data-to-a-private-resource.md)
- [Setting resource storage modes](../setting-resource-storage-modes.md)

## See Also

### Creating buffers

- [maxBufferLength](maxbufferlength.md): The largest amount of memory, in bytes, that a GPU device can allocate to a buffer instance.
- [makeBuffer(bytes:length:options:)](makebuffer%28bytes_length_options_%29.md): Allocates a new buffer of a given length and initializes its contents by copying existing data into it.
- [makeBuffer(bytesNoCopy:length:options:deallocator:)](makebuffer%28bytesnocopy_length_options_deallocator_%29.md): Creates a buffer that wraps an existing contiguous memory allocation.

# newBufferWithLength:options: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a buffer the method clears with zero values.

## Declaration

```objectivec
- (id<MTLBuffer>) newBufferWithLength:(NSUInteger) length options:(MTLResourceOptions) options;
```

## Parameters

- `length`: The size of the new buffer, in bytes.
- `options`: An [MTLResourceOptions](../mtlresourceoptions.md) instance that sets the buffer’s storage and hazard-tracking modes. See [Resource fundamentals](../resource-fundamentals.md) and [Setting resource storage modes](../setting-resource-storage-modes.md) for more information.

<a id="return-value"></a>

## Return Value

A new [MTLBuffer](../mtlbuffer.md) instance if the method completed successfully; otherwise `nil`.

## Mentioned In

- [Copying data to a private resource](../copying-data-to-a-private-resource.md)
- [Setting resource storage modes](../setting-resource-storage-modes.md)

## See Also

### Creating buffers

- [maxBufferLength](maxbufferlength.md): The largest amount of memory, in bytes, that a GPU device can allocate to a buffer instance.
- [newBufferWithBytes:length:options:](makebuffer%28bytes_length_options_%29.md): Allocates a new buffer of a given length and initializes its contents by copying existing data into it.
- [newBufferWithBytesNoCopy:length:options:deallocator:](makebuffer%28bytesnocopy_length_options_deallocator_%29.md): Creates a buffer that wraps an existing contiguous memory allocation.
