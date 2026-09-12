> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/washaredsecret/protocolname/init(_:)-7marr](https://developer.apple.com/documentation/wifiaware/washaredsecret/protocolname/init(_:)-7marr)

# init(\_:)

**Framework:** Wi-Fi Aware  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Creates a custom protocol name using the provided unique string.

## Declaration

```swift
init?(_ string: String)
```

## Parameters

- `string`: The string to use as the underlying protocol name, which must be equal to or greater than three characters long. The framework converts the string to UTF-8 prior to hashing in the derivation.

<a id="return-value"></a>

## Return Value

A new [WASharedSecret.ProtocolName](../protocolname.md), or `nil` if the provided string is too short.

<a id="Discussion"></a>

## Discussion

Custom protocols need to specify a string that identifies the protocol that uses the shared secret. The string must be representable as UTF-8, and normalize to the same value when represented as bytes. A best practice is to use ASCII-compatible values to avoid normalization issues. Set the same value on the local and remote devices in order to generate the same shared secret.
