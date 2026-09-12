> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffeffectgeteffectstatus(_:_:)](https://developer.apple.com/documentation/forcefeedback/ffeffectgeteffectstatus(_:_:))

# FFEffectGetEffectStatus(\_:\_:) (Swift)

**Framework:** Force Feedback  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Sends a hardware-specific command to the driver.

## Declaration

```swift
func FFEffectGetEffectStatus(_ effectReference: FFEffectObjectReference!, _ pFlags: UnsafeMutablePointer<FFEffectStatusFlag>!) -> HRESULT
```

## Parameters

- `effectReference`: An opaque reference handle to an effect object. This is obtained from a previous call to FFDeviceCreateEffect.
- `pFlags`: Pointer to status flags for the effect. The value can be 0 or one or more of the following constants:

  FFEGES_PLAYING

  The effect is playing.

  FFEGES_EMULATED

  The effect is emulated.

<a id="return-value"></a>

## Return Value

If the method succeeds, the return value is FF_OK. If the method fails, the return value can be one of the following error values:

<a id="discussion"></a>

## Discussion

FFERR_INVALIDPARAM

FFERR_NOTDOWNLOADED

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
- [FFEffectGetParameters(\_:\_:\_:)](ffeffectgetparameters%28______%29.md): Retrieves information about an effect.
- [FFEffectSetParameters(\_:\_:\_:)](ffeffectsetparameters%28______%29.md): Sets the characteristics of an effect.
- [FFEffectStart(\_:\_:\_:)](ffeffectstart%28______%29.md): Begins playing an effect. If the effect is already playing, it is restarted from the beginning. If the effect has not been downloaded or has been modified since its last download, it is downloaded before being started. This default behavior can be suppressed by passing the FFES_NODOWNLOAD flag.

# FFEffectGetEffectStatus (Objective-C)

**Framework:** Force Feedback  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Sends a hardware-specific command to the driver.

## Declaration

```objectivec
extern HRESULT FFEffectGetEffectStatus(FFEffectObjectReference effectReference, FFEffectStatusFlag *pFlags);
```

## Parameters

- `effectReference`: An opaque reference handle to an effect object. This is obtained from a previous call to FFDeviceCreateEffect.
- `pFlags`: Pointer to status flags for the effect. The value can be 0 or one or more of the following constants:

  FFEGES_PLAYING

  The effect is playing.

  FFEGES_EMULATED

  The effect is emulated.

<a id="return-value"></a>

## Return Value

If the method succeeds, the return value is FF_OK. If the method fails, the return value can be one of the following error values:

<a id="discussion"></a>

## Discussion

FFERR_INVALIDPARAM

FFERR_NOTDOWNLOADED

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
- [FFEffectGetParameters](ffeffectgetparameters%28______%29.md): Retrieves information about an effect.
- [FFEffectSetParameters](ffeffectsetparameters%28______%29.md): Sets the characteristics of an effect.
- [FFEffectStart](ffeffectstart%28______%29.md): Begins playing an effect. If the effect is already playing, it is restarted from the beginning. If the effect has not been downloaded or has been modified since its last download, it is downloaded before being started. This default behavior can be suppressed by passing the FFES_NODOWNLOAD flag.
