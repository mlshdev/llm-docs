> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waconnection](https://developer.apple.com/documentation/wifiaware/waconnection)

# WAConnection

**Framework:** Wi-Fi Aware  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Provides access to the Wi-Fi Aware-specific configuration and information that underlies a given `Network/NetworkConnection`.

## Declaration

```swift
class WAConnection<ApplicationProtocol> where ApplicationProtocol : NetworkProtocolOptions
```

## Topics

### Instance Methods

- [deriveSharedSecret(for:method:context:)](waconnection/derivesharedsecret%28for_method_context_%29.md): Derive a unique, high-entropy shared secret for this network connection, which can be used to pair and setup security for higher layer network protocols like TLS or IPSec without additional user action or entropy input.

## See Also

### Connections

- [WAEndpoint](waendpoint.md): The endpoint of a Wi-Fi Aware connection.
