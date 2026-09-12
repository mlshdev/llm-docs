> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/wifiaware/washaredsecret/protocolname/ipsecpsk](https://developer.apple.com/documentation/wifiaware/washaredsecret/protocolname/ipsecpsk)

# ipsecPSK

**Framework:** Wi-Fi Aware  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Derive a shared secret to bootstrap IPSec, using the resulting shared secret as the IPSec Pre-Shared Key.

## Declaration

```swift
static let ipsecPSK: WASharedSecret.ProtocolName
```

<a id="discussion"></a>

## Discussion

Best practices for IPSec security are described in [NIST Special Publication 800-77](https://csrc.nist.gov/pubs/sp/800/77/r1/final). IKEv2 and IPSec-v3 are recommended.

Specifying this value will use the “`IPSec-PSK`” string as the protocol name when deriving the shared secret.
