> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffenvelope](https://developer.apple.com/documentation/forcefeedback/ffenvelope)

# FFENVELOPE (Swift)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.

## Declaration

```swift
struct FFENVELOPE
```

<a id="overview"></a>

## Overview

The sustain level for the envelope is represented by the **dwMagnitude** member of the FFPERIODIC structure and the **lMagnitude** member of the FFCONSTANTFORCE structure. The sustain time is represented by **dwDuration** member of the FFEFFECT structure

## Topics

### Initializers

- [init()](ffenvelope/init%28%29.md)
- [init(dwSize:dwAttackLevel:dwAttackTime:dwFadeLevel:dwFadeTime:)](ffenvelope/init%28dwsize_dwattacklevel_dwattacktime_dwfadelevel_dwfadetime_%29.md)

### Instance Properties

- [dwAttackLevel](ffenvelope/dwattacklevel.md): Amplitude for the start of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.
- [dwAttackTime](ffenvelope/dwattacktime.md): The time, in microseconds, to reach the sustain level.
- [dwFadeLevel](ffenvelope/dwfadelevel.md): Amplitude for the end of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.
- [dwFadeTime](ffenvelope/dwfadetime.md): The time, in microseconds, to reach the fade level.
- [dwSize](ffenvelope/dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.

# FFENVELOPE (Objective-C)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.

## Declaration

```objectivec
struct FFENVELOPE;
```

<a id="overview"></a>

## Overview

The sustain level for the envelope is represented by the **dwMagnitude** member of the FFPERIODIC structure and the **lMagnitude** member of the FFCONSTANTFORCE structure. The sustain time is represented by **dwDuration** member of the FFEFFECT structure

## Topics

### Instance Properties

- [dwAttackLevel](ffenvelope/dwattacklevel.md): Amplitude for the start of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.
- [dwAttackTime](ffenvelope/dwattacktime.md): The time, in microseconds, to reach the sustain level.
- [dwFadeLevel](ffenvelope/dwfadelevel.md): Amplitude for the end of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.
- [dwFadeTime](ffenvelope/dwfadetime.md): The time, in microseconds, to reach the fade level.
- [dwSize](ffenvelope/dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.

## See Also

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.
