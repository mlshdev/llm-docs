> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobiledocumentrequest/driverslicenserawdata(retaining:notretaining:issueridentifiers:)

# driversLicenseRawData(retaining:notRetaining:issuerIdentifiers:)

**Framework:** ProximityReader  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A request which retrieves mobile driver’s license elements from the holder and returns the raw response data for processing.

## Declaration

```swift
static func driversLicenseRawData(retaining retainedElements: [MobileDriversLicenseRawDataRequest.Element] = [], notRetaining nonRetainedElements: [MobileDriversLicenseRawDataRequest.Element] = [], issuerIdentifiers: [Data] = []) -> Self
```
