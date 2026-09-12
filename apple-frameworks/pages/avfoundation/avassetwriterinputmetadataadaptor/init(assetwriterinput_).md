> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputmetadataadaptor/init(assetwriterinput:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinputmetadataadaptor/init(assetwriterinput:))

# init(assetWriterInput:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a metadata group adaptor to append timed metadata groups to write to an output file.

> Use AVAssetWriter.inputMetadataReceiver(for:) instead

## Declaration

```swift
init(assetWriterInput input: AVAssetWriterInput)
```

## Parameters

- `input`: The metadata input to which to append groups of timed metadata.

# initWithAssetWriterInput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Creates a metadata group adaptor to append timed metadata groups to write to an output file.

## Declaration

```objectivec
- (instancetype) initWithAssetWriterInput:(AVAssetWriterInput *) input;
```

## Parameters

- `input`: The metadata input to which to append groups of timed metadata.

## See Also

### Creating an input metadata adaptor

- [assetWriterInputMetadataAdaptorWithAssetWriterInput:](assetwriterinputmetadataadaptorwithassetwriterinput_.md): Returns a new metadata adaptor to append timed metadata groups to write to an output file.
