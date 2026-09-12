> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552252-speakbuffer](https://developer.apple.com/documentation/applicationservices/1552252-speakbuffer)

# SpeakBuffer

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Speaks a buffer of text, using certain flags to controlspeech behavior.

## Declaration

```objectivec
OSErr SpeakBuffer(SpeechChannel chan, const void *textBuf, unsigned long textBytes, SInt32 controlFlags);
```

## Parameters

- `chan`: The speech channel through which speech is to be spoken.
- `textBuf`: A pointer to the first byte of text to spoken.
- `textBytes`: The number of bytes of text to spoken.
- `controlFlags`: Control flags to customize speech behavior.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SpeakBuffer` functionbehaves identically to the `SpeakText` function,but allows control of several speech parameters by setting valuesof the `controlFlags` parameter.The `controlFlags` parameterrelies on specific constants, which may be applied additively. See [Control Flags Constants](1552213-control_flags_constants.md).

Each constant specifies a flag bit of the `controlFlags` parameter,so by passing the constants additively you can enable multiple capabilitiesof `SpeakBuffer`. If youpass `0` in the `controlFlags` parameter, `SpeakBuffer` worksjust like `SpeakText`.By passing `kNoEndingProsody + kNoSpeechInterrupt` inthe `controlFlags` parameter, `SpeakBuffer` workslike `SpeakText` exceptthat the `kNoEndingProsody` and `kNoSpeechInterrupt` features havebeen selected. Future versions of the Speech Synthesis Manager maydefine additional constants. 

When the `controlFlags` parameteris set to `0`, `SpeakBuffer` behavesidentically to `SpeakText`.

## See Also

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [PauseSpeechAt](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakString](1552250-speakstring.md): Deprecated. Begins speaking a text string.
- [SpeakCFString](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [SpeakText](1552236-speaktext.md): Deprecated. Begins speaking a buffer of text.
- [StopSpeech](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
- [StopSpeechAt](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.
