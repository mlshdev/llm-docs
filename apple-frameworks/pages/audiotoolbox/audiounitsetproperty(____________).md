> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitsetproperty(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitsetproperty(_:_:_:_:_:_:))

# AudioUnitSetProperty(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of an audio unit property.

## Declaration

```swift
func AudioUnitSetProperty(_ inUnit: AudioUnit, _ inID: AudioUnitPropertyID, _ inScope: AudioUnitScope, _ inElement: AudioUnitElement, _ inData: UnsafeRawPointer?, _ inDataSize: UInt32) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit that you want to set a property value for.
- `inID`: The audio unit property identifier.
- `inScope`: The audio unit scope for the property.
- `inElement`: The audio unit element for the property.
- `inData`: The value that you want to apply to the property. May be `NULL` (see Discussion).

  Always pass property values by reference. For example, for a property value of type `CFStringRef`, pass it as `&myCFString`.
- `inDataSize`: The size of the data you are providing in the `inData` parameter.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

To clear an audio unit property value, set the `inData` parameter to  `NULL` and set the `inDataSize` parameter to `0`. Clearing properties works only for those properties that do not have a default value.

## See Also

### Configuring Audio Unit Properties

- [AudioUnitGetProperty(\_:\_:\_:\_:\_:\_:)](audiounitgetproperty%28____________%29.md): Gets the value of an audio unit property.
- [AudioUnitGetPropertyInfo(\_:\_:\_:\_:\_:\_:)](audiounitgetpropertyinfo%28____________%29.md): Gets information about an audio unit property.
- [AudioUnitAddPropertyListener(\_:\_:\_:\_:)](audiounitaddpropertylistener%28________%29.md): Registers a callback to receive audio unit property change notifications.
- [AudioUnitRemovePropertyListenerWithUserData(\_:\_:\_:\_:)](audiounitremovepropertylistenerwithuserdata%28________%29.md): Unregisters a previously-registered property listener callback function.

# AudioUnitSetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of an audio unit property.

## Declaration

```objectivec
extern OSStatus AudioUnitSetProperty(AudioUnit inUnit, AudioUnitPropertyID inID, AudioUnitScope inScope, AudioUnitElement inElement, const void *inData, UInt32 inDataSize);
```

## Parameters

- `inUnit`: The audio unit that you want to set a property value for.
- `inID`: The audio unit property identifier.
- `inScope`: The audio unit scope for the property.
- `inElement`: The audio unit element for the property.
- `inData`: The value that you want to apply to the property. May be `NULL` (see Discussion).

  Always pass property values by reference. For example, for a property value of type `CFStringRef`, pass it as `&myCFString`.
- `inDataSize`: The size of the data you are providing in the `inData` parameter.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

To clear an audio unit property value, set the `inData` parameter to  `NULL` and set the `inDataSize` parameter to `0`. Clearing properties works only for those properties that do not have a default value.

## See Also

### Configuring Audio Unit Properties

- [AudioUnitGetProperty](audiounitgetproperty%28____________%29.md): Gets the value of an audio unit property.
- [AudioUnitGetPropertyInfo](audiounitgetpropertyinfo%28____________%29.md): Gets information about an audio unit property.
- [AudioUnitAddPropertyListener](audiounitaddpropertylistener%28________%29.md): Registers a callback to receive audio unit property change notifications.
- [AudioUnitRemovePropertyListenerWithUserData](audiounitremovepropertylistenerwithuserdata%28________%29.md): Unregisters a previously-registered property listener callback function.
