> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicidiscoverednode](https://developer.apple.com/documentation/coremidi/midicidiscoverednode)

# MIDICIDiscoveredNode (Swift)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A discovered MIDI-CI node that represents a MIDI source and destination that respond to capability inquiries.

> No longer supported for CoreMIDI

## Declaration

```swift
class MIDICIDiscoveredNode
```

## Topics

### Inspecting a Node

- [destination](midicidiscoverednode/destination.md): Deprecated. The node’s MIDI destination.
- [deviceInfo](midicidiscoverednode/deviceinfo.md): Deprecated. The available MIDI-CI device information.
- [supportsProfiles](midicidiscoverednode/supportsprofiles.md): Deprecated. A Boolean value that indicates whether this node supports MIDI-CI profiles.
- [supportsProperties](midicidiscoverednode/supportsproperties.md): Deprecated. A Boolean value that indicates whether this node supports MIDI-CI properties.
- [maximumSysExSize](midicidiscoverednode/maximumsysexsize.md): Deprecated. The maximum size of a System Exclusive (SysEx) message this node supports.

### Initializers

- [init(coder:)](midicidiscoverednode/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Handling Callbacks

- [MIDICIDiscoveryResponseBlock](midicidiscoveryresponseblock.md): Deprecated. A block the system calls when a MIDI-CI node discovery request completes.

# MIDICIDiscoveredNode (Objective-C)

**Framework:** Core MIDI  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A discovered MIDI-CI node that represents a MIDI source and destination that respond to capability inquiries.

> No longer supported for CoreMIDI

## Declaration

```objectivec
@interface MIDICIDiscoveredNode : NSObject
```

## Topics

### Inspecting a Node

- [destination](midicidiscoverednode/destination.md): Deprecated. The node’s MIDI destination.
- [deviceInfo](midicidiscoverednode/deviceinfo.md): Deprecated. The available MIDI-CI device information.
- [supportsProfiles](midicidiscoverednode/supportsprofiles.md): Deprecated. A Boolean value that indicates whether this node supports MIDI-CI profiles.
- [supportsProperties](midicidiscoverednode/supportsproperties.md): Deprecated. A Boolean value that indicates whether this node supports MIDI-CI properties.
- [maximumSysExSize](midicidiscoverednode/maximumsysexsize.md): Deprecated. The maximum size of a System Exclusive (SysEx) message this node supports.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Handling Callbacks

- [MIDICIDiscoveryResponseBlock](midicidiscoveryresponseblock.md): Deprecated. A block the system calls when a MIDI-CI node discovery request completes.
