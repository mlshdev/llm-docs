> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiohardwareservicedeviceproperty_virtualmasterbalance](https://developer.apple.com/documentation/audiotoolbox/kaudiohardwareservicedeviceproperty_virtualmasterbalance)

# kAudioHardwareServiceDeviceProperty_VirtualMasterBalance

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+ (deprecated in 10.5)

A `Float32` value that represents the value of a hardware device’s stereo balance control.

## Declaration

```objectivec
kAudioHardwareServiceDeviceProperty_VirtualMasterBalance
```

<a id="Discussion"></a>

## Discussion

The range for this property’s value is `0.0` (full left) through `1.0` (full right). A value of `0.5` means that both channels of the default stereo pair have equal power. This control is available only for hardware devices that have individual channel volume controls.

## See Also

### Constants

- [kAudioHardwareServiceProperty_ServiceRestarted](kaudiohardwareserviceproperty_servicerestarted.md): Used, with a HAL audio object property listener callback, as a flag that indicates a hardware service restart. The property’s `Float32` value has no meaning. When the hardware service restarts, any associated application state, such as cached data or property listener callbacks, must be re-established.
- [kAudioHardwareServiceDeviceProperty_VirtualMasterVolume](kaudiohardwareservicedeviceproperty_virtualmastervolume.md): Deprecated. A `Float32` value that represents the value of the volume control.
- [kAudioHardwareServiceDeviceProperty_VirtualMainBalance](kaudiohardwareservicedeviceproperty_virtualmainbalance.md)
- [kAudioHardwareServiceDeviceProperty_VirtualMainVolume](kaudiohardwareservicedeviceproperty_virtualmainvolume.md)
