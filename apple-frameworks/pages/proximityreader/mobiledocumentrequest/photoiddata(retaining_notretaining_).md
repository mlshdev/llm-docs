> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobiledocumentrequest/photoiddata(retaining:notretaining:)

# photoIDData(retaining:notRetaining:)

**Framework:** ProximityReader  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A request which retrieves elements from the holder and returns the validated document elements.

## Declaration

```swift
static func photoIDData(retaining retainedElements: [MobilePhotoIDDataRequest.Element], notRetaining nonRetainedElements: [MobilePhotoIDDataRequest.Element]) -> Self
```
