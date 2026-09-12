> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddeviceevent/eventtype-swift.enum/devicechanged](https://developer.apple.com/documentation/devicediscoveryextension/dddeviceevent/eventtype-swift.enum/devicechanged)

# DDDeviceEvent.EventType.deviceChanged (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A status that indicates when the device of interest changes configuration.

## Declaration

```swift
case deviceChanged
```

<a id="Discussion"></a>

## Discussion

Report an event of this type to notify the system when information about a discovered device changes, for example, when:

- Adding or losing a communication protocol.
- Updating information about the current media that the device plays.

## See Also

### Distinguishing event types

- [DDDeviceEvent.EventType.unknown](unknown.md): A value for uninitialized event types.
- [DDDeviceEvent.EventType.deviceFound](devicefound.md): A status that indicates when the extension finds the device of interest.
- [DDDeviceEvent.EventType.deviceLost](devicelost.md): A status that indicates when the extension loses a connection to the device of interest.

# DDEventTypeDeviceChanged (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A status that indicates when the device of interest changes configuration.

## Declaration

```objectivec
DDEventTypeDeviceChanged
```

<a id="Discussion"></a>

## Discussion

Report an event of this type to notify the system when information about a discovered device changes, for example, when:

- Adding or losing a communication protocol.
- Updating information about the current media that the device plays.

## See Also

### Distinguishing event types

- [DDEventTypeUnknown](unknown.md): A value for uninitialized event types.
- [DDEventTypeDeviceFound](devicefound.md): A status that indicates when the extension finds the device of interest.
- [DDEventTypeDeviceLost](devicelost.md): A status that indicates when the extension loses a connection to the device of interest.
