> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostinterface](https://developer.apple.com/documentation/iousbhost/iousbhostinterface)

# IOUSBHostInterface (Swift)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The class for accessing USB-related services.

## Declaration

```swift
class IOUSBHostInterface
```

<a id="overview"></a>

## Overview

Use this class to create pipes, retrieve descriptors, send device requests, and enable power savings. Create an instance of the class with [initWithIOService:options:queue:error:interestHandler:](iousbhostobject/initwithioservice_options_queue_error_interesthandler_.md).

## Topics

### Retrieving Function Descriptors

- [configurationDescriptor](iousbhostinterface/configurationdescriptor.md): The configuration descriptor for the interface.
- [interfaceDescriptor](iousbhostinterface/interfacedescriptor.md): The descriptor for the interface.

### Managing Pipes

- [selectAlternateSetting(\_:)](iousbhostinterface/selectalternatesetting%28__%29.md): Selects an alternative setting for the interface.
- [copyPipe(withAddress:)](iousbhostinterface/copypipe%28withaddress_%29.md): Copies a pipe for a specific endpoint address.

### Enabling Power Savings

- [idleTimeout](iousbhostinterface/idletimeout.md): The current idle suspend timeout.
- [setIdleTimeout(\_:)](iousbhostinterface/setidletimeout%28__%29.md): Sets the desired idle suspend timeout for the interface.

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

## See Also

### Function Drivers

- [IOUSBHostPipe](iousbhostpipe.md): The class that sends control, bulk, interrupt, and isochronous input/output requests for function drivers, and manages stream capabilities.
- [IOUSBHostStream](iousbhoststream.md): The class responsible for sending stream data for function drivers.

# IOUSBHostInterface (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The class for accessing USB-related services.

## Declaration

```objectivec
@interface IOUSBHostInterface : IOUSBHostObject
```

<a id="overview"></a>

## Overview

Use this class to create pipes, retrieve descriptors, send device requests, and enable power savings. Create an instance of the class with [initWithIOService:options:queue:error:interestHandler:](iousbhostobject/initwithioservice_options_queue_error_interesthandler_.md).

## Topics

### Finding Interfaces

- [createMatchingDictionaryWithVendorID:productID:bcdDevice:interfaceNumber:configurationValue:interfaceClass:interfaceSubclass:interfaceProtocol:speed:productIDArray:](iousbhostinterface/creatematchingdictionarywithvendorid_productid_bcddevice_interfacenumber_configurationvalue_interfaceclass_interfacesubclass_interfaceprotocol_speed_productidarray_.md): Creates a matching dictionary to find a USB interface.

### Retrieving Function Descriptors

- [configurationDescriptor](iousbhostinterface/configurationdescriptor.md): The configuration descriptor for the interface.
- [interfaceDescriptor](iousbhostinterface/interfacedescriptor.md): The descriptor for the interface.

### Managing Pipes

- [selectAlternateSetting:error:](iousbhostinterface/selectalternatesetting%28__%29.md): Selects an alternative setting for the interface.
- [copyPipeWithAddress:error:](iousbhostinterface/copypipe%28withaddress_%29.md): Copies a pipe for a specific endpoint address.

### Enabling Power Savings

- [idleTimeout](iousbhostinterface/idletimeout.md): The current idle suspend timeout.
- [setIdleTimeout:error:](iousbhostinterface/setidletimeout%28__%29.md): Sets the desired idle suspend timeout for the interface.

### Instance Methods

- [initWithIOService:options:queue:error:interestHandler:](iousbhostinterface/initwithioservice_options_queue_error_interesthandler_.md)

## Relationships

### Inherits From

- [IOUSBHostObject](iousbhostobject.md)

## See Also

### Function Drivers

- [IOUSBHostPipe](iousbhostpipe.md): The class that sends control, bulk, interrupt, and isochronous input/output requests for function drivers, and manages stream capabilities.
- [IOUSBHostStream](iousbhoststream.md): The class responsible for sending stream data for function drivers.
