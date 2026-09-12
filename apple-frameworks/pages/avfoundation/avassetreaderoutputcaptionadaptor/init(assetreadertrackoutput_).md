> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutputcaptionadaptor/init(assetreadertrackoutput:)](https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor/init(assetreadertrackoutput:))

# init(assetReaderTrackOutput:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0)

Creates a caption adaptor that reads from a track output.

> Use AVAssetReader.outputCaptionProvider(for:validationDelegate:) instead

## Declaration

```swift
init(assetReaderTrackOutput trackOutput: AVAssetReaderTrackOutput)
```

## Parameters

- `trackOutput`: The track output from which the system reads captions.

# initWithAssetReaderTrackOutput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a caption adaptor that reads from a track output.

## Declaration

```objectivec
- (instancetype) initWithAssetReaderTrackOutput:(AVAssetReaderTrackOutput *) trackOutput;
```

## Parameters

- `trackOutput`: The track output from which the system reads captions.

## See Also

### Creating a caption adaptor

- [assetReaderOutputCaptionAdaptorWithAssetReaderTrackOutput:](assetreaderoutputcaptionadaptorwithassetreadertrackoutput_.md): A class method that creates a caption adaptor that reads from a track output.
