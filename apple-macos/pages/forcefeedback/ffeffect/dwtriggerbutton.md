> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffeffect/dwtriggerbutton](https://developer.apple.com/documentation/forcefeedback/ffeffect/dwtriggerbutton)

# dwTriggerButton (Swift)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

The identifier or offset of the button to be used to trigger playback of the effect. The FFJOFS\_\* flags must be used to specify the value. If this member is set to FFEB_NOTRIGGER, no trigger button is associated with the effect.

## Declaration

```swift
var dwTriggerButton: DWORD
```

## See Also

### Instance Properties

- [cAxes](caxes.md): Number of axes involved in the effect.
- [cbTypeSpecificParams](cbtypespecificparams.md): Number of bytes of additional type-specific parameters for the corresponding effect type.
- [dwDuration](dwduration.md): The total duration of the effect, in microseconds. If this value is FF_INFINITE, the effect has infinite duration. If an envelope has been applied to the effect, the attack is applied, followed by an infinite sustain.
- [dwFlags](dwflags.md): Flags associated with an effect.
- [dwGain](dwgain.md): The gain to be applied to the effect, in the range from 0 through 10,000. The gain is a scaling factor applied to all magnitudes of the effect and its envelope.
- [dwSamplePeriod](dwsampleperiod.md): The period at which the device should play back the effect, in microseconds.
- [dwSize](dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.
- [dwStartDelay](dwstartdelay.md): Time (in microseconds) that the device should wait after a FFEffectStart call before playing the effect. If this value is 0, effect playback begins immediately.
- [dwTriggerRepeatInterval](dwtriggerrepeatinterval.md): The interval, in microseconds, between the end of one playback and the start of the next when the effect is triggered by a button press and the button is held down. Setting this value to FF_INFINITE suppresses repetition.
- [lpEnvelope](lpenvelope.md): Optional pointer to a FFENVELOPE structure that describes the envelope to be used by this effect. Not all effect types use envelopes. If no envelope is to be applied, the member should be set to NULL.
- [lpvTypeSpecificParams](lpvtypespecificparams.md): A pointer to type-specific parameters, or NULL if there are no type-specific parameters.
- [rgdwAxes](rgdwaxes.md): Pointer to a DWORD array (of **cAxes** elements) containing identifiers or offsets identifying the axes to which the effect is to be applied.
- [rglDirection](rgldirection.md): Pointer to a LONG array (of **cAxes** elements) containing either Cartesian coordinates, polar coordinates, or spherical coordinates.

# dwTriggerButton (Objective-C)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

The identifier or offset of the button to be used to trigger playback of the effect. The FFJOFS\_\* flags must be used to specify the value. If this member is set to FFEB_NOTRIGGER, no trigger button is associated with the effect.

## Declaration

```objectivec
DWORD dwTriggerButton;
```

## See Also

### Instance Properties

- [cAxes](caxes.md): Number of axes involved in the effect.
- [cbTypeSpecificParams](cbtypespecificparams.md): Number of bytes of additional type-specific parameters for the corresponding effect type.
- [dwDuration](dwduration.md): The total duration of the effect, in microseconds. If this value is FF_INFINITE, the effect has infinite duration. If an envelope has been applied to the effect, the attack is applied, followed by an infinite sustain.
- [dwFlags](dwflags.md): Flags associated with an effect.
- [dwGain](dwgain.md): The gain to be applied to the effect, in the range from 0 through 10,000. The gain is a scaling factor applied to all magnitudes of the effect and its envelope.
- [dwSamplePeriod](dwsampleperiod.md): The period at which the device should play back the effect, in microseconds.
- [dwSize](dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.
- [dwStartDelay](dwstartdelay.md): Time (in microseconds) that the device should wait after a FFEffectStart call before playing the effect. If this value is 0, effect playback begins immediately.
- [dwTriggerRepeatInterval](dwtriggerrepeatinterval.md): The interval, in microseconds, between the end of one playback and the start of the next when the effect is triggered by a button press and the button is held down. Setting this value to FF_INFINITE suppresses repetition.
- [lpEnvelope](lpenvelope.md): Optional pointer to a FFENVELOPE structure that describes the envelope to be used by this effect. Not all effect types use envelopes. If no envelope is to be applied, the member should be set to NULL.
- [lpvTypeSpecificParams](lpvtypespecificparams.md): A pointer to type-specific parameters, or NULL if there are no type-specific parameters.
- [rgdwAxes](rgdwaxes.md): Pointer to a DWORD array (of **cAxes** elements) containing identifiers or offsets identifying the axes to which the effect is to be applied.
- [rglDirection](rgldirection.md): Pointer to a LONG array (of **cAxes** elements) containing either Cartesian coordinates, polar coordinates, or spherical coordinates.
