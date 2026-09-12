> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459896-setspeechrate](https://developer.apple.com/documentation/applicationservices/1459896-setspeechrate)

# SetSpeechRate(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Sets the speech rate of a designated speech channel.

## Declaration

```swift
func SetSpeechRate(_ chan: SpeechChannel, _ rate: Fixed) -> OSErr
```

## Parameters

- `chan`: The speech channel whose rate you wish to set.
- `rate`: The new speech rate in words per minute, expressed as an integer value.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SetSpeechRate` functionadjusts the speech rate on the speech channel specified by the `chan` parameterto the rate specified by the `rate` parameter.As a general rule, speaking rates range from around 150 words perminute to around 220 words per minute. It is important to keep inmind, however, that users will differ greatly in their ability to understandsynthesized speech at a particular rate based upon their level ofexperience listening to the voice and their ability to anticipatethe types of utterances they will encounter. 

Note: the new speech rate should be expressed as an integer (nota fixed point decimal number as the data type implies).

## See Also

### Changing Speech Attributes

- [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md): Deprecated. Sets the value of the specified speech-channel property.
- [SetSpeechPitch(\_:\_:)](1462674-setspeechpitch.md): Deprecated. Sets the speech pitch on a designated speech channel.

# SetSpeechRate (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Sets the speech rate of a designated speech channel.

## Declaration

```objectivec
OSErr SetSpeechRate(SpeechChannel chan, Fixed rate);
```

## Parameters

- `chan`: The speech channel whose rate you wish to set.
- `rate`: The new speech rate in words per minute, expressed as an integer value.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SetSpeechRate` functionadjusts the speech rate on the speech channel specified by the `chan` parameterto the rate specified by the `rate` parameter.As a general rule, speaking rates range from around 150 words perminute to around 220 words per minute. It is important to keep inmind, however, that users will differ greatly in their ability to understandsynthesized speech at a particular rate based upon their level ofexperience listening to the voice and their ability to anticipatethe types of utterances they will encounter. 

Note: the new speech rate should be expressed as an integer (nota fixed point decimal number as the data type implies).

## See Also

### Changing Speech Attributes

- [SetSpeechInfo](1552223-setspeechinfo.md): Deprecated. Changes a setting of a particular speech channel.
- [SetSpeechProperty](1459256-setspeechproperty.md): Deprecated. Sets the value of the specified speech-channel property.
- [SetSpeechPitch](1462674-setspeechpitch.md): Deprecated. Sets the speech pitch on a designated speech channel.
