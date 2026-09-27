> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmblockbuffercustomblocksource/refcon

# refCon (Swift)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Contextual information passed to both the allocate and free function calls.

## Declaration

```swift
var refCon: UnsafeMutableRawPointer?
```

## See Also

### Properties

- [AllocateBlock](allocateblock.md): The function to allocate memory.
- [FreeBlock](freeblock.md): A function to call once when the `CMBlockBuffer` is disposed.
- [version](version.md)

# refCon (Objective-C)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Contextual information passed to both the allocate and free function calls.

## Declaration

```objectivec
void * refCon;
```

## See Also

### Properties

- [AllocateBlock](allocateblock.md): The function to allocate memory.
- [FreeBlock](freeblock.md): A function to call once when the `CMBlockBuffer` is disposed.
- [version](version.md)
