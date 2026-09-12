> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/fframpforce](https://developer.apple.com/documentation/forcefeedback/fframpforce)

# FFRAMPFORCE (Swift)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Contains type-specific information for the RAMPFORCE effect.

## Declaration

```swift
struct FFRAMPFORCE
```

<a id="overview"></a>

## Overview

A pointer to a single FFRAMPFORCE structure for an effect is passed in the **lpvTypeSpecificParams** member of the FFEFFECT structure.

The dwDuration for a ramp force effect cannot be FF_INFINITE.

## Topics

### Initializers

- [init()](fframpforce/init%28%29.md)
- [init(lStart:lEnd:)](fframpforce/init%28lstart_lend_%29.md)

### Instance Properties

- [lEnd](fframpforce/lend.md): Magnitude at the end of the effect, in the range from -10,000 through 10,000.
- [lStart](fframpforce/lstart.md)

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
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.

# FFRAMPFORCE (Objective-C)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Contains type-specific information for the RAMPFORCE effect.

## Declaration

```objectivec
struct FFRAMPFORCE;
```

<a id="overview"></a>

## Overview

A pointer to a single FFRAMPFORCE structure for an effect is passed in the **lpvTypeSpecificParams** member of the FFEFFECT structure.

The dwDuration for a ramp force effect cannot be FF_INFINITE.

## Topics

### Instance Properties

- [lEnd](fframpforce/lend.md): Magnitude at the end of the effect, in the range from -10,000 through 10,000.
- [lStart](fframpforce/lstart.md)

## See Also

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
