> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice/properties](https://developer.apple.com/documentation/corehid/hidvirtualdevice/properties)

# HIDVirtualDevice.Properties

**Framework:** Core HID  
**Kind:** Structure  
**Availability:** macOS 15.0+

The properties for a virtual HID device.

## Declaration

```swift
struct Properties
```

## Mentioned In

- [Creating virtual devices](../creatingvirtualdevices.md)

<a id="overview"></a>

## Overview

A virtual device has many properties, required and optional, that determine or alter its functionality. Use this class to provide these properties during the creation of a virtual device.

Uncommon properties that aren’t available can be specified in the `extraProperties` parameter of [init(descriptor:vendorID:productID:transport:product:manufacturer:modelNumber:versionNumber:serialNumber:uniqueID:locationID:localizationCode:extraProperties:)](properties/init%28descriptor_vendorid_productid_transport_product_manufacturer_modelnumber_versionnumber_serialnumber_uniqueid_locationid_localizationcode_extraproperties_%29.md).

## Topics

### Initializers

- [init(descriptor:vendorID:productID:transport:product:manufacturer:modelNumber:versionNumber:serialNumber:uniqueID:locationID:localizationCode:extraProperties:)](properties/init%28descriptor_vendorid_productid_transport_product_manufacturer_modelnumber_versionnumber_serialnumber_uniqueid_locationid_localizationcode_extraproperties_%29.md): Creates a set of properties for a virtual device.

### Instance Properties

- [descriptor](properties/descriptor.md): The HID specification compliant report descriptor for the virtual device.
- [localizationCode](properties/localizationcode.md): A device localization code that specifies the HID compliant localization code.
- [locationID](properties/locationid.md): The location ID for the device.
- [manufacturer](properties/manufacturer.md): The manufacturer of the device.
- [modelNumber](properties/modelnumber.md): The model number for the device.
- [product](properties/product.md): The product name for the device.
- [productID](properties/productid.md): The product ID for the device.
- [serialNumber](properties/serialnumber.md): The serial number for the device.
- [transport](properties/transport.md): The data transport for the device.
- [uniqueID](properties/uniqueid.md): A unique ID for the device.
- [vendorID](properties/vendorid.md): The vendor ID for the device.
- [versionNumber](properties/versionnumber.md): The version of the device.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Simulation

- [Creating virtual devices](../creatingvirtualdevices.md): Use and interact with a virtual human interface device for testing and development.
- [HIDVirtualDevice](../hidvirtualdevice.md): A virtual service to emulate a HID device connected to the system.
- [HIDVirtualDeviceDelegate](../hidvirtualdevicedelegate.md): The delegate to receive notifications for a virtual HID device.
