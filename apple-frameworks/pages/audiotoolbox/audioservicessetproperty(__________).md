> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioservicessetproperty(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioservicessetproperty(_:_:_:_:_:))

# AudioServicesSetProperty(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the value for a specified System Sound Services property.

## Declaration

```swift
func AudioServicesSetProperty(_ inPropertyID: AudioServicesPropertyID, _ inSpecifierSize: UInt32, _ inSpecifier: UnsafeRawPointer?, _ inPropertyDataSize: UInt32, _ inPropertyData: UnsafeRawPointer) -> OSStatus
```

## Parameters

- `inPropertyID`: The property whose value you want to set.
- `inSpecifierSize`: The size of the buffer pointed to by the `inSpecifier` parameter. Pass `0` if no specifier buffer is required.
- `inSpecifier`: A pointer to a specifier buffer, if such a buffer is required by the property about which you want information. Pass `NULL` if no specifier is required.
- `inPropertyDataSize`: The size, in bytes, of the buffer pointed to by the `inPropertyData` parameter.
- `inPropertyData`: The property value you want to set.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

System Sound Services properties are listed and described in [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md).

## See Also

### Managing System Sound Services Properties

- [AudioServicesGetPropertyInfo(\_:\_:\_:\_:\_:)](audioservicesgetpropertyinfo%28__________%29.md): Gets information about a System Sound Services property.
- [AudioServicesGetProperty(\_:\_:\_:\_:\_:)](audioservicesgetproperty%28__________%29.md): Gets a specified System Sound Services property value.
- [AudioServicesPropertyID](audioservicespropertyid.md): The data type for a system sound property identifier.
- [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md): Property identifiers used when playing alerts with System Sound Services.
- [Audio Hardware Services Properties](1405208-audio-hardware-services-properti.md): Property identifiers that apply to HAL audio objects only when accessed via the Audio Hardware Services.

# AudioServicesSetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the value for a specified System Sound Services property.

## Declaration

```objectivec
extern OSStatus AudioServicesSetProperty(AudioServicesPropertyID inPropertyID, UInt32 inSpecifierSize, const void *inSpecifier, UInt32 inPropertyDataSize, const void *inPropertyData);
```

## Parameters

- `inPropertyID`: The property whose value you want to set.
- `inSpecifierSize`: The size of the buffer pointed to by the `inSpecifier` parameter. Pass `0` if no specifier buffer is required.
- `inSpecifier`: A pointer to a specifier buffer, if such a buffer is required by the property about which you want information. Pass `NULL` if no specifier is required.
- `inPropertyDataSize`: The size, in bytes, of the buffer pointed to by the `inPropertyData` parameter.
- `inPropertyData`: The property value you want to set.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

System Sound Services properties are listed and described in [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md).

## See Also

### Managing System Sound Services Properties

- [AudioServicesGetPropertyInfo](audioservicesgetpropertyinfo%28__________%29.md): Gets information about a System Sound Services property.
- [AudioServicesGetProperty](audioservicesgetproperty%28__________%29.md): Gets a specified System Sound Services property value.
- [AudioServicesPropertyID](audioservicespropertyid.md): The data type for a system sound property identifier.
- [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md): Property identifiers used when playing alerts with System Sound Services.
- [Audio Hardware Services Properties](1405208-audio-hardware-services-properti.md): Property identifiers that apply to HAL audio objects only when accessed via the Audio Hardware Services.
