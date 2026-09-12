> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midientitygetdevice(_:_:)](https://developer.apple.com/documentation/coremidi/midientitygetdevice(_:_:))

# MIDIEntityGetDevice(\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Returns an entity’s device.

## Declaration

```swift
func MIDIEntityGetDevice(_ inEntity: MIDIEntityRef, _ outDevice: UnsafeMutablePointer<MIDIDeviceRef>?) -> OSStatus
```

## Parameters

- `inEntity`: The entity to query.
- `outDevice`: On successful return, the entity’s owning device.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Entity lookup

- [MIDIEntityGetNumberOfSources(\_:)](midientitygetnumberofsources%28__%29.md): Returns the number of sources in an entity.
- [MIDIEntityGetSource(\_:\_:)](midientitygetsource%28____%29.md): Returns one of an entity’s sources.
- [MIDIEntityGetNumberOfDestinations(\_:)](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityGetDestination(\_:\_:)](midientitygetdestination%28____%29.md): Returns one of an entity’s destinations.
- [MIDIEntityRef](midientityref.md): An entity that a device owns and that contains endpoints.

# MIDIEntityGetDevice (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

Returns an entity’s device.

## Declaration

```objectivec
extern OSStatus MIDIEntityGetDevice(MIDIEntityRef inEntity, MIDIDeviceRef *outDevice);
```

## Parameters

- `inEntity`: The entity to query.
- `outDevice`: On successful return, the entity’s owning device.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

## See Also

### Entity lookup

- [MIDIEntityGetNumberOfSources](midientitygetnumberofsources%28__%29.md): Returns the number of sources in an entity.
- [MIDIEntityGetSource](midientitygetsource%28____%29.md): Returns one of an entity’s sources.
- [MIDIEntityGetNumberOfDestinations](midientitygetnumberofdestinations%28__%29.md): Returns the number of destinations in an entity.
- [MIDIEntityGetDestination](midientitygetdestination%28____%29.md): Returns one of an entity’s destinations.
- [MIDIEntityRef](midientityref.md): An entity that a device owns and that contains endpoints.
