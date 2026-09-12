> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadercaptionvalidationhandling](https://developer.apple.com/documentation/avfoundation/avassetreadercaptionvalidationhandling)

# AVAssetReaderCaptionValidationHandling (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A protocol that defines the methods for caption validation events.

## Declaration

```swift
protocol AVAssetReaderCaptionValidationHandling : NSObjectProtocol
```

## Topics

### Validating captions

- [captionAdaptor(\_:didVendCaption:skippingUnsupportedSourceSyntaxElements:)](avassetreadercaptionvalidationhandling/captionadaptor%28__didvendcaption_skippingunsupportedsourcesyntaxelements_%29.md): Tells the delegate that the adaptor ignored one or more syntax elements when it created the caption object.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the validation delegate

- [validationDelegate](avassetreaderoutputcaptionadaptor/validationdelegate.md): A delegate object that handles callbacks to the caption adaptor.

# AVAssetReaderCaptionValidationHandling (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

A protocol that defines the methods for caption validation events.

## Declaration

```objectivec
@protocol AVAssetReaderCaptionValidationHandling <NSObject>
```

## Topics

### Validating captions

- [captionAdaptor:didVendCaption:skippingUnsupportedSourceSyntaxElements:](avassetreadercaptionvalidationhandling/captionadaptor%28__didvendcaption_skippingunsupportedsourcesyntaxelements_%29.md): Tells the delegate that the adaptor ignored one or more syntax elements when it created the caption object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the validation delegate

- [validationDelegate](avassetreaderoutputcaptionadaptor/validationdelegate.md): A delegate object that handles callbacks to the caption adaptor.
