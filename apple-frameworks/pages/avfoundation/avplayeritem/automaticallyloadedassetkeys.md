> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/automaticallyloadedassetkeys](https://developer.apple.com/documentation/avfoundation/avplayeritem/automaticallyloadedassetkeys)

# automaticallyLoadedAssetKeys (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The array of asset keys to be automatically loaded before the player item is ready to play.

## Declaration

```swift
nonisolated var automaticallyLoadedAssetKeys: [String] { get }
```

<a id="Discussion"></a>

## Discussion

The value of each key in `automaticallyLoadedAssetKeys` will automatically be loaded by the [asset](asset.md) prior to the player item reaching a status of [AVPlayerItem.Status.readyToPlay](status-swift.enum/readytoplay.md). When this status is reached, the asset’s [statusOfValue(forKey:error:)](../avasynchronouskeyvalueloading/statusofvalue%28forkey_error_%29.md) method returns [AVKeyValueStatus.loaded](../avkeyvaluestatus/loaded.md) for the status of all keys in the array. If loading of any of the asset’s key values fails, the player item’s [status](status-swift.property.md) will change to [AVPlayerItem.Status.failed](status-swift.enum/failed.md).

## See Also

### Accessing initialization parameters

- [asset](asset.md): The asset provided during initialization.

# automaticallyLoadedAssetKeys (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The array of asset keys to be automatically loaded before the player item is ready to play.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * automaticallyLoadedAssetKeys;
```

<a id="Discussion"></a>

## Discussion

The value of each key in `automaticallyLoadedAssetKeys` will automatically be loaded by the [asset](asset.md) prior to the player item reaching a status of [AVPlayerItemStatusReadyToPlay](status-swift.enum/readytoplay.md). When this status is reached, the asset’s [statusOfValueForKey:error:](../avasynchronouskeyvalueloading/statusofvalue%28forkey_error_%29.md) method returns [AVKeyValueStatusLoaded](../avkeyvaluestatus/loaded.md) for the status of all keys in the array. If loading of any of the asset’s key values fails, the player item’s [status](status-swift.property.md) will change to [AVPlayerItemStatusFailed](status-swift.enum/failed.md).

## See Also

### Accessing initialization parameters

- [asset](asset.md): The asset provided during initialization.
