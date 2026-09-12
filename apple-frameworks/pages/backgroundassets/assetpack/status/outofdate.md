> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpack/status/outofdate](https://developer.apple.com/documentation/backgroundassets/assetpack/status/outofdate)

# outOfDate

**Framework:** Background Assets  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A status value that indicates that the downloaded asset pack is out of date.

## Declaration

```swift
static let outOfDate: AssetPack.Status
```

<a id="discussion"></a>

## Discussion

The presence of this status value doesn’t necessarily imply that an update to the asset pack can be downloaded over the current network connection. Check for the presence of [updateAvailable](updateavailable.md) to determine whether an update can currently be downloaded.

## See Also

### Updating assets

- [upToDate](uptodate.md): A status value that indicates that the downloaded asset pack is up to date.
- [obsolete](obsolete.md): A status value that indicates that the asset pack is no longer available to download.
- [updateAvailable](updateavailable.md): A status value that indicates that an update to the asset pack is available to download.
