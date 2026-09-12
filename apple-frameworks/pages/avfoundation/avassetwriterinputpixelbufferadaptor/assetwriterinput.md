> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputpixelbufferadaptor/assetwriterinput](https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/assetwriterinput)

# assetWriterInput (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The asset writer input to which the adaptor appends pixel buffers.

> Use AVAssetWriter.inputPixelBufferReceiver(for:pixelBufferAttributes:) instead

## Declaration

```swift
var assetWriterInput: AVAssetWriterInput { get }
```

# assetWriterInput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The asset writer input to which the adaptor appends pixel buffers.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAssetWriterInput * assetWriterInput;
```
