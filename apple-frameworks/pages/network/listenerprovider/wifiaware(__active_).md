> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/listenerprovider/wifiaware(_:active:)](https://developer.apple.com/documentation/network/listenerprovider/wifiaware(_:active:))

# wifiAware(\_:active:)

**Framework:** Network  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Sets a network listener to publish Wi-Fi Aware services to the selected paired devices.

## Declaration

```swift
static func wifiAware(_ action: WAPublisherListener.Action, active requestedDuration: Duration? = nil) -> Self
```

## Parameters

- `action`: The specific Wi-Fi Aware operation to perform, and the service & devices to perform it on.
- `requestedDuration`: Optional duration requested to keep the `NetworkListener` publishing. The default value of `nil` instructs the system to stay active for long enough to guarantee the action completes with all nearby target devices.

<a id="return-value"></a>

## Return Value

A new `ListenerProvider` containing the `.wifiAware()` instruction that will configure a `NetworkListener` as a Wi-Fi Aware publisher.

<a id="discussion"></a>

## Discussion

The code below is an example of how to set the `NetworkListener`:

```swift
NetworkListener(for: .wifiAware(.connecting(to:service, from:.selected(devices))) )
```
