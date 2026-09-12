> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbdevice/uuid](https://developer.apple.com/documentation/virtualization/vzusbdevice/uuid)

# uuid (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The device’s unique identifier.

## Declaration

```swift
var uuid: UUID { get }
```

<a id="Discussion"></a>

## Discussion

This is the identifier the system creates from device configuration objects that conform to [VZUSBDeviceConfiguration](../vzusbdeviceconfiguration.md).

## See Also

### Properties

- [usbController](usbcontroller.md): The USB controller that has an attachment to the device.

# uuid (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The device’s unique identifier.

## Declaration

```objectivec
@property (copy, readonly) NSUUID * uuid;
```

<a id="Discussion"></a>

## Discussion

This is the identifier the system creates from device configuration objects that conform to [VZUSBDeviceConfiguration](../vzusbdeviceconfiguration.md).

## See Also

### Properties

- [usbController](usbcontroller.md): The USB controller that has an attachment to the device.
