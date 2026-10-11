> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-2d7a1d789740; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicediscoveryui/dddevicepairingviewcontroller/init(listenerprovider:access:)

# init(listenerProvider:access:)

**Framework:** DeviceDiscoveryUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initializes a device-pairing view controller with the provided listener and requested access level for device discovery.

## Declaration

```swift
@MainActor @preconcurrency init(listenerProvider: any ListenerProvider, access: DDDevicePairingAccess)
```
