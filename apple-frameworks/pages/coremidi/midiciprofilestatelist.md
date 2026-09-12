> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiciprofilestatelist](https://developer.apple.com/documentation/coremidi/midiciprofilestatelist)

# MIDICIProfileStateList

**Interface language:** Objective-C

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of profile state objects that describes the profile configuration for all channels of a reachable MIDI-CI node.

## Declaration

```objectivec
typedef NSArray<MIDICIProfileState *> MIDICIProfileStateList;
```

## See Also

### Capability Inquiry

- [MIDICIDiscoveryManager](midicidiscoverymanager.md): Deprecated. A singleton object that performs systemwide MIDI-CI discovery.
- [MIDICISession](midicisession.md): Deprecated. An object that represents a MIDI-CI session.
- [MIDICIProfile](midiciprofile.md): A mapping of MIDI messages to specific sounds and synthesis behaviors, such as General MIDI, a drawbar organ, and so on.
- [MIDICIProfileState](midiciprofilestate.md): An object that provides the enabled and disabled profiles for a MIDI channel or port on a device.
- [MIDICIResponder](midiciresponder.md): Deprecated. An object that responds to MIDI-CI inquiries from an initiator on behalf of a MIDI client, and handles profile and property exchange operations.
