> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertyname](https://developer.apple.com/documentation/coremidi/kmidipropertyname)

# kMIDIPropertyName (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

A name for a device, entity, or endpoint.

## Declaration

```swift
let kMIDIPropertyName: CFString
```

<a id="Discussion"></a>

## Discussion

Devices, entities, and endpoints may all have names. The standard way to display an endpoint’s name is to ask it for its name and display it only if unique. If not, prepend the device name.

A studio setup editor may allow the user to set the names of both driver-owned and external devices.

## See Also

### Identification

- [kMIDIPropertyModel](kmidipropertymodel.md): The model name of a device or endpoint.
- [kMIDIPropertyManufacturer](kmidipropertymanufacturer.md): The manufacturer name of a device or endpoint.
- [kMIDIPropertyUniqueID](kmidipropertyuniqueid.md): The unique identifier of a device, entity, or, endpoint.
- [kMIDIPropertyDeviceID](kmidipropertydeviceid.md): The user-visible System Exclusive (SysEx) identifier of a device or entity.

# kMIDIPropertyName (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

A name for a device, entity, or endpoint.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyName;
```

<a id="Discussion"></a>

## Discussion

Devices, entities, and endpoints may all have names. The standard way to display an endpoint’s name is to ask it for its name and display it only if unique. If not, prepend the device name.

A studio setup editor may allow the user to set the names of both driver-owned and external devices.

## See Also

### Identification

- [kMIDIPropertyModel](kmidipropertymodel.md): The model name of a device or endpoint.
- [kMIDIPropertyManufacturer](kmidipropertymanufacturer.md): The manufacturer name of a device or endpoint.
- [kMIDIPropertyUniqueID](kmidipropertyuniqueid.md): The unique identifier of a device, entity, or, endpoint.
- [kMIDIPropertyDeviceID](kmidipropertydeviceid.md): The user-visible System Exclusive (SysEx) identifier of a device or entity.
