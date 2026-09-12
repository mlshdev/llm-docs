> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagemanager/requestexportsession(forvideo:options:exportpreset:resulthandler:)](https://developer.apple.com/documentation/photos/phimagemanager/requestexportsession(forvideo:options:exportpreset:resulthandler:))

# requestExportSession(forVideo:options:exportPreset:resultHandler:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Requests an export session for writing the video asset’s data to a file, to be loaded asynchronously.

## Declaration

```swift
func requestExportSession(forVideo asset: PHAsset, options: PHVideoRequestOptions?, exportPreset: String, resultHandler: @escaping (AVAssetExportSession?, [AnyHashable : Any]?) -> Void) -> PHImageRequestID
```

## Parameters

- `asset`: The video asset for which an export session is to be created.
- `options`: Options specifying how Photos should handle the request and notify your app of progress or errors. For details, see [PHVideoRequestOptions](../phvideorequestoptions.md).
- `exportPreset`: The export preset name for exporting the asset. For available presets, see [AVAssetExportSession](../../avfoundation/avassetexportsession.md).
- `resultHandler`: A block that Photos calls after loading the asset’s data and preparing the export session.

  The block takes the following parameters:

  - **exportSession**: An [AVAssetExportSession](../../avfoundation/avassetexportsession.md) object that you can use for writing the video asset’s data to a file.
  - **info**: A dictionary that provides information about the status of the request. See [Image Result Info Keys](../../photokit/image-result-info-keys.md) for possible keys and values.

<a id="return-value"></a>

## Return Value

A numeric identifier for the request. If you need to cancel the request before it completes, pass this identifier to the [cancelImageRequest(\_:)](cancelimagerequest%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

When you call this method, Photos downloads the video data (if necessary) and creates an export session. It then calls your `resultHandler` block to provide the requested video.

For additional export options, use the [requestAVAsset(forVideo:options:resultHandler:)](requestavasset%28forvideo_options_resulthandler_%29.md) method and then create [AVAssetReader](../../avfoundation/avassetreader.md) and [AVAssetWriter](../../avfoundation/avassetwriter.md) objects to transcode and output the video asset’s data.

## See Also

### Requesting Video Objects

- [requestPlayerItem(forVideo:options:resultHandler:)](requestplayeritem%28forvideo_options_resulthandler_%29.md): Requests a representation of the video asset for playback, to be loaded asynchronously.
- [requestAVAsset(forVideo:options:resultHandler:)](requestavasset%28forvideo_options_resulthandler_%29.md): Requests AVFoundation objects representing the video asset’s content and state, to be loaded asynchronously.

# requestExportSessionForVideo:options:exportPreset:resultHandler: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Requests an export session for writing the video asset’s data to a file, to be loaded asynchronously.

## Declaration

```objectivec
- (PHImageRequestID) requestExportSessionForVideo:(PHAsset *) asset options:(PHVideoRequestOptions *) options exportPreset:(NSString *) exportPreset resultHandler:(void (^)(AVAssetExportSession *exportSession, NSDictionary *info)) resultHandler;
```

## Parameters

- `asset`: The video asset for which an export session is to be created.
- `options`: Options specifying how Photos should handle the request and notify your app of progress or errors. For details, see [PHVideoRequestOptions](../phvideorequestoptions.md).
- `exportPreset`: The export preset name for exporting the asset. For available presets, see [AVAssetExportSession](../../avfoundation/avassetexportsession.md).
- `resultHandler`: A block that Photos calls after loading the asset’s data and preparing the export session.

  The block takes the following parameters:

  - **exportSession**: An [AVAssetExportSession](../../avfoundation/avassetexportsession.md) object that you can use for writing the video asset’s data to a file.
  - **info**: A dictionary that provides information about the status of the request. See [Image Result Info Keys](../../photokit/image-result-info-keys.md) for possible keys and values.

<a id="return-value"></a>

## Return Value

A numeric identifier for the request. If you need to cancel the request before it completes, pass this identifier to the [cancelImageRequest:](cancelimagerequest%28__%29.md) method.

<a id="Discussion"></a>

## Discussion

When you call this method, Photos downloads the video data (if necessary) and creates an export session. It then calls your `resultHandler` block to provide the requested video.

For additional export options, use the [requestAVAssetForVideo:options:resultHandler:](requestavasset%28forvideo_options_resulthandler_%29.md) method and then create [AVAssetReader](../../avfoundation/avassetreader.md) and [AVAssetWriter](../../avfoundation/avassetwriter.md) objects to transcode and output the video asset’s data.

## See Also

### Requesting Video Objects

- [requestPlayerItemForVideo:options:resultHandler:](requestplayeritem%28forvideo_options_resulthandler_%29.md): Requests a representation of the video asset for playback, to be loaded asynchronously.
- [requestAVAssetForVideo:options:resultHandler:](requestavasset%28forvideo_options_resulthandler_%29.md): Requests AVFoundation objects representing the video asset’s content and state, to be loaded asynchronously.
