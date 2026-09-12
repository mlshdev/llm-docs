> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/ddeventtypetostring(_:)](https://developer.apple.com/documentation/devicediscoveryextension/ddeventtypetostring(_:))

# DDEventTypeToString(\_:) (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Returns human-readable text for the specified event identifier.

## Declaration

```swift
func DDEventTypeToString(_ inValue: DDDeviceEvent.EventType) -> String
```

## Parameters

- `inValue`: An event identifier to convert to text.

<a id="return-value"></a>

## Return Value

A textual value for the specified event type.

<a id="Discussion"></a>

## Discussion

Your extension can use this function for logging.

## See Also

### Life cycle

- [DDDeviceEvent](dddeviceevent.md): An object that provides a device or communicates its change in status.
- [DDDeviceEvent.EventType](dddeviceevent/eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.
- [DDEventHandler](ddeventhandler.md): A function that the extension invokes to signal an event.

# DDEventTypeToString (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Returns human-readable text for the specified event identifier.

## Declaration

```objectivec
extern NSString *DDEventTypeToString(DDEventType inValue);
```

## Parameters

- `inValue`: An event identifier to convert to text.

<a id="return-value"></a>

## Return Value

A textual value for the specified event type.

<a id="Discussion"></a>

## Discussion

Your extension can use this function for logging.

## See Also

### Life cycle

- [DDDeviceEvent](dddeviceevent.md): An object that provides a device or communicates its change in status.
- [DDEventType](dddeviceevent/eventtype-swift.enum.md): Identifiers for the types of events that occur in the device discovery life cycle.
- [DDEventHandler](ddeventhandler.md): A function that the extension invokes to signal an event.
