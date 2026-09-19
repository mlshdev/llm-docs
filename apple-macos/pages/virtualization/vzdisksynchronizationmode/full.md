> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzdisksynchronizationmode/full

# VZDiskSynchronizationMode.full (Swift)

**Framework:** Virtualization  
**Kind:** Case  
**Availability:** macOS 14.0+

Perform all synchronization operations as requested by the guest OS.

## Declaration

```swift
case full
```

<a id="Discussion"></a>

## Discussion

Using this mode, `flush` and `barrier` commands from the guest result in the system sending their counterpart synchronization commands to the underlying disk implementation.

## See Also

### Synchronization modes

- [VZDiskSynchronizationMode.none](none.md): Don’t synchronize the data with the permanent storage.

# VZDiskSynchronizationModeFull (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration Case  
**Availability:** macOS 14.0+

Perform all synchronization operations as requested by the guest OS.

## Declaration

```objectivec
VZDiskSynchronizationModeFull
```

<a id="Discussion"></a>

## Discussion

Using this mode, `flush` and `barrier` commands from the guest result in the system sending their counterpart synchronization commands to the underlying disk implementation.

## See Also

### Synchronization modes

- [VZDiskSynchronizationModeNone](none.md): Don’t synchronize the data with the permanent storage.
