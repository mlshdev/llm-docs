> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/devicepicker/init(_:access:onselect:label:fallback:parameters:)](https://developer.apple.com/documentation/devicediscoveryui/devicepicker/init(_:access:onselect:label:fallback:parameters:))

# init(\_:access:onSelect:label:fallback:parameters:)

**Framework:** DeviceDiscoveryUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a view that displays the available devices with the access level, section handler, and other parameters you supply.

## Declaration

```swift
@MainActor @preconcurrency init<Provider>(_ browserProvider: Provider, access: DDDevicePairingAccess = .default, onSelect: @escaping (Provider.Endpoint) -> Void, @ViewBuilder label: () -> Label, @ViewBuilder fallback: () -> Fallback, parameters: (() -> NWParameters)? = nil) where Provider : BrowserProvider
```

## Parameters

- `browserProvider`: An object that conforms to the [BrowserProvider](../../network/browserprovider.md) protocol and implements a specific network browser type.
- `access`: The [DDDevicePairingAccess](../dddevicepairingaccess.md) access level. The default is `DDDevicePairingAccess.default`.
- `onSelect`: A closure that the framework calls when someone selects a device in the picker view, or cancels the view.
- `label`: A label the network device picker displays.
- `fallback`: A view that the framework displays if the current device doesn’t support device discovery.
- `parameters`: Parameters for your network connection. Use [applicationService](../../network/nwparameters/applicationservice.md) to create a default set of parameters that create an encrypted connection with the other devices. You can also add a [NWProtocolFramer](../../network/nwprotocolframer.md) to provide an application-level messaging protocol.

## See Also

### Creating a device picker

- [init(\_:onSelect:label:fallback:parameters:)](init%28__onselect_label_fallback_parameters_%29.md): Creates a view that displays available devices.
