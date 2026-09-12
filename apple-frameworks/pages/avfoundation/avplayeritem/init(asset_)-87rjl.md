> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/init(asset:)-87rjl](https://developer.apple.com/documentation/avfoundation/avplayeritem/init(asset:)-87rjl)

# init(asset:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a player item for a specified asset.

## Declaration

```swift
convenience init(asset: AVAsset)
```

## Parameters

- `asset`: The [AVAsset](../avasset.md) to be played.

<a id="return-value"></a>

## Return Value

A new player item, initialized to play `asset`.

## See Also

### Creating a player item

- [init(url:)](init%28url_%29-1xrtk.md): Creates a player item with a specified URL.
- [init(asset:)](init%28asset_%29-1nme9.md)
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-5czjh.md): Creates a player item for the asset, and automatically loads values for the specified properties.
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-85hal.md)
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-8x4.md): Creates a player item with the specified asset and the asset keys to automatically load.

# initWithAsset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a player item for a specified asset.

## Declaration

```objectivec
- (instancetype) initWithAsset:(AVAsset *) asset;
```

## Parameters

- `asset`: The [AVAsset](../avasset.md) to be played.

<a id="return-value"></a>

## Return Value

A new player item, initialized to play `asset`.

## See Also

### Creating a player item

- [playerItemWithURL:](playeritemwithurl_.md): Returns a new player item with a specified URL.
- [initWithURL:](init%28url_%29-1xrtk.md): Creates a player item with a specified URL.
- [playerItemWithAsset:](playeritemwithasset_.md): Returns a new player item for a specified asset.
- [playerItemWithAsset:automaticallyLoadedAssetKeys:](playeritemwithasset_automaticallyloadedassetkeys_.md): Creates a player item with the specified asset and the asset keys to automatically load.
- [initWithAsset:automaticallyLoadedAssetKeys:](init%28asset_automaticallyloadedassetkeys_%29-8x4.md): Creates a player item with the specified asset and the asset keys to automatically load.
