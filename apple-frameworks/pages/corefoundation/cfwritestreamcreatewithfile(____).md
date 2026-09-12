> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfwritestreamcreatewithfile(_:_:)](https://developer.apple.com/documentation/corefoundation/cfwritestreamcreatewithfile(_:_:))

# CFWriteStreamCreateWithFile(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a writable stream for a file.

## Declaration

```swift
func CFWriteStreamCreateWithFile(_ alloc: CFAllocator!, _ fileURL: CFURL!) -> CFWriteStream!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `fileURL`: The URL of the file to which to write. The URL must use a file scheme.

<a id="return-value"></a>

## Return Value

The new write stream, or `NULL` on failure. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The stream overwrites an existing file unless you set the kCFStreamPropertyAppendToFile to kCFBooleanTrue with [CFWriteStreamSetProperty(\_:\_:\_:)](cfwritestreamsetproperty%28______%29.md), in which case the stream appends data to the file.

You must open the stream, using [CFWriteStreamOpen(\_:)](cfwritestreamopen%28__%29.md), before writing to it.

## See Also

### Creating a Write Stream

- [CFWriteStreamCreateWithAllocatedBuffers(\_:\_:)](cfwritestreamcreatewithallocatedbuffers%28____%29.md): Creates a writable stream for a growable block of memory.
- [CFWriteStreamCreateWithBuffer(\_:\_:\_:)](cfwritestreamcreatewithbuffer%28______%29.md): Creates a writable stream for a fixed-size block of memory.

# CFWriteStreamCreateWithFile (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a writable stream for a file.

## Declaration

```objectivec
extern CFWriteStreamRefCFWriteStreamCreateWithFile(CFAllocatorRef alloc, CFURLRef fileURL);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `fileURL`: The URL of the file to which to write. The URL must use a file scheme.

<a id="return-value"></a>

## Return Value

The new write stream, or `NULL` on failure. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

The stream overwrites an existing file unless you set the kCFStreamPropertyAppendToFile to kCFBooleanTrue with [CFWriteStreamSetProperty](cfwritestreamsetproperty%28______%29.md), in which case the stream appends data to the file.

You must open the stream, using [CFWriteStreamOpen](cfwritestreamopen%28__%29.md), before writing to it.

## See Also

### Creating a Write Stream

- [CFWriteStreamCreateWithAllocatedBuffers](cfwritestreamcreatewithallocatedbuffers%28____%29.md): Creates a writable stream for a growable block of memory.
- [CFWriteStreamCreateWithBuffer](cfwritestreamcreatewithbuffer%28______%29.md): Creates a writable stream for a fixed-size block of memory.
