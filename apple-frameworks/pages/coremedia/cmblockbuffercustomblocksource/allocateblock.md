> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffercustomblocksource/allocateblock](https://developer.apple.com/documentation/coremedia/cmblockbuffercustomblocksource/allocateblock)

# AllocateBlock (Swift)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

The function to allocate memory.

## Declaration

```swift
var AllocateBlock: ((UnsafeMutableRawPointer?, Int) -> UnsafeMutableRawPointer?)?
```

## See Also

### Properties

- [FreeBlock](freeblock.md): A function to call once when the `CMBlockBuffer` is disposed.
- [refCon](refcon.md): Contextual information passed to both the allocate and free function calls.
- [version](version.md)

# AllocateBlock (Objective-C)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The function to allocate memory.

## Declaration

```objectivec
void *(*)(void *, unsigned long) AllocateBlock;
```

## See Also

### Properties

- [FreeBlock](freeblock.md): A function to call once when the `CMBlockBuffer` is disposed.
- [refCon](refcon.md): Contextual information passed to both the allocate and free function calls.
- [version](version.md)
