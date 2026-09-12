> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/mididevicenewentity(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/coremidi/mididevicenewentity(_:_:_:_:_:_:_:))

# MIDIDeviceNewEntity(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Adds a new entity to a device.

## Declaration

```swift
func MIDIDeviceNewEntity(_ device: MIDIDeviceRef, _ name: CFString, _ protocol: MIDIProtocolID, _ embedded: Bool, _ numSourceEndpoints: Int, _ numDestinationEndpoints: Int, _ newEntity: UnsafeMutablePointer<MIDIEntityRef>) -> OSStatus
```

## Parameters

- `device`: The device that owns the new entity.
- `name`: The name of the new entity.
- `protocol`: The MIDI protocol variant used by the sources and destinations that make up this entity.
- `embedded`: A Boolean value that indicates whether this entity is inside the device. If you specify [false](https://developer.apple.com/documentation/swift/false), the entity consists only of external connectors to which you can attach other devices.
- `numSourceEndpoints`: The entity’s number of source endpoints.
- `numDestinationEndpoints`: The entity’s number of destination endpoints.
- `newEntity`: On successful return, points to the newly created entity.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Beginning with macOS 11 and iOS 14, non-drivers may call this function to add entities to external devices.

## See Also

### Managing Entities

- [MIDIDeviceRemoveEntity(\_:\_:)](midideviceremoveentity%28____%29.md): Removes an entity from a device.
- [MIDIEntityAddOrRemoveEndpoints(\_:\_:\_:)](midientityaddorremoveendpoints%28______%29.md): Adds or removes an entity’s endpoints.

# MIDIDeviceNewEntity (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Adds a new entity to a device.

## Declaration

```objectivec
extern OSStatus MIDIDeviceNewEntity(MIDIDeviceRef device, CFStringRef name, MIDIProtocolID protocol, Boolean embedded, ItemCount numSourceEndpoints, ItemCount numDestinationEndpoints, MIDIEntityRef *newEntity);
```

## Parameters

- `device`: The device that owns the new entity.
- `name`: The name of the new entity.
- `protocol`: The MIDI protocol variant used by the sources and destinations that make up this entity.
- `embedded`: A Boolean value that indicates whether this entity is inside the device. If you specify [false](https://developer.apple.com/documentation/swift/false), the entity consists only of external connectors to which you can attach other devices.
- `numSourceEndpoints`: The entity’s number of source endpoints.
- `numDestinationEndpoints`: The entity’s number of destination endpoints.
- `newEntity`: On successful return, points to the newly created entity.

<a id="return-value"></a>

## Return Value

An `OSStatus` result code.

<a id="Discussion"></a>

## Discussion

Beginning with macOS 11 and iOS 14, non-drivers may call this function to add entities to external devices.

## See Also

### Managing Entities

- [MIDIDeviceRemoveEntity](midideviceremoveentity%28____%29.md): Removes an entity from a device.
- [MIDIEntityAddOrRemoveEndpoints](midientityaddorremoveendpoints%28______%29.md): Adds or removes an entity’s endpoints.
