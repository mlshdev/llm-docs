> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/kmidipropertydisplayname

# kMIDIPropertyDisplayName (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The user-visible name for an endpoint that combines the device and endpoint names.

## Declaration

```swift
let kMIDIPropertyDisplayName: CFString
```

<a id="Discussion"></a>

## Discussion

For objects other than endpoints, the display name is the same as its [kMIDIPropertyName](kmidipropertyname.md) value.

## See Also

### Presentation

- [kMIDIPropertyImage](kmidipropertyimage.md): The full path to a device icon on the system.

# kMIDIPropertyDisplayName (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The user-visible name for an endpoint that combines the device and endpoint names.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyDisplayName;
```

<a id="Discussion"></a>

## Discussion

For objects other than endpoints, the display name is the same as its [kMIDIPropertyName](kmidipropertyname.md) value.

## See Also

### Presentation

- [kMIDIPropertyImage](kmidipropertyimage.md): The full path to a device icon on the system.
