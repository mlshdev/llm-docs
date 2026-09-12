> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/canperformmultiplepasses](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/canperformmultiplepasses)

# canPerformMultiplePasses (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the input may perform multiple passes over appended media data.

## Declaration

```swift
var canPerformMultiplePasses: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value for this property is [true](https://developer.apple.com/documentation/swift/true), configure your source media data for random access. After appending the media data for the current pass, as specified by the [currentPassDescription](currentpassdescription.md) property, call [markCurrentPassAsFinished()](markcurrentpassasfinished%28%29.md) so the system can determine whether it needs to perform additional passes. The system may perform only the initial pass if it determines there’s no benefit to performing multiple passes.

When the value for this property is [false](https://developer.apple.com/documentation/swift/false), your source for media data only needs to support sequential access. In this case, append all of the source media one time and call [markAsFinished()](markasfinished%28%29.md).

The default value is [false](https://developer.apple.com/documentation/swift/false). Currently the only way for this property to become [true](https://developer.apple.com/documentation/swift/true) is when the value of [performsMultiPassEncodingIfSupported](performsmultipassencodingifsupported.md) is [true](https://developer.apple.com/documentation/swift/true). The final value is available after you call [startWriting()](../avassetwriter/startwriting%28%29.md).

This property is key-value observable.

## See Also

### Performing multiple-pass encoding

- [currentPassDescription](currentpassdescription.md): An object that describes the requirements for the current pass.
- [AVAssetWriterInputPassDescription](../avassetwriterinputpassdescription.md): An object that defines the interface to query for the requirements of the current pass.
- [markCurrentPassAsFinished()](markcurrentpassasfinished%28%29.md): Tells the input to analyze the appended media to determine whether it can improve the results by reencoding certain segments.
- [performsMultiPassEncodingIfSupported](performsmultipassencodingifsupported.md): A Boolean value that indicates whether the input attempts to encode the source media data using multiple passes.
- [respondToEachPassDescription(on:using:)](respondtoeachpassdescription%28on_using_%29.md): Tells the input to invoke a callback whenever it begins a new pass.
- [AVAssetWriterInput.MultiPassController](multipasscontroller.md): Provides an interface to receive an async sequence of pass descriptions for the writer input receiver, if multi-pass is supported.

# canPerformMultiplePasses (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the input may perform multiple passes over appended media data.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canPerformMultiplePasses;
```

<a id="Discussion"></a>

## Discussion

When the value for this property is [true](https://developer.apple.com/documentation/swift/true), configure your source media data for random access. After appending the media data for the current pass, as specified by the [currentPassDescription](currentpassdescription.md) property, call [markCurrentPassAsFinished](markcurrentpassasfinished%28%29.md) so the system can determine whether it needs to perform additional passes. The system may perform only the initial pass if it determines there’s no benefit to performing multiple passes.

When the value for this property is [false](https://developer.apple.com/documentation/swift/false), your source for media data only needs to support sequential access. In this case, append all of the source media one time and call [markAsFinished](markasfinished%28%29.md).

The default value is [false](https://developer.apple.com/documentation/swift/false). Currently the only way for this property to become [true](https://developer.apple.com/documentation/swift/true) is when the value of [performsMultiPassEncodingIfSupported](performsmultipassencodingifsupported.md) is [true](https://developer.apple.com/documentation/swift/true). The final value is available after you call [startWriting](../avassetwriter/startwriting%28%29.md).

This property is key-value observable.

## See Also

### Performing multiple-pass encoding

- [currentPassDescription](currentpassdescription.md): An object that describes the requirements for the current pass.
- [AVAssetWriterInputPassDescription](../avassetwriterinputpassdescription.md): An object that defines the interface to query for the requirements of the current pass.
- [markCurrentPassAsFinished](markcurrentpassasfinished%28%29.md): Tells the input to analyze the appended media to determine whether it can improve the results by reencoding certain segments.
- [performsMultiPassEncodingIfSupported](performsmultipassencodingifsupported.md): A Boolean value that indicates whether the input attempts to encode the source media data using multiple passes.
- [respondToEachPassDescriptionOnQueue:usingBlock:](respondtoeachpassdescription%28on_using_%29.md): Tells the input to invoke a callback whenever it begins a new pass.
