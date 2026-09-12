> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/ddeventhandler](https://developer.apple.com/documentation/devicediscoveryextension/ddeventhandler)

# DDEventHandler (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A function that the extension invokes to signal an event.

## Declaration

```swift
typealias DDEventHandler = (DDDeviceEvent) -> Void
```

## Parameters

- `inEvent`: An event that the extension creates for the event handler.

<a id="Discussion"></a>

## Discussion

A device discovery extension implements a closure of this format and calls it after creating argument events. In the implementation, the extension creates device events (`DDEvent`) and passes them to the system by calling [report(\_:)](dddiscoverysession/report%28__%29.md).

For an example event handler, see `Appex.swift` in [Discovering a third-party media-streaming device](discovering-a-third-party-media-streaming-device.md).

## See Also

### Life cycle

- [DDDeviceEvent](dddeviceevent.md): An object that provides a device or communicates its change in status.
- [DDDeviceEvent.EventType](dddeviceevent/eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.
- [DDEventTypeToString(\_:)](ddeventtypetostring%28__%29.md): Returns human-readable text for the specified event identifier.

# DDEventHandler (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

A function that the extension invokes to signal an event.

## Declaration

```objectivec
typedef void (^)(DDDeviceEvent *) DDEventHandler;
```

## Parameters

- `inEvent`: An event that the extension creates for the event handler.

<a id="Discussion"></a>

## Discussion

A device discovery extension implements a closure of this format and calls it after creating argument events. In the implementation, the extension creates device events (`DDEvent`) and passes them to the system by calling [reportEvent:](dddiscoverysession/report%28__%29.md).

For an example event handler, see `Appex.swift` in [Discovering a third-party media-streaming device](discovering-a-third-party-media-streaming-device.md).

## See Also

### Life cycle

- [DDDeviceEvent](dddeviceevent.md): An object that provides a device or communicates its change in status.
- [DDEventType](dddeviceevent/eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.
- [DDEventTypeToString](ddeventtypetostring%28__%29.md): Returns human-readable text for the specified event identifier.
