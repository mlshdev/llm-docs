> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffdevicegetforcefeedbackstate(_:_:)](https://developer.apple.com/documentation/forcefeedback/ffdevicegetforcefeedbackstate(_:_:))

# FFDeviceGetForceFeedbackState(\_:\_:) (Swift)

**Framework:** Force Feedback  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Retrieves the state of the device’s force feedback system.

## Declaration

```swift
func FFDeviceGetForceFeedbackState(_ deviceReference: FFDeviceObjectReference!, _ pFFState: UnsafeMutablePointer<FFState>!) -> HRESULT
```

## Parameters

- `deviceReference`: An opaque reference handle to a device object. This is obtained from a previous call to FFCreateDevice.
- `pFFState`: Location for flags that describe the current state of the device’s force feedback system. The value is a combination of the following constants:

  FFGFFS_ACTUATORSOFF

  The device’s force feedback actuators are disabled.

  FFGFFS_ACTUATORSON

  The device’s force feedback actuators are enabled.

  FFGFFS_DEVICELOST

  The device suffered an unexpected failure and is in an indeterminate state. It must be reset either by unacquiring and reacquiring the device, or by sending a FFSFFC_RESET command.

  FFGFFS_EMPTY

  The device has no downloaded effects.

  FFGFFS_PAUSED

  Playback of all active effects has been paused.

  FFGFFS_POWEROFF

  The force feedback system is not currently available. If the device cannot report the power state, neither FFGFFS_POWERON nor FFGFFS_POWEROFF is returned.

  FFGFFS_POWERON

  Power to the force feedback system is currently available. If the device cannot report the power state, neither FFGFFS_POWERON nor FFGFFS_POWEROFF is returned.

  FFGFFS_SAFETYSWITCHOFF

  The safety switch is currently off; that is, the device cannot operate. If the device cannot report the state of the safety switch, neither FFGFFS_SAFETYSWITCHON nor FFGFFS_SAFETYSWITCHOFF is returned.

  FFGFFS_SAFETYSWITCHON

  The safety switch is currently on; that is, the device can operate. If the device cannot report the state of the safety switch, neither FFGFFS_SAFETYSWITCHON nor FFGFFS_SAFETYSWITCHOFF is returned.

  FFGFFS_STOPPED

  No effects are playing, and the device is not paused.

  FFGFFS_USERFFSWITCHOFF

  The user force feedback switch is currently off; that is, the device cannot operate. If the device cannot report the state of the user force feedback switch, neither FFGFFS_USERFFSWITCHON nor FFGFFS_USERFFSWITCHOFF is returned.

  FFGFFS_USERFFSWITCHON

  The user force feedback switch is currently on; that is, the device can operate. If the device cannot report the state of the user force feedback switch, neither FFGFFS_USERFFSWITCHON nor FFGFFS_USERFFSWITCHOFF is returned.

  Future versions can define additional flags. Applications should ignore any flags that are not currently defined.

<a id="return-value"></a>

## Return Value

If the method succeeds, the return value is FF_OK. If the method fails, the return value can be one of the following error values:

<a id="discussion"></a>

## Discussion

FFERR_INVALIDPARAM

## See Also

### Miscellaneous

- [FFCreateDevice(\_:\_:)](ffcreatedevice%28____%29.md): Creates a new API device object from an OS object in preparation to use the device for force feedback.
- [FFDeviceCreateEffect(\_:\_:\_:\_:)](ffdevicecreateeffect%28________%29.md): Creates and initializes an instance of an effect identified by the effect UUID on the device.
- [FFDeviceEscape(\_:\_:)](ffdeviceescape%28____%29.md): Sends a hardware-specific command to the device.
- [FFDeviceGetForceFeedbackCapabilities(\_:\_:)](ffdevicegetforcefeedbackcapabilities%28____%29.md): Retrieves the device’s force feedback capabilities.
- [FFDeviceGetForceFeedbackProperty(\_:\_:\_:\_:)](ffdevicegetforcefeedbackproperty%28________%29.md): Gets properties that define the device behavior.
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

# FFDeviceGetForceFeedbackState (Objective-C)

**Framework:** Force Feedback  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Retrieves the state of the device’s force feedback system.

## Declaration

```objectivec
extern HRESULT FFDeviceGetForceFeedbackState(FFDeviceObjectReference deviceReference, FFState *pFFState);
```

## Parameters

- `deviceReference`: An opaque reference handle to a device object. This is obtained from a previous call to FFCreateDevice.
- `pFFState`: Location for flags that describe the current state of the device’s force feedback system. The value is a combination of the following constants:

  FFGFFS_ACTUATORSOFF

  The device’s force feedback actuators are disabled.

  FFGFFS_ACTUATORSON

  The device’s force feedback actuators are enabled.

  FFGFFS_DEVICELOST

  The device suffered an unexpected failure and is in an indeterminate state. It must be reset either by unacquiring and reacquiring the device, or by sending a FFSFFC_RESET command.

  FFGFFS_EMPTY

  The device has no downloaded effects.

  FFGFFS_PAUSED

  Playback of all active effects has been paused.

  FFGFFS_POWEROFF

  The force feedback system is not currently available. If the device cannot report the power state, neither FFGFFS_POWERON nor FFGFFS_POWEROFF is returned.

  FFGFFS_POWERON

  Power to the force feedback system is currently available. If the device cannot report the power state, neither FFGFFS_POWERON nor FFGFFS_POWEROFF is returned.

  FFGFFS_SAFETYSWITCHOFF

  The safety switch is currently off; that is, the device cannot operate. If the device cannot report the state of the safety switch, neither FFGFFS_SAFETYSWITCHON nor FFGFFS_SAFETYSWITCHOFF is returned.

  FFGFFS_SAFETYSWITCHON

  The safety switch is currently on; that is, the device can operate. If the device cannot report the state of the safety switch, neither FFGFFS_SAFETYSWITCHON nor FFGFFS_SAFETYSWITCHOFF is returned.

  FFGFFS_STOPPED

  No effects are playing, and the device is not paused.

  FFGFFS_USERFFSWITCHOFF

  The user force feedback switch is currently off; that is, the device cannot operate. If the device cannot report the state of the user force feedback switch, neither FFGFFS_USERFFSWITCHON nor FFGFFS_USERFFSWITCHOFF is returned.

  FFGFFS_USERFFSWITCHON

  The user force feedback switch is currently on; that is, the device can operate. If the device cannot report the state of the user force feedback switch, neither FFGFFS_USERFFSWITCHON nor FFGFFS_USERFFSWITCHOFF is returned.

  Future versions can define additional flags. Applications should ignore any flags that are not currently defined.

<a id="return-value"></a>

## Return Value

If the method succeeds, the return value is FF_OK. If the method fails, the return value can be one of the following error values:

<a id="discussion"></a>

## Discussion

FFERR_INVALIDPARAM

## See Also

### Miscellaneous

- [FFCreateDevice](ffcreatedevice%28____%29.md): Creates a new API device object from an OS object in preparation to use the device for force feedback.
- [FFDeviceCreateEffect](ffdevicecreateeffect%28________%29.md): Creates and initializes an instance of an effect identified by the effect UUID on the device.
- [FFDeviceEscape](ffdeviceescape%28____%29.md): Sends a hardware-specific command to the device.
- [FFDeviceGetForceFeedbackCapabilities](ffdevicegetforcefeedbackcapabilities%28____%29.md): Retrieves the device’s force feedback capabilities.
- [FFDeviceGetForceFeedbackProperty](ffdevicegetforcefeedbackproperty%28________%29.md): Gets properties that define the device behavior.
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
