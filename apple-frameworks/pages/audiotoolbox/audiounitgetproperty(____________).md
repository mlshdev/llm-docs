> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitgetproperty(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitgetproperty(_:_:_:_:_:_:))

# AudioUnitGetProperty(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Gets the value of an audio unit property.

## Declaration

```swift
func AudioUnitGetProperty(_ inUnit: AudioUnit, _ inID: AudioUnitPropertyID, _ inScope: AudioUnitScope, _ inElement: AudioUnitElement, _ outData: UnsafeMutableRawPointer, _ ioDataSize: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## Parameters

- `inUnit`: The audio unit that you want to get a property value from.
- `inID`: The identifier for the property.
- `inScope`: The audio unit scope for the property.
- `inElement`: The audio unit element for the property.
- `outData`: On successful output, the current value for the specified audio unit property. Set this parameter to `NULL` when calling this function if you only want to determine how much memory to allocate for a variable size property.
- `ioDataSize`: On input, the expected size of the property value, as pointed to by the `outData` parameter. On output, the size of the data that was returned.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Configuring Audio Unit Properties

- [AudioUnitSetProperty(\_:\_:\_:\_:\_:\_:)](audiounitsetproperty%28____________%29.md): Sets the value of an audio unit property.
- [AudioUnitGetPropertyInfo(\_:\_:\_:\_:\_:\_:)](audiounitgetpropertyinfo%28____________%29.md): Gets information about an audio unit property.
- [AudioUnitAddPropertyListener(\_:\_:\_:\_:)](audiounitaddpropertylistener%28________%29.md): Registers a callback to receive audio unit property change notifications.
- [AudioUnitRemovePropertyListenerWithUserData(\_:\_:\_:\_:)](audiounitremovepropertylistenerwithuserdata%28________%29.md): Unregisters a previously-registered property listener callback function.

# AudioUnitGetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Gets the value of an audio unit property.

## Declaration

```objectivec
extern OSStatus AudioUnitGetProperty(AudioUnit inUnit, AudioUnitPropertyID inID, AudioUnitScope inScope, AudioUnitElement inElement, void *outData, UInt32 *ioDataSize);
```

## Parameters

- `inUnit`: The audio unit that you want to get a property value from.
- `inID`: The identifier for the property.
- `inScope`: The audio unit scope for the property.
- `inElement`: The audio unit element for the property.
- `outData`: On successful output, the current value for the specified audio unit property. Set this parameter to `NULL` when calling this function if you only want to determine how much memory to allocate for a variable size property.
- `ioDataSize`: On input, the expected size of the property value, as pointed to by the `outData` parameter. On output, the size of the data that was returned.

<a id="return-value"></a>

## Return Value

A result code.

## Mentioned In

- [Migrating Your Audio Unit Host to the AUv3 API](migrating-your-audio-unit-host-to-the-auv3-api.md)

<a id="Discussion"></a>

## Discussion

Some Core Audio property values are C types and others are Core Foundation objects.

If you call this function to retrieve a value that is a Core Foundation object, then this function—despite the use of “Get” in its name—duplicates the object. You are responsible for releasing the object, as described in [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029) in [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i).

## See Also

### Configuring Audio Unit Properties

- [AudioUnitSetProperty](audiounitsetproperty%28____________%29.md): Sets the value of an audio unit property.
- [AudioUnitGetPropertyInfo](audiounitgetpropertyinfo%28____________%29.md): Gets information about an audio unit property.
- [AudioUnitAddPropertyListener](audiounitaddpropertylistener%28________%29.md): Registers a callback to receive audio unit property change notifications.
- [AudioUnitRemovePropertyListenerWithUserData](audiounitremovepropertylistenerwithuserdata%28________%29.md): Unregisters a previously-registered property listener callback function.
