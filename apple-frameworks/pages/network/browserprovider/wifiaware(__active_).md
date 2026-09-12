> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/browserprovider/wifiaware(_:active:)](https://developer.apple.com/documentation/network/browserprovider/wifiaware(_:active:))

# wifiAware(\_:active:)

**Framework:** Network  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Setup a `NetworkBrowser` to subscribe to Wi-Fi Aware services on selected, paired devices.

## Declaration

```swift
static func wifiAware(_ action: WASubscriberBrowser.Action, active requestedDuration: Duration? = nil) -> Self
```

## Parameters

- `action`: The specific Wi-Fi Aware operation to perform, and the service & devices to perform it on.
- `requestedDuration`: Optional duration requested to keep the `NetworkBrowser` subscribing. The default value of `nil` instructs the system to stay active for long enough to guarantee the action completes with all nearby target devices.

<a id="return-value"></a>

## Return Value

A new `BrowserProvider` containing the `.wifiAware()` instruction that will configure a `NetworkBrowser` as a Wi-Fi Aware subscriber.

<a id="discussion"></a>

## Discussion

Example:

```swift
NetworkBrowser(for: .wifiAware(.connecting(to:.selected(devices), from:service)) )
```
