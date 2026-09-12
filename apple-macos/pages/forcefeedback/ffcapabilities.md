> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffcapabilities](https://developer.apple.com/documentation/forcefeedback/ffcapabilities)

# FFCAPABILITIES (Swift)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.

## Declaration

```swift
struct FFCAPABILITIES
```

<a id="overview"></a>

## Overview

This structure has no DirectInput equivalent.

## Topics

### Initializers

- [init()](ffcapabilities/init%28%29.md)
- [init(ffSpecVer:supportedEffects:emulatedEffects:subType:numFfAxes:ffAxes:storageCapacity:playbackCapacity:firmwareVer:hardwareVer:driverVer:)](ffcapabilities/init%28ffspecver_supportedeffects_emulatedeffects_subtype_numffaxes_ffaxes_storagecapacity_playbackcapacity_firmwarever_hardwarever_driverver_%29.md)

### Instance Properties

- [driverVer](ffcapabilities/driverver.md): Specifies the version number of the force-feedback device driver, using a NumVersion structure.
- [emulatedEffects](ffcapabilities/emulatedeffects.md): FFCapabilitiesEffectType flags that identify all effect types not directly supported by the device, but emulated by the plugIn.
- [ffAxes](ffcapabilities/ffaxes.md): An array of values that describe the axes on which force-feedback is present.
- [ffSpecVer](ffcapabilities/ffspecver.md): Specifies the version number of the FF API specification supported by this plugIn. It should be specified using the fields of the NumVersion structure. The first version of the FF API specification is 1.0.0f0.
- [firmwareVer](ffcapabilities/firmwarever.md): Specifies the firmware revision of the device, using a NumVersion structure.
- [hardwareVer](ffcapabilities/hardwarever.md): Specifies the hardware revision of the device, using a NumVersion structure.
- [numFfAxes](ffcapabilities/numffaxes.md): The number of controller axes that provide force feedback. Indicates the number of valid elements in ffAxes.
- [playbackCapacity](ffcapabilities/playbackcapacity.md): The maximum number of created effects that can be simultaneously played via calls to FFEffectStart. This number will always be equal to or less than the storageCapacity. A device driver may allow more effects to be created than the physical device can actually handle. Therefore, this number is an important parameter for FF designers.
- [storageCapacity](ffcapabilities/storagecapacity.md): The maximum number of effects that can be created via calls to FFDeviceCreateEffect and coexist at any one time. This may or may not be different from the playbackCapacity, depending on device driver complexity.
- [subType](ffcapabilities/subtype.md): The force-feedback subcategory which best identifies the device’s FF capabilities.
- [supportedEffects](ffcapabilities/supportedeffects.md): FFCapabilitiesEffectType flags that identify all effect types supported by the plugIn/device (including driver-emulated effects).

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.

# FFCAPABILITIES (Objective-C)

**Framework:** Force Feedback  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.

## Declaration

```objectivec
struct FFCAPABILITIES;
```

<a id="overview"></a>

## Overview

This structure has no DirectInput equivalent.

## Topics

### Instance Properties

- [driverVer](ffcapabilities/driverver.md): Specifies the version number of the force-feedback device driver, using a NumVersion structure.
- [emulatedEffects](ffcapabilities/emulatedeffects.md): FFCapabilitiesEffectType flags that identify all effect types not directly supported by the device, but emulated by the plugIn.
- [ffAxes](ffcapabilities/ffaxes.md): An array of values that describe the axes on which force-feedback is present.
- [ffSpecVer](ffcapabilities/ffspecver.md): Specifies the version number of the FF API specification supported by this plugIn. It should be specified using the fields of the NumVersion structure. The first version of the FF API specification is 1.0.0f0.
- [firmwareVer](ffcapabilities/firmwarever.md): Specifies the firmware revision of the device, using a NumVersion structure.
- [hardwareVer](ffcapabilities/hardwarever.md): Specifies the hardware revision of the device, using a NumVersion structure.
- [numFfAxes](ffcapabilities/numffaxes.md): The number of controller axes that provide force feedback. Indicates the number of valid elements in ffAxes.
- [playbackCapacity](ffcapabilities/playbackcapacity.md): The maximum number of created effects that can be simultaneously played via calls to FFEffectStart. This number will always be equal to or less than the storageCapacity. A device driver may allow more effects to be created than the physical device can actually handle. Therefore, this number is an important parameter for FF designers.
- [storageCapacity](ffcapabilities/storagecapacity.md): The maximum number of effects that can be created via calls to FFDeviceCreateEffect and coexist at any one time. This may or may not be different from the playbackCapacity, depending on device driver complexity.
- [subType](ffcapabilities/subtype.md): The force-feedback subcategory which best identifies the device’s FF capabilities.
- [supportedEffects](ffcapabilities/supportedeffects.md): FFCapabilitiesEffectType flags that identify all effect types supported by the plugIn/device (including driver-emulated effects).

## See Also

### Data Types

- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.
