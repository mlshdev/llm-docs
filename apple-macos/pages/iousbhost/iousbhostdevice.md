> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostdevice](https://developer.apple.com/documentation/iousbhost/iousbhostdevice)

# IOUSBHostDevice (Swift)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The class that claims and configures devices, retrieves descriptors, and sends device requests.

## Declaration

```swift
class IOUSBHostDevice
```

<a id="overview"></a>

## Overview

This class enables management of the device state, including sending control requests to the default endpoint 0, configuring the device, and resetting the device. The interest handler also allows monitoring of the device state. The client creates the class and initializes it with [initWithIOService:options:queue:error:interestHandler:](iousbhostobject/initwithioservice_options_queue_error_interesthandler_.md).

> **Note**

>  To prevent other drivers from changing the state of your device, maintain an [IOUSBHostDevice](../kernel/iousbhostdevice.md) object until you no longer need control over the device.

## Topics

### Retrieving Device Descriptors

- [configurationDescriptor](iousbhostdevice/configurationdescriptor.md): The currently selected configuration descriptor.

### Resetting the Device

- [reset()](iousbhostdevice/reset%28%29.md): Terminates the device and attempts to re-enumerate it.

## Relationships

### Inherits From

- [IOUSBHostObject](iousbhostobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# IOUSBHostDevice (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The class that claims and configures devices, retrieves descriptors, and sends device requests.

## Declaration

```objectivec
@interface IOUSBHostDevice : IOUSBHostObject
```

<a id="overview"></a>

## Overview

This class enables management of the device state, including sending control requests to the default endpoint 0, configuring the device, and resetting the device. The interest handler also allows monitoring of the device state. The client creates the class and initializes it with [initWithIOService:options:queue:error:interestHandler:](iousbhostobject/initwithioservice_options_queue_error_interesthandler_.md).

> **Note**

>  To prevent other drivers from changing the state of your device, maintain an [IOUSBHostDevice](../kernel/iousbhostdevice.md) object until you no longer need control over the device.

## Topics

### Finding Devices

- [createMatchingDictionaryWithVendorID:productID:bcdDevice:deviceClass:deviceSubclass:deviceProtocol:speed:productIDArray:](iousbhostdevice/creatematchingdictionarywithvendorid_productid_bcddevice_deviceclass_devicesubclass_deviceprotocol_speed_productidarray_.md): Creates a matching dictionary to find a USB device.

### Retrieving Device Descriptors

- [configurationDescriptor](iousbhostdevice/configurationdescriptor.md): The currently selected configuration descriptor.

### Configuring the Device

- [configureWithValue:matchInterfaces:error:](iousbhostdevice/configurewithvalue_matchinterfaces_error_.md): Selects a new configuration for the device.
- [configureWithValue:error:](iousbhostdevice/configurewithvalue_error_.md): Selects a new configuration for the device and registers the interfaces for matching.

### Resetting the Device

- [resetWithError:](iousbhostdevice/reset%28%29.md): Terminates the device and attempts to re-enumerate it.

## Relationships

### Inherits From

- [IOUSBHostObject](iousbhostobject.md)
