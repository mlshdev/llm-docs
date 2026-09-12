> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/multipasscontroller](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/multipasscontroller)

# AVAssetWriterInput.MultiPassController

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides an interface to receive an async sequence of pass descriptions for the writer input receiver, if multi-pass is supported.

## Declaration

```swift
class MultiPassController
```

## Topics

### Accessing pass descriptions

- [passDescriptions](multipasscontroller/passdescriptions.md): An async sequence of pass descriptions to iterate over if multi-pass is supported. This property is nil when multi-pass is not supported.

## See Also

### Performing multiple-pass encoding

- [canPerformMultiplePasses](canperformmultiplepasses.md): A Boolean value that indicates whether the input may perform multiple passes over appended media data.
- [currentPassDescription](currentpassdescription.md): An object that describes the requirements for the current pass.
- [AVAssetWriterInputPassDescription](../avassetwriterinputpassdescription.md): An object that defines the interface to query for the requirements of the current pass.
- [markCurrentPassAsFinished()](markcurrentpassasfinished%28%29.md): Tells the input to analyze the appended media to determine whether it can improve the results by reencoding certain segments.
- [performsMultiPassEncodingIfSupported](performsmultipassencodingifsupported.md): A Boolean value that indicates whether the input attempts to encode the source media data using multiple passes.
- [respondToEachPassDescription(on:using:)](respondtoeachpassdescription%28on_using_%29.md): Tells the input to invoke a callback whenever it begins a new pass.
