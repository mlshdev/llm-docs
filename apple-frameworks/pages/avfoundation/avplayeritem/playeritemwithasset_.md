> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/playeritemwithasset:](https://developer.apple.com/documentation/avfoundation/avplayeritem/playeritemwithasset:)

# playerItemWithAsset:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new player item for a specified asset.

## Declaration

```objectivec
+ (instancetype) playerItemWithAsset:(AVAsset *) asset;
```

## Parameters

- `asset`: The [AVAsset](../avasset.md) to be played.

<a id="return-value"></a>

## Return Value

A new player item, initialized to play `asset`.

<a id="Discussion"></a>

## Discussion

This method is equivalent to invoking [playerItemWithAsset:automaticallyLoadedAssetKeys:](playeritemwithasset_automaticallyloadedassetkeys_.md), passing `["duration"]` as the value of `automaticallyLoadedAssetKeys`.

## See Also

### Creating a player item

- [playerItemWithURL:](playeritemwithurl_.md): Returns a new player item with a specified URL.
- [initWithURL:](init%28url_%29-1xrtk.md): Creates a player item with a specified URL.
- [initWithAsset:](init%28asset_%29-87rjl.md): Creates a player item for a specified asset.
- [playerItemWithAsset:automaticallyLoadedAssetKeys:](playeritemwithasset_automaticallyloadedassetkeys_.md): Creates a player item with the specified asset and the asset keys to automatically load.
- [initWithAsset:automaticallyLoadedAssetKeys:](init%28asset_automaticallyloadedassetkeys_%29-8x4.md): Creates a player item with the specified asset and the asset keys to automatically load.
