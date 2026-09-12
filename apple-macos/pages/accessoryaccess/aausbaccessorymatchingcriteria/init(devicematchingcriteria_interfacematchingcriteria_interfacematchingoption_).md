> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymatchingcriteria/init(devicematchingcriteria:interfacematchingcriteria:interfacematchingoption:)](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymatchingcriteria/init(devicematchingcriteria:interfacematchingcriteria:interfacematchingoption:))

# init(deviceMatchingCriteria:interfaceMatchingCriteria:interfaceMatchingOption:)

**Framework:** Accessory Access  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Initializes a criteria object using USB interface matching criteria, for the given USB device matching criteria.

## Declaration

```swift
convenience init(deviceMatchingCriteria: AAUSBAccessoryMatchingCriteria.DeviceMatchingCriteria?, interfaceMatchingCriteria: [AAUSBAccessoryMatchingCriteria.InterfaceMatchingCriteria], interfaceMatchingOption: AAUSBAccessoryMatchingCriteria.InterfaceMatchingOption)
```

## Parameters

- `deviceMatchingCriteria`: USB device matching criteria.
- `interfaceMatchingCriteria`: USB interface matching criteria.
- `interfaceMatchingOption`: Option that specifies how the framework performs interface matching for a USB accessory. If the criteria is initialized with [AAUSBAccessoryMatchingCriteria.InterfaceMatchingOption.matchAll](interfacematchingoption/matchall.md), then it evaluates to `true` for a USB accessory when

  - It matches the given non-nil deviceMatchingDictionary, and
  - For the currently set configuration, all the `interfaceMatchingDictionaries` match at least one of its USB interfaces.

<a id="Discussion"></a>

## Discussion

Initialize a criteria object using USB interface matching dictionaries, for the given USB device matching dictionary.

Use [createMatchingDictionaryWithVendorID:productID:bcdDevice:deviceClass:deviceSubclass:deviceProtocol:speed:productIDArray:](../../iousbhost/iousbhostdevice/creatematchingdictionarywithvendorid_productid_bcddevice_deviceclass_devicesubclass_deviceprotocol_speed_productidarray_.md) to create a USB device matching dictionary.

Use [createMatchingDictionaryWithVendorID:productID:bcdDevice:interfaceNumber:configurationValue:interfaceClass:interfaceSubclass:interfaceProtocol:speed:productIDArray:](../../iousbhost/iousbhostinterface/creatematchingdictionarywithvendorid_productid_bcddevice_interfacenumber_configurationvalue_interfaceclass_interfacesubclass_interfaceprotocol_speed_productidarray_.md) to create a USB interface matching dictionary.

See USBSpec.h in [USBSpec.h User-Space](https://developer.apple.com/documentation/iokit/usbspec_h_user-space) in [IOKit](https://developer.apple.com/documentation/iokit) for more details about dictionary keys for the USB device/interface matching dictionaries.

If the criteria is initialized with [AAUSBAccessoryMatchingCriteria.InterfaceMatchingOption.matchAny](interfacematchingoption/matchany.md), then it evaluates to true for a USB accessory when it matches the given non-`nil` `deviceMatchingDictionary`, and for the currently set configuration, any of the `interfaceMatchingDictionaries` match at least one of its USB interfaces.

## See Also

### Creating matching criteria

- [init(deviceMatchingDictionary:)](init%28devicematchingdictionary_%29.md): Initializes a criteria object using a USB device matching dictionary.
- [init(deviceMatchingDictionary:interfaceMatchingDictionaries:interfaceMatchingOption:)](init%28devicematchingdictionary_interfacematchingdictionaries_interfacematchingoption_%29.md): Initializes a criteria object using USB interface matching dictionaries, for the provided USB device matching criteria.
- [init(deviceMatchingCriteria:)](init%28devicematchingcriteria_%29.md): Initializes a criteria object with the provided USB device matching properties.
