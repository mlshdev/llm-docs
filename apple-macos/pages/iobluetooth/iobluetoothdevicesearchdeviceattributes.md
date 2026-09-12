> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes)

# IOBluetoothDeviceSearchDeviceAttributes (Swift)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Structure used to search for particular devices.

## Declaration

```swift
struct IOBluetoothDeviceSearchDeviceAttributes
```

<a id="overview"></a>

## Overview

You can search for general device classes and service classes, or you can search for a specific device address or name. If you pass NULL as the attribute structure, you will get ALL devices in the vicinity found during a search. Note that passing a zeroed out block of attributes is NOT equivalent to passing in NULL!

## Topics

### Initializers

- [init()](iobluetoothdevicesearchdeviceattributes/init%28%29.md)
- [init(address:name:serviceClassMajor:deviceClassMajor:deviceClassMinor:)](iobluetoothdevicesearchdeviceattributes/init%28address_name_serviceclassmajor_deviceclassmajor_deviceclassminor_%29.md)

### Instance Properties

- [address](iobluetoothdevicesearchdeviceattributes/address.md)
- [deviceClassMajor](iobluetoothdevicesearchdeviceattributes/deviceclassmajor.md)
- [deviceClassMinor](iobluetoothdevicesearchdeviceattributes/deviceclassminor.md)
- [name](iobluetoothdevicesearchdeviceattributes/name.md)
- [serviceClassMajor](iobluetoothdevicesearchdeviceattributes/serviceclassmajor.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Related Documentation

- [IOBluetoothDeviceSearchAttributes](iobluetoothdevicesearchattributes.md): Structure used to search for particular devices.
- [IOBluetoothDeviceSearchTypes](iobluetoothdevicesearchtypes.md)
- [IOBluetoothDeviceSearchTypesBits](iobluetoothdevicesearchtypesbits.md): Bits to determine what Bluetooth devices to search for
- [IOBluetoothDeviceSearchDeviceAttributes](iobluetoothdevicesearchdeviceattributes.md): Structure used to search for particular devices.

### Data Types

- [IOBluetoothDeviceSearchOptions](iobluetoothdevicesearchoptions.md)
- [IOBluetoothDeviceSearchAttributes](iobluetoothdevicesearchattributes.md): Structure used to search for particular devices.

# IOBluetoothDeviceSearchDeviceAttributes (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Structure  
**Availability:** macOS

Structure used to search for particular devices.

## Declaration

```objectivec
struct IOBluetoothDeviceSearchDeviceAttributes;
```

<a id="overview"></a>

## Overview

You can search for general device classes and service classes, or you can search for a specific device address or name. If you pass NULL as the attribute structure, you will get ALL devices in the vicinity found during a search. Note that passing a zeroed out block of attributes is NOT equivalent to passing in NULL!

## Topics

### Instance Properties

- [address](iobluetoothdevicesearchdeviceattributes/address.md)
- [deviceClassMajor](iobluetoothdevicesearchdeviceattributes/deviceclassmajor.md)
- [deviceClassMinor](iobluetoothdevicesearchdeviceattributes/deviceclassminor.md)
- [name](iobluetoothdevicesearchdeviceattributes/name.md)
- [serviceClassMajor](iobluetoothdevicesearchdeviceattributes/serviceclassmajor.md)

## See Also

### Related Documentation

- [IOBluetoothDeviceSearchAttributes](iobluetoothdevicesearchattributes.md): Structure used to search for particular devices.
- [IOBluetoothDeviceSearchTypes](iobluetoothdevicesearchtypes.md)
- [IOBluetoothDeviceSearchTypesBits](iobluetoothdevicesearchtypesbits.md): Bits to determine what Bluetooth devices to search for
- [IOBluetoothDeviceSearchDeviceAttributes](iobluetoothdevicesearchdeviceattributes.md): Structure used to search for particular devices.

### Data Types

- [IOBluetoothDeviceSearchOptions](iobluetoothdevicesearchoptions.md)
- [IOBluetoothDeviceSearchAttributes](iobluetoothdevicesearchattributes.md): Structure used to search for particular devices.
