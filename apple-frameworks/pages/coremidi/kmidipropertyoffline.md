> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertyoffline](https://developer.apple.com/documentation/coremidi/kmidipropertyoffline)

# kMIDIPropertyOffline (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

A Boolean value that indicates whether the object is offline.

## Declaration

```swift
let kMIDIPropertyOffline: CFString
```

<a id="Discussion"></a>

## Discussion

A value of 1 indicates the device is temporarily absent and offline, and 0 indicates the object is present.

## See Also

### Status

- [kMIDIPropertyPrivate](kmidipropertyprivate.md): A Boolean value that indicates whether the system hides an endpoint from other clients.

# kMIDIPropertyOffline (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.1+ · visionOS 1.0+

A Boolean value that indicates whether the object is offline.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyOffline;
```

<a id="Discussion"></a>

## Discussion

A value of 1 indicates the device is temporarily absent and offline, and 0 indicates the object is present.

## See Also

### Status

- [kMIDIPropertyPrivate](kmidipropertyprivate.md): A Boolean value that indicates whether the system hides an endpoint from other clients.
