> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbdevice](https://developer.apple.com/documentation/virtualization/vzusbdevice)

# VZUSBDevice (Swift)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A protocol that represents a USB device in a VM.

## Declaration

```swift
protocol VZUSBDevice : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Classes that conform to this protocol represent hot-pluggable USB devices.

> **Important**

>  Don’t use the `VZUSBDevice` protocol with objects outside the Virtualization framework. This protocol only describes capabilities of Virtualization framework objects.

## Topics

### Properties

- [usbController](vzusbdevice/usbcontroller.md): The USB controller that has an attachment to the device.
- [uuid](vzusbdevice/uuid.md): The device’s unique identifier.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [VZUSBMassStorageDevice](vzusbmassstoragedevice.md)
- [VZUSBPassthroughDevice](vzusbpassthroughdevice.md)

## See Also

### Related Documentation

- [VZUSBMassStorageDevice](vzusbmassstoragedevice.md): A class that represents a hot-pluggable USB mass storage device.

### Protocols

- [VZUSBDeviceConfiguration](vzusbdeviceconfiguration.md): The protocol for configuring USB devices.

# VZUSBDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A protocol that represents a USB device in a VM.

## Declaration

```objectivec
@protocol VZUSBDevice <NSObject>
```

<a id="overview"></a>

## Overview

Classes that conform to this protocol represent hot-pluggable USB devices.

> **Important**

>  Don’t use the `VZUSBDevice` protocol with objects outside the Virtualization framework. This protocol only describes capabilities of Virtualization framework objects.

## Topics

### Properties

- [usbController](vzusbdevice/usbcontroller.md): The USB controller that has an attachment to the device.
- [uuid](vzusbdevice/uuid.md): The device’s unique identifier.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [VZUSBMassStorageDevice](vzusbmassstoragedevice.md)
- [VZUSBPassthroughDevice](vzusbpassthroughdevice.md)

## See Also

### Related Documentation

- [VZUSBMassStorageDevice](vzusbmassstoragedevice.md): A class that represents a hot-pluggable USB mass storage device.

### Protocols

- [VZUSBDeviceConfiguration](vzusbdeviceconfiguration.md): The protocol for configuring USB devices.
