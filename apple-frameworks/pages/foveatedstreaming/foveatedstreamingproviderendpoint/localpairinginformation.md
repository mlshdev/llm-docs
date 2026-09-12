> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingproviderendpoint/localpairinginformation](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingproviderendpoint/localpairinginformation)

# FoveatedStreamingProviderEndpoint.LocalPairingInformation

**Framework:** Foveated Streaming  
**Kind:** Structure  
**Availability:** visionOS 27.0+

Information obtained during QR code pairing for a local connection.

## Declaration

```swift
struct LocalPairingInformation
```

## Topics

### Instance Properties

- [barcodeData](localpairinginformation/barcodedata.md): The raw barcode data as read from the scanned QR code.
- [barcodeString](localpairinginformation/barcodestring.md): The barcode content decoded as a UTF-8 string, if representable.
- [expectedCertificateFingerprint](localpairinginformation/expectedcertificatefingerprint.md): The SHA-256 fingerprint of the server’s TLS certificate, as attested by the session management protocol during a previous successful pairing.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
