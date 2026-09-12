> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiohardwareservicedeviceproperty_virtualmainvolume](https://developer.apple.com/documentation/audiotoolbox/kaudiohardwareservicedeviceproperty_virtualmainvolume)

# kAudioHardwareServiceDeviceProperty_VirtualMainVolume (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** macOS

## Declaration

```swift
var kAudioHardwareServiceDeviceProperty_VirtualMainVolume: AudioObjectPropertySelector { get }
```

## See Also

### Constants

- [kAudioHardwareServiceProperty_ServiceRestarted](kaudiohardwareserviceproperty_servicerestarted.md): Used, with a HAL audio object property listener callback, as a flag that indicates a hardware service restart. The property’s `Float32` value has no meaning. When the hardware service restarts, any associated application state, such as cached data or property listener callbacks, must be re-established.
- [kAudioHardwareServiceDeviceProperty_VirtualMainBalance](kaudiohardwareservicedeviceproperty_virtualmainbalance.md)

# kAudioHardwareServiceDeviceProperty_VirtualMainVolume (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** macOS

## Declaration

```objectivec
kAudioHardwareServiceDeviceProperty_VirtualMainVolume
```

## See Also

### Constants

- [kAudioHardwareServiceProperty_ServiceRestarted](kaudiohardwareserviceproperty_servicerestarted.md): Used, with a HAL audio object property listener callback, as a flag that indicates a hardware service restart. The property’s `Float32` value has no meaning. When the hardware service restarts, any associated application state, such as cached data or property listener callbacks, must be re-established.
- [kAudioHardwareServiceDeviceProperty_VirtualMasterVolume](kaudiohardwareservicedeviceproperty_virtualmastervolume.md): Deprecated. A `Float32` value that represents the value of the volume control.
- [kAudioHardwareServiceDeviceProperty_VirtualMasterBalance](kaudiohardwareservicedeviceproperty_virtualmasterbalance.md): Deprecated. A `Float32` value that represents the value of a hardware device’s stereo balance control.
- [kAudioHardwareServiceDeviceProperty_VirtualMainBalance](kaudiohardwareservicedeviceproperty_virtualmainbalance.md)
