> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessorymatchingcriteria/init(devicematchingdictionary:)](https://developer.apple.com/documentation/accessoryaccess/aausbaccessorymatchingcriteria/init(devicematchingdictionary:))

# init(deviceMatchingDictionary:) (Swift)

**Framework:** Accessory Access  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Initializes a criteria object using a USB device matching dictionary.

## Declaration

```swift
init?(deviceMatchingDictionary dictionary: [String : any Sendable])
```

## Parameters

- `dictionary`: The matching dictionary containing USB device properties.

<a id="Discussion"></a>

## Discussion

Use [createMatchingDictionaryWithVendorID:productID:bcdDevice:deviceClass:deviceSubclass:deviceProtocol:speed:productIDArray:](../../iousbhost/iousbhostdevice/creatematchingdictionarywithvendorid_productid_bcddevice_deviceclass_devicesubclass_deviceprotocol_speed_productidarray_.md) to create such a matching dictionary.

See [IOTypes.h User-Space](https://developer.apple.com/documentation/iokit/iotypes_h_user-space) in [IOKit](https://developer.apple.com/documentation/iokit) for more details about dictionary keys for the USB device properties.

## See Also

### Creating matching criteria

- [init(deviceMatchingDictionary:interfaceMatchingDictionaries:interfaceMatchingOption:)](init%28devicematchingdictionary_interfacematchingdictionaries_interfacematchingoption_%29.md): Initializes a criteria object using USB interface matching dictionaries, for the provided USB device matching criteria.
- [init(deviceMatchingCriteria:)](init%28devicematchingcriteria_%29.md): Initializes a criteria object with the provided USB device matching properties.
- [init(deviceMatchingCriteria:interfaceMatchingCriteria:interfaceMatchingOption:)](init%28devicematchingcriteria_interfacematchingcriteria_interfacematchingoption_%29.md): Initializes a criteria object using USB interface matching criteria, for the given USB device matching criteria.

# initWithDeviceMatchingDictionary: (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Initializes a criteria object using a USB device matching dictionary.

## Declaration

```objectivec
- (instancetype) initWithDeviceMatchingDictionary:(NSDictionary<NSString *,id> *) dictionary;
```

## Parameters

- `dictionary`: The matching dictionary containing USB device properties.

<a id="Discussion"></a>

## Discussion

Use [createMatchingDictionaryWithVendorID:productID:bcdDevice:deviceClass:deviceSubclass:deviceProtocol:speed:productIDArray:](../../iousbhost/iousbhostdevice/creatematchingdictionarywithvendorid_productid_bcddevice_deviceclass_devicesubclass_deviceprotocol_speed_productidarray_.md) to create such a matching dictionary.

See [IOTypes.h User-Space](https://developer.apple.com/documentation/iokit/iotypes_h_user-space) in [IOKit](https://developer.apple.com/documentation/iokit) for more details about dictionary keys for the USB device properties.

## See Also

### Creating matching criteria

- [initWithDeviceMatchingDictionary:interfaceMatchingDictionaries:interfaceMatchingOption:](init%28devicematchingdictionary_interfacematchingdictionaries_interfacematchingoption_%29.md): Initializes a criteria object using USB interface matching dictionaries, for the provided USB device matching criteria.
