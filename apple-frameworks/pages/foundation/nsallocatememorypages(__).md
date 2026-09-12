> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsallocatememorypages(_:)](https://developer.apple.com/documentation/foundation/nsallocatememorypages(_:))

# NSAllocateMemoryPages(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Allocates a new block of memory.

## Declaration

```swift
func NSAllocateMemoryPages(_ bytes: Int) -> UnsafeMutableRawPointer
```

<a id="Discussion"></a>

## Discussion

Allocates the integral number of pages whose total size is closest to, but not less than, `byteCount`. The allocated pages are guaranteed to be filled with zeros. If the allocation fails, raises `NSInvalidArgumentException`.

## See Also

### Memory Management

- [NSCopyMemoryPages(\_:\_:\_:)](nscopymemorypages%28______%29.md): Copies a block of memory.
- [NSDeallocateMemoryPages(\_:\_:)](nsdeallocatememorypages%28____%29.md): Deallocates the specified block of memory.
- [NSLogPageSize()](nslogpagesize%28%29.md): Returns the binary log of the page size.
- [NSPageSize()](nspagesize%28%29.md): Returns the number of bytes in a page.
- [NSRealMemoryAvailable()](nsrealmemoryavailable%28%29.md): Deprecated. Returns information about the user’s system.
- [NSRoundDownToMultipleOfPageSize(\_:)](nsrounddowntomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded down to a multiple of the page size.
- [NSRoundUpToMultipleOfPageSize(\_:)](nsrounduptomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded up to a multiple of the page size.

# NSAllocateMemoryPages (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Allocates a new block of memory.

## Declaration

```objectivec
extern void *NSAllocateMemoryPages(NSUInteger bytes);
```

<a id="Discussion"></a>

## Discussion

Allocates the integral number of pages whose total size is closest to, but not less than, `byteCount`. The allocated pages are guaranteed to be filled with zeros. If the allocation fails, raises `NSInvalidArgumentException`.

## See Also

### Memory Management

- [NSCopyMemoryPages](nscopymemorypages%28______%29.md): Copies a block of memory.
- [NSDeallocateMemoryPages](nsdeallocatememorypages%28____%29.md): Deallocates the specified block of memory.
- [NSLogPageSize](nslogpagesize%28%29.md): Returns the binary log of the page size.
- [NSPageSize](nspagesize%28%29.md): Returns the number of bytes in a page.
- [NSRealMemoryAvailable](nsrealmemoryavailable%28%29.md): Deprecated. Returns information about the user’s system.
- [NSRoundDownToMultipleOfPageSize](nsrounddowntomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded down to a multiple of the page size.
- [NSRoundUpToMultipleOfPageSize](nsrounduptomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded up to a multiple of the page size.
