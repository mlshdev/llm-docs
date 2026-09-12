> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskimagesynchronizationmode/fsync](https://developer.apple.com/documentation/virtualization/vzdiskimagesynchronizationmode/fsync)

# VZDiskImageSynchronizationMode.fsync (Swift)

**Framework:** Virtualization  
**Kind:** Case  
**Availability:** macOS 12.0+

Synchronizes data to the drive using the system’s best-effort synchronization mode.

## Declaration

```swift
case fsync
```

<a id="Discussion"></a>

## Discussion

This mode synchronizes the data with the drive, but doesn’t ensure the data moves from the disk’s internal cache to permanent storage.

This is a best-effort mode with the same guarantees as the `fsync(_:)` system call.

## See Also

### Disk image synchronization modes

- [VZDiskImageSynchronizationMode.full](full.md): Synchronizes data to the permanent storage holding the disk image.
- [VZDiskImageSynchronizationMode.none](none.md): Disables data synchronization with the permanent storage.

# VZDiskImageSynchronizationModeFsync (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

Synchronizes data to the drive using the system’s best-effort synchronization mode.

## Declaration

```objectivec
VZDiskImageSynchronizationModeFsync
```

<a id="Discussion"></a>

## Discussion

This mode synchronizes the data with the drive, but doesn’t ensure the data moves from the disk’s internal cache to permanent storage.

This is a best-effort mode with the same guarantees as the `fsync(_:)` system call.

## See Also

### Disk image synchronization modes

- [VZDiskImageSynchronizationModeFull](full.md): Synchronizes data to the permanent storage holding the disk image.
- [VZDiskImageSynchronizationModeNone](none.md): Disables data synchronization with the permanent storage.
