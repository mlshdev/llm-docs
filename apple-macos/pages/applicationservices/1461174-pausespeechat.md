> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461174-pausespeechat](https://developer.apple.com/documentation/applicationservices/1461174-pausespeechat)

# PauseSpeechAt(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Pauses speech on a speech channel.

## Declaration

```swift
func PauseSpeechAt(_ chan: SpeechChannel, _ whereToPause: Int32) -> OSErr
```

## Parameters

- `chan`: The speech channel on which speech is to be paused.
- `whereToPause`: A constant indicating when speech processing should be paused. Pass the constant `kImmediate` to pause immediately, even in the middle of a word. Pass `kEndOfWord` or `kEndOfSentence` to pause speech at the end of the current word or sentence, respectively.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `PauseSpeechAt` functionmakes speech production pause at a specified point in the text. `PauseSpeechAt` returnsimmediately, although speech output will continue until the specifiedpoint.

You can determine whether your application has paused speechoutput on a speech channel by obtaining a speech status informationstructure through the `GetSpeechInfo` function.While a speech channel is paused, the speech status informationstructure indicates that `outputBusy` and `outputPaused` areboth `TRUE`.

If the end of the input text buffer is reached before thespecified pause point, speech output pauses at the end of the buffer.

The `PauseSpeechAt` functiondiffers from the `StopSpeech` and `StopSpeechAt` functionsin that a subsequent call to `ContinueSpeech`,described next, causes the contents of the current text buffer tocontinue being spoken.

If you plan to continue speech synthesis from a paused speechchannel, the text buffer being processed must remain available atall times and must not move while the channel is in a paused state.

## See Also

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech(\_:)](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [SpeakCFString(\_:\_:\_:)](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [StopSpeech(\_:)](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
- [StopSpeechAt(\_:\_:)](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.

# PauseSpeechAt (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Pauses speech on a speech channel.

## Declaration

```objectivec
OSErr PauseSpeechAt(SpeechChannel chan, SInt32 whereToPause);
```

## Parameters

- `chan`: The speech channel on which speech is to be paused.
- `whereToPause`: A constant indicating when speech processing should be paused. Pass the constant `kImmediate` to pause immediately, even in the middle of a word. Pass `kEndOfWord` or `kEndOfSentence` to pause speech at the end of the current word or sentence, respectively.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `PauseSpeechAt` functionmakes speech production pause at a specified point in the text. `PauseSpeechAt` returnsimmediately, although speech output will continue until the specifiedpoint.

You can determine whether your application has paused speechoutput on a speech channel by obtaining a speech status informationstructure through the `GetSpeechInfo` function.While a speech channel is paused, the speech status informationstructure indicates that `outputBusy` and `outputPaused` areboth `TRUE`.

If the end of the input text buffer is reached before thespecified pause point, speech output pauses at the end of the buffer.

The `PauseSpeechAt` functiondiffers from the `StopSpeech` and `StopSpeechAt` functionsin that a subsequent call to `ContinueSpeech`,described next, causes the contents of the current text buffer tocontinue being spoken.

If you plan to continue speech synthesis from a paused speechchannel, the text buffer being processed must remain available atall times and must not move while the channel is in a paused state.

## See Also

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [SpeakBuffer](1552252-speakbuffer.md): Deprecated. Speaks a buffer of text, using certain flags to controlspeech behavior.
- [SpeakString](1552250-speakstring.md): Deprecated. Begins speaking a text string.
- [SpeakCFString](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [SpeakText](1552236-speaktext.md): Deprecated. Begins speaking a buffer of text.
- [StopSpeech](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
- [StopSpeechAt](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.
