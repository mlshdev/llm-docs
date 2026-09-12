> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vppassignment](https://developer.apple.com/documentation/devicemanagement/vppassignment)

# VppAssignment

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 1.1+

An assignment’s properties and their values.

## Declaration

```
object VppAssignment
```

## Properties

- `adamIdStr` — `string`: The unique identifier for a product in the iTunes Store.
- `clientUserIdStr` — `string`: The client user ID of the user that the device is currently assigned to.
- `pricingParam` — `string`: The quality of a product in the iTunes Store. Possible values are:

  - `STDQ`: Standard quality
  - `PLUS`: High quality
- `serialNumber` — `string`: The device’s serial number that the license is currently assigned to.

## See Also

### Objects and data types

- [VppAsset](vppasset.md): A particular asset in the purchase program.
- [VppLicense](vpplicense.md): A license for a product in the purchase program.
- [VppAssociation](vppassociation.md): An association between a license and a user or device.
- [VppUser](vppuser.md): A user within the purchase program.
- [VppLocation](vpplocation.md): A location used for managing purchases.
- [VppErrorCode](vpperrorcode.md): An error code.
