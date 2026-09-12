> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462674-setspeechpitch](https://developer.apple.com/documentation/applicationservices/1462674-setspeechpitch)

# SetSpeechPitch(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Sets the speech pitch on a designated speech channel.

## Declaration

```swift
func SetSpeechPitch(_ chan: SpeechChannel, _ pitch: Fixed) -> OSErr
```

## Parameters

- `chan`: The speech channel whose pitch you wish to set.
- `pitch`: The new pitch for the speech channel, expressed as a fixed-point frequency value.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SetSpeechPitch` functionchanges the current speech pitch on the speech channel specifiedby the `chan` parameterto the pitch specified by the `pitch` parameter.Typical voice frequencies range from around 90 hertz for a low-pitchedmale voice to perhaps 300 hertz for a high-pitched child’s voice.These frequencies correspond to approximate pitch values in theranges of 30.000 to 40.000 and 55.000 to 65.000, respectively. Althoughfixed-point values allow you to specify a wide range of pitches,not all synthesizers will support the full range of pitches. Ifyour application specifies a pitch that a synthesizer cannot handle, itmay adjust the pitch to fit within an acceptable range.

## See Also

### Changing Speech Attributes

- [SetSpeechProperty(\_:\_:\_:)](1459256-setspeechproperty.md): Deprecated. Sets the value of the specified speech-channel property.
- [SetSpeechRate(\_:\_:)](1459896-setspeechrate.md): Deprecated. Sets the speech rate of a designated speech channel.

# SetSpeechPitch (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 13.0)

Sets the speech pitch on a designated speech channel.

## Declaration

```objectivec
OSErr SetSpeechPitch(SpeechChannel chan, Fixed pitch);
```

## Parameters

- `chan`: The speech channel whose pitch you wish to set.
- `pitch`: The new pitch for the speech channel, expressed as a fixed-point frequency value.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](speech_synthesis_manager.md#1659745).

<a id="discussion"></a>

## Discussion

The `SetSpeechPitch` functionchanges the current speech pitch on the speech channel specifiedby the `chan` parameterto the pitch specified by the `pitch` parameter.Typical voice frequencies range from around 90 hertz for a low-pitchedmale voice to perhaps 300 hertz for a high-pitched child’s voice.These frequencies correspond to approximate pitch values in theranges of 30.000 to 40.000 and 55.000 to 65.000, respectively. Althoughfixed-point values allow you to specify a wide range of pitches,not all synthesizers will support the full range of pitches. Ifyour application specifies a pitch that a synthesizer cannot handle, itmay adjust the pitch to fit within an acceptable range.

## See Also

### Changing Speech Attributes

- [SetSpeechInfo](1552223-setspeechinfo.md): Deprecated. Changes a setting of a particular speech channel.
- [SetSpeechProperty](1459256-setspeechproperty.md): Deprecated. Sets the value of the specified speech-channel property.
- [SetSpeechRate](1459896-setspeechrate.md): Deprecated. Sets the speech rate of a designated speech channel.
