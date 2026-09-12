> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makebuffer(bytes:length:options:)](https://developer.apple.com/documentation/metal/mtldevice/makebuffer(bytes:length:options:))

# makeBuffer(bytes:length:options:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Allocates a new buffer of a given length and initializes its contents by copying existing data into it.

## Declaration

```swift
func makeBuffer(bytes pointer: UnsafeRawPointer, length: Int, options: MTLResourceOptions = []) -> (any MTLBuffer)?
```

## Parameters

- `pointer`: A pointer to the starting memory address the method copies the initialization data from.
- `length`: The size of the new buffer, in bytes, and the number of bytes the method copies from `pointer`.
- `options`: An [MTLResourceOptions](../mtlresourceoptions.md) instance that sets the buffer’s storage and hazard-tracking modes. See [Resource fundamentals](../resource-fundamentals.md) and [Setting resource storage modes](../setting-resource-storage-modes.md) for more information.

<a id="return-value"></a>

## Return Value

A new [MTLBuffer](../mtlbuffer.md) instance if the method completes successfully; otherwise `nil`.

## Mentioned In

- [Copying data to a private resource](../copying-data-to-a-private-resource.md)

## See Also

### Creating buffers

- [maxBufferLength](maxbufferlength.md): The largest amount of memory, in bytes, that a GPU device can allocate to a buffer instance.
- [makeBuffer(length:options:)](makebuffer%28length_options_%29.md): Creates a buffer the method clears with zero values.
- [makeBuffer(bytesNoCopy:length:options:deallocator:)](makebuffer%28bytesnocopy_length_options_deallocator_%29.md): Creates a buffer that wraps an existing contiguous memory allocation.

# newBufferWithBytes:length:options: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Allocates a new buffer of a given length and initializes its contents by copying existing data into it.

## Declaration

```objectivec
- (id<MTLBuffer>) newBufferWithBytes:(const void *) pointer length:(NSUInteger) length options:(MTLResourceOptions) options;
```

## Parameters

- `pointer`: A pointer to the starting memory address the method copies the initialization data from.
- `length`: The size of the new buffer, in bytes, and the number of bytes the method copies from `pointer`.
- `options`: An [MTLResourceOptions](../mtlresourceoptions.md) instance that sets the buffer’s storage and hazard-tracking modes. See [Resource fundamentals](../resource-fundamentals.md) and [Setting resource storage modes](../setting-resource-storage-modes.md) for more information.

<a id="return-value"></a>

## Return Value

A new [MTLBuffer](../mtlbuffer.md) instance if the method completes successfully; otherwise `nil`.

## Mentioned In

- [Copying data to a private resource](../copying-data-to-a-private-resource.md)

## See Also

### Creating buffers

- [maxBufferLength](maxbufferlength.md): The largest amount of memory, in bytes, that a GPU device can allocate to a buffer instance.
- [newBufferWithLength:options:](makebuffer%28length_options_%29.md): Creates a buffer the method clears with zero values.
- [newBufferWithBytesNoCopy:length:options:deallocator:](makebuffer%28bytesnocopy_length_options_deallocator_%29.md): Creates a buffer that wraps an existing contiguous memory allocation.
