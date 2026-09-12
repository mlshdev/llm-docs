> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffconstantforce](https://developer.apple.com/documentation/forcefeedback/ffconstantforce)

# FFCONSTANTFORCE (Swift)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Contains type-specific information for the CONSTANTFORCE effect.

## Declaration

```swift
struct FFCONSTANTFORCE
```

<a id="overview"></a>

## Overview

A pointer to a single FFCONSTANTFORCE structure for an effect is passed in the **lpvTypeSpecificParams** member of the FFEFFECT structure.

## Topics

### Initializers

- [init()](ffconstantforce/init%28%29.md)
- [init(lMagnitude:)](ffconstantforce/init%28lmagnitude_%29.md)

### Instance Properties

- [lMagnitude](ffconstantforce/lmagnitude.md): The magnitude of the effect, in the range from -10,000 through 10,000. If an envelope is applied to this effect, the value represents the magnitude of the sustain. If no envelope is applied, the value represents the amplitude of the entire effect.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.

# FFCONSTANTFORCE (Objective-C)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Contains type-specific information for the CONSTANTFORCE effect.

## Declaration

```objectivec
struct FFCONSTANTFORCE;
```

<a id="overview"></a>

## Overview

A pointer to a single FFCONSTANTFORCE structure for an effect is passed in the **lpvTypeSpecificParams** member of the FFEFFECT structure.

## Topics

### Instance Properties

- [lMagnitude](ffconstantforce/lmagnitude.md): The magnitude of the effect, in the range from -10,000 through 10,000. If an envelope is applied to this effect, the value represents the magnitude of the sustain. If no envelope is applied, the value represents the amplitude of the entire effect.

## See Also

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.
