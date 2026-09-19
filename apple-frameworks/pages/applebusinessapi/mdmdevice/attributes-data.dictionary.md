> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applebusinessapi/mdmdevice/attributes-data.dictionary

# MdmDevice.Attributes

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Object  
**Availability:** Apple Business API 2.5+

The attributes for a device management service enrolled device resource.

## Declaration

```
object MdmDevice.Attributes
```

## Properties

- `deviceName` — `string`: The name of the device.
- `enrolledUserId` — `string`: The unique identifier of the user enrolled with the device.
- `productFamily` — `string`: The product family of the device.
- `serialNumber` — `string`: The serial number of the device.
