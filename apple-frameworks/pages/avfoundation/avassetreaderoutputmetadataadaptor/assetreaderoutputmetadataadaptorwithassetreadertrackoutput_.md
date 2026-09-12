> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutputmetadataadaptor/assetreaderoutputmetadataadaptorwithassetreadertrackoutput:](https://developer.apple.com/documentation/avfoundation/avassetreaderoutputmetadataadaptor/assetreaderoutputmetadataadaptorwithassetreadertrackoutput:)

# assetReaderOutputMetadataAdaptorWithAssetReaderTrackOutput:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Returns a new object that reads timed metadata groups from an asset reader output.

## Declaration

```objectivec
+ (instancetype) assetReaderOutputMetadataAdaptorWithAssetReaderTrackOutput:(AVAssetReaderTrackOutput *) trackOutput;
```

## Parameters

- `trackOutput`: A track output that vends sample buffers that contain metadata.

<a id="return-value"></a>

## Return Value

A metadata adaptor object.

<a id="Discussion"></a>

## Discussion

You can only create an adaptor with a track output that vends metadata and isn’t associated with another adaptor instance. Likewise, you can only create an adaptor with a track output whose asset reader hasn’t started reading.

> **Important**

>  Don’t call the [copyNextSampleBuffer](../avassetreaderoutput/copynextsamplebuffer%28%29.md) method on the track output after you use it to initialize a timed metadata adaptor. Calling the track output’s [copyNextSampleBuffer](../avassetreaderoutput/copynextsamplebuffer%28%29.md) method after this occurs results in the system throwing an exception.

## See Also

### Creating a metadata adaptor

- [initWithAssetReaderTrackOutput:](init%28assetreadertrackoutput_%29.md): Deprecated. Creates an object that reads timed metadata groups from an asset reader output.
