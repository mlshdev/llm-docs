> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffeffect](https://developer.apple.com/documentation/forcefeedback/ffeffect)

# FFEFFECT (Swift)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.

## Declaration

```swift
struct FFEFFECT
```

<a id="overview"></a>

## Overview

OBJECT IDS cannot be used to identify trigger buttons in **dwTriggerButton**, and output axes in **rgdwAxes\[***n***\]**. Please use object offsets (FFJOFS\_\* constants), the only supported method.

## Topics

### Initializers

- [init()](ffeffect/init%28%29.md)
- [init(dwSize:dwFlags:dwDuration:dwSamplePeriod:dwGain:dwTriggerButton:dwTriggerRepeatInterval:cAxes:rgdwAxes:rglDirection:lpEnvelope:cbTypeSpecificParams:lpvTypeSpecificParams:dwStartDelay:)](ffeffect/init%28dwsize_dwflags_dwduration_dwsampleperiod_dwgain_dwtriggerbutton_dwtriggerrepeatinterval_caxes_rgdwaxes_rgldirection_lpenvelope_cbtypespecificparams_lpvtypespecificparams_dwsta~98c9304c.md)

### Instance Properties

- [cAxes](ffeffect/caxes.md): Number of axes involved in the effect.
- [cbTypeSpecificParams](ffeffect/cbtypespecificparams.md): Number of bytes of additional type-specific parameters for the corresponding effect type.
- [dwDuration](ffeffect/dwduration.md): The total duration of the effect, in microseconds. If this value is FF_INFINITE, the effect has infinite duration. If an envelope has been applied to the effect, the attack is applied, followed by an infinite sustain.
- [dwFlags](ffeffect/dwflags.md): Flags associated with an effect.
- [dwGain](ffeffect/dwgain.md): The gain to be applied to the effect, in the range from 0 through 10,000. The gain is a scaling factor applied to all magnitudes of the effect and its envelope.
- [dwSamplePeriod](ffeffect/dwsampleperiod.md): The period at which the device should play back the effect, in microseconds.
- [dwSize](ffeffect/dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.
- [dwStartDelay](ffeffect/dwstartdelay.md): Time (in microseconds) that the device should wait after a FFEffectStart call before playing the effect. If this value is 0, effect playback begins immediately.
- [dwTriggerButton](ffeffect/dwtriggerbutton.md): The identifier or offset of the button to be used to trigger playback of the effect. The FFJOFS\_\* flags must be used to specify the value. If this member is set to FFEB_NOTRIGGER, no trigger button is associated with the effect.
- [dwTriggerRepeatInterval](ffeffect/dwtriggerrepeatinterval.md): The interval, in microseconds, between the end of one playback and the start of the next when the effect is triggered by a button press and the button is held down. Setting this value to FF_INFINITE suppresses repetition.
- [lpEnvelope](ffeffect/lpenvelope.md): Optional pointer to a FFENVELOPE structure that describes the envelope to be used by this effect. Not all effect types use envelopes. If no envelope is to be applied, the member should be set to NULL.
- [lpvTypeSpecificParams](ffeffect/lpvtypespecificparams.md): A pointer to type-specific parameters, or NULL if there are no type-specific parameters.
- [rgdwAxes](ffeffect/rgdwaxes.md): Pointer to a DWORD array (of **cAxes** elements) containing identifiers or offsets identifying the axes to which the effect is to be applied.
- [rglDirection](ffeffect/rgldirection.md): Pointer to a LONG array (of **cAxes** elements) containing either Cartesian coordinates, polar coordinates, or spherical coordinates.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.

# FFEFFECT (Objective-C)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.

## Declaration

```objectivec
struct FFEFFECT;
```

<a id="overview"></a>

## Overview

OBJECT IDS cannot be used to identify trigger buttons in **dwTriggerButton**, and output axes in **rgdwAxes\[***n***\]**. Please use object offsets (FFJOFS\_\* constants), the only supported method.

## Topics

### Instance Properties

- [cAxes](ffeffect/caxes.md): Number of axes involved in the effect.
- [cbTypeSpecificParams](ffeffect/cbtypespecificparams.md): Number of bytes of additional type-specific parameters for the corresponding effect type.
- [dwDuration](ffeffect/dwduration.md): The total duration of the effect, in microseconds. If this value is FF_INFINITE, the effect has infinite duration. If an envelope has been applied to the effect, the attack is applied, followed by an infinite sustain.
- [dwFlags](ffeffect/dwflags.md): Flags associated with an effect.
- [dwGain](ffeffect/dwgain.md): The gain to be applied to the effect, in the range from 0 through 10,000. The gain is a scaling factor applied to all magnitudes of the effect and its envelope.
- [dwSamplePeriod](ffeffect/dwsampleperiod.md): The period at which the device should play back the effect, in microseconds.
- [dwSize](ffeffect/dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.
- [dwStartDelay](ffeffect/dwstartdelay.md): Time (in microseconds) that the device should wait after a FFEffectStart call before playing the effect. If this value is 0, effect playback begins immediately.
- [dwTriggerButton](ffeffect/dwtriggerbutton.md): The identifier or offset of the button to be used to trigger playback of the effect. The FFJOFS\_\* flags must be used to specify the value. If this member is set to FFEB_NOTRIGGER, no trigger button is associated with the effect.
- [dwTriggerRepeatInterval](ffeffect/dwtriggerrepeatinterval.md): The interval, in microseconds, between the end of one playback and the start of the next when the effect is triggered by a button press and the button is held down. Setting this value to FF_INFINITE suppresses repetition.
- [lpEnvelope](ffeffect/lpenvelope.md): Optional pointer to a FFENVELOPE structure that describes the envelope to be used by this effect. Not all effect types use envelopes. If no envelope is to be applied, the member should be set to NULL.
- [lpvTypeSpecificParams](ffeffect/lpvtypespecificparams.md): A pointer to type-specific parameters, or NULL if there are no type-specific parameters.
- [rgdwAxes](ffeffect/rgdwaxes.md): Pointer to a DWORD array (of **cAxes** elements) containing identifiers or offsets identifying the axes to which the effect is to be applied.
- [rglDirection](ffeffect/rgldirection.md): Pointer to a LONG array (of **cAxes** elements) containing either Cartesian coordinates, polar coordinates, or spherical coordinates.

## See Also

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.
