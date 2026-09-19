> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevice/devicequeue

# deviceQueue (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The dispatch queue this device uses.

## Declaration

```swift
var deviceQueue: dispatch_queue_t { get }
```

<a id="discussion"></a>

## Discussion

The framework performs all operations on `VZCustomVirtioDevice` and [VZCustomVirtioDeviceDelegate](../vzcustomvirtiodevicedelegate.md) on this serial queue.

# deviceQueue (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The dispatch queue this device uses.

## Declaration

```objectivec
@property (readonly) dispatch_queue_t deviceQueue;
```

<a id="discussion"></a>

## Discussion

The framework performs all operations on `VZCustomVirtioDevice` and [VZCustomVirtioDeviceDelegate](../vzcustomvirtiodevicedelegate.md) on this serial queue.
