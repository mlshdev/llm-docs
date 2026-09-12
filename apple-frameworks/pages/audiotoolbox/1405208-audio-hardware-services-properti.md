> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1405208-audio-hardware-services-properti](https://developer.apple.com/documentation/audiotoolbox/1405208-audio-hardware-services-properti)

# Audio Hardware Services Properties (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Property identifiers that apply to HAL audio objects only when accessed via the Audio Hardware Services.

## Topics

### Constants

- [kAudioHardwareServiceProperty_ServiceRestarted](kaudiohardwareserviceproperty_servicerestarted.md): Used, with a HAL audio object property listener callback, as a flag that indicates a hardware service restart. The property’s `Float32` value has no meaning. When the hardware service restarts, any associated application state, such as cached data or property listener callbacks, must be re-established.
- [kAudioHardwareServiceDeviceProperty_VirtualMainBalance](kaudiohardwareservicedeviceproperty_virtualmainbalance.md)
- [kAudioHardwareServiceDeviceProperty_VirtualMainVolume](kaudiohardwareservicedeviceproperty_virtualmainvolume.md)

## See Also

### Managing System Sound Services Properties

- [AudioServicesGetPropertyInfo(\_:\_:\_:\_:\_:)](audioservicesgetpropertyinfo%28__________%29.md): Gets information about a System Sound Services property.
- [AudioServicesGetProperty(\_:\_:\_:\_:\_:)](audioservicesgetproperty%28__________%29.md): Gets a specified System Sound Services property value.
- [AudioServicesSetProperty(\_:\_:\_:\_:\_:)](audioservicessetproperty%28__________%29.md): Sets the value for a specified System Sound Services property.
- [AudioServicesPropertyID](audioservicespropertyid.md): The data type for a system sound property identifier.
- [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md): Property identifiers used when playing alerts with System Sound Services.

# Audio Hardware Services Properties (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Property identifiers that apply to HAL audio objects only when accessed via the Audio Hardware Services.

## Topics

### Constants

- [kAudioHardwareServiceProperty_ServiceRestarted](kaudiohardwareserviceproperty_servicerestarted.md): Used, with a HAL audio object property listener callback, as a flag that indicates a hardware service restart. The property’s `Float32` value has no meaning. When the hardware service restarts, any associated application state, such as cached data or property listener callbacks, must be re-established.
- [kAudioHardwareServiceDeviceProperty_VirtualMasterVolume](kaudiohardwareservicedeviceproperty_virtualmastervolume.md): Deprecated. A `Float32` value that represents the value of the volume control.
- [kAudioHardwareServiceDeviceProperty_VirtualMasterBalance](kaudiohardwareservicedeviceproperty_virtualmasterbalance.md): Deprecated. A `Float32` value that represents the value of a hardware device’s stereo balance control.
- [kAudioHardwareServiceDeviceProperty_VirtualMainBalance](kaudiohardwareservicedeviceproperty_virtualmainbalance.md)
- [kAudioHardwareServiceDeviceProperty_VirtualMainVolume](kaudiohardwareservicedeviceproperty_virtualmainvolume.md)

## See Also

### Managing System Sound Services Properties

- [AudioServicesGetPropertyInfo](audioservicesgetpropertyinfo%28__________%29.md): Gets information about a System Sound Services property.
- [AudioServicesGetProperty](audioservicesgetproperty%28__________%29.md): Gets a specified System Sound Services property value.
- [AudioServicesSetProperty](audioservicessetproperty%28__________%29.md): Sets the value for a specified System Sound Services property.
- [AudioServicesPropertyID](audioservicespropertyid.md): The data type for a system sound property identifier.
- [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md): Property identifiers used when playing alerts with System Sound Services.
