> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertyimage](https://developer.apple.com/documentation/coremidi/kmidipropertyimage)

# kMIDIPropertyImage (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

The full path to a device icon on the system.

## Declaration

```swift
let kMIDIPropertyImage: CFString
```

<a id="Discussion"></a>

## Discussion

You can provide an image stored in any standard graphic file format, such as JPEG, GIF, or PNG. The maximum size for this image is 128 by 128 pixels.

A studio setup editor should allow the user to choose icons for external devices.

## See Also

### Presentation

- [kMIDIPropertyDisplayName](kmidipropertydisplayname.md): The user-visible name for an endpoint that combines the device and endpoint names.

# kMIDIPropertyImage (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

The full path to a device icon on the system.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyImage;
```

<a id="Discussion"></a>

## Discussion

You can provide an image stored in any standard graphic file format, such as JPEG, GIF, or PNG. The maximum size for this image is 128 by 128 pixels.

A studio setup editor should allow the user to choose icons for external devices.

## See Also

### Presentation

- [kMIDIPropertyDisplayName](kmidipropertydisplayname.md): The user-visible name for an endpoint that combines the device and endpoint names.
