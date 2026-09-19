> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobilenationalidcardrawdatarequest/init(region:retainedelements:nonretainedelements:issueridentifiers:)

# init(region:retainedElements:nonRetainedElements:issuerIdentifiers:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a mobile national ID card raw data request with issuer identifiers.

## Declaration

```swift
init(region: Locale.Region, retainedElements: [MobileNationalIDCardRawDataRequest.Element] = [], nonRetainedElements: [MobileNationalIDCardRawDataRequest.Element] = [], issuerIdentifiers: [Data] = [])
```
