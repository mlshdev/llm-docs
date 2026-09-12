> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddevicemanager/devicematchingcriteria](https://developer.apple.com/documentation/corehid/hiddevicemanager/devicematchingcriteria)

# HIDDeviceManager.DeviceMatchingCriteria

**Framework:** Core HID  
**Kind:** Structure  
**Availability:** macOS 15.0+

Matching criteria used to filter HID devices.

## Declaration

```swift
struct DeviceMatchingCriteria
```

## Mentioned In

- [Communicating with human interface devices](../communicatingwithhiddevices.md)

<a id="overview"></a>

## Overview

Use this class to filter the HID devices on the system using common properties, such as [HIDUsage](../hidusage.md). All matching parameters are specified using [init(primaryUsage:deviceUsages:vendorID:productID:transport:product:manufacturer:modelNumber:versionNumber:serialNumber:uniqueID:locationID:localizationCode:isBuiltIn:extraProperties:)](devicematchingcriteria/init%28primaryusage_deviceusages_vendorid_productid_transport_product_manufacturer_modelnumber_versionnumber_serialnumber_uniqueid_locationid_localizationcode_isbuiltin_extraproperti~7fa6c3fb.md).

Uncommon criteria not available as properties can be specified in the `extraProperties` parameter of `init`.

## Topics

### Initializers

- [init(primaryUsage:deviceUsages:vendorID:productID:transport:product:manufacturer:modelNumber:versionNumber:serialNumber:uniqueID:locationID:localizationCode:isBuiltIn:extraProperties:)](devicematchingcriteria/init%28primaryusage_deviceusages_vendorid_productid_transport_product_manufacturer_modelnumber_versionnumber_serialnumber_uniqueid_locationid_localizationcode_isbuiltin_extraproperti~7fa6c3fb.md): Creates one set of matching criteria for HID devices.

### Instance Properties

- [deviceUsages](devicematchingcriteria/deviceusages.md): A list of usages supported by the device.
- [isBuiltIn](devicematchingcriteria/isbuiltin.md): A Boolean value that indicates whether the device is built-in to the system or external.
- [localizationCode](devicematchingcriteria/localizationcode.md): A localization code that specifies the HID compliant localization code.
- [locationID](devicematchingcriteria/locationid.md): The location ID for the device.
- [manufacturer](devicematchingcriteria/manufacturer.md): The manufacturer of the device.
- [modelNumber](devicematchingcriteria/modelnumber.md): The model number for the device.
- [primaryUsage](devicematchingcriteria/primaryusage.md): The HID specification compliant usage for the device.
- [product](devicematchingcriteria/product.md): The product name for the device.
- [productID](devicematchingcriteria/productid.md): The product ID for the device.
- [serialNumber](devicematchingcriteria/serialnumber.md): The serial number of the device.
- [transport](devicematchingcriteria/transport.md): The data transport for the device.
- [uniqueID](devicematchingcriteria/uniqueid.md): A unique ID for the device.
- [vendorID](devicematchingcriteria/vendorid.md): The vendor ID for the device.
- [versionNumber](devicematchingcriteria/versionnumber.md): The version of the device.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Discovery

- [Discovering HID devices from Terminal](../discoveringhiddevicesfromterminal.md): Identify devices connected to your Mac from the command line.
- [HIDDeviceManager](../hiddevicemanager.md): A helper for discovering human interface devices (HID) connected to the system.
