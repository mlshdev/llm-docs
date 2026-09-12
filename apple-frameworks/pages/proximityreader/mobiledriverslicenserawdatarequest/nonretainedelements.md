> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledriverslicenserawdatarequest/nonretainedelements](https://developer.apple.com/documentation/proximityreader/mobiledriverslicenserawdatarequest/nonretainedelements)

# nonRetainedElements

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The document elements you’re requesting and intend to retain no longer than is necessary to process the result in realtime.

## Declaration

```swift
var nonRetainedElements: [MobileDriversLicenseRawDataRequest.Element]
```

## See Also

### Creating a raw data request

- [init(retainedElements:nonRetainedElements:)](init%28retainedelements_nonretainedelements_%29.md): Returns a mobile driver’s license raw data request.
- [retainedElements](retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.
- [MobileDriversLicenseRawDataRequest.Element](element.md): A type representing an element that you can request from a mobile driver’s license.
