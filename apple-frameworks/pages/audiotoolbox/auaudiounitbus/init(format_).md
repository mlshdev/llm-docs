> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbus/init(format:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbus/init(format:))

# init(format:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Initializes a bus object with a specific format.

## Declaration

```swift
init(format: AVAudioFormat) throws
```

## Parameters

- `format`: The initial audio format.

<a id="return-value"></a>

## Return Value

A newly-initialized bus object, or `nil` if the operation failed.

<a id="Discussion"></a>

## Discussion

Audio units can generally be expected to support the [AVAudioFormat](../../avfaudio/avaudioformat.md) standard format (deinterleaved 32-bit float), at any sample rate.

Channel counts can be more complex. See the [channelCapabilities](../auaudiounit/channelcapabilities.md) reference for a more complete discussion.

Initialization will fail and return an error if the specified format is unsupported for the bus.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Audio Unit Implementations

- [supportedChannelCounts](supportedchannelcounts.md): An array of numbers indicating the supported number of channels for this bus.
- [maximumChannelCount](maximumchannelcount.md): The maximum number of channels supported for this bus.

# initWithFormat:error: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Initializes a bus object with a specific format.

## Declaration

```objectivec
- (instancetype) initWithFormat:(AVAudioFormat *) format error:(NSError **) outError;
```

## Parameters

- `format`: The initial audio format.
- `outError`: Returns an error if the operation failed, or `nil` if it succeeded.

<a id="return-value"></a>

## Return Value

A newly-initialized bus object, or `nil` if the operation failed.

<a id="Discussion"></a>

## Discussion

Audio units can generally be expected to support the [AVAudioFormat](../../avfaudio/avaudioformat.md) standard format (deinterleaved 32-bit float), at any sample rate.

Channel counts can be more complex. See the [channelCapabilities](../auaudiounit/channelcapabilities.md) reference for a more complete discussion.

Initialization will fail and return an error if the specified format is unsupported for the bus.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Audio Unit Implementations

- [supportedChannelCounts](supportedchannelcounts.md): An array of numbers indicating the supported number of channels for this bus.
- [maximumChannelCount](maximumchannelcount.md): The maximum number of channels supported for this bus.
