> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midiobjectpropertychangenotification/propertyname

# propertyName (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The name of the modified property.

## Declaration

```swift
var propertyName: Unmanaged<CFString>
```

## See Also

### Inspecting the Notification

- [messageID](messageid.md): The message type.
- [messageSize](messagesize.md): The message size.
- [object](object.md): The object whose property changed.
- [objectType](objecttype.md): The object type.

# propertyName (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The name of the modified property.

## Declaration

```objectivec
CFStringRef propertyName;
```

## See Also

### Inspecting the Notification

- [messageID](messageid.md): The message type.
- [messageSize](messagesize.md): The message size.
- [object](object.md): The object whose property changed.
- [objectType](objecttype.md): The object type.
