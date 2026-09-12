> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputcaptionadaptor/init(assetwriterinput:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor/init(assetwriterinput:))

# init(assetWriterInput:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0)

Creates a new caption adaptor that writes to the specified asset writer input.

> Use AVAssetWriter.inputCaptionReceiver(for:) instead

## Declaration

```swift
init(assetWriterInput input: AVAssetWriterInput)
```

## Parameters

- `input`: The asset writer input.

# initWithAssetWriterInput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a new caption adaptor that writes to the specified asset writer input.

## Declaration

```objectivec
- (instancetype) initWithAssetWriterInput:(AVAssetWriterInput *) input;
```

## Parameters

- `input`: The asset writer input.

## See Also

### Creating a caption adaptor

- [assetWriterInputCaptionAdaptorWithAssetWriterInput:](assetwriterinputcaptionadaptorwithassetwriterinput_.md): A class method that creates a new caption adaptor that writes to the specified asset writer input.
