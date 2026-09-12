> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamcreatewithbytesnocopy(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamcreatewithbytesnocopy(_:_:_:_:))

# CFReadStreamCreateWithBytesNoCopy(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a readable stream for a block of memory.

## Declaration

```swift
func CFReadStreamCreateWithBytesNoCopy(_ alloc: CFAllocator!, _ bytes: UnsafePointer<UInt8>!, _ length: CFIndex, _ bytesDeallocator: CFAllocator!) -> CFReadStream!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bytes`: The memory buffer to read. This memory must exist for the lifetime of the new stream.
- `length`: The size of `bytes`.
- `bytesDeallocator`: The allocator to use to deallocate `bytes` when the stream is deallocated. Pass kCFAllocatorNull to prevent the stream from deallocating `bytes`.

<a id="return-value"></a>

## Return Value

The new read stream, or `NULL` on failure. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You must open the stream, using [CFReadStreamOpen(\_:)](cfreadstreamopen%28__%29.md), before reading from it.

## See Also

### Creating a Read Stream

- [CFReadStreamCreateWithFile(\_:\_:)](cfreadstreamcreatewithfile%28____%29.md): Creates a readable stream for a file.

# CFReadStreamCreateWithBytesNoCopy (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a readable stream for a block of memory.

## Declaration

```objectivec
extern CFReadStreamRefCFReadStreamCreateWithBytesNoCopy(CFAllocatorRef alloc, const UInt8 *bytes, CFIndex length, CFAllocatorRef bytesDeallocator);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `bytes`: The memory buffer to read. This memory must exist for the lifetime of the new stream.
- `length`: The size of `bytes`.
- `bytesDeallocator`: The allocator to use to deallocate `bytes` when the stream is deallocated. Pass kCFAllocatorNull to prevent the stream from deallocating `bytes`.

<a id="return-value"></a>

## Return Value

The new read stream, or `NULL` on failure. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You must open the stream, using [CFReadStreamOpen](cfreadstreamopen%28__%29.md), before reading from it.

## See Also

### Creating a Read Stream

- [CFReadStreamCreateWithFile](cfreadstreamcreatewithfile%28____%29.md): Creates a readable stream for a file.
