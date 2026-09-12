> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicidiscoverymanager](https://developer.apple.com/documentation/coremidi/midicidiscoverymanager)

# MIDICIDiscoveryManager (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A singleton object that performs systemwide MIDI-CI discovery.

> No longer supported for CoreMIDI

## Declaration

```swift
class MIDICIDiscoveryManager
```

<a id="overview"></a>

## Overview

Use this class to retrieve information about MIDI-CI–capable nodes in the MIDI subsystem. You can create [MIDICISession](midicisession.md) objects only from the destinations discovered using this API.

## Topics

### Accessing the Shared Instance

- [sharedInstance()](midicidiscoverymanager/sharedinstance%28%29.md): Deprecated. Returns the singleton discovery manager instance.

### Discovering Nodes

- [discover(handler:)](midicidiscoverymanager/discover%28handler_%29.md): Deprecated. Discovers the available MIDI-CI nodes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Capability Inquiry

- [MIDICISession](midicisession.md): Deprecated. An object that represents a MIDI-CI session.
- [MIDICIProfile](midiciprofile.md): A mapping of MIDI messages to specific sounds and synthesis behaviors, such as General MIDI, a drawbar organ, and so on.
- [MIDICIProfileState](midiciprofilestate.md): An object that provides the enabled and disabled profiles for a MIDI channel or port on a device.
- [MIDICIResponder](midiciresponder.md): Deprecated. An object that responds to MIDI-CI inquiries from an initiator on behalf of a MIDI client, and handles profile and property exchange operations.

# MIDICIDiscoveryManager (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A singleton object that performs systemwide MIDI-CI discovery.

> No longer supported for CoreMIDI

## Declaration

```objectivec
@interface MIDICIDiscoveryManager : NSObject
```

<a id="overview"></a>

## Overview

Use this class to retrieve information about MIDI-CI–capable nodes in the MIDI subsystem. You can create [MIDICISession](midicisession.md) objects only from the destinations discovered using this API.

## Topics

### Accessing the Shared Instance

- [sharedInstance](midicidiscoverymanager/sharedinstance%28%29.md): Deprecated. Returns the singleton discovery manager instance.

### Discovering Nodes

- [discoverWithHandler:](midicidiscoverymanager/discover%28handler_%29.md): Deprecated. Discovers the available MIDI-CI nodes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Capability Inquiry

- [MIDICISession](midicisession.md): Deprecated. An object that represents a MIDI-CI session.
- [MIDICIProfile](midiciprofile.md): A mapping of MIDI messages to specific sounds and synthesis behaviors, such as General MIDI, a drawbar organ, and so on.
- [MIDICIProfileState](midiciprofilestate.md): An object that provides the enabled and disabled profiles for a MIDI channel or port on a device.
- [MIDICIProfileStateList](midiciprofilestatelist.md): An array of profile state objects that describes the profile configuration for all channels of a reachable MIDI-CI node.
- [MIDICIResponder](midiciresponder.md): Deprecated. An object that responds to MIDI-CI inquiries from an initiator on behalf of a MIDI client, and handles profile and property exchange operations.
