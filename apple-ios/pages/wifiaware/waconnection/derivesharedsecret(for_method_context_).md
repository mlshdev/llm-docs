> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/waconnection/derivesharedsecret(for:method:context:)](https://developer.apple.com/documentation/wifiaware/waconnection/derivesharedsecret(for:method:context:))

# deriveSharedSecret(for:method:context:)

**Framework:** Wi-Fi Aware  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Derive a unique, high-entropy shared secret for this network connection, which can be used to pair and setup security for higher layer network protocols like TLS or IPSec without additional user action or entropy input.

## Declaration

```swift
func deriveSharedSecret(for protocolName: WASharedSecret.ProtocolName, method: WASharedSecret.DerivationMethod, context: WASharedSecret.Context = .bundleID) async -> WASharedSecret?
```

## Parameters

- `protocolName`: The protocol that will be setup, such as TLS, IPSec, or a custom protocol.
- `method`: The method to use to derive the shared secret.
- `context`: A unique value that is specific to your App and the use case this connection will perform, which diversifies the generated secret. Defaults to the `Bundle ID` of the calling app.

<a id="return-value"></a>

## Return Value

A shared secret unique to the protocol, connection, and context supplied, or `nil` if a secret could not be derived using the provided method.

<a id="discussion"></a>

## Discussion

The shared secret can be used to authenticate a [PAKE](https://en.wikipedia.org/wiki/Password-authenticated_key_agreement) like SPAKE2, which is then used to pair and derive long-term asymmetric keys for authentication and encryption of the upper-layer network protocol.

Both sides of a connection will derive the same shared secret value if the same connection and input parameters are used:

- Your app and a remote app can derive the same shared secret value by calling this function on the same connection, with the same parameters.
- Devices and accessories can derive the same value as your app by using the derivation specified in the Wi-Fi Aware 5.0 standard, and providing the same parameters as used by your app.

Example Usage:

```swift
let secret = await connection.wifiAware?.deriveSharedSecret(for: .tlsPSK, method: .kdfHash256)
```

> **Important**

> If needed, get a new shared secret for each new network connection. Do not save this value, send it to other devices, reuse it across connections, or use it as a long-term authentication or encryption key. Instead, use this to pair higher layer protocols, and derive unique longer-term asymmetric keys for those protocols when pairing them.
