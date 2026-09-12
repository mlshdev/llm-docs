> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanifest/assetpack(withid:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanifest/assetpack(withid:))

# assetPack(withID:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the asset pack in this manifest with the given ID.

## Declaration

```swift
func assetPack(withID id: String) -> AssetPack?
```

## Parameters

- `id`: The asset pack’s ID.

<a id="return-value"></a>

## Return Value

The asset pack, if it could be found in this manifest; otherwise, `nil`.

## See Also

### Getting asset packs

- [assetPacks](assetpacks.md): The asset packs in this manifest that are available to download.
