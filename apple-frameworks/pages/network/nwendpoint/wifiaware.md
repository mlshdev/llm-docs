> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwendpoint/wifiaware

# wifiAware

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Get an `WAEndpoint` that can connect to this `NWEndpoint`’s remote device over Wi-Fi Aware, or `nil` if the `NWEndpoint` is not compatible with Wi-Fi Aware.

## Declaration

```swift
var wifiAware: WAEndpoint? { get }
```

<a id="return-value"></a>

## Return Value

A new endpoint that can be used to connect over Wi-Fi Aware, or `nil` if it not compatible with Wi-Fi Aware.

<a id="discussion"></a>

## Discussion

The returned endpoint can be used to connect to a remote `NetworkListener` that accepts additional Wi-Fi Aware connections without publishing a service, via  `WiFiAware/WAPublisherListener/Action/addingConnections(from:)`

The returned endpoint will use Wi-Fi Aware as a transport.
