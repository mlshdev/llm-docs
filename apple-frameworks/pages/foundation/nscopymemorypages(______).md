> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscopymemorypages(_:_:_:)](https://developer.apple.com/documentation/foundation/nscopymemorypages(_:_:_:))

# NSCopyMemoryPages(\_:\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a block of memory.

## Declaration

```swift
func NSCopyMemoryPages(_ source: UnsafeRawPointer, _ dest: UnsafeMutableRawPointer, _ bytes: Int)
```

<a id="Discussion"></a>

## Discussion

Copies (or copies on write) `byteCount` bytes from `source` to `destination`.

## See Also

### Memory Management

- [NSAllocateMemoryPages(\_:)](nsallocatememorypages%28__%29.md): Allocates a new block of memory.
- [NSDeallocateMemoryPages(\_:\_:)](nsdeallocatememorypages%28____%29.md): Deallocates the specified block of memory.
- [NSLogPageSize()](nslogpagesize%28%29.md): Returns the binary log of the page size.
- [NSPageSize()](nspagesize%28%29.md): Returns the number of bytes in a page.
- [NSRealMemoryAvailable()](nsrealmemoryavailable%28%29.md): Deprecated. Returns information about the user’s system.
- [NSRoundDownToMultipleOfPageSize(\_:)](nsrounddowntomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded down to a multiple of the page size.
- [NSRoundUpToMultipleOfPageSize(\_:)](nsrounduptomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded up to a multiple of the page size.

# NSCopyMemoryPages (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a block of memory.

## Declaration

```objectivec
extern void NSCopyMemoryPages(const void *source, void *dest, NSUInteger bytes);
```

<a id="Discussion"></a>

## Discussion

Copies (or copies on write) `byteCount` bytes from `source` to `destination`.

## See Also

### Memory Management

- [NSAllocateMemoryPages](nsallocatememorypages%28__%29.md): Allocates a new block of memory.
- [NSDeallocateMemoryPages](nsdeallocatememorypages%28____%29.md): Deallocates the specified block of memory.
- [NSLogPageSize](nslogpagesize%28%29.md): Returns the binary log of the page size.
- [NSPageSize](nspagesize%28%29.md): Returns the number of bytes in a page.
- [NSRealMemoryAvailable](nsrealmemoryavailable%28%29.md): Deprecated. Returns information about the user’s system.
- [NSRoundDownToMultipleOfPageSize](nsrounddowntomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded down to a multiple of the page size.
- [NSRoundUpToMultipleOfPageSize](nsrounduptomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded up to a multiple of the page size.
