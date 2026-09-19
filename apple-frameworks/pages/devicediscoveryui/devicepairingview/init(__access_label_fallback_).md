> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicediscoveryui/devicepairingview/init(_:access:label:fallback:)

# init(\_:access:label:fallback:)

**Framework:** DeviceDiscoveryUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a `DevicePairingView` which, when pressed, will display a local device advertiser interface.

## Declaration

```swift
@MainActor @preconcurrency init(_ listenerProvider: any ListenerProvider, access: DDDevicePairingAccess = .default, @ViewBuilder label: () -> Label, @ViewBuilder fallback: () -> Fallback)
```

## Parameters

- `listenerProvider`: A ListenerProvider which provides information about the listener to use to advertise.
- `access`: The level of access the app receives for the endpoint selected by the user.
- `label`: A view that describes the action of requesting device advertising if it is supported.
- `fallback`: A view that describes the alternative action when device advertising is not supported.

<a id="discussion"></a>

## Discussion

For example:

```
DevicePairingView(listenerProvider) {
	Text("Starting advertising to local devices")
} fallback: {
	Text("Advertising not available")
}
```
