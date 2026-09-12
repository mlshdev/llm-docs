> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymatchingcriteria/init(devicematchingdictionary:interfacematchingdictionaries:interfacematchingoption:)](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymatchingcriteria/init(devicematchingdictionary:interfacematchingdictionaries:interfacematchingoption:))

# init(deviceMatchingDictionary:interfaceMatchingDictionaries:interfaceMatchingOption:) (Swift)

**Framework:** Accessory Access  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Initializes a criteria object using USB interface matching dictionaries, for the provided USB device matching criteria.

## Declaration

```swift
init?(deviceMatchingDictionary: [String : any Sendable]?, interfaceMatchingDictionaries: [[String : any Sendable]], interfaceMatchingOption: AAUSBAccessoryMatchingCriteria.InterfaceMatchingOption)
```

## Parameters

- `deviceMatchingDictionary`: USB device matching dictionary.
- `interfaceMatchingDictionaries`: USB interface matching criteria.
- `interfaceMatchingOption`: Option specifying how the framework performs interface matching for a USB accessory. For more information on interface matching options, see [Understanding interface matching options](init%28devicematchingdictionary_interfacematchingdictionaries_interfacematchingoption_%29.md#Understanding-interface-matching-options).

<a id="Discussion"></a>

## Discussion

Use [createMatchingDictionaryWithVendorID:productID:bcdDevice:deviceClass:deviceSubclass:deviceProtocol:speed:productIDArray:](../../iousbhost/iousbhostdevice/creatematchingdictionarywithvendorid_productid_bcddevice_deviceclass_devicesubclass_deviceprotocol_speed_productidarray_.md) to create a USB device matching dictionary.

Use [createMatchingDictionaryWithVendorID:productID:bcdDevice:interfaceNumber:configurationValue:interfaceClass:interfaceSubclass:interfaceProtocol:speed:productIDArray:](../../iousbhost/iousbhostinterface/creatematchingdictionarywithvendorid_productid_bcddevice_interfacenumber_configurationvalue_interfaceclass_interfacesubclass_interfaceprotocol_speed_productidarray_.md) to create a USB interface matching dictionary.

See USBSpec.h in [USBSpec.h User-Space](https://developer.apple.com/documentation/iokit/usbspec_h_user-space) in [IOKit](https://developer.apple.com/documentation/iokit) for more details about dictionary keys for the USB device/interface matching dictionaries.

<a id="Understanding-interface-matching-options"></a>

### Understanding interface matching options

If you initialize the criteria with [AAUSBAccessoryMatchingCriteria.InterfaceMatchingOption.matchAll](interfacematchingoption/matchall.md), then it evaluates to true for a USB accessory when

- It matches the provided non-`nil` `deviceMatchingDictionary`, and
- For the currently set configuration, all the `interfaceMatchingDictionaries` match at least one of its USB interfaces.

If you initialize the criteria is with [AAUSBAccessoryMatchingCriteria.InterfaceMatchingOption.matchAny](interfacematchingoption/matchany.md), then it evaluates to true for a USB accessory when

- It matches the provided non-`nil` `deviceMatchingDictionary`, and
- For the currently set configuration, any of the `interfaceMatchingDictionaries` match at least one of its USB interfaces.

## See Also

### Creating matching criteria

- [init(deviceMatchingDictionary:)](init%28devicematchingdictionary_%29.md): Initializes a criteria object using a USB device matching dictionary.
- [init(deviceMatchingCriteria:)](init%28devicematchingcriteria_%29.md): Initializes a criteria object with the provided USB device matching properties.
- [init(deviceMatchingCriteria:interfaceMatchingCriteria:interfaceMatchingOption:)](init%28devicematchingcriteria_interfacematchingcriteria_interfacematchingoption_%29.md): Initializes a criteria object using USB interface matching criteria, for the given USB device matching criteria.

# initWithDeviceMatchingDictionary:interfaceMatchingDictionaries:interfaceMatchingOption: (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Initializes a criteria object using USB interface matching dictionaries, for the provided USB device matching criteria.

## Declaration

```objectivec
- (instancetype) initWithDeviceMatchingDictionary:(NSDictionary<NSString *,id> *) deviceMatchingDictionary interfaceMatchingDictionaries:(NSArray<NSDictionary<NSString *,id> *> *) interfaceMatchingDictionaries interfaceMatchingOption:(AAUSBAccessoryMatchingCriteriaInterfaceMatchingOption) interfaceMatchingOption;
```

## Parameters

- `deviceMatchingDictionary`: USB device matching dictionary.
- `interfaceMatchingDictionaries`: USB interface matching criteria.
- `interfaceMatchingOption`: Option specifying how the framework performs interface matching for a USB accessory. For more information on interface matching options, see [Understanding interface matching options](init%28devicematchingdictionary_interfacematchingdictionaries_interfacematchingoption_%29.md#Understanding-interface-matching-options).

<a id="Discussion"></a>

## Discussion

Use [createMatchingDictionaryWithVendorID:productID:bcdDevice:deviceClass:deviceSubclass:deviceProtocol:speed:productIDArray:](../../iousbhost/iousbhostdevice/creatematchingdictionarywithvendorid_productid_bcddevice_deviceclass_devicesubclass_deviceprotocol_speed_productidarray_.md) to create a USB device matching dictionary.

Use [createMatchingDictionaryWithVendorID:productID:bcdDevice:interfaceNumber:configurationValue:interfaceClass:interfaceSubclass:interfaceProtocol:speed:productIDArray:](../../iousbhost/iousbhostinterface/creatematchingdictionarywithvendorid_productid_bcddevice_interfacenumber_configurationvalue_interfaceclass_interfacesubclass_interfaceprotocol_speed_productidarray_.md) to create a USB interface matching dictionary.

See USBSpec.h in [USBSpec.h User-Space](https://developer.apple.com/documentation/iokit/usbspec_h_user-space) in [IOKit](https://developer.apple.com/documentation/iokit) for more details about dictionary keys for the USB device/interface matching dictionaries.

<a id="Understanding-interface-matching-options"></a>

### Understanding interface matching options

If you initialize the criteria with [AAUSBAccessoryMatchingCriteriaInterfaceMatchingOptionMatchAll](interfacematchingoption/matchall.md), then it evaluates to true for a USB accessory when

- It matches the provided non-`nil` `deviceMatchingDictionary`, and
- For the currently set configuration, all the `interfaceMatchingDictionaries` match at least one of its USB interfaces.

If you initialize the criteria is with [AAUSBAccessoryMatchingCriteriaInterfaceMatchingOptionMatchAny](interfacematchingoption/matchany.md), then it evaluates to true for a USB accessory when

- It matches the provided non-`nil` `deviceMatchingDictionary`, and
- For the currently set configuration, any of the `interfaceMatchingDictionaries` match at least one of its USB interfaces.

## See Also

### Creating matching criteria

- [initWithDeviceMatchingDictionary:](init%28devicematchingdictionary_%29.md): Initializes a criteria object using a USB device matching dictionary.
