> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/forcefeedback-h](https://developer.apple.com/documentation/forcefeedback/forcefeedback-h)

# ForceFeedback.h (Swift)

**Framework:** Force Feedback  
**Kind:** API Collection

Public Interfaces to the Force Feedback implementation in macOS.

<a id="overview"></a>

## Overview

The Force Feedback API allows developers to control Force Feedback devices attached to the system. It is a distilled version of the Force Feedback functionality found in Microsoft’s DirectInput API. Developers familiar with that API should find this API to be similar.

<a id="Included-Headers"></a>

### Included Headers

- \<CoreFoundation/CoreFoundation.h\>
- \<CoreFoundation/CFPlugInCOM.h\>
- \<MacTypes.h\>
- \<IOKit/IOTypes.h\>
- \<ForceFeedback/ForceFeedbackConstants.h\>

## Topics

### Miscellaneous

- [FFCreateDevice(\_:\_:)](ffcreatedevice%28____%29.md): Creates a new API device object from an OS object in preparation to use the device for force feedback.
- [FFDeviceCreateEffect(\_:\_:\_:\_:)](ffdevicecreateeffect%28________%29.md): Creates and initializes an instance of an effect identified by the effect UUID on the device.
- [FFDeviceEscape(\_:\_:)](ffdeviceescape%28____%29.md): Sends a hardware-specific command to the device.
- [FFDeviceGetForceFeedbackCapabilities(\_:\_:)](ffdevicegetforcefeedbackcapabilities%28____%29.md): Retrieves the device’s force feedback capabilities.
- [FFDeviceGetForceFeedbackProperty(\_:\_:\_:\_:)](ffdevicegetforcefeedbackproperty%28________%29.md): Gets properties that define the device behavior.
- [FFDeviceGetForceFeedbackState(\_:\_:)](ffdevicegetforcefeedbackstate%28____%29.md): Retrieves the state of the device’s force feedback system.
- [FFDeviceReleaseEffect(\_:\_:)](ffdevicereleaseeffect%28____%29.md): Disposes of an API effect object created with FFDeviceCreateEffect.
- [FFDeviceSendForceFeedbackCommand(\_:\_:)](ffdevicesendforcefeedbackcommand%28____%29.md): Sends a command to the device’s force feedback system.
- [FFDeviceSetCooperativeLevel(\_:\_:\_:)](ffdevicesetcooperativelevel%28______%29.md): Function is unimplemented in version 1.0 of this API
- [FFDeviceSetForceFeedbackProperty(\_:\_:\_:)](ffdevicesetforcefeedbackproperty%28______%29.md): Retrieves the device’s force feedback capabilities.
- [FFEffectDownload(\_:)](ffeffectdownload%28__%29.md): Places the effect on the device. If the effect is already on the device, the existing effect is updated to match the values set by the FFEffectSetParameters method.
- [FFEffectEscape(\_:\_:)](ffeffectescape%28____%29.md): Sends a hardware-specific command to the driver.
- [FFEffectGetEffectStatus(\_:\_:)](ffeffectgeteffectstatus%28____%29.md): Sends a hardware-specific command to the driver.
- [FFEffectGetParameters(\_:\_:\_:)](ffeffectgetparameters%28______%29.md): Retrieves information about an effect.
- [FFEffectSetParameters(\_:\_:\_:)](ffeffectsetparameters%28______%29.md): Sets the characteristics of an effect.
- [FFEffectStart(\_:\_:\_:)](ffeffectstart%28______%29.md): Begins playing an effect. If the effect is already playing, it is restarted from the beginning. If the effect has not been downloaded or has been modified since its last download, it is downloaded before being started. This default behavior can be suppressed by passing the FFES_NODOWNLOAD flag.
- [FFEffectStop(\_:)](ffeffectstop%28__%29.md): Stops playing an effect.
- [FFEffectUnload(\_:)](ffeffectunload%28__%29.md): Removes the effect from the device. If the effect is playing, it is automatically stopped before it is unloaded.
- [FFIsForceFeedback(\_:)](ffisforcefeedback%28__%29.md): Used to determine if a particular device provided by HID Manager is a force feedback device.
- [FFReleaseDevice(\_:)](ffreleasedevice%28__%29.md): Disposes of an API device object created with FFCreateDevice.

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.

## See Also

### Reference

- [ForceFeedbackConstants.h](forcefeedbackconstants-h.md): Constants used in the public interfaces to the Force Feedback implementation in macOS.
- [ForceFeedback Enumerations](forcefeedback-enumerations.md)
- [ForceFeedback Constants](forcefeedback-constants.md)
- [ForceFeedback Data Types](forcefeedback-data-types.md)

# ForceFeedback.h (Objective-C)

**Framework:** Force Feedback  
**Kind:** API Collection

Public Interfaces to the Force Feedback implementation in macOS.

<a id="overview"></a>

## Overview

The Force Feedback API allows developers to control Force Feedback devices attached to the system. It is a distilled version of the Force Feedback functionality found in Microsoft’s DirectInput API. Developers familiar with that API should find this API to be similar.

<a id="Included-Headers"></a>

### Included Headers

- \<CoreFoundation/CoreFoundation.h\>
- \<CoreFoundation/CFPlugInCOM.h\>
- \<MacTypes.h\>
- \<IOKit/IOTypes.h\>
- \<ForceFeedback/ForceFeedbackConstants.h\>

## Topics

### Miscellaneous

- [FFCreateDevice](ffcreatedevice%28____%29.md): Creates a new API device object from an OS object in preparation to use the device for force feedback.
- [FFDeviceCreateEffect](ffdevicecreateeffect%28________%29.md): Creates and initializes an instance of an effect identified by the effect UUID on the device.
- [FFDeviceEscape](ffdeviceescape%28____%29.md): Sends a hardware-specific command to the device.
- [FFDeviceGetForceFeedbackCapabilities](ffdevicegetforcefeedbackcapabilities%28____%29.md): Retrieves the device’s force feedback capabilities.
- [FFDeviceGetForceFeedbackProperty](ffdevicegetforcefeedbackproperty%28________%29.md): Gets properties that define the device behavior.
- [FFDeviceGetForceFeedbackState](ffdevicegetforcefeedbackstate%28____%29.md): Retrieves the state of the device’s force feedback system.
- [FFDeviceReleaseEffect](ffdevicereleaseeffect%28____%29.md): Disposes of an API effect object created with FFDeviceCreateEffect.
- [FFDeviceSendForceFeedbackCommand](ffdevicesendforcefeedbackcommand%28____%29.md): Sends a command to the device’s force feedback system.
- [FFDeviceSetCooperativeLevel](ffdevicesetcooperativelevel%28______%29.md): Function is unimplemented in version 1.0 of this API
- [FFDeviceSetForceFeedbackProperty](ffdevicesetforcefeedbackproperty%28______%29.md): Retrieves the device’s force feedback capabilities.
- [FFEffectDownload](ffeffectdownload%28__%29.md): Places the effect on the device. If the effect is already on the device, the existing effect is updated to match the values set by the FFEffectSetParameters method.
- [FFEffectEscape](ffeffectescape%28____%29.md): Sends a hardware-specific command to the driver.
- [FFEffectGetEffectStatus](ffeffectgeteffectstatus%28____%29.md): Sends a hardware-specific command to the driver.
- [FFEffectGetParameters](ffeffectgetparameters%28______%29.md): Retrieves information about an effect.
- [FFEffectSetParameters](ffeffectsetparameters%28______%29.md): Sets the characteristics of an effect.
- [FFEffectStart](ffeffectstart%28______%29.md): Begins playing an effect. If the effect is already playing, it is restarted from the beginning. If the effect has not been downloaded or has been modified since its last download, it is downloaded before being started. This default behavior can be suppressed by passing the FFES_NODOWNLOAD flag.
- [FFEffectStop](ffeffectstop%28__%29.md): Stops playing an effect.
- [FFEffectUnload](ffeffectunload%28__%29.md): Removes the effect from the device. If the effect is playing, it is automatically stopped before it is unloaded.
- [FFIsForceFeedback](ffisforcefeedback%28__%29.md): Used to determine if a particular device provided by HID Manager is a force feedback device.
- [FFReleaseDevice](ffreleasedevice%28__%29.md): Disposes of an API device object created with FFCreateDevice.

### Data Types

- [FFCAPABILITIES](ffcapabilities.md): Used by the FFDeviceGetForceFeedbackCapabilities method to retrieve device force-feedback capabilities.
- [FFCONDITION](ffcondition.md): A structure containing type-specific information for certain effects.
- [FFCONSTANTFORCE](ffconstantforce.md): Contains type-specific information for the CONSTANTFORCE effect.
- [FFCUSTOMFORCE](ffcustomforce.md): Contains type-specific information for the CUSTOMFORCE effect.
- [FFEFFECT](ffeffect.md): UsUsed by the FFDeviceCreateEffect method to initialize a new effect object. It is also used by the FFEffectSetParameters and FFEffectGetParameters functions.
- [FFEFFESCAPE](ffeffescape.md): The FFEFFESCAPE structure passes hardware-specific data directly to the Force Feedback plugIn.
- [FFENVELOPE](ffenvelope.md): Used by the FFEFFECT structure to specify the optional envelope parameters for an effect.
- [FFPERIODIC](ffperiodic.md): A structure containing type-specific information for certain effects.
- [FFRAMPFORCE](fframpforce.md): Contains type-specific information for the RAMPFORCE effect.

## See Also

### Reference

- [ForceFeedbackConstants.h](forcefeedbackconstants-h.md): Constants used in the public interfaces to the Force Feedback implementation in macOS.
- [IOForceFeedbackLib.h](ioforcefeedbacklib-h.md): Public Interfaces and constants used to develop Force Feedback plugIns.
- [ForceFeedback Structures](forcefeedback-structures.md)
- [ForceFeedback Enumerations](forcefeedback-enumerations.md)
- [ForceFeedback Constants](forcefeedback-constants.md)
- [ForceFeedback Data Types](forcefeedback-data-types.md)
