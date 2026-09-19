> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/kmidipropertydeviceid

# kMIDIPropertyDeviceID (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The user-visible System Exclusive (SysEx) identifier of a device or entity.

## Declaration

```swift
let kMIDIPropertyDeviceID: CFString
```

<a id="Discussion"></a>

## Discussion

MIDI drivers can set this property on their devices or entities. Studio setup editors can allow the user to set this property on external devices.

## See Also

### Identification

- [kMIDIPropertyName](kmidipropertyname.md): A name for a device, entity, or endpoint.
- [kMIDIPropertyModel](kmidipropertymodel.md): The model name of a device or endpoint.
- [kMIDIPropertyManufacturer](kmidipropertymanufacturer.md): The manufacturer name of a device or endpoint.
- [kMIDIPropertyUniqueID](kmidipropertyuniqueid.md): The unique identifier of a device, entity, or, endpoint.

# kMIDIPropertyDeviceID (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.0+ · visionOS 1.0+

The user-visible System Exclusive (SysEx) identifier of a device or entity.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyDeviceID;
```

<a id="Discussion"></a>

## Discussion

MIDI drivers can set this property on their devices or entities. Studio setup editors can allow the user to set this property on external devices.

## See Also

### Identification

- [kMIDIPropertyName](kmidipropertyname.md): A name for a device, entity, or endpoint.
- [kMIDIPropertyModel](kmidipropertymodel.md): The model name of a device or endpoint.
- [kMIDIPropertyManufacturer](kmidipropertymanufacturer.md): The manufacturer name of a device or endpoint.
- [kMIDIPropertyUniqueID](kmidipropertyuniqueid.md): The unique identifier of a device, entity, or, endpoint.
