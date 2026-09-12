> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/playeritemwithurl:](https://developer.apple.com/documentation/avfoundation/avplayeritem/playeritemwithurl:)

# playerItemWithURL:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new player item with a specified URL.

## Declaration

```objectivec
+ (instancetype) playerItemWithURL:(NSURL *) URL;
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

- [initWithURL:](init%28url_%29-1xrtk.md): Creates a player item with a specified URL.
- [playerItemWithAsset:](playeritemwithasset_.md): Returns a new player item for a specified asset.
- [initWithAsset:](init%28asset_%29-87rjl.md): Creates a player item for a specified asset.
- [playerItemWithAsset:automaticallyLoadedAssetKeys:](playeritemwithasset_automaticallyloadedassetkeys_.md): Creates a player item with the specified asset and the asset keys to automatically load.
- [initWithAsset:automaticallyLoadedAssetKeys:](init%28asset_automaticallyloadedassetkeys_%29-8x4.md): Creates a player item with the specified asset and the asset keys to automatically load.
