> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462745-stopspeech](https://developer.apple.com/documentation/applicationservices/1462745-stopspeech)

# StopSpeech(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Terminates speech immediately on the specified channel.

## Declaration

```swift
func StopSpeech(_ chan: SpeechChannel) -> OSErr
```

## Parameters

- `chan`: The speech channel on which speech is to be stopped.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `StopSpeech` functionimmediately terminates speech on the channel specified by the `chan` parameter.After returning from `StopSpeech`,your application can safely release any text buffer that the speechsynthesizer has been using. You can call `StopSpeech` foran already idle channel without ill effect.

You can also stop speech by passing a zero-length string (or,in C, a `null` pointer)to one of the `SpeakString`, `SpeakText`,or `SpeakBuffer` functions.Doing this stops speech only in the specified speech channel (or,in the case of `SpeakString`,in the speech channel managed internally by the Speech SynthesisManager).

Before calling the `StopSpeech` function,you can use the `SpeechBusy` function,which is described in [SpeechBusy()](1464581-speechbusy.md),to determine if a synthesizer is still speaking. If you are working withmultiple speech channels, you can use the status selector with thefunction `GetSpeechInfo` whichis described in [GetSpeechInfo](1552220-getspeechinfo.md),to determine if a specific channel is still speaking.

## See Also

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech(\_:)](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [PauseSpeechAt(\_:\_:)](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakCFString(\_:\_:\_:)](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [StopSpeechAt(\_:\_:)](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.

# StopSpeech (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Terminates speech immediately on the specified channel.

## Declaration

```objectivec
OSErr StopSpeech(SpeechChannel chan);
```

## Parameters

- `chan`: The speech channel on which speech is to be stopped.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `StopSpeech` functionimmediately terminates speech on the channel specified by the `chan` parameter.After returning from `StopSpeech`,your application can safely release any text buffer that the speechsynthesizer has been using. You can call `StopSpeech` foran already idle channel without ill effect.

You can also stop speech by passing a zero-length string (or,in C, a `null` pointer)to one of the `SpeakString`, `SpeakText`,or `SpeakBuffer` functions.Doing this stops speech only in the specified speech channel (or,in the case of `SpeakString`,in the speech channel managed internally by the Speech SynthesisManager).

Before calling the `StopSpeech` function,you can use the `SpeechBusy` function,which is described in [SpeechBusy](1464581-speechbusy.md),to determine if a synthesizer is still speaking. If you are working withmultiple speech channels, you can use the status selector with thefunction `GetSpeechInfo` whichis described in [GetSpeechInfo](1552220-getspeechinfo.md),to determine if a specific channel is still speaking.

## See Also

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [PauseSpeechAt](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakBuffer](1552252-speakbuffer.md): Deprecated. Speaks a buffer of text, using certain flags to controlspeech behavior.
- [SpeakString](1552250-speakstring.md): Deprecated. Begins speaking a text string.
- [SpeakCFString](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [SpeakText](1552236-speaktext.md): Deprecated. Begins speaking a buffer of text.
- [StopSpeechAt](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.
