> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutputcaptionadaptor/validationdelegate](https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor/validationdelegate)

# validationDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A delegate object that handles callbacks to the caption adaptor.

## Declaration

```swift
weak var validationDelegate: (any AVAssetReaderCaptionValidationHandling)? { get set }
```

## See Also

### Managing the validation delegate

- [AVAssetReaderCaptionValidationHandling](../avassetreadercaptionvalidationhandling.md): A protocol that defines the methods for caption validation events.

# validationDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A delegate object that handles callbacks to the caption adaptor.

## Declaration

```objectivec
@property (weak) id<AVAssetReaderCaptionValidationHandling> validationDelegate;
```

## See Also

### Managing the validation delegate

- [AVAssetReaderCaptionValidationHandling](../avassetreadercaptionvalidationhandling.md): A protocol that defines the methods for caption validation events.
