> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/init(url:)-1xrtk](https://developer.apple.com/documentation/avfoundation/avplayeritem/init(url:)-1xrtk)

# init(url:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a player item with a specified URL.

## Declaration

```swift
nonisolated convenience init(url URL: URL)
```

## Parameters

- `URL`: A URL identifying the media resource to be played.

<a id="return-value"></a>

## Return Value

A new player item, prepared to use `URL`.

<a id="Discussion"></a>

## Discussion

This method immediately returns the item, but with the status [AVPlayerItem.Status.unknown](status-swift.enum/unknown.md).

Associating the player item with an [AVPlayer](../avplayer.md) immediately begins enqueuing its media and preparing it for playback. If the URL contains valid data that can be used by the player item, its status later changes to [AVPlayerItem.Status.readyToPlay](status-swift.enum/readytoplay.md). If the URL contains no valid data or otherwise can’t be used by the player item, its status later changes to [AVPlayerItem.Status.failed](status-swift.enum/failed.md). You can determine the nature of the failure by querying the player item’s [error](error.md) property.

## See Also

### Creating a player item

- [init(asset:)](init%28asset_%29-87rjl.md): Creates a player item for a specified asset.
- [init(asset:)](init%28asset_%29-1nme9.md)
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-5czjh.md): Creates a player item for the asset, and automatically loads values for the specified properties.
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-85hal.md)
- [init(asset:automaticallyLoadedAssetKeys:)](init%28asset_automaticallyloadedassetkeys_%29-8x4.md): Creates a player item with the specified asset and the asset keys to automatically load.

# initWithURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a player item with a specified URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL;
```

## Parameters

- `URL`: A URL identifying the media resource to be played.

<a id="return-value"></a>

## Return Value

A new player item, prepared to use `URL`.

<a id="Discussion"></a>

## Discussion

This method immediately returns the item, but with the status [AVPlayerItemStatusUnknown](status-swift.enum/unknown.md).

Associating the player item with an [AVPlayer](../avplayer.md) immediately begins enqueuing its media and preparing it for playback. If the URL contains valid data that can be used by the player item, its status later changes to [AVPlayerItemStatusReadyToPlay](status-swift.enum/readytoplay.md). If the URL contains no valid data or otherwise can’t be used by the player item, its status later changes to [AVPlayerItemStatusFailed](status-swift.enum/failed.md). You can determine the nature of the failure by querying the player item’s [error](error.md) property.

## See Also

### Creating a player item

- [playerItemWithURL:](playeritemwithurl_.md): Returns a new player item with a specified URL.
- [playerItemWithAsset:](playeritemwithasset_.md): Returns a new player item for a specified asset.
- [initWithAsset:](init%28asset_%29-87rjl.md): Creates a player item for a specified asset.
- [playerItemWithAsset:automaticallyLoadedAssetKeys:](playeritemwithasset_automaticallyloadedassetkeys_.md): Creates a player item with the specified asset and the asset keys to automatically load.
- [initWithAsset:automaticallyLoadedAssetKeys:](init%28asset_automaticallyloadedassetkeys_%29-8x4.md): Creates a player item with the specified asset and the asset keys to automatically load.
