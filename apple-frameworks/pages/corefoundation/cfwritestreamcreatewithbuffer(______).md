> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamcreatewithbuffer(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamcreatewithbuffer(_:_:_:))

# CFWriteStreamCreateWithBuffer(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a writable stream for a fixed-size block of memory.

## Declaration

```swift
func CFWriteStreamCreateWithBuffer(_ alloc: CFAllocator!, _ buffer: UnsafeMutablePointer<UInt8>!, _ bufferCapacity: CFIndex) -> CFWriteStream!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `buffer`: The memory buffer into which to write data. This buffer must exist for the lifetime of the stream.
- `bufferCapacity`: The size of `buffer` and the maximum number of bytes that can be written.

<a id="return-value"></a>

## Return Value

A new write stream, or `NULL` on failure. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

When `buffer` is filled after writing `bufferCapacity` bytes, the stream is exhausted and its status becomes [CFStreamStatus.atEnd](cfstreamstatus/atend.md).

You must open the stream, using [CFWriteStreamOpen(\_:)](cfwritestreamopen%28__%29.md), before writing to it.

## See Also

### Creating a Write Stream

- [CFWriteStreamCreateWithAllocatedBuffers(\_:\_:)](cfwritestreamcreatewithallocatedbuffers%28____%29.md): Creates a writable stream for a growable block of memory.
- [CFWriteStreamCreateWithFile(\_:\_:)](cfwritestreamcreatewithfile%28____%29.md): Creates a writable stream for a file.

# CFWriteStreamCreateWithBuffer (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a writable stream for a fixed-size block of memory.

## Declaration

```objectivec
extern CFWriteStreamRefCFWriteStreamCreateWithBuffer(CFAllocatorRef alloc, UInt8 *buffer, CFIndex bufferCapacity);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `buffer`: The memory buffer into which to write data. This buffer must exist for the lifetime of the stream.
- `bufferCapacity`: The size of `buffer` and the maximum number of bytes that can be written.

<a id="return-value"></a>

## Return Value

A new write stream, or `NULL` on failure. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

When `buffer` is filled after writing `bufferCapacity` bytes, the stream is exhausted and its status becomes [kCFStreamStatusAtEnd](cfstreamstatus/atend.md).

You must open the stream, using [CFWriteStreamOpen](cfwritestreamopen%28__%29.md), before writing to it.

## See Also

### Creating a Write Stream

- [CFWriteStreamCreateWithAllocatedBuffers](cfwritestreamcreatewithallocatedbuffers%28____%29.md): Creates a writable stream for a growable block of memory.
- [CFWriteStreamCreateWithFile](cfwritestreamcreatewithfile%28____%29.md): Creates a writable stream for a file.
