> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/washaredsecret/protocolname/tlspsk](https://developer.apple.com/documentation/wifiaware/washaredsecret/protocolname/tlspsk)

# tlsPSK

**Framework:** Wi-Fi Aware  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Derive a shared secret to bootstrap TLS, using the resulting shared secret as a TLS Pre-Shared Key.

## Declaration

```swift
static let tlsPSK: WASharedSecret.ProtocolName
```

<a id="discussion"></a>

## Discussion

Best practices for TLS security are described in [NIST Special Publication 800-52](https://csrc.nist.gov/pubs/sp/800/52/r2/final). TLS 1.3 is recommended.

Specifying this value will use the “`TLS-PSK`” string as the protocol name when deriving the shared secret.
