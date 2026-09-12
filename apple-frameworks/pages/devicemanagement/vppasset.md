> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vppasset](https://developer.apple.com/documentation/devicemanagement/vppasset)

# VppAsset

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 1.0+

A particular asset in the purchase program.

## Declaration

```
object VppAsset
```

## Properties

- `adamIdStr` — `string`: The unique identifier for a product in the iTunes Store.
- `assignedCount` — `int32`: The total number of licenses assigned to a user or a device for the specified adamId and pricingParam.
- `availableCount` — `int32`: The total number of licenses available to be assigned for the specified adamId and pricingParam.
- `deviceAssignable` — `boolean`: If `true`, a license for the specified adamId may be assigned to a device.
- `isIrrevocable` — `boolean`: If `true`, once a license is assigned for specified adamId, the license may not be revoked or disassociated.
- `pricingParam` — `string`: The quality of a product in the iTunes Store. Possible values are:

  STDQ: Standard quality

  PLUS: High quality
- `productTypeId` — `int32`: The type of a product. Possible values are:

  7 = macOS software

  8 = iOS or macOS app from the App Store

  10 = Book
- `productTypeName` — `string`: The name of the product type.
- `retiredCount` — `int32`: The total number of licenses that have been retired for the specified adamId and pricingParam.
- `totalCount` — `int32`: The total number of licenses managed by your organization for the specified adamId and pricingParam.

## See Also

### Objects and data types

- [VppAssignment](vppassignment.md): An assignment’s properties and their values.
- [VppLicense](vpplicense.md): A license for a product in the purchase program.
- [VppAssociation](vppassociation.md): An association between a license and a user or device.
- [VppUser](vppuser.md): A user within the purchase program.
- [VppLocation](vpplocation.md): A location used for managing purchases.
- [VppErrorCode](vpperrorcode.md): An error code.
