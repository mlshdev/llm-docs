> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostdevicepropertykey](https://developer.apple.com/documentation/iousbhost/iousbhostdevicepropertykey)

# IOUSBHostDevicePropertyKey (Swift)

**Framework:** IOUSBHost  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Properties of a USB device that describe its state.

## Declaration

```swift
struct IOUSBHostDevicePropertyKey
```

## Topics

### Properties

- [currentConfiguration](iousbhostdevicepropertykey/currentconfiguration.md): The device’s current configuration value.
- [containerID](iousbhostdevicepropertykey/containerid.md): The device’s container ID.
- [serialNumberString](iousbhostdevicepropertykey/serialnumberstring.md): The device’s serial number as a string.
- [vendorString](iousbhostdevicepropertykey/vendorstring.md): The device’s vendor name.
- [IOUSBHostPropertyKey](iousbhostpropertykey.md): Properties that the USB host device and interface classes share.

### Initializing the Properties

- [init(rawValue:)](iousbhostdevicepropertykey/init%28rawvalue_%29.md): Creates the structure.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### IOServicePlane Properties

- [IOUSBHostInterfacePropertyKey](iousbhostinterfacepropertykey.md): Properties of a USB interface that describe its state.
- [IOUSBHostMatchingPropertyKey](iousbhostmatchingpropertykey.md): Properties for implementing the matching service.
- [IOUSBHostPropertyKey](iousbhostpropertykey.md): Properties that the USB host device and interface classes share.

# IOUSBHostDevicePropertyKey (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Properties of a USB device that describe its state.

## Declaration

```objectivec
typedef NSString * IOUSBHostDevicePropertyKey;
```

## Topics

### Properties

- [IOUSBHostDevicePropertyKeyCurrentConfiguration](iousbhostdevicepropertykey/currentconfiguration.md): The device’s current configuration value.
- [IOUSBHostDevicePropertyKeyContainerID](iousbhostdevicepropertykey/containerid.md): The device’s container ID.
- [IOUSBHostDevicePropertyKeySerialNumberString](iousbhostdevicepropertykey/serialnumberstring.md): The device’s serial number as a string.
- [IOUSBHostDevicePropertyKeyVendorString](iousbhostdevicepropertykey/vendorstring.md): The device’s vendor name.
- [IOUSBHostPropertyKey](iousbhostpropertykey.md): Properties that the USB host device and interface classes share.

## See Also

### IOServicePlane Properties

- [IOUSBHostInterfacePropertyKey](iousbhostinterfacepropertykey.md): Properties of a USB interface that describe its state.
- [IOUSBHostMatchingPropertyKey](iousbhostmatchingpropertykey.md): Properties for implementing the matching service.
- [IOUSBHostPropertyKey](iousbhostpropertykey.md): Properties that the USB host device and interface classes share.
