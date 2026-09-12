> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymatchingcriteria/devicematchingcriteria](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymatchingcriteria/devicematchingcriteria)

# AAUSBAccessoryMatchingCriteria.DeviceMatchingCriteria

**Framework:** Accessory Access  
**Kind:** Structure  
**Availability:** macOS 27.0+

A structure you provide that enumerates which device characteristics to search for.

## Declaration

```swift
struct DeviceMatchingCriteria
```

## Topics

### Creating a device characteristics structure

- [init(vendorID:productID:deviceClass:deviceSubClass:deviceProtocol:speed:)](devicematchingcriteria/init%28vendorid_productid_deviceclass_devicesubclass_deviceprotocol_speed_%29.md): Initializes a new device matching criteria structure with the provided values.

### Device characteristics

- [deviceClass](devicematchingcriteria/deviceclass.md): The value that represents the device class.
- [deviceProtocol](devicematchingcriteria/deviceprotocol.md): The value that represents the device protocol.
- [deviceSubClass](devicematchingcriteria/devicesubclass.md): The value that represents the device subclass.
- [productID](devicematchingcriteria/productid.md): The value that represents the product ID.
- [speed](devicematchingcriteria/speed.md): The value that represents the device speed.
- [vendorID](devicematchingcriteria/vendorid.md): The value that represents the vendor ID.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying device and interface criteria

- [AAUSBAccessoryMatchingCriteria.InterfaceMatchingCriteria](interfacematchingcriteria.md): A structure you provide that enumerates which device interface characteristics to search for.
