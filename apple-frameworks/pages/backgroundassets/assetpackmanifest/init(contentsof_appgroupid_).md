> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanifest/init(contentsof:appgroupid:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanifest/init(contentsof:appgroupid:))

# init(contentsOf:appGroupID:)

**Framework:** Background Assets  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a manifest in memory given a URL to the manifest’s representation as a JSON file on disk.

## Declaration

```swift
init(contentsOf url: URL, appGroupID: String) throws
```

## Parameters

- `url`: A URL to a local JSON file.
- `appGroupID`: The ID of the app group in which to store unmanaged asset packs that are downloaded from this manifest.

## See Also

### Creating an asset pack manifest

- [init(from:appGroupID:)](init%28from_appgroupid_%29.md): Creates a manifest in memory given JSON-encoded data.
