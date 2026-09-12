> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiuniversalmessage](https://developer.apple.com/documentation/coremidi/midiuniversalmessage)

# MIDIUniversalMessage (Swift)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
struct MIDIUniversalMessage
```

## Topics

### Initializers

- [init()](midiuniversalmessage/init%28%29.md)

### Instance Properties

- [channelVoice1](midiuniversalmessage/channelvoice1-3muv1.md)
- [channelVoice2](midiuniversalmessage/channelvoice2-3muv2.md)
- [data128](midiuniversalmessage/data128-3jrad.md)
- [group](midiuniversalmessage/group.md)
- [reserved](midiuniversalmessage/reserved.md)
- [sysEx](midiuniversalmessage/sysex-2jr6w.md)
- [system](midiuniversalmessage/system-6vxkw.md)
- [type](midiuniversalmessage/type.md)
- [unknown](midiuniversalmessage/unknown-9rrub.md)
- [utility](midiuniversalmessage/utility-1trwz.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [MIDI2DeviceManufacturer](midi2devicemanufacturer.md)
- [MIDI2DeviceRevisionLevel](midi2devicerevisionlevel.md)
- [MIDICIProfileID](midiciprofileid.md)
- [MIDICIProfileIDManufacturerSpecific](midiciprofileidmanufacturerspecific.md)
- [MIDICIProfileIDStandard](midiciprofileidstandard.md)

# MIDIUniversalMessage (Objective-C)

**Framework:** Core MIDI  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct MIDIUniversalMessage { ... } MIDIUniversalMessage;
```

## Topics

### Instance Properties

- [channelVoice1](midiuniversalmessage/channelvoice1-20x9n.md): active when type is kMIDIMessageTypeChannelVoice1
- [channelVoice2](midiuniversalmessage/channelvoice2-20x9k.md): active when type is kMIDIMessageTypeChannelVoice2
- [data128](midiuniversalmessage/data128-43npl.md): active when type is kMIDIMessageTypeData128
- [group](midiuniversalmessage/group.md)
- [reserved](midiuniversalmessage/reserved.md)
- [sysEx](midiuniversalmessage/sysex-13198.md): active when type is kMIDIMessageTypeSysEx
- [system](midiuniversalmessage/system-8xb4e.md): active when type is kMIDIMessageTypeSystem
- [type](midiuniversalmessage/type.md)
- [unknown](midiuniversalmessage/unknown-2egcc.md): active when type is unkown
- [utility](midiuniversalmessage/utility-63fq7.md): active when type is kMIDIMessageTypeUtility

## See Also

### Structures

- [MIDI2DeviceManufacturer](midi2devicemanufacturer.md)
- [MIDI2DeviceRevisionLevel](midi2devicerevisionlevel.md)
- [MIDICIProfileID](midiciprofileid.md)
- [MIDICIProfileIDManufacturerSpecific](midiciprofileidmanufacturerspecific.md)
- [MIDICIProfileIDStandard](midiciprofileidstandard.md)
