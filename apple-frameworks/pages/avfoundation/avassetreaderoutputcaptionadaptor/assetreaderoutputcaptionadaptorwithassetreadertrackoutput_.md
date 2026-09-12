> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutputcaptionadaptor/assetreaderoutputcaptionadaptorwithassetreadertrackoutput:](https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor/assetreaderoutputcaptionadaptorwithassetreadertrackoutput:)

# assetReaderOutputCaptionAdaptorWithAssetReaderTrackOutput:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A class method that creates a caption adaptor that reads from a track output.

## Declaration

```objectivec
+ (instancetype) assetReaderOutputCaptionAdaptorWithAssetReaderTrackOutput:(AVAssetReaderTrackOutput *) trackOutput;
```

## Parameters

- `trackOutput`: The track output from which to read captions.

<a id="return-value"></a>

## Return Value

A new instance of [AVAssetReaderOutputCaptionAdaptor](../avassetreaderoutputcaptionadaptor.md).

## See Also

### Creating a caption adaptor

- [initWithAssetReaderTrackOutput:](init%28assetreadertrackoutput_%29.md): Deprecated. Creates a caption adaptor that reads from a track output.
