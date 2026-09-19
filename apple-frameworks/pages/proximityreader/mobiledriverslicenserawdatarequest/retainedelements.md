> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobiledriverslicenserawdatarequest/retainedelements

# retainedElements

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The document elements you’re requesting and intend to retain for an indefinite period of time.

## Declaration

```swift
var retainedElements: [MobileDriversLicenseRawDataRequest.Element]
```

## See Also

### Creating a raw data request

- [init(retainedElements:nonRetainedElements:)](init%28retainedelements_nonretainedelements_%29.md): Returns a mobile driver’s license raw data request.
- [nonRetainedElements](nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than is necessary to process the result in realtime.
- [MobileDriversLicenseRawDataRequest.Element](element.md): A type representing an element that you can request from a mobile driver’s license.
