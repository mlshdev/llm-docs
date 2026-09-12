> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffdevicesendforcefeedbackcommand(_:_:)](https://developer.apple.com/documentation/forcefeedback/ffdevicesendforcefeedbackcommand(_:_:))

# FFDeviceSendForceFeedbackCommand(\_:\_:) (Swift)

**Framework:** Force Feedback  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Sends a command to the device’s force feedback system.

## Declaration

```swift
func FFDeviceSendForceFeedbackCommand(_ deviceReference: FFDeviceObjectReference!, _ flags: FFCommandFlag) -> HRESULT
```

## Parameters

- `deviceReference`: An opaque reference handle to the device object that is be disposed of. This handle is obtained from a previous call to FFCreateDevice.
- `flags`: Single value indicating the desired change in state. The value can be one of the following:

  FFSFFC_CONTINUE

  Paused playback of all active effects is to be continued. It is an error to send this command when the device is not in a paused state.

  FFSFFC_PAUSE

  Playback of all active effects is to be paused. This command also stops the clock-on effects so that they continue playing to their full duration when restarted.

  While the device is paused, new effects cannot be started, and existing ones cannot be modified. Doing so can cause the subsequent FFSFFC_CONTINUE command to fail to perform properly.

  To abandon a pause and stop all effects, use the FFSFFC_STOPALL or FFSFCC_RESET commands.

  FFSFFC_RESET

  The device’s force feedback system is to be put in its startup state. All effects are removed from the device, are no longer valid, and must be recreated if they are to be used again. The device’s actuators are disabled.

  FFSFFC_SETACTUATORSOFF

  The device’s force feedback actuators are to be disabled. While the actuators are off, effects continue to play but are ignored by the device. Using the analogy of a sound playback device, they are muted, rather than paused.

  FFSFFC_SETACTUATORSON

  The device’s force feedback actuators are to be enabled.

  FFSFFC_STOPALL

  Playback of any active effects is to be stopped. All active effects are reset, but are still being maintained by the device and are still valid. If the device is in a paused state, that state is lost.

  This command is equivalent to calling the FFEffect_Stop method for each effect playing.

<a id="return-value"></a>

## Return Value

If the method succeeds, the return value is FF_OK. If the method fails, the return value can be one of the following error values:

<a id="discussion"></a>

## Discussion

FFERR_INVALIDPARAM

FFERR_INTERNAL

## See Also

### Miscellaneous

- [FFCreateDevice(\_:\_:)](ffcreatedevice%28____%29.md): Creates a new API device object from an OS object in preparation to use the device for force feedback.
- [FFDeviceCreateEffect(\_:\_:\_:\_:)](ffdevicecreateeffect%28________%29.md): Creates and initializes an instance of an effect identified by the effect UUID on the device.
- [FFDeviceEscape(\_:\_:)](ffdeviceescape%28____%29.md): Sends a hardware-specific command to the device.
- [FFDeviceGetForceFeedbackCapabilities(\_:\_:)](ffdevicegetforcefeedbackcapabilities%28____%29.md): Retrieves the device’s force feedback capabilities.
- [FFDeviceGetForceFeedbackProperty(\_:\_:\_:\_:)](ffdevicegetforcefeedbackproperty%28________%29.md): Gets properties that define the device behavior.
- [FFDeviceGetForceFeedbackState(\_:\_:)](ffdevicegetforcefeedbackstate%28____%29.md): Retrieves the state of the device’s force feedback system.
- [FFDeviceReleaseEffect(\_:\_:)](ffdevicereleaseeffect%28____%29.md): Disposes of an API effect object created with FFDeviceCreateEffect.
- [FFDeviceSetCooperativeLevel(\_:\_:\_:)](ffdevicesetcooperativelevel%28______%29.md): Function is unimplemented in version 1.0 of this API
- [FFDeviceSetForceFeedbackProperty(\_:\_:\_:)](ffdevicesetforcefeedbackproperty%28______%29.md): Retrieves the device’s force feedback capabilities.
- [FFEffectDownload(\_:)](ffeffectdownload%28__%29.md): Places the effect on the device. If the effect is already on the device, the existing effect is updated to match the values set by the FFEffectSetParameters method.
- [FFEffectEscape(\_:\_:)](ffeffectescape%28____%29.md): Sends a hardware-specific command to the driver.
- [FFEffectGetEffectStatus(\_:\_:)](ffeffectgeteffectstatus%28____%29.md): Sends a hardware-specific command to the driver.
- [FFEffectGetParameters(\_:\_:\_:)](ffeffectgetparameters%28______%29.md): Retrieves information about an effect.
- [FFEffectSetParameters(\_:\_:\_:)](ffeffectsetparameters%28______%29.md): Sets the characteristics of an effect.
- [FFEffectStart(\_:\_:\_:)](ffeffectstart%28______%29.md): Begins playing an effect. If the effect is already playing, it is restarted from the beginning. If the effect has not been downloaded or has been modified since its last download, it is downloaded before being started. This default behavior can be suppressed by passing the FFES_NODOWNLOAD flag.

# FFDeviceSendForceFeedbackCommand (Objective-C)

**Framework:** Force Feedback  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Sends a command to the device’s force feedback system.

## Declaration

```objectivec
extern HRESULT FFDeviceSendForceFeedbackCommand(FFDeviceObjectReference deviceReference, FFCommandFlag flags);
```

## Parameters

- `deviceReference`: An opaque reference handle to the device object that is be disposed of. This handle is obtained from a previous call to FFCreateDevice.
- `flags`: Single value indicating the desired change in state. The value can be one of the following:

  FFSFFC_CONTINUE

  Paused playback of all active effects is to be continued. It is an error to send this command when the device is not in a paused state.

  FFSFFC_PAUSE

  Playback of all active effects is to be paused. This command also stops the clock-on effects so that they continue playing to their full duration when restarted.

  While the device is paused, new effects cannot be started, and existing ones cannot be modified. Doing so can cause the subsequent FFSFFC_CONTINUE command to fail to perform properly.

  To abandon a pause and stop all effects, use the FFSFFC_STOPALL or FFSFCC_RESET commands.

  FFSFFC_RESET

  The device’s force feedback system is to be put in its startup state. All effects are removed from the device, are no longer valid, and must be recreated if they are to be used again. The device’s actuators are disabled.

  FFSFFC_SETACTUATORSOFF

  The device’s force feedback actuators are to be disabled. While the actuators are off, effects continue to play but are ignored by the device. Using the analogy of a sound playback device, they are muted, rather than paused.

  FFSFFC_SETACTUATORSON

  The device’s force feedback actuators are to be enabled.

  FFSFFC_STOPALL

  Playback of any active effects is to be stopped. All active effects are reset, but are still being maintained by the device and are still valid. If the device is in a paused state, that state is lost.

  This command is equivalent to calling the FFEffect_Stop method for each effect playing.

<a id="return-value"></a>

## Return Value

If the method succeeds, the return value is FF_OK. If the method fails, the return value can be one of the following error values:

<a id="discussion"></a>

## Discussion

FFERR_INVALIDPARAM

FFERR_INTERNAL

## See Also

### Miscellaneous

- [FFCreateDevice](ffcreatedevice%28____%29.md): Creates a new API device object from an OS object in preparation to use the device for force feedback.
- [FFDeviceCreateEffect](ffdevicecreateeffect%28________%29.md): Creates and initializes an instance of an effect identified by the effect UUID on the device.
- [FFDeviceEscape](ffdeviceescape%28____%29.md): Sends a hardware-specific command to the device.
- [FFDeviceGetForceFeedbackCapabilities](ffdevicegetforcefeedbackcapabilities%28____%29.md): Retrieves the device’s force feedback capabilities.
- [FFDeviceGetForceFeedbackProperty](ffdevicegetforcefeedbackproperty%28________%29.md): Gets properties that define the device behavior.
- [FFDeviceGetForceFeedbackState](ffdevicegetforcefeedbackstate%28____%29.md): Retrieves the state of the device’s force feedback system.
- [FFDeviceReleaseEffect](ffdevicereleaseeffect%28____%29.md): Disposes of an API effect object created with FFDeviceCreateEffect.
- [FFDeviceSetCooperativeLevel](ffdevicesetcooperativelevel%28______%29.md): Function is unimplemented in version 1.0 of this API
- [FFDeviceSetForceFeedbackProperty](ffdevicesetforcefeedbackproperty%28______%29.md): Retrieves the device’s force feedback capabilities.
- [FFEffectDownload](ffeffectdownload%28__%29.md): Places the effect on the device. If the effect is already on the device, the existing effect is updated to match the values set by the FFEffectSetParameters method.
- [FFEffectEscape](ffeffectescape%28____%29.md): Sends a hardware-specific command to the driver.
- [FFEffectGetEffectStatus](ffeffectgeteffectstatus%28____%29.md): Sends a hardware-specific command to the driver.
- [FFEffectGetParameters](ffeffectgetparameters%28______%29.md): Retrieves information about an effect.
- [FFEffectSetParameters](ffeffectsetparameters%28______%29.md): Sets the characteristics of an effect.
- [FFEffectStart](ffeffectstart%28______%29.md): Begins playing an effect. If the effect is already playing, it is restarted from the beginning. If the effect has not been downloaded or has been modified since its last download, it is downloaded before being started. This default behavior can be suppressed by passing the FFES_NODOWNLOAD flag.
