> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/preallocateflags/persist](https://developer.apple.com/documentation/fskit/fsvolume/preallocateflags/persist)

# persist (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

Allocates space that isn’t freed when deleting the descriptor.

## Declaration

```swift
static var persist: FSVolume.PreallocateFlags { get }
```

<a id="discussion"></a>

## Discussion

This space remains allocated even after calling `close(2)`.

## See Also

### Declaring preallocation behaviors

- [contiguous](contiguous.md): Allocates contiguous space.
- [all](all.md): Allocates all requested space or no space at all.
- [fromEOF](fromeof.md): Allocates space from the physical end of file.

# FSPreallocateFlagsPersist (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

Allocates space that isn’t freed when deleting the descriptor.

## Declaration

```objectivec
FSPreallocateFlagsPersist
```

<a id="discussion"></a>

## Discussion

This space remains allocated even after calling `close(2)`.

## See Also

### Declaring preallocation behaviors

- [FSPreallocateFlagsContiguous](contiguous.md): Allocates contiguous space.
- [FSPreallocateFlagsAll](all.md): Allocates all requested space or no space at all.
- [FSPreallocateFlagsFromEOF](fromeof.md): Allocates space from the physical end of file.
