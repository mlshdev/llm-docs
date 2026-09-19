> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/assetpack/status/obsolete

# obsolete

**Framework:** Background Assets  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A status value that indicates that the asset pack is no longer available to download.

## Declaration

```swift
static let obsolete: AssetPack.Status
```

<a id="discussion"></a>

## Discussion

Obsolete asset packs can’t be updated, and they also can’t be redownloaded once removed.

## See Also

### Updating assets

- [upToDate](uptodate.md): A status value that indicates that the downloaded asset pack is up to date.
- [outOfDate](outofdate.md): A status value that indicates that the downloaded asset pack is out of date.
- [updateAvailable](updateavailable.md): A status value that indicates that an update to the asset pack is available to download.
