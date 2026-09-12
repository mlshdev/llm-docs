> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462728-continuespeech](https://developer.apple.com/documentation/applicationservices/1462728-continuespeech)

# ContinueSpeech(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Resumes speech paused by the `PauseSpeechAt` function.

## Declaration

```swift
func ContinueSpeech(_ chan: SpeechChannel) -> OSErr
```

## Parameters

- `chan`: The paused speech channel on which speech is to be resumed.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

At any time after the `PauseSpeechAt` functionis called, the `ContinueSpeech` functioncan be called to continue speaking from the beginning of the wordin which speech paused. Calling `ContinueSpeech` ona channel that is not currently in a paused state has no effecton the speech channel or on future calls to the `PauseSpeechAt` function.If you call `ContinueSpeech` ona channel before a pause is effective, `ContinueSpeech` cancelsthe pause.

If the `PauseSpeechAt` functionstopped speech in the middle of a word, the Speech Synthesis Managerwill start speaking that word from the beginning when you call `ContinueSpeech`.

## See Also

### Starting, Stopping, and Pausing Speech

- [PauseSpeechAt(\_:\_:)](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakCFString(\_:\_:\_:)](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [StopSpeech(\_:)](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
- [StopSpeechAt(\_:\_:)](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.

# ContinueSpeech (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Resumes speech paused by the `PauseSpeechAt` function.

## Declaration

```objectivec
OSErr ContinueSpeech(SpeechChannel chan);
```

## Parameters

- `chan`: The paused speech channel on which speech is to be resumed.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

At any time after the `PauseSpeechAt` functionis called, the `ContinueSpeech` functioncan be called to continue speaking from the beginning of the wordin which speech paused. Calling `ContinueSpeech` ona channel that is not currently in a paused state has no effecton the speech channel or on future calls to the `PauseSpeechAt` function.If you call `ContinueSpeech` ona channel before a pause is effective, `ContinueSpeech` cancelsthe pause.

If the `PauseSpeechAt` functionstopped speech in the middle of a word, the Speech Synthesis Managerwill start speaking that word from the beginning when you call `ContinueSpeech`.

## See Also

### Starting, Stopping, and Pausing Speech

- [PauseSpeechAt](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakBuffer](1552252-speakbuffer.md): Deprecated. Speaks a buffer of text, using certain flags to controlspeech behavior.
- [SpeakString](1552250-speakstring.md): Deprecated. Begins speaking a text string.
- [SpeakCFString](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [SpeakText](1552236-speaktext.md): Deprecated. Begins speaking a buffer of text.
- [StopSpeech](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
- [StopSpeechAt](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.
