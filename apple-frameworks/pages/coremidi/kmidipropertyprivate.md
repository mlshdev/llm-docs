> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/kmidipropertyprivate](https://developer.apple.com/documentation/coremidi/kmidipropertyprivate)

# kMIDIPropertyPrivate (Swift)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

A Boolean value that indicates whether the system hides an endpoint from other clients.

## Declaration

```swift
let kMIDIPropertyPrivate: CFString
```

<a id="Discussion"></a>

## Discussion

You can set this property on a device or entity, but it still appears in the API; the system only hides the object’s owned endpoints.

## See Also

### Status

- [kMIDIPropertyOffline](kmidipropertyoffline.md): A Boolean value that indicates whether the object is offline.

# kMIDIPropertyPrivate (Objective-C)

**Framework:** Core MIDI  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.2+ · visionOS 1.0+

A Boolean value that indicates whether the system hides an endpoint from other clients.

## Declaration

```objectivec
extern CFStringRef const kMIDIPropertyPrivate;
```

<a id="Discussion"></a>

## Discussion

You can set this property on a device or entity, but it still appears in the API; the system only hides the object’s owned endpoints.

## See Also

### Status

- [kMIDIPropertyOffline](kmidipropertyoffline.md): A Boolean value that indicates whether the object is offline.
