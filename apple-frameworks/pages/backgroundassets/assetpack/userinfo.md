> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/assetpack/userinfo

# userInfo

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

JSON-encoded custom information that’s associated with the asset pack.

## Declaration

```swift
let userInfo: Data?
```

<a id="discussion"></a>

## Discussion

This property is `nil` for Apple-hosted asset packs.

## See Also

### Accessing asset details

- [AssetPack.Status](status.md): The status of an asset pack.
