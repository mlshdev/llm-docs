> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/maxbufferlength](https://developer.apple.com/documentation/metal/mtldevice/maxbufferlength)

# maxBufferLength (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The largest amount of memory, in bytes, that a GPU device can allocate to a buffer instance.

## Declaration

```swift
var maxBufferLength: Int { get }
```

<a id="discussion"></a>

## Discussion

The property’s value is at least 256 MB (268,435,456 bytes).

## See Also

### Creating buffers

- [makeBuffer(length:options:)](makebuffer%28length_options_%29.md): Creates a buffer the method clears with zero values.
- [makeBuffer(bytes:length:options:)](makebuffer%28bytes_length_options_%29.md): Allocates a new buffer of a given length and initializes its contents by copying existing data into it.
- [makeBuffer(bytesNoCopy:length:options:deallocator:)](makebuffer%28bytesnocopy_length_options_deallocator_%29.md): Creates a buffer that wraps an existing contiguous memory allocation.

# maxBufferLength (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The largest amount of memory, in bytes, that a GPU device can allocate to a buffer instance.

## Declaration

```objectivec
@property (readonly) NSUInteger maxBufferLength;
```

<a id="discussion"></a>

## Discussion

The property’s value is at least 256 MB (268,435,456 bytes).

## See Also

### Creating buffers

- [newBufferWithLength:options:](makebuffer%28length_options_%29.md): Creates a buffer the method clears with zero values.
- [newBufferWithBytes:length:options:](makebuffer%28bytes_length_options_%29.md): Allocates a new buffer of a given length and initializes its contents by copying existing data into it.
- [newBufferWithBytesNoCopy:length:options:deallocator:](makebuffer%28bytesnocopy_length_options_deallocator_%29.md): Creates a buffer that wraps an existing contiguous memory allocation.
