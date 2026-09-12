> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiohardwareservicedeviceproperty_virtualmastervolume](https://developer.apple.com/documentation/audiotoolbox/kaudiohardwareservicedeviceproperty_virtualmastervolume)

# kAudioHardwareServiceDeviceProperty_VirtualMasterVolume

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+ (deprecated in 10.5)

A `Float32` value that represents the value of the volume control.

## Declaration

```objectivec
kAudioHardwareServiceDeviceProperty_VirtualMasterVolume
```

<a id="Discussion"></a>

## Discussion

The range for this property’s value is `0.0` (silence) through `1.0` (full level). The effect of this property depends on the hardware device associated with the HAL audio object. If the device has a primary volume control, this property controls it. If the device has individual channel volume controls, this property applies to those identified by the device’s preferred multichannel layout, or the preferred stereo pair if the device is stereo only. This control maintains relative balance between the channels it affects.

## See Also

### Constants

- [kAudioHardwareServiceProperty_ServiceRestarted](kaudiohardwareserviceproperty_servicerestarted.md): Used, with a HAL audio object property listener callback, as a flag that indicates a hardware service restart. The property’s `Float32` value has no meaning. When the hardware service restarts, any associated application state, such as cached data or property listener callbacks, must be re-established.
- [kAudioHardwareServiceDeviceProperty_VirtualMasterBalance](kaudiohardwareservicedeviceproperty_virtualmasterbalance.md): Deprecated. A `Float32` value that represents the value of a hardware device’s stereo balance control.
- [kAudioHardwareServiceDeviceProperty_VirtualMainBalance](kaudiohardwareservicedeviceproperty_virtualmainbalance.md)
- [kAudioHardwareServiceDeviceProperty_VirtualMainVolume](kaudiohardwareservicedeviceproperty_virtualmainvolume.md)
