> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymatchingcriteria/interfacematchingcriteria](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymatchingcriteria/interfacematchingcriteria)

# AAUSBAccessoryMatchingCriteria.InterfaceMatchingCriteria

**Framework:** Accessory Access  
**Kind:** Structure  
**Availability:** macOS 27.0+

A structure you provide that enumerates which device interface characteristics to search for.

## Declaration

```swift
struct InterfaceMatchingCriteria
```

## Topics

### Creating an interface characteristics structure

- [init(vendorID:productID:bcdDevice:interfaceNumber:configurationValue:interfaceClass:interfaceSubClass:interfaceProtocol:speed:)](interfacematchingcriteria/init%28vendorid_productid_bcddevice_interfacenumber_configurationvalue_interfaceclass_interfacesubclass_interfaceprotocol_speed_%29.md): Initializes a new matching criteria structure with the provided values.

### Interface characteristics

- [bcdDevice](interfacematchingcriteria/bcddevice.md): The 2-byte Binary-Coded Decimal (BCD) value defined by the manufacturer to indicate the device revision or version number.
- [configurationValue](interfacematchingcriteria/configurationvalue.md): The value that represents the configuration.
- [interfaceClass](interfacematchingcriteria/interfaceclass.md): The value that represents the interface class.
- [interfaceNumber](interfacematchingcriteria/interfacenumber.md): The value that represents the interface number.
- [interfaceProtocol](interfacematchingcriteria/interfaceprotocol.md): The value that represents the interface protocol.
- [interfaceSubClass](interfacematchingcriteria/interfacesubclass.md): The value that represents the interface subclass.
- [productID](interfacematchingcriteria/productid.md): The value that represents the product ID.
- [speed](interfacematchingcriteria/speed.md): The value that represents the interface speed.
- [vendorID](interfacematchingcriteria/vendorid.md): The value that represents the vendor ID.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying device and interface criteria

- [AAUSBAccessoryMatchingCriteria.DeviceMatchingCriteria](devicematchingcriteria.md): A structure you provide that enumerates which device characteristics to search for.
