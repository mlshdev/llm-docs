> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputpassdescription](https://developer.apple.com/documentation/avfoundation/avassetwriterinputpassdescription)

# AVAssetWriterInputPassDescription (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that defines the interface to query for the requirements of the current pass.

## Declaration

```swift
class AVAssetWriterInputPassDescription
```

## Topics

### Getting source time ranges

- [sourceTimeRanges](avassetwriterinputpassdescription/sourcetimeranges.md): An array of time ranges.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Performing multiple-pass encoding

- [canPerformMultiplePasses](avassetwriterinput/canperformmultiplepasses.md): A Boolean value that indicates whether the input may perform multiple passes over appended media data.
- [currentPassDescription](avassetwriterinput/currentpassdescription.md): An object that describes the requirements for the current pass.
- [markCurrentPassAsFinished()](avassetwriterinput/markcurrentpassasfinished%28%29.md): Tells the input to analyze the appended media to determine whether it can improve the results by reencoding certain segments.
- [performsMultiPassEncodingIfSupported](avassetwriterinput/performsmultipassencodingifsupported.md): A Boolean value that indicates whether the input attempts to encode the source media data using multiple passes.
- [respondToEachPassDescription(on:using:)](avassetwriterinput/respondtoeachpassdescription%28on_using_%29.md): Tells the input to invoke a callback whenever it begins a new pass.
- [AVAssetWriterInput.MultiPassController](avassetwriterinput/multipasscontroller.md): Provides an interface to receive an async sequence of pass descriptions for the writer input receiver, if multi-pass is supported.

# AVAssetWriterInputPassDescription (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An object that defines the interface to query for the requirements of the current pass.

## Declaration

```objectivec
@interface AVAssetWriterInputPassDescription : NSObject
```

## Topics

### Getting source time ranges

- [sourceTimeRanges](avassetwriterinputpassdescription/sourcetimeranges.md): An array of time ranges.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Performing multiple-pass encoding

- [canPerformMultiplePasses](avassetwriterinput/canperformmultiplepasses.md): A Boolean value that indicates whether the input may perform multiple passes over appended media data.
- [currentPassDescription](avassetwriterinput/currentpassdescription.md): An object that describes the requirements for the current pass.
- [markCurrentPassAsFinished](avassetwriterinput/markcurrentpassasfinished%28%29.md): Tells the input to analyze the appended media to determine whether it can improve the results by reencoding certain segments.
- [performsMultiPassEncodingIfSupported](avassetwriterinput/performsmultipassencodingifsupported.md): A Boolean value that indicates whether the input attempts to encode the source media data using multiple passes.
- [respondToEachPassDescriptionOnQueue:usingBlock:](avassetwriterinput/respondtoeachpassdescription%28on_using_%29.md): Tells the input to invoke a callback whenever it begins a new pass.
