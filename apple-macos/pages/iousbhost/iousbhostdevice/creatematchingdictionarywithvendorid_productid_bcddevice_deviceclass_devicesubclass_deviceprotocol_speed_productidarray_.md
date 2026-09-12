> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostdevice/creatematchingdictionarywithvendorid:productid:bcddevice:deviceclass:devicesubclass:deviceprotocol:speed:productidarray:](https://developer.apple.com/documentation/iousbhost/iousbhostdevice/creatematchingdictionarywithvendorid:productid:bcddevice:deviceclass:devicesubclass:deviceprotocol:speed:productidarray:)

# createMatchingDictionaryWithVendorID:productID:bcdDevice:deviceClass:deviceSubclass:deviceProtocol:speed:productIDArray:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Type Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Creates a matching dictionary to find a USB device.

## Declaration

```objectivec
+ (CFMutableDictionaryRef) createMatchingDictionaryWithVendorID:(NSNumber *) vendorID productID:(NSNumber *) productID bcdDevice:(NSNumber *) bcdDevice deviceClass:(NSNumber *) deviceClass deviceSubclass:(NSNumber *) deviceSubclass deviceProtocol:(NSNumber *) deviceProtocol speed:(NSNumber *) speed productIDArray:(NSArray *) productIDArray;
```

## Parameters

- `vendorID`: The vendor ID for the device you’re searching for.
- `productID`: The product ID for the device you’re searching for.
- `bcdDevice`: The release number of the device you’re searching for.
- `deviceClass`: The class of the device you’re searching for.
- `deviceSubclass`: The subclass of the device you’re searching for.
- `deviceProtocol`: The protocol of the device you’re searching for.
- `speed`: The enumeration speed of the device you’re searching for. Add the speed to any of the keys in the table below.
- `productIDArray`: An array of product IDs to match against. Don’t use this parameter with the `productID` parameter.

<a id="return-value"></a>

## Return Value

A dictionary to pass to IOKit matching methods, such as [IOServiceGetMatchingService](https://developer.apple.com/documentation/iokit/1514535-ioservicegetmatchingservice). The caller must release this object when done.

<a id="Discussion"></a>

## Discussion

The table below shows the keys you can use to make a successful matching dictionary. A plus sign (+) separates the keys to emphasize the requirement that all of the specified keys combine.

The table presents the keys in order of specificity. The first key defines the most specific search, and the last key defines the broadest search.

| Keys | Notes |
| --- | --- |
| [idVendor](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425819-idvendor) \+ [idProduct](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1426145-idproduct) \+ [bcdDevice](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425514-bcddevice) | None. |
| [idVendor](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425819-idvendor) \+ [idProduct](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1426145-idproduct) | None. |
| [idVendor](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425819-idvendor) \+ [bDeviceSubClass](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425757-bdevicesubclass) \+ [bDeviceProtocol](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425787-bdeviceprotocol) | Use these keys only if the device’s [bDeviceClass](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425902-bdeviceclass) is set to 0xFF. |
| [idVendor](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425819-idvendor) \+ [bDeviceSubClass](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425757-bdevicesubclass) | Use these keys only if the device’s [bDeviceClass](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425902-bdeviceclass) is set to 0xFF. |
| [bDeviceClass](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425902-bdeviceclass) \+ [bDeviceSubClass](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425757-bdevicesubclass) \+ [bDeviceProtocol](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425787-bdeviceprotocol) | Use these keys only if the device’s [bDeviceClass](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425902-bdeviceclass) is not set to 0xFF. |
| [bDeviceClass](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425902-bdeviceclass) \+ [bDeviceSubClass](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425757-bdevicesubclass) | Use these keys only if the device’s [bDeviceClass](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor/1425902-bdeviceclass) is not set to 0xFF. |

## Topics

### Properties

- [IOUSBHostMatchingPropertyKey](../iousbhostmatchingpropertykey.md): Properties for implementing the matching service.
- [IOUSBHostPropertyKey](../iousbhostpropertykey.md): Properties that the USB host device and interface classes share.

## See Also

### Related Documentation

- [IOUSBHostDevice](../iousbhostdevice.md): The class that claims and configures devices, retrieves descriptors, and sends device requests.
- [IOUSBDeviceDescriptor](https://developer.apple.com/documentation/iokit/iousbdevicedescriptor)
