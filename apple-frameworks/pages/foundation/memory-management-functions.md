> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/memory-management-functions](https://developer.apple.com/documentation/foundation/memory-management-functions)

# Memory Management Functions (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Perform low-level memory management tasks.

## Topics

### Core Foundation ARC Integration

- [CFBridgingRetain(\_:)](cfbridgingretain%28__%29.md): Casts an Objective-C pointer to a Core Foundation pointer and also transfers ownership to the caller.

### Memory Management

- [NSAllocateMemoryPages(\_:)](nsallocatememorypages%28__%29.md): Allocates a new block of memory.
- [NSCopyMemoryPages(\_:\_:\_:)](nscopymemorypages%28______%29.md): Copies a block of memory.
- [NSDeallocateMemoryPages(\_:\_:)](nsdeallocatememorypages%28____%29.md): Deallocates the specified block of memory.
- [NSLogPageSize()](nslogpagesize%28%29.md): Returns the binary log of the page size.
- [NSPageSize()](nspagesize%28%29.md): Returns the number of bytes in a page.
- [NSRealMemoryAvailable()](nsrealmemoryavailable%28%29.md): Deprecated. Returns information about the user’s system.
- [NSRoundDownToMultipleOfPageSize(\_:)](nsrounddowntomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded down to a multiple of the page size.
- [NSRoundUpToMultipleOfPageSize(\_:)](nsrounduptomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded up to a multiple of the page size.

# Memory Management Functions (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Perform low-level memory management tasks.

## Topics

### Core Foundation ARC Integration

- [CFBridgingRetain](cfbridgingretain%28__%29.md): Casts an Objective-C pointer to a Core Foundation pointer and also transfers ownership to the caller.
- [CFBridgingRelease](cfbridgingrelease.md): Moves a non-Objective-C pointer to Objective-C and also transfers ownership to ARC.

### Memory Management

- [NSAllocateMemoryPages](nsallocatememorypages%28__%29.md): Allocates a new block of memory.
- [NSCopyMemoryPages](nscopymemorypages%28______%29.md): Copies a block of memory.
- [NSDeallocateMemoryPages](nsdeallocatememorypages%28____%29.md): Deallocates the specified block of memory.
- [NSLogPageSize](nslogpagesize%28%29.md): Returns the binary log of the page size.
- [NSPageSize](nspagesize%28%29.md): Returns the number of bytes in a page.
- [NSRealMemoryAvailable](nsrealmemoryavailable%28%29.md): Deprecated. Returns information about the user’s system.
- [NSRoundDownToMultipleOfPageSize](nsrounddowntomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded down to a multiple of the page size.
- [NSRoundUpToMultipleOfPageSize](nsrounduptomultipleofpagesize%28__%29.md): Returns the specified number of bytes rounded up to a multiple of the page size.

## See Also

### Memory Management

- [NSAutoreleasePool](nsautoreleasepool.md): An object that supports Cocoa’s reference-counted memory management system.
