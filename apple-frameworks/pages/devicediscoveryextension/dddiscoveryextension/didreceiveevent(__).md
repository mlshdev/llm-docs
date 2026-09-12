> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryextension/dddiscoveryextension/didreceiveevent(_:)](https://developer.apple.com/documentation/devicediscoveryextension/dddiscoveryextension/didreceiveevent(_:))

# didReceiveEvent(\_:)

**Framework:** DeviceDiscoveryExtension  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 13.0+ · visionOS

Provides a device event from the system to the extension.

## Declaration

```swift
func didReceiveEvent(_ event: DDDeviceEvent)
```

## Parameters

- `event`: A moment of interest in the device discovery life cycle.

<a id="Discussion"></a>

## Discussion

The system calls this function to give the app’s `DDDiscoveryExtension` information about the device. For example, when someone selects the device in the AirPlay menu ([AVRoutePickerView](../../avkit/avroutepickerview.md)), the system notifies the extension of the state change by invoking this callback.

## Default Implementations

### DDDiscoveryExtension Implementations

- [didReceiveEvent(\_:)](didreceiveevent%28__%29-7usr8.md): A default, blank implementation for when the system notifies the extension of a device event.
