> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462334-speechmanagerversion](https://developer.apple.com/documentation/applicationservices/1462334-speechmanagerversion)

# SpeechManagerVersion() (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Determines the current version of the Speech SynthesisManager installed in the system.

## Declaration

```swift
func SpeechManagerVersion() -> NumVersion
```

<a id="return_value"></a>

## Return Value

The version of theSpeech Synthesis Manager installed in the system, in the formatof the first 4 bytes of a `'vers'` resource.

<a id="discussion"></a>

## Discussion

Use this call to determine whether your program can accessfeatures of the Speech Synthesis Manager that are included in someSpeech Synthesis Manager releases but not in earlier ones.

## See Also

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty(\_:\_:\_:)](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechPitch(\_:\_:)](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [GetSpeechRate(\_:\_:)](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusy()](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechBusySystemWide()](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.

# SpeechManagerVersion (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Determines the current version of the Speech SynthesisManager installed in the system.

## Declaration

```objectivec
NumVersion SpeechManagerVersion(void);
```

<a id="return_value"></a>

## Return Value

The version of theSpeech Synthesis Manager installed in the system, in the formatof the first 4 bytes of a `'vers'` resource.

<a id="discussion"></a>

## Discussion

Use this call to determine whether your program can accessfeatures of the Speech Synthesis Manager that are included in someSpeech Synthesis Manager releases but not in earlier ones.

## See Also

### Obtaining Information About Speech and Speech Channels

- [CopySpeechProperty](1459075-copyspeechproperty.md): Deprecated. Gets the value associated with the specified property of a speech channel.
- [GetSpeechInfo](1552220-getspeechinfo.md): Deprecated. Gets information about a designated speech channel.
- [GetSpeechPitch](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [GetSpeechRate](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusy](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechBusySystemWide](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
