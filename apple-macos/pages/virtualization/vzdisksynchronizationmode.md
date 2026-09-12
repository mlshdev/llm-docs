> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzdisksynchronizationmode](https://developer.apple.com/documentation/virtualization/vzdisksynchronizationmode)

# VZDiskSynchronizationMode (Swift)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Values that describe the synchronization modes available to the guest OS.

## Declaration

```swift
enum VZDiskSynchronizationMode
```

## Topics

### Synchronization modes

- [VZDiskSynchronizationMode.full](vzdisksynchronizationmode/full.md): Perform all synchronization operations as requested by the guest OS.
- [VZDiskSynchronizationMode.none](vzdisksynchronizationmode/none.md): Don’t synchronize the data with the permanent storage.

### Initializers

- [init(rawValue:)](vzdisksynchronizationmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Virtual disk synchronization modes

- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.

# VZDiskSynchronizationMode (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

Values that describe the synchronization modes available to the guest OS.

## Declaration

```objectivec
enum VZDiskSynchronizationMode : NSInteger;
```

## Topics

### Synchronization modes

- [VZDiskSynchronizationModeFull](vzdisksynchronizationmode/full.md): Perform all synchronization operations as requested by the guest OS.
- [VZDiskSynchronizationModeNone](vzdisksynchronizationmode/none.md): Don’t synchronize the data with the permanent storage.

## See Also

### Virtual disk synchronization modes

- [VZDiskImageSynchronizationMode](vzdiskimagesynchronizationmode.md): An integer that describes the disk image synchronization mode.
