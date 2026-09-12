> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffcapabilities/playbackcapacity](https://developer.apple.com/documentation/forcefeedback/ffcapabilities/playbackcapacity)

# playbackCapacity (Swift)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

The maximum number of created effects that can be simultaneously played via calls to FFEffectStart. This number will always be equal to or less than the storageCapacity. A device driver may allow more effects to be created than the physical device can actually handle. Therefore, this number is an important parameter for FF designers.

## Declaration

```swift
var playbackCapacity: UInt32
```

## See Also

### Instance Properties

- [driverVer](driverver.md): Specifies the version number of the force-feedback device driver, using a NumVersion structure.
- [emulatedEffects](emulatedeffects.md): FFCapabilitiesEffectType flags that identify all effect types not directly supported by the device, but emulated by the plugIn.
- [ffAxes](ffaxes.md): An array of values that describe the axes on which force-feedback is present.
- [ffSpecVer](ffspecver.md): Specifies the version number of the FF API specification supported by this plugIn. It should be specified using the fields of the NumVersion structure. The first version of the FF API specification is 1.0.0f0.
- [firmwareVer](firmwarever.md): Specifies the firmware revision of the device, using a NumVersion structure.
- [hardwareVer](hardwarever.md): Specifies the hardware revision of the device, using a NumVersion structure.
- [numFfAxes](numffaxes.md): The number of controller axes that provide force feedback. Indicates the number of valid elements in ffAxes.
- [storageCapacity](storagecapacity.md): The maximum number of effects that can be created via calls to FFDeviceCreateEffect and coexist at any one time. This may or may not be different from the playbackCapacity, depending on device driver complexity.
- [subType](subtype.md): The force-feedback subcategory which best identifies the device’s FF capabilities.
- [supportedEffects](supportedeffects.md): FFCapabilitiesEffectType flags that identify all effect types supported by the plugIn/device (including driver-emulated effects).

# playbackCapacity (Objective-C)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

The maximum number of created effects that can be simultaneously played via calls to FFEffectStart. This number will always be equal to or less than the storageCapacity. A device driver may allow more effects to be created than the physical device can actually handle. Therefore, this number is an important parameter for FF designers.

## Declaration

```objectivec
UInt32 playbackCapacity;
```

## See Also

### Instance Properties

- [driverVer](driverver.md): Specifies the version number of the force-feedback device driver, using a NumVersion structure.
- [emulatedEffects](emulatedeffects.md): FFCapabilitiesEffectType flags that identify all effect types not directly supported by the device, but emulated by the plugIn.
- [ffAxes](ffaxes.md): An array of values that describe the axes on which force-feedback is present.
- [ffSpecVer](ffspecver.md): Specifies the version number of the FF API specification supported by this plugIn. It should be specified using the fields of the NumVersion structure. The first version of the FF API specification is 1.0.0f0.
- [firmwareVer](firmwarever.md): Specifies the firmware revision of the device, using a NumVersion structure.
- [hardwareVer](hardwarever.md): Specifies the hardware revision of the device, using a NumVersion structure.
- [numFfAxes](numffaxes.md): The number of controller axes that provide force feedback. Indicates the number of valid elements in ffAxes.
- [storageCapacity](storagecapacity.md): The maximum number of effects that can be created via calls to FFDeviceCreateEffect and coexist at any one time. This may or may not be different from the playbackCapacity, depending on device driver complexity.
- [subType](subtype.md): The force-feedback subcategory which best identifies the device’s FF capabilities.
- [supportedEffects](supportedeffects.md): FFCapabilitiesEffectType flags that identify all effect types supported by the plugIn/device (including driver-emulated effects).
