> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/init(asset:automaticallyloadedassetkeys:)-5czjh](https://developer.apple.com/documentation/avfoundation/avplayeritem/init(asset:automaticallyloadedassetkeys:)-5czjh)

# init(asset:automaticallyLoadedAssetKeys:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a player item for the asset, and automatically loads values for the specified properties.

## Declaration

```swift
@MainActor @preconcurrency convenience init(asset: AVAsset, automaticallyLoadedAssetKeys: [AVPartialAsyncProperty<AVAsset>] = [])
```

## Parameters

- `asset`: The asset to play.
- `automaticallyLoadedAssetKeys`: An array of property identifiers for which the system automatically loads a value.

<a id="Discussion"></a>

## Discussion

The system automatically loads values for the specified property identifiers before the player item reaches an [AVPlayerItem.Status.readyToPlay](status-swift.enum/readytoplay.md) state. In this state, calling [status(of:)](../avasynchronouskeyvalueloading/status%28of_%29.md) on a specified property identifier returns a value of [AVAsyncProperty.Status.loaded(\_:)](../avasyncproperty/status/loaded%28__%29.md) or [AVAsyncProperty.Status.failed(\_:)](../avasyncproperty/status/failed%28__%29.md).

## See Also

### Creating a player item

- [init(url:)](init%28url_%29-1xrtk.md): Creates a player item with a specified URL.
- [init(asset:)](init%28asset_%29-87rjl.md): Creates a player item for a specified asset.
- [init(asset:)](init%28asset_%29-1nme9.md)
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-85hal.md)
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-8x4.md): Creates a player item with the specified asset and the asset keys to automatically load.
