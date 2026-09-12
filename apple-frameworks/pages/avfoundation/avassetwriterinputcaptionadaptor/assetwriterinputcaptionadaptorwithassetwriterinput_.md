> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputcaptionadaptor/assetwriterinputcaptionadaptorwithassetwriterinput:](https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor/assetwriterinputcaptionadaptorwithassetwriterinput:)

# assetWriterInputCaptionAdaptorWithAssetWriterInput:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A class method that creates a new caption adaptor that writes to the specified asset writer input.

## Declaration

```objectivec
+ (instancetype) assetWriterInputCaptionAdaptorWithAssetWriterInput:(AVAssetWriterInput *) input;
```

## Parameters

- `input`: The asset writer input.

<a id="return-value"></a>

## Return Value

A new instance of [AVAssetWriterInputCaptionAdaptor](../avassetwriterinputcaptionadaptor.md)

## See Also

### Creating a caption adaptor

- [initWithAssetWriterInput:](init%28assetwriterinput_%29.md): Deprecated. Creates a new caption adaptor that writes to the specified asset writer input.
