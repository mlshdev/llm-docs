> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutputcaptionadaptor](https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor)

# AVAssetReaderOutputCaptionAdaptor (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0)

An object that reads caption group objects from an asset track that contains timed text.

> Use AVAssetReader.outputCaptionProvider(for:validationDelegate:) instead

## Declaration

```swift
class AVAssetReaderOutputCaptionAdaptor
```

## Topics

### Creating a caption adaptor

- [init(assetReaderTrackOutput:)](avassetreaderoutputcaptionadaptor/init%28assetreadertrackoutput_%29.md): Deprecated. Creates a caption adaptor that reads from a track output.

### Accessing the track output

- [assetReaderTrackOutput](avassetreaderoutputcaptionadaptor/assetreadertrackoutput.md): Deprecated. The associated asset reader track output.

### Managing the validation delegate

- [validationDelegate](avassetreaderoutputcaptionadaptor/validationdelegate.md): A delegate object that handles callbacks to the caption adaptor.
- [AVAssetReaderCaptionValidationHandling](avassetreadercaptionvalidationhandling.md): A protocol that defines the methods for caption validation events.

### Reading caption groups

- [nextCaptionGroup()](avassetreaderoutputcaptionadaptor/nextcaptiongroup%28%29.md): Deprecated. Returns the next caption group.
- [captionsNotPresentInPreviousGroups(in:)](avassetreaderoutputcaptionadaptor/captionsnotpresentinpreviousgroups%28in_%29.md): Deprecated. Returns the set of captions in the caption group that weren’t vended by the adaptor.

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

- [AVAssetWriterInputCaptionAdaptor](avassetwriterinputcaptionadaptor.md): Deprecated. An object that appends captions to an asset writer input.

# AVAssetReaderOutputCaptionAdaptor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

An object that reads caption group objects from an asset track that contains timed text.

## Declaration

```objectivec
@interface AVAssetReaderOutputCaptionAdaptor : NSObject
```

## Topics

### Creating a caption adaptor

- [initWithAssetReaderTrackOutput:](avassetreaderoutputcaptionadaptor/init%28assetreadertrackoutput_%29.md): Deprecated. Creates a caption adaptor that reads from a track output.
- [assetReaderOutputCaptionAdaptorWithAssetReaderTrackOutput:](avassetreaderoutputcaptionadaptor/assetreaderoutputcaptionadaptorwithassetreadertrackoutput_.md): A class method that creates a caption adaptor that reads from a track output.

### Accessing the track output

- [assetReaderTrackOutput](avassetreaderoutputcaptionadaptor/assetreadertrackoutput.md): Deprecated. The associated asset reader track output.

### Managing the validation delegate

- [validationDelegate](avassetreaderoutputcaptionadaptor/validationdelegate.md): A delegate object that handles callbacks to the caption adaptor.
- [AVAssetReaderCaptionValidationHandling](avassetreadercaptionvalidationhandling.md): A protocol that defines the methods for caption validation events.

### Reading caption groups

- [nextCaptionGroup](avassetreaderoutputcaptionadaptor/nextcaptiongroup%28%29.md): Deprecated. Returns the next caption group.
- [captionsNotPresentInPreviousGroupsInCaptionGroup:](avassetreaderoutputcaptionadaptor/captionsnotpresentinpreviousgroups%28in_%29.md): Deprecated. Returns the set of captions in the caption group that weren’t vended by the adaptor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Reading and writing

- [AVAssetWriterInputCaptionAdaptor](avassetwriterinputcaptionadaptor.md): Deprecated. An object that appends captions to an asset writer input.
