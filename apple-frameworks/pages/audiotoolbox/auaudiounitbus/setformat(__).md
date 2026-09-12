> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbus/setformat(_:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbus/setformat(_:))

# setFormat(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the bus’s audio format.

## Declaration

```swift
func setFormat(_ format: AVAudioFormat) throws
```

## Parameters

- `format`: The desired audio format.

<a id="discussion"></a>

## Discussion

- [false](https://developer.apple.com/documentation/swift/false) if the operation failed.

<a id="Discussion"></a>

## Discussion

Audio units can generally be expected to support the [AVAudioFormat](../../avfaudio/avaudioformat.md) standard format (deinterleaved 32-bit float), at any sample rate.

Channel counts can be more complex. See the [channelCapabilities](../auaudiounit/channelcapabilities.md) reference for a more complete discussion.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Bus Methods and Properties

- [format](format.md): The audio format and channel layout of audio being transferred on the bus.
- [isEnabled](isenabled.md): Determines whether the bus is active.
- [name](name.md): A name for the bus.
- [index](index.md): The index of this bus in its containing array.
- [busType](bustype.md): The bus type.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus.
- [supportedChannelLayoutTags](supportedchannellayouttags.md): An array of audio channel layout tags.
- [contextPresentationLatency](contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](shouldallocatebuffer.md)

# setFormat:error: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets the bus’s audio format.

## Declaration

```objectivec
- (BOOL) setFormat:(AVAudioFormat *) format error:(NSError **) outError;
```

## Parameters

- `format`: The desired audio format.
- `outError`: Returns an error if the operation failed, or `nil` if it succeeded.

<a id="return-value"></a>

## Return Value

\- [true](https://developer.apple.com/documentation/swift/true) if the operation succeeded.

<a id="discussion"></a>

## Discussion

- [false](https://developer.apple.com/documentation/swift/false) if the operation failed.

<a id="Discussion"></a>

## Discussion

Audio units can generally be expected to support the [AVAudioFormat](../../avfaudio/avaudioformat.md) standard format (deinterleaved 32-bit float), at any sample rate.

Channel counts can be more complex. See the [channelCapabilities](../auaudiounit/channelcapabilities.md) reference for a more complete discussion.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Bus Methods and Properties

- [format](format.md): The audio format and channel layout of audio being transferred on the bus.
- [enabled](isenabled.md): Determines whether the bus is active.
- [name](name.md): A name for the bus.
- [index](index.md): The index of this bus in its containing array.
- [busType](bustype.md): The bus type.
- [ownerAudioUnit](owneraudiounit.md): The audio unit that owns the bus.
- [supportedChannelLayoutTags](supportedchannellayouttags.md): An array of audio channel layout tags.
- [contextPresentationLatency](contextpresentationlatency.md): Information about latency in the audio unit’s processing context.
- [shouldAllocateBuffer](shouldallocatebuffer.md)
