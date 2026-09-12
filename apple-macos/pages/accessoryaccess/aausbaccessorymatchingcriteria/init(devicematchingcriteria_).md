> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymatchingcriteria/init(devicematchingcriteria:)](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymatchingcriteria/init(devicematchingcriteria:))

# init(deviceMatchingCriteria:)

**Framework:** Accessory Access  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Initializes a criteria object with the provided USB device matching properties.

## Declaration

```swift
convenience init(deviceMatchingCriteria: AAUSBAccessoryMatchingCriteria.DeviceMatchingCriteria)
```

## Parameters

- `deviceMatchingCriteria`: The matching dictionary that contains USB device properties.

<a id="Discussion"></a>

## Discussion

Use [createMatchingDictionaryWithVendorID:productID:bcdDevice:deviceClass:deviceSubclass:deviceProtocol:speed:productIDArray:](../../iousbhost/iousbhostdevice/creatematchingdictionarywithvendorid_productid_bcddevice_deviceclass_devicesubclass_deviceprotocol_speed_productidarray_.md) to create the matching dictionary.

See USBSpec.h in [USBSpec.h User-Space](https://developer.apple.com/documentation/iokit/usbspec_h_user-space) in [IOKit](https://developer.apple.com/documentation/iokit) for more details about dictionary keys for the USB device properties.

## See Also

### Creating matching criteria

- [init(deviceMatchingDictionary:)](init%28devicematchingdictionary_%29.md): Initializes a criteria object using a USB device matching dictionary.
- [init(deviceMatchingDictionary:interfaceMatchingDictionaries:interfaceMatchingOption:)](init%28devicematchingdictionary_interfacematchingdictionaries_interfacematchingoption_%29.md): Initializes a criteria object using USB interface matching dictionaries, for the provided USB device matching criteria.
- [init(deviceMatchingCriteria:interfaceMatchingCriteria:interfaceMatchingOption:)](init%28devicematchingcriteria_interfacematchingcriteria_interfacematchingoption_%29.md): Initializes a criteria object using USB interface matching criteria, for the given USB device matching criteria.
