> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464581-speechbusy](https://developer.apple.com/documentation/applicationservices/1464581-speechbusy)

# SpeechBusy() (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Determines whether any channels of speech are currentlysynthesizing speech.

## Declaration

```swift
func SpeechBusy() -> Int16
```

<a id="return_value"></a>

## Return Value

The number of speechchannels that are currently synthesizing speech in the application.This is useful when you want to ensure that an earlier speech requesthas been completed before having the system speak again. Pausedspeech channels are counted among those that are synthesizing speech.

   The speech channel that the Speech Synthesis Manager allocatesinternally in response to calls to the `SpeakString` functionis counted in the number returned by `SpeechBusy`. Thus,if you use just `SpeakString` toinitiate speech, `SpeechBusy` alwaysreturns `1` as long as speech is being produced. When `SpeechBusy` returns`0`, all speech has finished.

## See Also

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechPitch(\_:\_:)](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [GetSpeechRate(\_:\_:)](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusySystemWide()](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
- [SpeechManagerVersion()](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.

# SpeechBusy (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Determines whether any channels of speech are currentlysynthesizing speech.

## Declaration

```objectivec
SInt16 SpeechBusy(void);
```

<a id="return_value"></a>

## Return Value

The number of speechchannels that are currently synthesizing speech in the application.This is useful when you want to ensure that an earlier speech requesthas been completed before having the system speak again. Pausedspeech channels are counted among those that are synthesizing speech.

   The speech channel that the Speech Synthesis Manager allocatesinternally in response to calls to the `SpeakString` functionis counted in the number returned by `SpeechBusy`. Thus,if you use just `SpeakString` toinitiate speech, `SpeechBusy` alwaysreturns `1` as long as speech is being produced. When `SpeechBusy` returns`0`, all speech has finished.

## See Also

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechInfo](1552220-getspeechinfo.md): Deprecated. Gets information about a designated speech channel.
- [GetSpeechPitch](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [GetSpeechRate](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusySystemWide](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
- [SpeechManagerVersion](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.
