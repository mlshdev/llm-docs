> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461621-speakcfstring](https://developer.apple.com/documentation/applicationservices/1461621-speakcfstring)

# SpeakCFString(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 13.0)

Begins speaking a string represented as a `CFString` object.

## Declaration

```swift
func SpeakCFString(_ chan: SpeechChannel, _ aString: CFString, _ options: CFDictionary?) -> OSErr
```

## Parameters

- `chan`: The speech channel through which speech is to be spoken.
- `aString`: The string to be spoken, represented as a `CFString` object.
- `options`: An optional dictionary of key-value pairs used to customize speech behavior. See [Synthesizer Option Keys](speech_synthesis_manager/synthesizer_option_keys.md) for the available keys.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SpeakCFString` function is the Core Foundation-based equivalent of the [SpeakBuffer](1552252-speakbuffer.md) function.

The `SpeakCFString` function converts the text string specified in `aString` into speech, using the voice and control settings in effect for the speech channel specified in `chan`. (Before you use `SpeakCFString`, therefore, be sure you’ve created a speech channel with the [NewSpeechChannel(\_:\_:)](1461367-newspeechchannel.md) function.) The `SpeakCFString` function generates speech asynchronously, which means that control is returned to your application before speech has finished, perhaps even before the speech is first audible.

If `SpeakCFString` is called while the speech channel is currently speaking the contents of another text string, the speech stops immediately and the new text string is spoken as soon as possible.

## See Also

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech(\_:)](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [PauseSpeechAt(\_:\_:)](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [StopSpeech(\_:)](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
- [StopSpeechAt(\_:\_:)](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.

# SpeakCFString (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 13.0)

Begins speaking a string represented as a `CFString` object.

## Declaration

```objectivec
OSErr SpeakCFString(SpeechChannel chan, CFStringRef aString, CFDictionaryRef options);
```

## Parameters

- `chan`: The speech channel through which speech is to be spoken.
- `aString`: The string to be spoken, represented as a `CFString` object.
- `options`: An optional dictionary of key-value pairs used to customize speech behavior. See [Synthesizer Option Keys](speech_synthesis_manager/synthesizer_option_keys.md) for the available keys.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SpeakCFString` function is the Core Foundation-based equivalent of the [SpeakBuffer](1552252-speakbuffer.md) function.

The `SpeakCFString` function converts the text string specified in `aString` into speech, using the voice and control settings in effect for the speech channel specified in `chan`. (Before you use `SpeakCFString`, therefore, be sure you’ve created a speech channel with the [NewSpeechChannel](1461367-newspeechchannel.md) function.) The `SpeakCFString` function generates speech asynchronously, which means that control is returned to your application before speech has finished, perhaps even before the speech is first audible.

If `SpeakCFString` is called while the speech channel is currently speaking the contents of another text string, the speech stops immediately and the new text string is spoken as soon as possible.

## See Also

### Starting, Stopping, and Pausing Speech

- [ContinueSpeech](1462728-continuespeech.md): Deprecated. Resumes speech paused by the `PauseSpeechAt` function.
- [PauseSpeechAt](1461174-pausespeechat.md): Deprecated. Pauses speech on a speech channel.
- [SpeakBuffer](1552252-speakbuffer.md): Deprecated. Speaks a buffer of text, using certain flags to controlspeech behavior.
- [SpeakString](1552250-speakstring.md): Deprecated. Begins speaking a text string.
- [SpeakText](1552236-speaktext.md): Deprecated. Begins speaking a buffer of text.
- [StopSpeech](1462745-stopspeech.md): Deprecated. Terminates speech immediately on the specified channel.
- [StopSpeechAt](1459780-stopspeechat.md): Deprecated. Terminates speech delivery on a specified channel eitherimmediately or at the end of the current word or sentence.
