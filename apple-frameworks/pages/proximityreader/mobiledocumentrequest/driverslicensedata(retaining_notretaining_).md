> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobiledocumentrequest/driverslicensedata(retaining:notretaining:)

# driversLicenseData(retaining:notRetaining:)

**Framework:** ProximityReader  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A request which retrieves elements from the holder and returns the validated document elements.

## Declaration

```swift
static func driversLicenseData(retaining retainedElements: [MobileDriversLicenseDataRequest.Element], notRetaining nonRetainedElements: [MobileDriversLicenseDataRequest.Element]) -> Self
```

## See Also

### Mobile driver’s license data request

- [MobileDriversLicenseDataRequest](../mobiledriverslicensedatarequest.md): A mobile driver’s license request that retrieves elements from the holder and returns the validated document elements.
