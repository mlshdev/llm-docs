> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamcreatewithallocatedbuffers(_:_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamcreatewithallocatedbuffers(_:_:))

# CFWriteStreamCreateWithAllocatedBuffers(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a writable stream for a growable block of memory.

## Declaration

```swift
func CFWriteStreamCreateWithAllocatedBuffers(_ alloc: CFAllocator!, _ bufferAllocator: CFAllocator!) -> CFWriteStream!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bufferAllocator`: The allocator to use to allocate memory for the stream’s memory buffers. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.

<a id="return-value"></a>

## Return Value

A new write stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

New buffers are allocated using `bufferAllocator` as bytes are written to the stream. At any point, you can recover the bytes thus far written by asking for the property kCFStreamPropertyDataWritten with [CFWriteStreamCopyProperty(\_:\_:)](cfwritestreamcopyproperty%28____%29.md).

You must open the stream, using [CFWriteStreamOpen(\_:)](cfwritestreamopen%28__%29.md), before writing to it.

## See Also

### Creating a Write Stream

- [CFWriteStreamCreateWithBuffer(\_:\_:\_:)](cfwritestreamcreatewithbuffer%28______%29.md): Creates a writable stream for a fixed-size block of memory.
- [CFWriteStreamCreateWithFile(\_:\_:)](cfwritestreamcreatewithfile%28____%29.md): Creates a writable stream for a file.

# CFWriteStreamCreateWithAllocatedBuffers (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a writable stream for a growable block of memory.

## Declaration

```objectivec
extern CFWriteStreamRefCFWriteStreamCreateWithAllocatedBuffers(CFAllocatorRef alloc, CFAllocatorRef bufferAllocator);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bufferAllocator`: The allocator to use to allocate memory for the stream’s memory buffers. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.

<a id="return-value"></a>

## Return Value

A new write stream. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

New buffers are allocated using `bufferAllocator` as bytes are written to the stream. At any point, you can recover the bytes thus far written by asking for the property kCFStreamPropertyDataWritten with [CFWriteStreamCopyProperty](cfwritestreamcopyproperty%28____%29.md).

You must open the stream, using [CFWriteStreamOpen](cfwritestreamopen%28__%29.md), before writing to it.

## See Also

### Creating a Write Stream

- [CFWriteStreamCreateWithBuffer](cfwritestreamcreatewithbuffer%28______%29.md): Creates a writable stream for a fixed-size block of memory.
- [CFWriteStreamCreateWithFile](cfwritestreamcreatewithfile%28____%29.md): Creates a writable stream for a file.
