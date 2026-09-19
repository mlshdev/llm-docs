> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobilephotoidrawdatarequest/init(retainedelements:nonretainedelements:issueridentifiers:)

# init(retainedElements:nonRetainedElements:issuerIdentifiers:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Returns a photo ID raw data request with issuer identifiers.

## Declaration

```swift
init(retainedElements: [MobilePhotoIDRawDataRequest.Element] = [], nonRetainedElements: [MobilePhotoIDRawDataRequest.Element] = [], issuerIdentifiers: [Data] = [])
```
