> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostmatchingpropertykey](https://developer.apple.com/documentation/iousbhost/iousbhostmatchingpropertykey)

# IOUSBHostMatchingPropertyKey (Swift)

**Framework:** IOUSBHost  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Properties for implementing the matching service.

## Declaration

```swift
struct IOUSBHostMatchingPropertyKey
```

## Topics

### Device Properties

- [vendorID](iousbhostmatchingpropertykey/vendorid.md): The matching property for the device’s vendor ID.
- [productID](iousbhostmatchingpropertykey/productid.md): The matching property for the device’s product ID.
- [deviceReleaseNumber](iousbhostmatchingpropertykey/devicereleasenumber.md): The matching property for the device’s release number.
- [configurationValue](iousbhostmatchingpropertykey/configurationvalue.md): The matching property for the device’s current configuration value.
- [speed](iousbhostmatchingpropertykey/speed.md): The matching property for the device’s enumeration speed.
- [productIDArray](iousbhostmatchingpropertykey/productidarray.md): The matching property on a list of product IDs.
- [productIDMask](iousbhostmatchingpropertykey/productidmask.md): The matching property on a mask of product IDs.

### Interface Properties

- [interfaceNumber](iousbhostmatchingpropertykey/interfacenumber.md): The matching property for the device’s interface number.
- [interfaceClass](iousbhostmatchingpropertykey/interfaceclass.md): The matching property for the interface’s class ID.
- [interfaceSubClass](iousbhostmatchingpropertykey/interfacesubclass.md): The matching property for the interface’s subclass ID.
- [interfaceProtocol](iousbhostmatchingpropertykey/interfaceprotocol.md): The matching property for the interface’s protocol.

### Protocol and Class Properties

- [deviceProtocol](iousbhostmatchingpropertykey/deviceprotocol.md): The matching property for the device’s protocol.
- [deviceClass](iousbhostmatchingpropertykey/deviceclass.md): The matching property for the device’s class.
- [deviceSubClass](iousbhostmatchingpropertykey/devicesubclass.md): The matching property for the device’s subclass.

### Initializing the Structure

- [init(rawValue:)](iousbhostmatchingpropertykey/init%28rawvalue_%29.md): Creates the structure.

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
- [IOUSBHostDevicePropertyKey](iousbhostdevicepropertykey.md): Properties of a USB device that describe its state.
- [IOUSBHostPropertyKey](iousbhostpropertykey.md): Properties that the USB host device and interface classes share.

# IOUSBHostMatchingPropertyKey (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Properties for implementing the matching service.

## Declaration

```objectivec
typedef NSString * IOUSBHostMatchingPropertyKey;
```

## Topics

### Device Properties

- [IOUSBHostMatchingPropertyKeyVendorID](iousbhostmatchingpropertykey/vendorid.md): The matching property for the device’s vendor ID.
- [IOUSBHostMatchingPropertyKeyProductID](iousbhostmatchingpropertykey/productid.md): The matching property for the device’s product ID.
- [IOUSBHostMatchingPropertyKeyDeviceReleaseNumber](iousbhostmatchingpropertykey/devicereleasenumber.md): The matching property for the device’s release number.
- [IOUSBHostMatchingPropertyKeyConfigurationValue](iousbhostmatchingpropertykey/configurationvalue.md): The matching property for the device’s current configuration value.
- [IOUSBHostMatchingPropertyKeySpeed](iousbhostmatchingpropertykey/speed.md): The matching property for the device’s enumeration speed.
- [IOUSBHostMatchingPropertyKeyProductIDArray](iousbhostmatchingpropertykey/productidarray.md): The matching property on a list of product IDs.
- [IOUSBHostMatchingPropertyKeyProductIDMask](iousbhostmatchingpropertykey/productidmask.md): The matching property on a mask of product IDs.

### Interface Properties

- [IOUSBHostMatchingPropertyKeyInterfaceNumber](iousbhostmatchingpropertykey/interfacenumber.md): The matching property for the device’s interface number.
- [IOUSBHostMatchingPropertyKeyInterfaceClass](iousbhostmatchingpropertykey/interfaceclass.md): The matching property for the interface’s class ID.
- [IOUSBHostMatchingPropertyKeyInterfaceSubClass](iousbhostmatchingpropertykey/interfacesubclass.md): The matching property for the interface’s subclass ID.
- [IOUSBHostMatchingPropertyKeyInterfaceProtocol](iousbhostmatchingpropertykey/interfaceprotocol.md): The matching property for the interface’s protocol.

### Protocol and Class Properties

- [IOUSBHostMatchingPropertyKeyDeviceProtocol](iousbhostmatchingpropertykey/deviceprotocol.md): The matching property for the device’s protocol.
- [IOUSBHostMatchingPropertyKeyDeviceClass](iousbhostmatchingpropertykey/deviceclass.md): The matching property for the device’s class.
- [IOUSBHostMatchingPropertyKeyDeviceSubClass](iousbhostmatchingpropertykey/devicesubclass.md): The matching property for the device’s subclass.

## See Also

### IOServicePlane Properties

- [IOUSBHostInterfacePropertyKey](iousbhostinterfacepropertykey.md): Properties of a USB interface that describe its state.
- [IOUSBHostDevicePropertyKey](iousbhostdevicepropertykey.md): Properties of a USB device that describe its state.
- [IOUSBHostPropertyKey](iousbhostpropertykey.md): Properties that the USB host device and interface classes share.
