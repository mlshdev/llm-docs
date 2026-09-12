> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552236-speaktext](https://developer.apple.com/documentation/applicationservices/1552236-speaktext)

# SpeakText

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Begins speaking a buffer of text.

## Declaration

```objectivec
OSErr SpeakText(SpeechChannel chan, const void *textBuf, unsigned long textBytes);
```

## Parameters

- `chan`: The speech channel through which speech is to be spoken.
- `textBuf`: A pointer to the first byte of text to spoken.
- `textBytes`: The number of bytes of text to spoken.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

Like `SpeakString`,the `SpeakText` functionalso generates speech, but through a speech channel through whichyou can exert control over the generated speech.

The `SpeakText` functionconverts the text stream specified by the `textBuf` and `textBytes` parametersinto speech using the voice and control settings for the speechchannel `chan`, which shouldbe created with the `NewSpeechChannel` function.The speech is generated asynchronously. This means that controlis returned to your application before the speech has finished (andprobably even before it has begun). The maximum length of the text bufferthat can be spoken is limited only by the available RAM.

If `SpeakText` iscalled while the channel is currently busy speaking the contentsof a prior text buffer, it immediately stops speaking from the priorbuffer and begins speaking from the new text buffer as soon as possible.If you pass a zero-length string (or, in C, a `null` pointer)to `SpeakText`, the SpeechSynthesis Manager stops all speech currently being synthesized bythe speech channel specified in the `chan` parameterwithout generating additional speech.

The text buffer must be locked in memory and must not movewhile the Speech Synthesis Manager processes it. This buffer isread at interrupt time, and moving it could cause a system crash.If your application defines a text-done callback function, thenit can move the text buffer or dispose of it once the callback functionis executed.

## See Also

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [PauseSpeechAt](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakBuffer](1552252-speakbuffer.md): Deprecated. Speaks a buffer of text, using certain flags to controlspeech behavior.
- [SpeakString](1552250-speakstring.md): Deprecated. Begins speaking a text string.
- [SpeakCFString](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [StopSpeech](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
- [StopSpeechAt](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.
