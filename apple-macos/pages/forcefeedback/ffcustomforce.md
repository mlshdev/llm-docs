> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffcustomforce](https://developer.apple.com/documentation/forcefeedback/ffcustomforce)

# FFCUSTOMFORCE (Swift)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Contains type-specific information for the CUSTOMFORCE effect.

## Declaration

```swift
struct FFCUSTOMFORCE
```

<a id="overview"></a>

## Overview

A pointer to a single FFCUSTOMFORCE structure for an effect is passed in the **lpvTypeSpecificParams** member of the FFEFFECT structure.

The structure describes a custom or user-defined force.

## Topics

### Initializers

- [init()](ffcustomforce/init%28%29.md)
- [init(cChannels:dwSamplePeriod:cSamples:rglForceData:)](ffcustomforce/init%28cchannels_dwsampleperiod_csamples_rglforcedata_%29.md)

### Instance Properties

- [cChannels](ffcustomforce/cchannels.md): Number of channels (axes) affected by this force.
- [cSamples](ffcustomforce/csamples.md): Total number of samples in the **rglForceData**. It must be an integral multiple of the **cChannels**.
- [dwSamplePeriod](ffcustomforce/dwsampleperiod.md): Sample period, in microseconds.
- [rglForceData](ffcustomforce/rglforcedata.md): Pointer to an array of force values representing the custom force. If multiple channels are provided, the values are interleaved. For example, if **cChannels** is 3, the first element of the array belongs to the first channel, the second to the second, and the third to the third.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.

# FFCUSTOMFORCE (Objective-C)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Contains type-specific information for the CUSTOMFORCE effect.

## Declaration

```objectivec
struct FFCUSTOMFORCE;
```

<a id="overview"></a>

## Overview

A pointer to a single FFCUSTOMFORCE structure for an effect is passed in the **lpvTypeSpecificParams** member of the FFEFFECT structure.

The structure describes a custom or user-defined force.

## Topics

### Instance Properties

- [cChannels](ffcustomforce/cchannels.md): Number of channels (axes) affected by this force.
- [cSamples](ffcustomforce/csamples.md): Total number of samples in the **rglForceData**. It must be an integral multiple of the **cChannels**.
- [dwSamplePeriod](ffcustomforce/dwsampleperiod.md): Sample period, in microseconds.
- [rglForceData](ffcustomforce/rglforcedata.md): Pointer to an array of force values representing the custom force. If multiple channels are provided, the values are interleaved. For example, if **cChannels** is 3, the first element of the array belongs to the first channel, the second to the second, and the third to the third.

## See Also

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.
