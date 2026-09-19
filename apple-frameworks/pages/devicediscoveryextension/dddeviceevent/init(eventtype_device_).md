> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicediscoveryextension/dddeviceevent/init(eventtype:device:)

# init(eventType:device:) (Swift)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Creates an event object that conveys status for a discovered device of interest.

## Declaration

```swift
init(eventType type: DDDeviceEvent.EventType, device: DDDevice)
```

## Parameters

- `type`: The option that represents the device’s status in the device discovery life cycle.
- `device`: The discovered device of interest.

# initWithEventType:device: (Objective-C)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

Creates an event object that conveys status for a discovered device of interest.

## Declaration

```objectivec
- (instancetype) initWithEventType:(DDEventType) type device:(DDDevice *) device;
```

## Parameters

- `type`: The option that represents the device’s status in the device discovery life cycle.
- `device`: The discovered device of interest.
