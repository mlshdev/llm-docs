> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiohardwareserviceproperty_servicerestarted](https://developer.apple.com/documentation/audiotoolbox/kaudiohardwareserviceproperty_servicerestarted)

# kAudioHardwareServiceProperty_ServiceRestarted (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** macOS

Used, with a HAL audio object property listener callback, as a flag that indicates a hardware service restart. The property’s `Float32` value has no meaning. When the hardware service restarts, any associated application state, such as cached data or property listener callbacks, must be re-established.

## Declaration

```swift
var kAudioHardwareServiceProperty_ServiceRestarted: AudioObjectPropertySelector { get }
```

## See Also

### Constants

- [kAudioHardwareServiceDeviceProperty_VirtualMainBalance](kaudiohardwareservicedeviceproperty_virtualmainbalance.md)
- [kAudioHardwareServiceDeviceProperty_VirtualMainVolume](kaudiohardwareservicedeviceproperty_virtualmainvolume.md)

# kAudioHardwareServiceProperty_ServiceRestarted (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** macOS

Used, with a HAL audio object property listener callback, as a flag that indicates a hardware service restart. The property’s `Float32` value has no meaning. When the hardware service restarts, any associated application state, such as cached data or property listener callbacks, must be re-established.

## Declaration

```objectivec
kAudioHardwareServiceProperty_ServiceRestarted
```

## See Also

### Constants

- [kAudioHardwareServiceDeviceProperty_VirtualMasterVolume](kaudiohardwareservicedeviceproperty_virtualmastervolume.md): Deprecated. A `Float32` value that represents the value of the volume control.
- [kAudioHardwareServiceDeviceProperty_VirtualMasterBalance](kaudiohardwareservicedeviceproperty_virtualmasterbalance.md): Deprecated. A `Float32` value that represents the value of a hardware device’s stereo balance control.
- [kAudioHardwareServiceDeviceProperty_VirtualMainBalance](kaudiohardwareservicedeviceproperty_virtualmainbalance.md)
- [kAudioHardwareServiceDeviceProperty_VirtualMainVolume](kaudiohardwareservicedeviceproperty_virtualmainvolume.md)
