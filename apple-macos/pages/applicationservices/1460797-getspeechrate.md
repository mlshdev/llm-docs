> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460797-getspeechrate](https://developer.apple.com/documentation/applicationservices/1460797-getspeechrate)

# GetSpeechRate(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Gets a speech channel’s current speech rate.

## Declaration

```swift
func GetSpeechRate(_ chan: SpeechChannel, _ rate: UnsafeMutablePointer<Fixed>) -> OSErr
```

## Parameters

- `chan`: The speech channel whose rate you wish to determine.
- `rate`: On return, a pointer to the speech channel’s speech rate in words per minute, expressed as an integer value.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

## See Also

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechPitch(\_:\_:)](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [SpeechBusy()](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechBusySystemWide()](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
- [SpeechManagerVersion()](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.

# GetSpeechRate (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Gets a speech channel’s current speech rate.

## Declaration

```objectivec
OSErr GetSpeechRate(SpeechChannel chan, Fixed *rate);
```

## Parameters

- `chan`: The speech channel whose rate you wish to determine.
- `rate`: On return, a pointer to the speech channel’s speech rate in words per minute, expressed as an integer value.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

## See Also

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechInfo](1552220-getspeechinfo.md): Deprecated. Gets information about a designated speech channel.
- [GetSpeechPitch](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [SpeechBusy](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechBusySystemWide](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
- [SpeechManagerVersion](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.
