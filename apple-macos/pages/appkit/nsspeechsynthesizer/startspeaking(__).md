> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsspeechsynthesizer/startspeaking(_:)](https://developer.apple.com/documentation/appkit/nsspeechsynthesizer/startspeaking(_:))

# startSpeaking(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Begins speaking synthesized text through the system’s default sound output device.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```swift
func startSpeaking(_ string: String) -> Bool
```

## Parameters

- `string`: Text to speak. When `nil` or empty, no synthesis occurs.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when speaking starts successfully, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the receiver is currently speaking synthesized speech when [startSpeaking(\_:)](startspeaking%28__%29.md) is called, that process is stopped before `text` is spoken.

When synthesis of `text` finishes normally or is stopped, the message [speechSynthesizer(\_:didFinishSpeaking:)](../nsspeechsynthesizerdelegate/speechsynthesizer%28__didfinishspeaking_%29.md) is sent to the delegate.

## See Also

### Synthesizing Speech

- [isSpeaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeaking(\_:to:)](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeaking(at:)](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking()](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking()](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeaking(at:)](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechSynthesizer.Boundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeaking(at:)](pausespeaking%28at_%29.md) and [stopSpeaking(at:)](stopspeaking%28at_%29.md).

# startSpeakingString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Begins speaking synthesized text through the system’s default sound output device.

> Use AVSpeechSynthesizer in AVFoundation instead

## Declaration

```objectivec
- (BOOL) startSpeakingString:(NSString *) string;
```

## Parameters

- `string`: Text to speak. When `nil` or empty, no synthesis occurs.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when speaking starts successfully, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

If the receiver is currently speaking synthesized speech when [startSpeakingString:](startspeaking%28__%29.md) is called, that process is stopped before `text` is spoken.

When synthesis of `text` finishes normally or is stopped, the message [speechSynthesizer:didFinishSpeaking:](../nsspeechsynthesizerdelegate/speechsynthesizer%28__didfinishspeaking_%29.md) is sent to the delegate.

## See Also

### Synthesizing Speech

- [speaking](isspeaking.md): Deprecated. Indicates whether the receiver is currently generating synthesized speech.
- [startSpeakingString:toURL:](startspeaking%28__to_%29.md): Deprecated. Begins synthesizing text into a sound (AIFF) file.
- [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md): Deprecated. Pauses synthesis in progress at a given boundary.
- [continueSpeaking](continuespeaking%28%29.md): Deprecated. Resumes synthesis.
- [stopSpeaking](stopspeaking%28%29.md): Deprecated. Stops synthesis in progress.
- [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md): Deprecated. Stops synthesis in progress at a given boundary.
- [NSSpeechBoundary](boundary.md): Deprecated. These constants are used to indicate where speech should be stopped and paused. See [pauseSpeakingAtBoundary:](pausespeaking%28at_%29.md) and [stopSpeakingAtBoundary:](stopspeaking%28at_%29.md).
