> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vppassociation](https://developer.apple.com/documentation/devicemanagement/vppassociation)

# VppAssociation

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 1.0+

An association between a license and a user or device.

## Declaration

```
object VppAssociation
```

## Properties

- `clientUserIdStr` — `string`: The client-supplied identifier used when registering a user.
- `errorMessage` — `string`: The human-readable explanation of the error.
- `errorNumber` — `int32`: The numeric code of the error.
- `licenseIdStr` — `string`: The license identifier assigned to a user or device.
- `serialNumber` — `string`: The device serial number.

## See Also

### Objects and data types

- [VppAsset](vppasset.md): A particular asset in the purchase program.
- [VppAssignment](vppassignment.md): An assignment’s properties and their values.
- [VppLicense](vpplicense.md): A license for a product in the purchase program.
- [VppUser](vppuser.md): A user within the purchase program.
- [VppLocation](vpplocation.md): A location used for managing purchases.
- [VppErrorCode](vpperrorcode.md): An error code.
