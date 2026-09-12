> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfreadstreamcreatewithfile(_:_:)](https://developer.apple.com/documentation/corefoundation/cfreadstreamcreatewithfile(_:_:))

# CFReadStreamCreateWithFile(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a readable stream for a file.

## Declaration

```swift
func CFReadStreamCreateWithFile(_ alloc: CFAllocator!, _ fileURL: CFURL!) -> CFReadStream!
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `fileURL`: The URL of the file to read. The URL must use the file scheme.

<a id="return-value"></a>

## Return Value

The new readable stream object, or `NULL` on failure. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You must open the stream, using [CFReadStreamOpen(\_:)](cfreadstreamopen%28__%29.md), before reading from it.

## See Also

### Creating a Read Stream

- [CFReadStreamCreateWithBytesNoCopy(\_:\_:\_:\_:)](cfreadstreamcreatewithbytesnocopy%28________%29.md): Creates a readable stream for a block of memory.

# CFReadStreamCreateWithFile (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a readable stream for a file.

## Declaration

```objectivec
extern CFReadStreamRefCFReadStreamCreateWithFile(CFAllocatorRef alloc, CFURLRef fileURL);
```

## Parameters

- `alloc`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `fileURL`: The URL of the file to read. The URL must use the file scheme.

<a id="return-value"></a>

## Return Value

The new readable stream object, or `NULL` on failure. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

You must open the stream, using [CFReadStreamOpen](cfreadstreamopen%28__%29.md), before reading from it.

## See Also

### Creating a Read Stream

- [CFReadStreamCreateWithBytesNoCopy](cfreadstreamcreatewithbytesnocopy%28________%29.md): Creates a readable stream for a block of memory.
