> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/init(asset:automaticallyloadedassetkeys:)-8x4](https://developer.apple.com/documentation/avfoundation/avplayeritem/init(asset:automaticallyloadedassetkeys:)-8x4)

# init(asset:automaticallyLoadedAssetKeys:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a player item with the specified asset and the asset keys to automatically load.

## Declaration

```swift
init(asset: AVAsset, automaticallyLoadedAssetKeys: [String]?)
```

## Parameters

- `asset`: An instance of [AVAsset](../avasset.md).
- `automaticallyLoadedAssetKeys`: An array of strings, each representing a property defined by [AVAsset](../avasset.md).

<a id="return-value"></a>

## Return Value

An initialized instance of `AVPlayerItem`.

<a id="Discussion"></a>

## Discussion

The value of each key in `automaticallyLoadedAssetKeys` will automatically be loaded by the underlying [AVAsset](../avasset.md) before the player item achieves the status [AVPlayerItem.Status.readyToPlay](status-swift.enum/readytoplay.md); i.e. when the item is ready to play, the value returned by invoking the [asset](asset.md) property’s [statusOfValue(forKey:error:)](../avasynchronouskeyvalueloading/statusofvalue%28forkey_error_%29.md) method will be one of the terminal status values, either [AVKeyValueStatus.loaded](../avkeyvaluestatus/loaded.md), [AVKeyValueStatus.failed](../avkeyvaluestatus/failed.md), or [AVKeyValueStatus.cancelled](../avkeyvaluestatus/cancelled.md).

## See Also

### Creating a player item

- [init(url:)](init%28url_%29-1xrtk.md): Creates a player item with a specified URL.
- [init(asset:)](init%28asset_%29-87rjl.md): Creates a player item for a specified asset.
- [init(asset:)](init%28asset_%29-1nme9.md)
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-5czjh.md): Creates a player item for the asset, and automatically loads values for the specified properties.
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-85hal.md)

# initWithAsset:automaticallyLoadedAssetKeys: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a player item with the specified asset and the asset keys to automatically load.

## Declaration

```objectivec
- (instancetype) initWithAsset:(AVAsset *) asset automaticallyLoadedAssetKeys:(NSArray<NSString *> *) automaticallyLoadedAssetKeys;
```

## Parameters

- `asset`: An instance of [AVAsset](../avasset.md).
- `automaticallyLoadedAssetKeys`: An array of strings, each representing a property defined by [AVAsset](../avasset.md).

<a id="return-value"></a>

## Return Value

An initialized instance of `AVPlayerItem`.

<a id="Discussion"></a>

## Discussion

The value of each key in `automaticallyLoadedAssetKeys` will automatically be loaded by the underlying [AVAsset](../avasset.md) before the player item achieves the status [AVPlayerItemStatusReadyToPlay](status-swift.enum/readytoplay.md); i.e. when the item is ready to play, the value returned by invoking the [asset](asset.md) property’s [statusOfValueForKey:error:](../avasynchronouskeyvalueloading/statusofvalue%28forkey_error_%29.md) method will be one of the terminal status values, either [AVKeyValueStatusLoaded](../avkeyvaluestatus/loaded.md), [AVKeyValueStatusFailed](../avkeyvaluestatus/failed.md), or [AVKeyValueStatusCancelled](../avkeyvaluestatus/cancelled.md).

## See Also

### Creating a player item

- [playerItemWithURL:](playeritemwithurl_.md): Returns a new player item with a specified URL.
- [initWithURL:](init%28url_%29-1xrtk.md): Creates a player item with a specified URL.
- [playerItemWithAsset:](playeritemwithasset_.md): Returns a new player item for a specified asset.
- [initWithAsset:](init%28asset_%29-87rjl.md): Creates a player item for a specified asset.
- [playerItemWithAsset:automaticallyLoadedAssetKeys:](playeritemwithasset_automaticallyloadedassetkeys_.md): Creates a player item with the specified asset and the asset keys to automatically load.
