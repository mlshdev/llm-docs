> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/preallocateflags/all](https://developer.apple.com/documentation/fskit/fsvolume/preallocateflags/all)

# all (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

Allocates all requested space or no space at all.

## Declaration

```swift
static var all: FSVolume.PreallocateFlags { get }
```

## See Also

### Declaring preallocation behaviors

- [contiguous](contiguous.md): Allocates contiguous space.
- [persist](persist.md): Allocates space that isn’t freed when deleting the descriptor.
- [fromEOF](fromeof.md): Allocates space from the physical end of file.

# FSPreallocateFlagsAll (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

Allocates all requested space or no space at all.

## Declaration

```objectivec
FSPreallocateFlagsAll
```

## See Also

### Declaring preallocation behaviors

- [FSPreallocateFlagsContiguous](contiguous.md): Allocates contiguous space.
- [FSPreallocateFlagsPersist](persist.md): Allocates space that isn’t freed when deleting the descriptor.
- [FSPreallocateFlagsFromEOF](fromeof.md): Allocates space from the physical end of file.
