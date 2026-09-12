> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpack/status](https://developer.apple.com/documentation/backgroundassets/assetpack/status)

# AssetPack.Status

**Framework:** Background Assets  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The status of an asset pack.

## Declaration

```swift
struct Status
```

## Topics

### Tracking downloads

- [downloadAvailable](status/downloadavailable.md): A status value that indicates that the asset pack is available to download.
- [downloading](status/downloading.md): A status value that indicates that the system is currently downloading the asset pack.
- [downloaded](status/downloaded.md): A status value that indicates that the system finished downloading the asset pack.

### Updating assets

- [upToDate](status/uptodate.md): A status value that indicates that the downloaded asset pack is up to date.
- [outOfDate](status/outofdate.md): A status value that indicates that the downloaded asset pack is out of date.
- [obsolete](status/obsolete.md): A status value that indicates that the asset pack is no longer available to download.
- [updateAvailable](status/updateavailable.md): A status value that indicates that an update to the asset pack is available to download.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessing asset details

- [userInfo](userinfo.md): JSON-encoded custom information that’s associated with the asset pack.
