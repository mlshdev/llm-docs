> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrealmemoryavailable()](https://developer.apple.com/documentation/foundation/nsrealmemoryavailable())

# NSRealMemoryAvailable() (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 6.0) · iPadOS 2.0+ (deprecated in 6.0) · Mac Catalyst 2.0+ (deprecated in 6.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns information about the user’s system.

> Use NSProcessInfo instead

## Declaration

```swift
func NSRealMemoryAvailable() -> Int
```

<a id="return-value"></a>

## Return Value

The number of bytes available in RAM.

## See Also

### Memory Management

- [NSAllocateMemoryPages(\_:)](nsallocatememorypages%28__%29.md): Allocates a new block of memory.
- [NSCopyMemoryPages(\_:\_:\_:)](nscopymemorypages%28______%29.md): Copies a block of memory.
- [NSDeallocateMemoryPages(\_:\_:)](nsdeallocatememorypages%28____%29.md): Deallocates the specified block of memory.
- [NSLogPageSize()](nslogpagesize%28%29.md): Returns the binary log of the page size.
- [NSPageSize()](nspagesize%28%29.md): Returns the number of bytes in a page.
- [NSRoundDownToMultipleOfPageSize(\_:)](nsrounddowntomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded down to a multiple of the page size.
- [NSRoundUpToMultipleOfPageSize(\_:)](nsrounduptomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded up to a multiple of the page size.

# NSRealMemoryAvailable (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 6.0) · iPadOS 2.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns information about the user’s system.

> Use NSProcessInfo instead

## Declaration

```objectivec
extern NSUInteger NSRealMemoryAvailable();
```

<a id="return-value"></a>

## Return Value

The number of bytes available in RAM.

## See Also

### Memory Management

- [NSAllocateMemoryPages](nsallocatememorypages%28__%29.md): Allocates a new block of memory.
- [NSCopyMemoryPages](nscopymemorypages%28______%29.md): Copies a block of memory.
- [NSDeallocateMemoryPages](nsdeallocatememorypages%28____%29.md): Deallocates the specified block of memory.
- [NSLogPageSize](nslogpagesize%28%29.md): Returns the binary log of the page size.
- [NSPageSize](nspagesize%28%29.md): Returns the number of bytes in a page.
- [NSRoundDownToMultipleOfPageSize](nsrounddowntomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded down to a multiple of the page size.
- [NSRoundUpToMultipleOfPageSize](nsrounduptomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded up to a multiple of the page size.
