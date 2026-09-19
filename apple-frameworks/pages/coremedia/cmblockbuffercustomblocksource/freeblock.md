> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmblockbuffercustomblocksource/freeblock

# FreeBlock (Swift)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A function to call once when the `CMBlockBuffer` is disposed.

## Declaration

```swift
var FreeBlock: ((UnsafeMutableRawPointer?, UnsafeMutableRawPointer, Int) -> Void)?
```

<a id="Discussion"></a>

## Discussion

Pass `NULL` if you don’t want a function to be called after disposal. The function will not be called if no memory block is ever allocated or supplied.

## See Also

### Properties

- [AllocateBlock](allocateblock.md): The function to allocate memory.
- [refCon](refcon.md): Contextual information passed to both the allocate and free function calls.
- [version](version.md)

# FreeBlock (Objective-C)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A function to call once when the `CMBlockBuffer` is disposed.

## Declaration

```objectivec
void (*)(void *, void *, unsigned long) FreeBlock;
```

<a id="Discussion"></a>

## Discussion

Pass `NULL` if you don’t want a function to be called after disposal. The function will not be called if no memory block is ever allocated or supplied.

## See Also

### Properties

- [AllocateBlock](allocateblock.md): The function to allocate memory.
- [refCon](refcon.md): Contextual information passed to both the allocate and free function calls.
- [version](version.md)
