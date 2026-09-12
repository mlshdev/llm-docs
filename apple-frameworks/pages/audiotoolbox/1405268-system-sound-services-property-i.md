> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1405268-system-sound-services-property-i](https://developer.apple.com/documentation/audiotoolbox/1405268-system-sound-services-property-i)

# System Sound Services Property Identifiers (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Property identifiers used when playing alerts with System Sound Services.

## Topics

### Constants

- [kAudioServicesPropertyIsUISound](kaudioservicespropertyisuisound.md): A `UInt32` value, where `1` means that, for the audio file specified by a system sound passed in the `inSpecifier` parameter, the System Sound server respects the user setting in the Sound Effects preference and is silent when the user turns off sound effects.
- [kAudioServicesPropertyCompletePlaybackIfAppDies](kaudioservicespropertycompleteplaybackifappdies.md): A `UInt32` value, where `1` means that the audio file specified by a system sound passed in the `inSpecifier` parameter should finish playing even if the client application terminates. This could happen, for example, if the user quits or the application terminates unexpectedly while the sound is playing. The default is `0`. That is, you must explicitly set this property’s value to `1` if you want the sound to complete playing even if the application terminates.

## See Also

### Managing System Sound Services Properties

- [AudioServicesGetPropertyInfo(\_:\_:\_:\_:\_:)](audioservicesgetpropertyinfo%28__________%29.md): Gets information about a System Sound Services property.
- [AudioServicesGetProperty(\_:\_:\_:\_:\_:)](audioservicesgetproperty%28__________%29.md): Gets a specified System Sound Services property value.
- [AudioServicesSetProperty(\_:\_:\_:\_:\_:)](audioservicessetproperty%28__________%29.md): Sets the value for a specified System Sound Services property.
- [AudioServicesPropertyID](audioservicespropertyid.md): The data type for a system sound property identifier.
- [Audio Hardware Services Properties](1405208-audio-hardware-services-properti.md): Property identifiers that apply to HAL audio objects only when accessed via the Audio Hardware Services.

# System Sound Services Property Identifiers (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Property identifiers used when playing alerts with System Sound Services.

## Topics

### Constants

- [kAudioServicesPropertyIsUISound](kaudioservicespropertyisuisound.md): A `UInt32` value, where `1` means that, for the audio file specified by a system sound passed in the `inSpecifier` parameter, the System Sound server respects the user setting in the Sound Effects preference and is silent when the user turns off sound effects.
- [kAudioServicesPropertyCompletePlaybackIfAppDies](kaudioservicespropertycompleteplaybackifappdies.md): A `UInt32` value, where `1` means that the audio file specified by a system sound passed in the `inSpecifier` parameter should finish playing even if the client application terminates. This could happen, for example, if the user quits or the application terminates unexpectedly while the sound is playing. The default is `0`. That is, you must explicitly set this property’s value to `1` if you want the sound to complete playing even if the application terminates.

## See Also

### Managing System Sound Services Properties

- [AudioServicesGetPropertyInfo](audioservicesgetpropertyinfo%28__________%29.md): Gets information about a System Sound Services property.
- [AudioServicesGetProperty](audioservicesgetproperty%28__________%29.md): Gets a specified System Sound Services property value.
- [AudioServicesSetProperty](audioservicessetproperty%28__________%29.md): Sets the value for a specified System Sound Services property.
- [AudioServicesPropertyID](audioservicespropertyid.md): The data type for a system sound property identifier.
- [Audio Hardware Services Properties](1405208-audio-hardware-services-properti.md): Property identifiers that apply to HAL audio objects only when accessed via the Audio Hardware Services.
