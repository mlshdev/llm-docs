> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertyuniqueid](https://developer.apple.com/documentation/coremidi/kmidipropertyuniqueid)

# kMIDIPropertyUniqueID (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The unique identifier of a device, entity, or, endpoint.

## Declaration

```swift
let kMIDIPropertyUniqueID: CFString
```

<a id="Discussion"></a>

## Discussion

The system assigns unique IDs to all objects. You may set this property on virtual endpoints; however, doing so may fail if the ID isn’t unique.

This property value is an integer.

## See Also

### Identification

- [kMIDIPropertyName](kmidipropertyname.md): A name for a device, entity, or endpoint.
- [kMIDIPropertyModel](kmidipropertymodel.md): The model name of a device or endpoint.
- [kMIDIPropertyManufacturer](kmidipropertymanufacturer.md): The manufacturer name of a device or endpoint.
- [kMIDIPropertyDeviceID](kmidipropertydeviceid.md): The user-visible System Exclusive (SysEx) identifier of a device or entity.

# kMIDIPropertyUniqueID (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The unique identifier of a device, entity, or, endpoint.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyUniqueID;
```

<a id="Discussion"></a>

## Discussion

The system assigns unique IDs to all objects. You may set this property on virtual endpoints; however, doing so may fail if the ID isn’t unique.

This property value is an integer.

## See Also

### Identification

- [kMIDIPropertyName](kmidipropertyname.md): A name for a device, entity, or endpoint.
- [kMIDIPropertyModel](kmidipropertymodel.md): The model name of a device or endpoint.
- [kMIDIPropertyManufacturer](kmidipropertymanufacturer.md): The manufacturer name of a device or endpoint.
- [kMIDIPropertyDeviceID](kmidipropertydeviceid.md): The user-visible System Exclusive (SysEx) identifier of a device or entity.
