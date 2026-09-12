> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460113-speechbusysystemwide](https://developer.apple.com/documentation/applicationservices/1460113-speechbusysystemwide)

# SpeechBusySystemWide() (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.

## Declaration

```swift
func SpeechBusySystemWide() -> Int16
```

<a id="return_value"></a>

## Return Value

The total number ofspeech channels currently synthesizing speech on the computer, whetherthey were initiated by your application or process’s code or bysome other process executing concurrently. Paused speech channelsare counted among those channels that are synthesizing speech.

<a id="discussion"></a>

## Discussion

This function is useful when you want to ensure that no speechis currently being produced anywhere on the Macintosh computer beforeinitiating speech. Although the Speech Synthesis Manager allowsdifferent applications to produce speech simultaneously, this canbe confusing to the user. As a result, it is often a good idea foryour application to check that no other process is producing speechbefore producing speech itself. If the difference between the valuesreturned by `SpeechBusySystemWide` andthe `SpeechBusy` functionis `0`, no other process is producing speech.

## See Also

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechPitch(\_:\_:)](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [GetSpeechRate(\_:\_:)](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusy()](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechManagerVersion()](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.

# SpeechBusySystemWide (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.

## Declaration

```objectivec
SInt16 SpeechBusySystemWide(void);
```

<a id="return_value"></a>

## Return Value

The total number ofspeech channels currently synthesizing speech on the computer, whetherthey were initiated by your application or process’s code or bysome other process executing concurrently. Paused speech channelsare counted among those channels that are synthesizing speech.

<a id="discussion"></a>

## Discussion

This function is useful when you want to ensure that no speechis currently being produced anywhere on the Macintosh computer beforeinitiating speech. Although the Speech Synthesis Manager allowsdifferent applications to produce speech simultaneously, this canbe confusing to the user. As a result, it is often a good idea foryour application to check that no other process is producing speechbefore producing speech itself. If the difference between the valuesreturned by `SpeechBusySystemWide` andthe `SpeechBusy` functionis `0`, no other process is producing speech.

## See Also

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechInfo](1552220-getspeechinfo.md): Deprecated. Gets information about a designated speech channel.
- [GetSpeechPitch](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [GetSpeechRate](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusy](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechManagerVersion](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.
