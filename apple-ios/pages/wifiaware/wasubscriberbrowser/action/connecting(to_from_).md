> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/wasubscriberbrowser/action/connecting(to:from:)](https://developer.apple.com/documentation/wifiaware/wasubscriberbrowser/action/connecting(to:from:))

# connecting(to:from:)

**Framework:** Wi-Fi Aware  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Subscribes to the provided service over Wi-Fi, providing browse results for connecting to the specified paired devices if available.

## Declaration

```swift
static func connecting(to pairedDevices: WASubscriberBrowser.Devices, from mySubscribingService: WASubscribableService) -> WASubscriberBrowser.Action
```

## Parameters

- `pairedDevices`: The devices to connect to. The browser isn’t activated if no devices are specified.
- `mySubscribingService`: The service to discover.

<a id="return-value"></a>

## Return Value

A new `Action` configuring this operation.

<a id="discussion"></a>

## Discussion

When subscribing, the `NetworkBrowser` provides a [WAEndpoint](../../waendpoint.md) for each discovered paired device, and the app can then create a `NetworkConnection` object to connect to each. Data path parameters including the [WAPerformanceMode](../../waperformancemode.md) are set when creating the connection, using [WAParameters](../../waparameters.md) written into the [NWParameters](https://developer.apple.com/documentation/network/nwparameters) for the `NetworkConnection`.
