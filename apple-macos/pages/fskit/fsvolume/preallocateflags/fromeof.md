> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/preallocateflags/fromeof](https://developer.apple.com/documentation/fskit/fsvolume/preallocateflags/fromeof)

# fromEOF (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

Allocates space from the physical end of file.

## Declaration

```swift
static var fromEOF: FSVolume.PreallocateFlags { get }
```

<a id="discussion"></a>

## Discussion

When implementing this behavior, ignore any offset in the preallocate call. This flag is currently set for all [preallocateSpace(for:at:length:flags:context:replyHandler:)](../preallocatehandler/preallocatespace%28for_at_length_flags_context_replyhandler_%29.md) calls.

## See Also

### Declaring preallocation behaviors

- [contiguous](contiguous.md): Allocates contiguous space.
- [all](all.md): Allocates all requested space or no space at all.
- [persist](persist.md): Allocates space that isn’t freed when deleting the descriptor.

# FSPreallocateFlagsFromEOF (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

Allocates space from the physical end of file.

## Declaration

```objectivec
FSPreallocateFlagsFromEOF
```

<a id="discussion"></a>

## Discussion

When implementing this behavior, ignore any offset in the preallocate call. This flag is currently set for all [preallocateSpaceForItem:atOffset:length:flags:context:replyHandler:](../preallocatehandler/preallocatespace%28for_at_length_flags_context_replyhandler_%29.md) calls.

## See Also

### Declaring preallocation behaviors

- [FSPreallocateFlagsContiguous](contiguous.md): Allocates contiguous space.
- [FSPreallocateFlagsAll](all.md): Allocates all requested space or no space at all.
- [FSPreallocateFlagsPersist](persist.md): Allocates space that isn’t freed when deleting the descriptor.
