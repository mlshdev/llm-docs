> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagemanager/requestplayeritem(forvideo:options:resulthandler:)](https://developer.apple.com/documentation/photos/phimagemanager/requestplayeritem(forvideo:options:resulthandler:))

# requestPlayerItem(forVideo:options:resultHandler:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Requests a representation of the video asset for playback, to be loaded asynchronously.

## Declaration

```swift
func requestPlayerItem(forVideo asset: PHAsset, options: PHVideoRequestOptions?, resultHandler: @escaping (AVPlayerItem?, [AnyHashable : Any]?) -> Void) -> PHImageRequestID
```

## Parameters

- `asset`: The video asset to be played back.
- `options`: Options specifying how Photos should handle the request and notify your app of progress or errors. For details, see [PHVideoRequestOptions](../phvideorequestoptions.md).
- `resultHandler`: A block Photos calls after loading the asset’s data and preparing the player item.

  The block takes the following parameters:

  - **playerItem**: An [AVPlayerItem](../../avfoundation/avplayeritem.md) object that you can use for playing back the video asset.
  - **info**: A dictionary providing information about the status of the request. See [Image Result Info Keys](../../photokit/image-result-info-keys.md) for possible keys and values.

<a id="return-value"></a>

## Return Value

A numeric identifier for the request. If you need to cancel the request before it completes, pass this identifier to the [cancelImageRequest(\_:)](cancelimagerequest%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

When you call this method, Photos downloads the video data (if necessary) and creates a player item. It then calls your `resultHandler` block to provide the requested video.

Use this method when you want to simply play back the video asset as it currently exists. For more detailed options or to work with the asset’s audio and video tracks, use the [requestAVAsset(forVideo:options:resultHandler:)](requestavasset%28forvideo_options_resulthandler_%29.md) method instead.

## See Also

### Requesting Video Objects

- [requestExportSession(forVideo:options:exportPreset:resultHandler:)](requestexportsession%28forvideo_options_exportpreset_resulthandler_%29.md): Requests an export session for writing the video asset’s data to a file, to be loaded asynchronously.
- [requestAVAsset(forVideo:options:resultHandler:)](requestavasset%28forvideo_options_resulthandler_%29.md): Requests AVFoundation objects representing the video asset’s content and state, to be loaded asynchronously.

# requestPlayerItemForVideo:options:resultHandler: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Requests a representation of the video asset for playback, to be loaded asynchronously.

## Declaration

```objectivec
- (PHImageRequestID) requestPlayerItemForVideo:(PHAsset *) asset options:(PHVideoRequestOptions *) options resultHandler:(void (^)(AVPlayerItem *playerItem, NSDictionary *info)) resultHandler;
```

## Parameters

- `asset`: The video asset to be played back.
- `options`: Options specifying how Photos should handle the request and notify your app of progress or errors. For details, see [PHVideoRequestOptions](../phvideorequestoptions.md).
- `resultHandler`: A block Photos calls after loading the asset’s data and preparing the player item.

  The block takes the following parameters:

  - **playerItem**: An [AVPlayerItem](../../avfoundation/avplayeritem.md) object that you can use for playing back the video asset.
  - **info**: A dictionary providing information about the status of the request. See [Image Result Info Keys](../../photokit/image-result-info-keys.md) for possible keys and values.

<a id="return-value"></a>

## Return Value

A numeric identifier for the request. If you need to cancel the request before it completes, pass this identifier to the [cancelImageRequest:](cancelimagerequest%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

When you call this method, Photos downloads the video data (if necessary) and creates a player item. It then calls your `resultHandler` block to provide the requested video.

Use this method when you want to simply play back the video asset as it currently exists. For more detailed options or to work with the asset’s audio and video tracks, use the [requestAVAssetForVideo:options:resultHandler:](requestavasset%28forvideo_options_resulthandler_%29.md) method instead.

## See Also

### Requesting Video Objects

- [requestExportSessionForVideo:options:exportPreset:resultHandler:](requestexportsession%28forvideo_options_exportpreset_resulthandler_%29.md): Requests an export session for writing the video asset’s data to a file, to be loaded asynchronously.
- [requestAVAssetForVideo:options:resultHandler:](requestavasset%28forvideo_options_resulthandler_%29.md): Requests AVFoundation objects representing the video asset’s content and state, to be loaded asynchronously.
