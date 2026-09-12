> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/init(from:to:)](https://developer.apple.com/documentation/avfaudio/avaudioconverter/init(from:to:))

# init(from:to:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio converter object from the specified input and output formats.

## Declaration

```swift
init?(from fromFormat: AVAudioFormat, to toFormat: AVAudioFormat)
```

## Parameters

- `fromFormat`: The input audio format.
- `toFormat`: The audio format to convert to.

<a id="return-value"></a>

## Return Value

An [AVAudioConverter](../avaudioconverter.md) instance, or `nil` if the format conversion isn’t possible.

# initFromFormat:toFormat: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an audio converter object from the specified input and output formats.

## Declaration

```objectivec
- (instancetype) initFromFormat:(AVAudioFormat *) fromFormat toFormat:(AVAudioFormat *) toFormat;
```

## Parameters

- `fromFormat`: The input audio format.
- `toFormat`: The audio format to convert to.

<a id="return-value"></a>

## Return Value

An [AVAudioConverter](../avaudioconverter.md) instance, or `nil` if the format conversion isn’t possible.
