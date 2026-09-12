> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/dddevicepairingviewcontroller/issupported(_:)](https://developer.apple.com/documentation/devicediscoveryui/dddevicepairingviewcontroller/issupported(_:))

# isSupported(\_:)

**Framework:** DeviceDiscoveryUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Returns a Boolean value that indicates whether the current device supports device discovery using Wi-FI Aware.

## Declaration

```swift
@MainActor @preconcurrency static func isSupported(_ listenerProvider: any ListenerProvider) -> Bool
```

## Parameters

- `listenerProvider`: A [ListenerProvider](../../network/listenerprovider.md) protocol object that defines the service the listener advertises.
