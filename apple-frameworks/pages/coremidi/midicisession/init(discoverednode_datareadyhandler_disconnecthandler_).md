> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicisession/init(discoverednode:datareadyhandler:disconnecthandler:)](https://developer.apple.com/documentation/coremidi/midicisession/init(discoverednode:datareadyhandler:disconnecthandler:))

# init(discoveredNode:dataReadyHandler:disconnectHandler:) (Swift)

**Framework:** Core MIDI  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a MIDI-CI session.

> No longer supported for CoreMIDI

## Declaration

```swift
init(discoveredNode: MIDICIDiscoveredNode, dataReadyHandler handler: @escaping () -> Void, disconnectHandler: @escaping MIDICISessionDisconnectBlock)
```

## Parameters

- `discoveredNode`: A node found during discovery.
- `handler`: A block the system calls when the session’s data is ready.
- `disconnectHandler`: A block the system calls when you disconnect from the session.

## Topics

### Handling Callbacks

- [MIDICISessionDisconnectBlock](../midicisessiondisconnectblock.md): Deprecated. A block the system calls when a MIDI-CI session disconnects.

# initWithDiscoveredNode:dataReadyHandler:disconnectHandler: (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 18.0) · iPadOS 12.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a MIDI-CI session.

> No longer supported for CoreMIDI

## Declaration

```objectivec
- (instancetype) initWithDiscoveredNode:(MIDICIDiscoveredNode *) discoveredNode dataReadyHandler:(void (^)()) handler disconnectHandler:(MIDICISessionDisconnectBlock) disconnectHandler;
```

## Parameters

- `discoveredNode`: A node found during discovery.
- `handler`: A block the system calls when the session’s data is ready.
- `disconnectHandler`: A block the system calls when you disconnect from the session.

## Topics

### Handling Callbacks

- [MIDICISessionDisconnectBlock](../midicisessiondisconnectblock.md): Deprecated. A block the system calls when a MIDI-CI session disconnects.
