> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459075-copyspeechproperty](https://developer.apple.com/documentation/applicationservices/1459075-copyspeechproperty)

# CopySpeechProperty(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 13.0)

Gets the value associated with the specified property of a speech channel.

## Declaration

```swift
func CopySpeechProperty(_ chan: SpeechChannel, _ property: CFString, _ object: UnsafeMutablePointer<CFTypeRef?>) -> OSErr
```

## Parameters

- `chan`: The speech channel with which the specified property is associated.
- `property`: A speech-channel property about which information is being requested. See [Speech-Channel Properties](speech_synthesis_manager/speech-channel_properties.md) for information on the properties you can specify.
- `object`: On return, a pointer to a Core Foundation object that holds the value of the specified property. The type of the object depends on the specific property passed in. For some properties, the value of `object` can be `NULL`. When the returned object is a `CFDictionary` object, you can use `CFDictionary` functions, such as [CFDictionaryGetValue(\_:\_:)](https://developer.apple.com/documentation/corefoundation/cfdictionarygetvalue%28_:_:%29), to retrieve the values associated with the keys that are associated with the specified property.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `CopySpeechProperty` function is the Core Foundation-based equivalent of the [GetSpeechInfo](1552220-getspeechinfo.md) function.

## See Also

### Obtaining Information About Speech and Speech Channels

- [GetSpeechPitch(\_:\_:)](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [GetSpeechRate(\_:\_:)](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusy()](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechBusySystemWide()](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
- [SpeechManagerVersion()](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.

# CopySpeechProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 13.0)

Gets the value associated with the specified property of a speech channel.

## Declaration

```objectivec
OSErr CopySpeechProperty(SpeechChannel chan, CFStringRef property, CFTypeRef  _Nullable *object);
```

## Parameters

- `chan`: The speech channel with which the specified property is associated.
- `property`: A speech-channel property about which information is being requested. See [Speech-Channel Properties](speech_synthesis_manager/speech-channel_properties.md) for information on the properties you can specify.
- `object`: On return, a pointer to a Core Foundation object that holds the value of the specified property. The type of the object depends on the specific property passed in. For some properties, the value of `object` can be `NULL`. When the returned object is a `CFDictionary` object, you can use `CFDictionary` functions, such as [CFDictionaryGetValue](https://developer.apple.com/documentation/corefoundation/cfdictionarygetvalue%28_:_:%29), to retrieve the values associated with the keys that are associated with the specified property.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `CopySpeechProperty` function is the Core Foundation-based equivalent of the [GetSpeechInfo](1552220-getspeechinfo.md) function.

## See Also

### Obtaining Information About Speech and Speech Channels

- [GetSpeechInfo](1552220-getspeechinfo.md): Deprecated. Gets information about a designated speech channel.
- [GetSpeechPitch](1464774-getspeechpitch.md): Deprecated. Gets a speech channel’s current speech pitch.
- [GetSpeechRate](1460797-getspeechrate.md): Deprecated. Gets a speech channel’s current speech rate.
- [SpeechBusy](1464581-speechbusy.md): Deprecated. Determines whether any channels of speech are currentlysynthesizing speech.
- [SpeechBusySystemWide](1460113-speechbusysystemwide.md): Deprecated. Determines if any speech is currently being synthesizedin your application or elsewhere on the computer.
- [SpeechManagerVersion](1462334-speechmanagerversion.md): Deprecated. Determines the current version of the Speech SynthesisManager installed in the system.
