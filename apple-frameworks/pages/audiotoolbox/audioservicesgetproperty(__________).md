> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioservicesgetproperty(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioservicesgetproperty(_:_:_:_:_:))

# AudioServicesGetProperty(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets a specified System Sound Services property value.

## Declaration

```swift
func AudioServicesGetProperty(_ inPropertyID: AudioServicesPropertyID, _ inSpecifierSize: UInt32, _ inSpecifier: UnsafeRawPointer?, _ ioPropertyDataSize: UnsafeMutablePointer<UInt32>, _ outPropertyData: UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `inPropertyID`: The property whose value you want.
- `inSpecifierSize`: The size of the buffer pointed to by the `inSpecifier` parameter. Pass `0` if no specifier buffer is required.
- `inSpecifier`: A pointer to a specifier buffer, if such a buffer is required by the property about which you want information. Pass `NULL` if no specifier is required.
- `ioPropertyDataSize`: On input, the size, in bytes, of the buffer pointed to by the `outPropertyData` parameter. Call the [AudioServicesGetPropertyInfo(\_:\_:\_:\_:\_:)](audioservicesgetpropertyinfo%28__________%29.md) function to find out the size required for this buffer. On output, the number of bytes written to the buffer.
- `outPropertyData`: On output, the property value.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

System Sound Services properties are listed and described in [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md).

<a id="Special-Considerations"></a>

### Special Considerations

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Managing System Sound Services Properties

- [AudioServicesGetPropertyInfo(\_:\_:\_:\_:\_:)](audioservicesgetpropertyinfo%28__________%29.md): Gets information about a System Sound Services property.
- [AudioServicesSetProperty(\_:\_:\_:\_:\_:)](audioservicessetproperty%28__________%29.md): Sets the value for a specified System Sound Services property.
- [AudioServicesPropertyID](audioservicespropertyid.md): The data type for a system sound property identifier.
- [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md): Property identifiers used when playing alerts with System Sound Services.
- [Audio Hardware Services Properties](1405208-audio-hardware-services-properti.md): Property identifiers that apply to HAL audio objects only when accessed via the Audio Hardware Services.

# AudioServicesGetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Gets a specified System Sound Services property value.

## Declaration

```objectivec
extern OSStatus AudioServicesGetProperty(AudioServicesPropertyID inPropertyID, UInt32 inSpecifierSize, const void *inSpecifier, UInt32 *ioPropertyDataSize, void *outPropertyData);
```

## Parameters

- `inPropertyID`: The property whose value you want.
- `inSpecifierSize`: The size of the buffer pointed to by the `inSpecifier` parameter. Pass `0` if no specifier buffer is required.
- `inSpecifier`: A pointer to a specifier buffer, if such a buffer is required by the property about which you want information. Pass `NULL` if no specifier is required.
- `ioPropertyDataSize`: On input, the size, in bytes, of the buffer pointed to by the `outPropertyData` parameter. Call the [AudioServicesGetPropertyInfo](audioservicesgetpropertyinfo%28__________%29.md) function to find out the size required for this buffer. On output, the number of bytes written to the buffer.
- `outPropertyData`: On output, the property value.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

System Sound Services properties are listed and described in [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md).

<a id="Special-Considerations"></a>

### Special Considerations

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Managing System Sound Services Properties

- [AudioServicesGetPropertyInfo](audioservicesgetpropertyinfo%28__________%29.md): Gets information about a System Sound Services property.
- [AudioServicesSetProperty](audioservicessetproperty%28__________%29.md): Sets the value for a specified System Sound Services property.
- [AudioServicesPropertyID](audioservicespropertyid.md): The data type for a system sound property identifier.
- [System Sound Services Property Identifiers](1405268-system-sound-services-property-i.md): Property identifiers used when playing alerts with System Sound Services.
- [Audio Hardware Services Properties](1405208-audio-hardware-services-properti.md): Property identifiers that apply to HAL audio objects only when accessed via the Audio Hardware Services.
