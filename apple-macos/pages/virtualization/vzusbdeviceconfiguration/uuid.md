> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbdeviceconfiguration/uuid](https://developer.apple.com/documentation/virtualization/vzusbdeviceconfiguration/uuid)

# uuid (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The device’s unique identifier.

## Declaration

```swift
var uuid: UUID { get set }
```

<a id="Discussion"></a>

## Discussion

The framework autogenerates the device UUID.

Before restoring the VM, you need to set the device’s UUID to the UUID of the device with the attachment at the time of saving the VM’s state.

# uuid (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The device’s unique identifier.

## Declaration

```objectivec
@property (copy, readwrite) NSUUID * uuid;
```

<a id="Discussion"></a>

## Discussion

The framework autogenerates the device UUID.

Before restoring the VM, you need to set the device’s UUID to the UUID of the device with the attachment at the time of saving the VM’s state.
