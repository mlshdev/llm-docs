> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentrequest/driverslicenserawdata(retaining:notretaining:)](https://developer.apple.com/documentation/proximityreader/mobiledocumentrequest/driverslicenserawdata(retaining:notretaining:))

# driversLicenseRawData(retaining:notRetaining:)

**Framework:** ProximityReader  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A request which retrieves mobile driver’s license elements from the holder and returns the raw response data for processing.

## Declaration

```swift
static func driversLicenseRawData(retaining retainedElements: [MobileDriversLicenseRawDataRequest.Element], notRetaining nonRetainedElements: [MobileDriversLicenseRawDataRequest.Element]) -> Self
```

## See Also

### Mobile driver’s license raw data request

- [MobileDriversLicenseRawDataRequest](../mobiledriverslicenserawdatarequest.md): A mobile driver’s license request which retrieves elements from the holder and returns the raw response data for processing.
