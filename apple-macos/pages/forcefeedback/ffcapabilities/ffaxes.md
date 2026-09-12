> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffcapabilities/ffaxes](https://developer.apple.com/documentation/forcefeedback/ffcapabilities/ffaxes)

# ffAxes (Swift)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

An array of values that describe the axes on which force-feedback is present.

## Declaration

```swift
var ffAxes: (UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8, UInt8)
```

<a id="Discussion"></a>

## Discussion

The number of valid elements in the array is specified in numFfAxes. Each element of the array can contain one of the following values:

FFJOFS_X:

The X-axis is force-feedback-actuated.

FFJOFS_Y:

The Y-axis is force-feedback-actuated.

FFJOFS_Z:

The Z-axis is force-feedback-actuated.

For devices of subType FFCAP_ST_VIBRATION, it is recommended that the numFfAxes = 1, and that ffAxes\[0\] = FFJOFS_X.

## See Also

### Instance Properties

- [driverVer](driverver.md): Specifies the version number of the force-feedback device driver, using a NumVersion structure.
- [emulatedEffects](emulatedeffects.md): FFCapabilitiesEffectType flags that identify all effect types not directly supported by the device, but emulated by the plugIn.
- [ffSpecVer](ffspecver.md): Specifies the version number of the FF API specification supported by this plugIn. It should be specified using the fields of the NumVersion structure. The first version of the FF API specification is 1.0.0f0.
- [firmwareVer](firmwarever.md): Specifies the firmware revision of the device, using a NumVersion structure.
- [hardwareVer](hardwarever.md): Specifies the hardware revision of the device, using a NumVersion structure.
- [numFfAxes](numffaxes.md): The number of controller axes that provide force feedback. Indicates the number of valid elements in ffAxes.
- [playbackCapacity](playbackcapacity.md): The maximum number of created effects that can be simultaneously played via calls to FFEffectStart. This number will always be equal to or less than the storageCapacity. A device driver may allow more effects to be created than the physical device can actually handle. Therefore, this number is an important parameter for FF designers.
- [storageCapacity](storagecapacity.md): The maximum number of effects that can be created via calls to FFDeviceCreateEffect and coexist at any one time. This may or may not be different from the playbackCapacity, depending on device driver complexity.
- [subType](subtype.md): The force-feedback subcategory which best identifies the device’s FF capabilities.
- [supportedEffects](supportedeffects.md): FFCapabilitiesEffectType flags that identify all effect types supported by the plugIn/device (including driver-emulated effects).

# ffAxes (Objective-C)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

An array of values that describe the axes on which force-feedback is present.

## Declaration

```objectivec
UInt8 ffAxes[32];
```

<a id="Discussion"></a>

## Discussion

The number of valid elements in the array is specified in numFfAxes. Each element of the array can contain one of the following values:

FFJOFS_X:

The X-axis is force-feedback-actuated.

FFJOFS_Y:

The Y-axis is force-feedback-actuated.

FFJOFS_Z:

The Z-axis is force-feedback-actuated.

For devices of subType FFCAP_ST_VIBRATION, it is recommended that the numFfAxes = 1, and that ffAxes\[0\] = FFJOFS_X.

## See Also

### Instance Properties

- [driverVer](driverver.md): Specifies the version number of the force-feedback device driver, using a NumVersion structure.
- [emulatedEffects](emulatedeffects.md): FFCapabilitiesEffectType flags that identify all effect types not directly supported by the device, but emulated by the plugIn.
- [ffSpecVer](ffspecver.md): Specifies the version number of the FF API specification supported by this plugIn. It should be specified using the fields of the NumVersion structure. The first version of the FF API specification is 1.0.0f0.
- [firmwareVer](firmwarever.md): Specifies the firmware revision of the device, using a NumVersion structure.
- [hardwareVer](hardwarever.md): Specifies the hardware revision of the device, using a NumVersion structure.
- [numFfAxes](numffaxes.md): The number of controller axes that provide force feedback. Indicates the number of valid elements in ffAxes.
- [playbackCapacity](playbackcapacity.md): The maximum number of created effects that can be simultaneously played via calls to FFEffectStart. This number will always be equal to or less than the storageCapacity. A device driver may allow more effects to be created than the physical device can actually handle. Therefore, this number is an important parameter for FF designers.
- [storageCapacity](storagecapacity.md): The maximum number of effects that can be created via calls to FFDeviceCreateEffect and coexist at any one time. This may or may not be different from the playbackCapacity, depending on device driver complexity.
- [subType](subtype.md): The force-feedback subcategory which best identifies the device’s FF capabilities.
- [supportedEffects](supportedeffects.md): FFCapabilitiesEffectType flags that identify all effect types supported by the plugIn/device (including driver-emulated effects).
