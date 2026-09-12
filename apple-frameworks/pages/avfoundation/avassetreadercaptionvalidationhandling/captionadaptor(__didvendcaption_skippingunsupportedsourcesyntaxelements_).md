> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadercaptionvalidationhandling/captionadaptor(_:didvendcaption:skippingunsupportedsourcesyntaxelements:)](https://developer.apple.com/documentation/avfoundation/avassetreadercaptionvalidationhandling/captionadaptor(_:didvendcaption:skippingunsupportedsourcesyntaxelements:))

# captionAdaptor(\_:didVendCaption:skippingUnsupportedSourceSyntaxElements:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Tells the delegate that the adaptor ignored one or more syntax elements when it created the caption object.

## Declaration

```swift
optional func captionAdaptor(_ adaptor: AVAssetReaderOutputCaptionAdaptor, didVendCaption caption: AVCaption, skippingUnsupportedSourceSyntaxElements syntaxElements: [String])
```

## Parameters

- `adaptor`: The adaptor object.
- `caption`: The vended caption.
- `syntaxElements`: The array of unsupported syntax elements that the adaptor object skipped.

# captionAdaptor:didVendCaption:skippingUnsupportedSourceSyntaxElements: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Tells the delegate that the adaptor ignored one or more syntax elements when it created the caption object.

## Declaration

```objectivec
- (void) captionAdaptor:(AVAssetReaderOutputCaptionAdaptor *) adaptor didVendCaption:(AVCaption *) caption skippingUnsupportedSourceSyntaxElements:(NSArray<NSString *> *) syntaxElements;
```

## Parameters

- `adaptor`: The adaptor object.
- `caption`: The vended caption.
- `syntaxElements`: The array of unsupported syntax elements that the adaptor object skipped.
