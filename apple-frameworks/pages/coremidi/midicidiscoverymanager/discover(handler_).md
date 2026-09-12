> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicidiscoverymanager/discover(handler:)](https://developer.apple.com/documentation/coremidi/midicidiscoverymanager/discover(handler:))

# discover(handler:) (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Discovers the available MIDI-CI nodes.

> No longer supported for CoreMIDI

## Declaration

```swift
func discover(handler completedHandler: @escaping MIDICIDiscoveryResponseBlock)
```

## Parameters

- `completedHandler`: A closure the system calls when a MIDI-CI node discovery request is complete.

## Topics

### Handling Callbacks

- [MIDICIDiscoveryResponseBlock](../midicidiscoveryresponseblock.md): Deprecated. A block the system calls when a MIDI-CI node discovery request completes.
- [MIDICIDiscoveredNode](../midicidiscoverednode.md): Deprecated. A discovered MIDI-CI node that represents a MIDI source and destination that respond to capability inquiries.

# discoverWithHandler: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Discovers the available MIDI-CI nodes.

> No longer supported for CoreMIDI

## Declaration

```objectivec
- (void) discoverWithHandler:(MIDICIDiscoveryResponseBlock) completedHandler;
```

## Parameters

- `completedHandler`: A closure the system calls when a MIDI-CI node discovery request is complete.

## Topics

### Handling Callbacks

- [MIDICIDiscoveryResponseBlock](../midicidiscoveryresponseblock.md): Deprecated. A block the system calls when a MIDI-CI node discovery request completes.
- [MIDICIDiscoveredNode](../midicidiscoverednode.md): Deprecated. A discovered MIDI-CI node that represents a MIDI source and destination that respond to capability inquiries.
