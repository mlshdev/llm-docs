> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertymodel](https://developer.apple.com/documentation/coremidi/kmidipropertymodel)

# kMIDIPropertyModel (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The model name of a device or endpoint.

## Declaration

```swift
let kMIDIPropertyModel: CFString
```

<a id="Discussion"></a>

## Discussion

Use this property in the following scenarios:

- MIDI drivers should set this property on their devices.
- Studio setup editors may allow the user to set this property on external devices.
- Creators of virtual endpoints may set this property on their endpoints.

## See Also

### Identification

- [kMIDIPropertyName](kmidipropertyname.md): A name for a device, entity, or endpoint.
- [kMIDIPropertyManufacturer](kmidipropertymanufacturer.md): The manufacturer name of a device or endpoint.
- [kMIDIPropertyUniqueID](kmidipropertyuniqueid.md): The unique identifier of a device, entity, or, endpoint.
- [kMIDIPropertyDeviceID](kmidipropertydeviceid.md): The user-visible System Exclusive (SysEx) identifier of a device or entity.

# kMIDIPropertyModel (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The model name of a device or endpoint.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyModel;
```

<a id="Discussion"></a>

## Discussion

Use this property in the following scenarios:

- MIDI drivers should set this property on their devices.
- Studio setup editors may allow the user to set this property on external devices.
- Creators of virtual endpoints may set this property on their endpoints.

## See Also

### Identification

- [kMIDIPropertyName](kmidipropertyname.md): A name for a device, entity, or endpoint.
- [kMIDIPropertyManufacturer](kmidipropertymanufacturer.md): The manufacturer name of a device or endpoint.
- [kMIDIPropertyUniqueID](kmidipropertyuniqueid.md): The unique identifier of a device, entity, or, endpoint.
- [kMIDIPropertyDeviceID](kmidipropertydeviceid.md): The user-visible System Exclusive (SysEx) identifier of a device or entity.
