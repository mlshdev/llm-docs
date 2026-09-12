> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentrequest/photoidrawdata(retaining:notretaining:issueridentifiers:)](https://developer.apple.com/documentation/proximityreader/mobiledocumentrequest/photoidrawdata(retaining:notretaining:issueridentifiers:))

# photoIDRawData(retaining:notRetaining:issuerIdentifiers:)

**Framework:** ProximityReader  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A request which retrieves photo ID elements from the holder and returns the raw response data for processing.

## Declaration

```swift
static func photoIDRawData(retaining retainedElements: [MobilePhotoIDRawDataRequest.Element] = [], notRetaining nonRetainedElements: [MobilePhotoIDRawDataRequest.Element] = [], issuerIdentifiers: [Data] = []) -> Self
```
