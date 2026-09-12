> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/preallocateflags/contiguous](https://developer.apple.com/documentation/fskit/fsvolume/preallocateflags/contiguous)

# contiguous (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

Allocates contiguous space.

## Declaration

```swift
static var contiguous: FSVolume.PreallocateFlags { get }
```

## See Also

### Declaring preallocation behaviors

- [all](all.md): Allocates all requested space or no space at all.
- [persist](persist.md): Allocates space that isn’t freed when deleting the descriptor.
- [fromEOF](fromeof.md): Allocates space from the physical end of file.

# FSPreallocateFlagsContiguous (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

Allocates contiguous space.

## Declaration

```objectivec
FSPreallocateFlagsContiguous
```

## See Also

### Declaring preallocation behaviors

- [FSPreallocateFlagsAll](all.md): Allocates all requested space or no space at all.
- [FSPreallocateFlagsPersist](persist.md): Allocates space that isn’t freed when deleting the descriptor.
- [FSPreallocateFlagsFromEOF](fromeof.md): Allocates space from the physical end of file.
