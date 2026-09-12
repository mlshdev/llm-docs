> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459780-stopspeechat](https://developer.apple.com/documentation/applicationservices/1459780-stopspeechat)

# StopSpeechAt(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.

## Declaration

```swift
func StopSpeechAt(_ chan: SpeechChannel, _ whereToStop: Int32) -> OSErr
```

## Parameters

- `chan`: The speech channel on which speech is to be stopped.
- `whereToStop`: A constant indicating when speech processing should stop. Pass the constant `kImmediate` to stop immediately, even in the middle of a word. Pass `kEndOfWord` or `kEndOfSentence` to stop speech at the end of the current word or sentence, respectively.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `StopSpeechAt` functionhalts the production of speech on the channel specified by `chan` ata specified point in the text. This function returns immediately,although speech output continues until the specified point has beenreached.

If you call the `StopSpeechAt` functionbefore the Speech Synthesis Manager finishes processing input text,then the function might return before some input text has yet tobe spoken. Thus, before disposing of the text buffer, your applicationshould wait until its text-done callback function has been called(if one has been defined), or until it can determine (by, for exampleobtaining a speech status information structure) that the SpeechSynthesis Manager is no longer processing input text.

If the end of the input text buffer is reached before thespecified stopping point, the speech synthesizer stops at the endof the buffer without generating an error.

## See Also

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech(\_:)](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [PauseSpeechAt(\_:\_:)](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakCFString(\_:\_:\_:)](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [StopSpeech(\_:)](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.

# StopSpeechAt (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.

## Declaration

```objectivec
OSErr StopSpeechAt(SpeechChannel chan, SInt32 whereToStop);
```

## Parameters

- `chan`: The speech channel on which speech is to be stopped.
- `whereToStop`: A constant indicating when speech processing should stop. Pass the constant `kImmediate` to stop immediately, even in the middle of a word. Pass `kEndOfWord` or `kEndOfSentence` to stop speech at the end of the current word or sentence, respectively.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `StopSpeechAt` functionhalts the production of speech on the channel specified by `chan` ata specified point in the text. This function returns immediately,although speech output continues until the specified point has beenreached.

If you call the `StopSpeechAt` functionbefore the Speech Synthesis Manager finishes processing input text,then the function might return before some input text has yet tobe spoken. Thus, before disposing of the text buffer, your applicationshould wait until its text-done callback function has been called(if one has been defined), or until it can determine (by, for exampleobtaining a speech status information structure) that the SpeechSynthesis Manager is no longer processing input text.

If the end of the input text buffer is reached before thespecified stopping point, the speech synthesizer stops at the endof the buffer without generating an error.

## See Also

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [PauseSpeechAt](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakBuffer](1552252-speakbuffer.md): Deprecated. Speaks a buffer of text, using certain flags to controlspeech behavior.
- [SpeakString](1552250-speakstring.md): Deprecated. Begins speaking a text string.
- [SpeakCFString](1461621-speakcfstring.md): Deprecated. Begins speaking a string represented as a `CFString` object.
- [SpeakText](1552236-speaktext.md): Deprecated. Begins speaking a buffer of text.
- [StopSpeech](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
