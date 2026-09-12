> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/init(asset:automaticallyloadedassetkeys:)-85hal](https://developer.apple.com/documentation/avfoundation/avplayeritem/init(asset:automaticallyloadedassetkeys:)-85hal)

# init(asset:automaticallyLoadedAssetKeys:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
nonisolated convenience init(asset: any AVAsset & Sendable, automaticallyLoadedAssetKeys: [AVPartialAsyncProperty<AVAsset>])
```

## See Also

### Creating a player item

- [init(url:)](init%28url_%29-1xrtk.md): Creates a player item with a specified URL.
- [init(asset:)](init%28asset_%29-87rjl.md): Creates a player item for a specified asset.
- [init(asset:)](init%28asset_%29-1nme9.md)
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-5czjh.md): Creates a player item for the asset, and automatically loads values for the specified properties.
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-8x4.md): Creates a player item with the specified asset and the asset keys to automatically load.
