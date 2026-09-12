> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutputmetadataadaptor/init(assetreadertrackoutput:)](https://developer.apple.com/documentation/avfoundation/avassetreaderoutputmetadataadaptor/init(assetreadertrackoutput:))

# init(assetReaderTrackOutput:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates an object that reads timed metadata groups from an asset reader output.

> Use AVAssetReader.outputMetadataProvider(for:) instead

## Declaration

```swift
init(assetReaderTrackOutput trackOutput: AVAssetReaderTrackOutput)
```

## Parameters

- `trackOutput`: A track output that vends sample buffers that contain metadata.

<a id="Discussion"></a>

## Discussion

You can only create an adaptor with a track output that vends metadata, and that isn’t associated with another adaptor instance. Likewise, you can only create an adaptor with a track output whose asset reader hasn’t started reading.

> **Important**

>  Don’t call the [copyNextSampleBuffer()](../avassetreaderoutput/copynextsamplebuffer%28%29.md) method on the track output after you use it to initialize a timed metadata adaptor. Calling the track output’s [copyNextSampleBuffer()](../avassetreaderoutput/copynextsamplebuffer%28%29.md) method after this occurs results in the system throwing an exception.

# initWithAssetReaderTrackOutput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates an object that reads timed metadata groups from an asset reader output.

## Declaration

```objectivec
- (instancetype) initWithAssetReaderTrackOutput:(AVAssetReaderTrackOutput *) trackOutput;
```

## Parameters

- `trackOutput`: A track output that vends sample buffers that contain metadata.

<a id="Discussion"></a>

## Discussion

You can only create an adaptor with a track output that vends metadata, and that isn’t associated with another adaptor instance. Likewise, you can only create an adaptor with a track output whose asset reader hasn’t started reading.

> **Important**

>  Don’t call the [copyNextSampleBuffer](../avassetreaderoutput/copynextsamplebuffer%28%29.md) method on the track output after you use it to initialize a timed metadata adaptor. Calling the track output’s [copyNextSampleBuffer](../avassetreaderoutput/copynextsamplebuffer%28%29.md) method after this occurs results in the system throwing an exception.

## See Also

### Creating a metadata adaptor

- [assetReaderOutputMetadataAdaptorWithAssetReaderTrackOutput:](assetreaderoutputmetadataadaptorwithassetreadertrackoutput_.md): Returns a new object that reads timed metadata groups from an asset reader output.
