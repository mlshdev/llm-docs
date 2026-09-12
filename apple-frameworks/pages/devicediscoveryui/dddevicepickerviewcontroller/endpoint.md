> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicediscoveryui/dddevicepickerviewcontroller/endpoint](https://developer.apple.com/documentation/devicediscoveryui/dddevicepickerviewcontroller/endpoint)

# endpoint

**Framework:** DeviceDiscoveryUI  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 16.0+

A network connection endpoint for the device that a person selected.

## Declaration

```swift
@MainActor @preconcurrency var endpoint: NWEndpoint { get async throws }
```

<a id="Discussion"></a>

## Discussion

Your app can asynchronously read from this property. The system populates this property when someone selects a device from the endpoint picker. If someone cancels the picker, the system throws an error.

```swift
let endpoint: NWEndpoint
do {
    endpoint = try await myEndpointPickerHandler.endpoint
} catch {
    // Someone canceled the endpoint picker view.
    return
}

// Use the endpoint here.
myDeviceConnectionManager.connectTo(endpoint: endpoint)
```
