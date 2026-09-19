> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobiledocumentrequest/photoidrawdata(retaining:notretaining:issueridentifiers:)

# photoIDRawData(retaining:notRetaining:issuerIdentifiers:)

**Framework:** ProximityReader  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A request which retrieves photo ID elements from the holder and returns the raw response data for processing.

## Declaration

```swift
static func photoIDRawData(retaining retainedElements: [MobilePhotoIDRawDataRequest.Element] = [], notRetaining nonRetainedElements: [MobilePhotoIDRawDataRequest.Element] = [], issuerIdentifiers: [Data] = []) -> Self
```
