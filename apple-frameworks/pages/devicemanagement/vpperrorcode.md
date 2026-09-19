> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/vpperrorcode

# VppErrorCode

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 1.0+

An error code.

## Declaration

```
object VppErrorCode
```

## Properties

- `errorMessage` — `string`: The human-readable explanation of the error.
- `errorNumber` — `int32`: The numeric code of the error.

## See Also

### Objects and data types

- [VppAsset](vppasset.md): A particular asset in the purchase program.
- [VppAssignment](vppassignment.md): An assignment’s properties and their values.
- [VppLicense](vpplicense.md): A license for a product in the purchase program.
- [VppAssociation](vppassociation.md): An association between a license and a user or device.
- [VppUser](vppuser.md): A user within the purchase program.
- [VppLocation](vpplocation.md): A location used for managing purchases.
