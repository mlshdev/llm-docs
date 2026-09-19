> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetwriterinputtaggedpixelbuffergroupadaptor/assetwriterinput

# assetWriterInput (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The asset writer input to which the adaptor appends tagged buffer groups.

> Use AVAssetWriter.inputTaggedPixelBufferGroupReceiver(for:pixelBufferAttributes:) instead

## Declaration

```swift
var assetWriterInput: AVAssetWriterInput { get }
```

# assetWriterInput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

The asset writer input to which the adaptor appends tagged buffer groups.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAssetWriterInput * assetWriterInput;
```
