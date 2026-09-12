> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputcaptionadaptor](https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor)

# AVAssetWriterInputCaptionAdaptor (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0)

An object that appends captions to an asset writer input.

> Use AVAssetWriter.inputCaptionReceiver(for:) instead

## Declaration

```swift
class AVAssetWriterInputCaptionAdaptor
```

## Topics

### Creating a caption adaptor

- [init(assetWriterInput:)](avassetwriterinputcaptionadaptor/init%28assetwriterinput_%29.md): Deprecated. Creates a new caption adaptor that writes to the specified asset writer input.

### Accessing the writer input

- [assetWriterInput](avassetwriterinputcaptionadaptor/assetwriterinput.md): Deprecated. The associated asset writer input.

### Appending captions

- [append(\_:)](avassetwriterinputcaptionadaptor/append%28__%29-910lp.md): Deprecated. Appends a caption to the writer input.
- [append(\_:)](avassetwriterinputcaptionadaptor/append%28__%29-4ils8.md): Deprecated. Appends a caption group that the system writes to the output.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Reading and writing

- [AVAssetReaderOutputCaptionAdaptor](avassetreaderoutputcaptionadaptor.md): Deprecated. An object that reads caption group objects from an asset track that contains timed text.

# AVAssetWriterInputCaptionAdaptor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that appends captions to an asset writer input.

## Declaration

```objectivec
@interface AVAssetWriterInputCaptionAdaptor : NSObject
```

## Topics

### Creating a caption adaptor

- [initWithAssetWriterInput:](avassetwriterinputcaptionadaptor/init%28assetwriterinput_%29.md): Deprecated. Creates a new caption adaptor that writes to the specified asset writer input.
- [assetWriterInputCaptionAdaptorWithAssetWriterInput:](avassetwriterinputcaptionadaptor/assetwriterinputcaptionadaptorwithassetwriterinput_.md): A class method that creates a new caption adaptor that writes to the specified asset writer input.

### Accessing the writer input

- [assetWriterInput](avassetwriterinputcaptionadaptor/assetwriterinput.md): Deprecated. The associated asset writer input.

### Appending captions

- [appendCaption:](avassetwriterinputcaptionadaptor/append%28__%29-910lp.md): Deprecated. Appends a caption to the writer input.
- [appendCaptionGroup:](avassetwriterinputcaptionadaptor/append%28__%29-4ils8.md): Deprecated. Appends a caption group that the system writes to the output.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Reading and writing

- [AVAssetReaderOutputCaptionAdaptor](avassetreaderoutputcaptionadaptor.md): Deprecated. An object that reads caption group objects from an asset track that contains timed text.
