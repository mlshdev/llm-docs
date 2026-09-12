> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459256-setspeechproperty](https://developer.apple.com/documentation/applicationservices/1459256-setspeechproperty)

# SetSpeechProperty(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 13.0)

Sets the value of the specified speech-channel property.

## Declaration

```swift
func SetSpeechProperty(_ chan: SpeechChannel, _ property: CFString, _ object: CFTypeRef?) -> OSErr
```

## Parameters

- `chan`: The speech channel whose property to set.
- `property`: The speech-channel property to set to the specified value.
- `object`: The value to which the specified speech-channel property should be set. For some properties, this value can be `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SetSpeechProperty` function is the Core Foundation-based equivalent of the [SetSpeechInfo](1552223-setspeechinfo.md) function.

See [Speech-Channel Properties](speech_synthesis_manager/speech-channel_properties.md) for information on the properties you can specify.

## See Also

### Changing Speech Attributes

- [SetSpeechPitch(\_:\_:)](1462674-setspeechpitch.md): Deprecated. Sets the speech pitch on a designated speech channel.
- [SetSpeechRate(\_:\_:)](1459896-setspeechrate.md): Deprecated. Sets the speech rate of a designated speech channel.

# SetSpeechProperty (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 13.0)

Sets the value of the specified speech-channel property.

## Declaration

```objectivec
OSErr SetSpeechProperty(SpeechChannel chan, CFStringRef property, CFTypeRef object);
```

## Parameters

- `chan`: The speech channel whose property to set.
- `property`: The speech-channel property to set to the specified value.
- `object`: The value to which the specified speech-channel property should be set. For some properties, this value can be `NULL`.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SetSpeechProperty` function is the Core Foundation-based equivalent of the [SetSpeechInfo](1552223-setspeechinfo.md) function.

See [Speech-Channel Properties](speech_synthesis_manager/speech-channel_properties.md) for information on the properties you can specify.

## See Also

### Changing Speech Attributes

- [SetSpeechInfo](1552223-setspeechinfo.md): Deprecated. Changes a setting of a particular speech channel.
- [SetSpeechPitch](1462674-setspeechpitch.md): Deprecated. Sets the speech pitch on a designated speech channel.
- [SetSpeechRate](1459896-setspeechrate.md): Deprecated. Sets the speech rate of a designated speech channel.
