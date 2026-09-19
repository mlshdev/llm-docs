> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/mobiledriverslicensedatarequest/init(retainedelements:nonretainedelements:)

# init(retainedElements:nonRetainedElements:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Returns a mobile driver’s license data request.

## Declaration

```swift
init(retainedElements: [MobileDriversLicenseDataRequest.Element] = [], nonRetainedElements: [MobileDriversLicenseDataRequest.Element] = [])
```

## See Also

### Creating a data request

- [retainedElements](retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.
- [nonRetainedElements](nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than necessary to process the result in realtime.
- [MobileDriversLicenseDataRequest.Element](element.md): A type that represents an element you can request from a mobile driver’s license.
