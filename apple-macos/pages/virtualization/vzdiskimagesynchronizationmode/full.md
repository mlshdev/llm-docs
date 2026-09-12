> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdiskimagesynchronizationmode/full](https://developer.apple.com/documentation/virtualization/vzdiskimagesynchronizationmode/full)

# VZDiskImageSynchronizationMode.full (Swift)

**Framework:** Virtualization  
**Kind:** Case  
**Availability:** macOS 12.0+

Synchronizes data to the permanent storage holding the disk image.

## Declaration

```swift
case full
```

<a id="Discussion"></a>

## Discussion

This mode synchronizes the data with the permanent storage holding the disk image and ensures the data moves from the disk’s internal cache to permanent storage. This ensures there’s no loss of already synchronized data in the case of panic or loss of power.

## See Also

### Disk image synchronization modes

- [VZDiskImageSynchronizationMode.fsync](fsync.md): Synchronizes data to the drive using the system’s best-effort synchronization mode.
- [VZDiskImageSynchronizationMode.none](none.md): Disables data synchronization with the permanent storage.

# VZDiskImageSynchronizationModeFull (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

Synchronizes data to the permanent storage holding the disk image.

## Declaration

```objectivec
VZDiskImageSynchronizationModeFull
```

<a id="Discussion"></a>

## Discussion

This mode synchronizes the data with the permanent storage holding the disk image and ensures the data moves from the disk’s internal cache to permanent storage. This ensures there’s no loss of already synchronized data in the case of panic or loss of power.

## See Also

### Disk image synchronization modes

- [VZDiskImageSynchronizationModeFsync](fsync.md): Synchronizes data to the drive using the system’s best-effort synchronization mode.
- [VZDiskImageSynchronizationModeNone](none.md): Disables data synchronization with the permanent storage.
