> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobiledocumentrequest/photoidrawdata(retaining:notretaining:)

# photoIDRawData(retaining:notRetaining:)

**Framework:** ProximityReader  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A request which retrieves photo ID elements from the holder and returns the raw response data for processing.

## Declaration

```swift
static func photoIDRawData(retaining retainedElements: [MobilePhotoIDRawDataRequest.Element], notRetaining nonRetainedElements: [MobilePhotoIDRawDataRequest.Element]) -> Self
```
