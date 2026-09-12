> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice/properties/init(descriptor:vendorid:productid:transport:product:manufacturer:modelnumber:versionnumber:serialnumber:uniqueid:locationid:localizationcode:extraproperties:)](https://developer.apple.com/documentation/corehid/hidvirtualdevice/properties/init(descriptor:vendorid:productid:transport:product:manufacturer:modelnumber:versionnumber:serialnumber:uniqueid:locationid:localizationcode:extraproperties:))

# init(descriptor:vendorID:productID:transport:product:manufacturer:modelNumber:versionNumber:serialNumber:uniqueID:locationID:localizationCode:extraProperties:)

**Framework:** Core HID  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a set of properties for a virtual device.

## Declaration

```swift
init(descriptor: Data, vendorID: UInt32, productID: UInt32? = nil, transport: HIDDeviceTransport? = nil, product: String? = nil, manufacturer: String? = nil, modelNumber: String? = nil, versionNumber: UInt64? = nil, serialNumber: String? = nil, uniqueID: String? = nil, locationID: UInt64? = nil, localizationCode: HIDDeviceLocalizationCode? = nil, extraProperties: Dictionary<String, AnyObject>? = nil)
```

## Parameters

- `descriptor`: See [descriptor](descriptor.md).
- `vendorID`: See [vendorID](vendorid.md).
- `productID`: See [productID](productid.md).
- `transport`: See [transport](transport.md).
- `product`: See [product](product.md).
- `manufacturer`: See [manufacturer](manufacturer.md).
- `modelNumber`: See [modelNumber](modelnumber.md).
- `versionNumber`: See [versionNumber](versionnumber.md).
- `serialNumber`: See [serialNumber](serialnumber.md).
- `uniqueID`: See [uniqueID](uniqueid.md).
- `locationID`: See [locationID](locationid.md).
- `localizationCode`: See [localizationCode](localizationcode.md).
- `extraProperties`: A catch-all for uncommon or device specific properties that aren’t listed above. This parameter is typically only for advanced users that need additional control over device functionality.

## Mentioned In

- [Creating virtual devices](../../creatingvirtualdevices.md)

<a id="discussion"></a>

## Discussion

Properties must be specified during the creation of a virtual device using [init(properties:)](../init%28properties_%29.md).
