> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552250-speakstring](https://developer.apple.com/documentation/applicationservices/1552250-speakstring)

# SpeakString

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Begins speaking a text string.

## Declaration

```objectivec
OSErr SpeakString(ConstStr255Param textToBeSpoken);
```

## Parameters

- `textToBeSpoken`: The string to be spoken.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SpeakString` functionattempts to speak the Pascal-style text string contained in the string `textToBeSpoken`.Speech is produced asynchronously using the default system voice.When an application calls this function, the Speech Synthesis Managermakes a copy of the passed string and creates any structures requiredto speak it. As soon as speaking has begun, control is returnedto the application. The synthesized speech is generated asynchronously tothe application so that normal processing can continue while thetext is being spoken. No further interaction with the Speech SynthesisManager is required at this point, and the application is free torelease the memory that the original string occupied.

If `SpeakString` iscalled while a prior string is still being spoken, the sound currentlybeing synthesized is interrupted immediately. Conversion of thenew text into speech is then begun. If you pass a zero-length string(or, in C, a `null` pointer)to `SpeakString`, the Speech SynthesisManager stops any speech previously being synthesized by `SpeakString` without generatingadditional speech. If your application uses `SpeakString`,it is often a good idea to stop any speech in progress wheneveryour application receives a suspend event. Calling `SpeakString` witha zero-length string has no effect on speech channels other than theone managed internally by the Speech Synthesis Manager for the `SpeakString` function.)

The text passed to the `SpeakString` functionmay contain embedded speech commands.

## See Also

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [PauseSpeechAt](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakBuffer](1552252-speakbuffer.md): Deprecated. Speaks a buffer of text, using certain flags to controlspeech behavior.
- [SpeakCFString](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [SpeakText](1552236-speaktext.md): Deprecated. Begins speaking a buffer of text.
- [StopSpeech](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
- [StopSpeechAt](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.
