> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffeffectgetparameters(_:_:_:)](https://developer.apple.com/documentation/forcefeedback/ffeffectgetparameters(_:_:_:))

# FFEffectGetParameters(\_:\_:\_:) (Swift)

**Framework:** Force Feedback  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Retrieves information about an effect.

## Declaration

```swift
func FFEffectGetParameters(_ effectReference: FFEffectObjectReference!, _ pFFEffect: UnsafeMutablePointer<FFEFFECT>!, _ flags: FFEffectParameterFlag) -> HRESULT
```

## Parameters

- `effectReference`: An opaque reference handle to an effect object. This is obtained from a previous call to FFDeviceCreateEffect.
- `pFFEffect`: Address of a FFEFFECT structure that receives effect information. The dwSize member must be filled in by the application before calling this method.
- `flags`: Flags that specify which parts of the effect information are to be retrieved. The value can be 0 or one or more of the following constants:

  FFEP_ALLPARAMS

  The union of all other FFEP\_\* flags, indicating that all members of the FFEFFECT structure are being requested.

  FFEP_AXES

  The cAxes and rgdwAxes members should receive data. The cAxes member on entry contains the size (in DWORDs) of the buffer pointed to by the rgdwAxes member. If the buffer is too small, the method returns FFERR_MOREDATA and sets cAxes to the necessary size of the buffer.

  FFEP_DIRECTION

  The cAxes and rglDirection members should receive data. The cAxes member on entry contains the size (in DWORDs) of the buffer pointed to by the rglDirection member. If the buffer is too small, the GetParameters method returns FFERR_MOREDATA and sets cAxes to the necessary size of the buffer.

  The dwFlags member must include at least one of the coordinate system flags (FFEFF_CARTESIAN, FFEFF_POLAR, or FFEFF_SPHERICAL). The API returns the direction of the effect in one of the coordinate systems you specified, converting between coordinate systems as necessary. On exit, exactly one of the coordinate system flags is set in the dwFlags member, indicating which coordinate system the FF API used. In particular, passing all three coordinate system flags retrieves the coordinates in exactly the same format in which they were set.

  FFEP_DURATION

  The dwDuration member should receive data.

  FFEP_ENVELOPE

  The lpEnvelope member points to a FFENVELOPE structure that should receive data. If the effect does not have an envelope associated with it, the lpEnvelope member is set to NULL.

  FFEP_GAIN

  The dwGain member should receive data.

  FFEP_SAMPLEPERIOD

  The dwSamplePeriod member should receive data.

  FFEP_STARTDELAY

  The dwStartDelay member should receive data.

  FFEP_TRIGGERBUTTON

  The dwTriggerButton member should receive data.

  FFEP_TRIGGERREPEATINTERVAL

  The dwTriggerRepeatInterval member should receive data.

  FFEP_TYPESPECIFICPARAMS

  The lpvTypeSpecificParams member points to a buffer whose size is specified by the cbTypeSpecificParams member. On return, the buffer is filled in with the type-specific data associated with the effect, and the cbTypeSpecificParams member contains the number of bytes copied. If the buffer supplied by the application is too small to contain all the type-specific data, the method returns FFERR_MOREDATA, and the cbTypeSpecificParams member contains the required size of the buffer in bytes.

<a id="return-value"></a>

## Return Value

If the method succeeds, the return value is FF_OK. If the method fails, the return value can be one of the following error values:

<a id="discussion"></a>

## Discussion

FFERR_INVALIDPARAM

FFERR_NOTDOWNLOADED

FFERR_MOREDATA

<a id="Discussion"></a>

## Discussion

Common errors resulting in a FFERR_INVALIDPARAM error include not setting the dwSize member of the FFEFFECT structure, passing invalid flags, or not setting up the members in the FFEFFECT structure properly in preparation for receiving the effect information.

## See Also

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
- [FFEffectSetParameters(\_:\_:\_:)](ffeffectsetparameters%28______%29.md): Sets the characteristics of an effect.
- [FFEffectStart(\_:\_:\_:)](ffeffectstart%28______%29.md): Begins playing an effect. If the effect is already playing, it is restarted from the beginning. If the effect has not been downloaded or has been modified since its last download, it is downloaded before being started. This default behavior can be suppressed by passing the FFES_NODOWNLOAD flag.

# FFEffectGetParameters (Objective-C)

**Framework:** Force Feedback  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Retrieves information about an effect.

## Declaration

```objectivec
extern HRESULT FFEffectGetParameters(FFEffectObjectReference effectReference, FFEFFECT *pFFEffect, FFEffectParameterFlag flags);
```

## Parameters

- `effectReference`: An opaque reference handle to an effect object. This is obtained from a previous call to FFDeviceCreateEffect.
- `pFFEffect`: Address of a FFEFFECT structure that receives effect information. The dwSize member must be filled in by the application before calling this method.
- `flags`: Flags that specify which parts of the effect information are to be retrieved. The value can be 0 or one or more of the following constants:

  FFEP_ALLPARAMS

  The union of all other FFEP\_\* flags, indicating that all members of the FFEFFECT structure are being requested.

  FFEP_AXES

  The cAxes and rgdwAxes members should receive data. The cAxes member on entry contains the size (in DWORDs) of the buffer pointed to by the rgdwAxes member. If the buffer is too small, the method returns FFERR_MOREDATA and sets cAxes to the necessary size of the buffer.

  FFEP_DIRECTION

  The cAxes and rglDirection members should receive data. The cAxes member on entry contains the size (in DWORDs) of the buffer pointed to by the rglDirection member. If the buffer is too small, the GetParameters method returns FFERR_MOREDATA and sets cAxes to the necessary size of the buffer.

  The dwFlags member must include at least one of the coordinate system flags (FFEFF_CARTESIAN, FFEFF_POLAR, or FFEFF_SPHERICAL). The API returns the direction of the effect in one of the coordinate systems you specified, converting between coordinate systems as necessary. On exit, exactly one of the coordinate system flags is set in the dwFlags member, indicating which coordinate system the FF API used. In particular, passing all three coordinate system flags retrieves the coordinates in exactly the same format in which they were set.

  FFEP_DURATION

  The dwDuration member should receive data.

  FFEP_ENVELOPE

  The lpEnvelope member points to a FFENVELOPE structure that should receive data. If the effect does not have an envelope associated with it, the lpEnvelope member is set to NULL.

  FFEP_GAIN

  The dwGain member should receive data.

  FFEP_SAMPLEPERIOD

  The dwSamplePeriod member should receive data.

  FFEP_STARTDELAY

  The dwStartDelay member should receive data.

  FFEP_TRIGGERBUTTON

  The dwTriggerButton member should receive data.

  FFEP_TRIGGERREPEATINTERVAL

  The dwTriggerRepeatInterval member should receive data.

  FFEP_TYPESPECIFICPARAMS

  The lpvTypeSpecificParams member points to a buffer whose size is specified by the cbTypeSpecificParams member. On return, the buffer is filled in with the type-specific data associated with the effect, and the cbTypeSpecificParams member contains the number of bytes copied. If the buffer supplied by the application is too small to contain all the type-specific data, the method returns FFERR_MOREDATA, and the cbTypeSpecificParams member contains the required size of the buffer in bytes.

<a id="return-value"></a>

## Return Value

If the method succeeds, the return value is FF_OK. If the method fails, the return value can be one of the following error values:

<a id="discussion"></a>

## Discussion

FFERR_INVALIDPARAM

FFERR_NOTDOWNLOADED

FFERR_MOREDATA

<a id="Discussion"></a>

## Discussion

Common errors resulting in a FFERR_INVALIDPARAM error include not setting the dwSize member of the FFEFFECT structure, passing invalid flags, or not setting up the members in the FFEFFECT structure properly in preparation for receiving the effect information.

## See Also

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
- [FFEffectSetParameters](ffeffectsetparameters%28______%29.md): Sets the characteristics of an effect.
- [FFEffectStart](ffeffectstart%28______%29.md): Begins playing an effect. If the effect is already playing, it is restarted from the beginning. If the effect has not been downloaded or has been modified since its last download, it is downloaded before being started. This default behavior can be suppressed by passing the FFES_NODOWNLOAD flag.
