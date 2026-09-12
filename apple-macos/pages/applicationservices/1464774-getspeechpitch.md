> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464774-getspeechpitch](https://developer.apple.com/documentation/applicationservices/1464774-getspeechpitch)

# GetSpeechPitch(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Gets a speech channel’s current speech pitch.

## Declaration

```swift
func GetSpeechPitch(_ chan: SpeechChannel, _ pitch: UnsafeMutablePointer<Fixed>) -> OSErr
```

## Parameters

- `chan`: The speech channel whose pitch you wish to determine.
- `pitch`: On return, a pointer to the current pitch of the voice in the speech channel, expressed as a fixed-point frequency value.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

Typical voice frequencies range from around 90 hertz for alow-pitched male voice to perhaps 300 hertz for a high-pitched child’svoice. These frequencies correspond to approximate pitch valuesin the ranges of 30.000 to 40.000 and 55.000 to 65.000, respectively.

## See Also

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechRate(\_:\_:)](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusy()](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechBusySystemWide()](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
- [SpeechManagerVersion()](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.

# GetSpeechPitch (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Gets a speech channel’s current speech pitch.

## Declaration

```objectivec
OSErr GetSpeechPitch(SpeechChannel chan, Fixed *pitch);
```

## Parameters

- `chan`: The speech channel whose pitch you wish to determine.
- `pitch`: On return, a pointer to the current pitch of the voice in the speech channel, expressed as a fixed-point frequency value.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

Typical voice frequencies range from around 90 hertz for alow-pitched male voice to perhaps 300 hertz for a high-pitched child’svoice. These frequencies correspond to approximate pitch valuesin the ranges of 30.000 to 40.000 and 55.000 to 65.000, respectively.

## See Also

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechInfo](1552220-getspeechinfo.md): Deprecated. Gets information about a designated speech channel.
- [GetSpeechRate](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusy](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechBusySystemWide](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
- [SpeechManagerVersion](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.
