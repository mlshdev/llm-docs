> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/washaredsecret/protocolname/init(_:)-648hd](https://developer.apple.com/documentation/wifiaware/washaredsecret/protocolname/init(_:)-648hd)

# init(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a custom protocol with the provided unique string.

## Declaration

```swift
init?(_ data: Data)
```

## Parameters

- `data`: The data to use as the underlying protocol name, which must be greater than or equal to 3 bytes.

<a id="return-value"></a>

## Return Value

A new [WASharedSecret.ProtocolName](../protocolname.md), or `nil` if the provided data was too short.

<a id="Discussion"></a>

## Discussion

Custom protocols need to specify data that identifies the protocol that will use the shared secret. Set the same value on the local and remote devices in order to generate the same shared secret.
