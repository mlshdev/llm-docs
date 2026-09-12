> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/startspeaking(_:to:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/startspeaking(_:to:))

# startSpeaking(\_:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Begins synthesizing text into a sound (AIFF) file.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
func startSpeaking(_ string: String, to url: URL) -> Bool
```

## Parameters

- `string`: Text to speak. When `nil` or empty, no synthesis is started.
- `url`: Filesystem location of the output sound file.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when synthesis starts successfully, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

When synthesis of `text` finishes normally or is stopped, the message [speechSynthesizer(\_:didFinishSpeaking:)](../nsspeechsynthesizerdelegate/speechsynthesizer%28__didfinishspeaking_%29.md) is sent to the delegate.

One example of how you might use this method is in an email program that automatically converts new messages into sound files that can be stored on an iPod for later listening.

> **Note**

>  In OS X V 10.4 and earlier, the delegate does not receive [speechSynthesizer(\_:willSpeakWord:of:)](../nsspeechsynthesizerdelegate/speechsynthesizer%28__willspeakword_of_%29.md) and [speechSynthesizer(\_:willSpeakPhoneme:)](../nsspeechsynthesizerdelegate/speechsynthesizer%28__willspeakphoneme_%29.md) messages when text is being synthesized to a file.

## See Also

### Synthesizing Speech

- [isSpeaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeaking(\_:)](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [pauseSpeaking(at:)](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking()](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking()](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeaking(at:)](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechSynthesizer.Boundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeaking(at:)](pausespeaking%28at_%29.md) and [stopSpeaking(at:)](stopspeaking%28at_%29.md).

# startSpeakingString:toURL: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Begins synthesizing text into a sound (AIFF) file.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
- (BOOL) startSpeakingString:(NSString *) string toURL:(NSURL *) url;
```

## Parameters

- `string`: Text to speak. When `nil` or empty, no synthesis is started.
- `url`: Filesystem location of the output sound file.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when synthesis starts successfully, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

When synthesis of `text` finishes normally or is stopped, the message [speechSynthesizer:didFinishSpeaking:](../nsspeechsynthesizerdelegate/speechsynthesizer%28__didfinishspeaking_%29.md) is sent to the delegate.

One example of how you might use this method is in an email program that automatically converts new messages into sound files that can be stored on an iPod for later listening.

> **Note**

>  In OS X V 10.4 and earlier, the delegate does not receive [speechSynthesizer:willSpeakWord:ofString:](../nsspeechsynthesizerdelegate/speechsynthesizer%28__willspeakword_of_%29.md) and [speechSynthesizer:willSpeakPhoneme:](../nsspeechsynthesizerdelegate/speechsynthesizer%28__willspeakphoneme_%29.md) messages when text is being synthesized to a file.

## See Also

### Synthesizing Speech

- [speaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeakingString:](startspeaking%28__%29.md): Deprecated. Begins speaking synthesized text through the system’s default sound output device.
- [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechBoundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md) and [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md).
