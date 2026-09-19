> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingproviderendpoint/localpairinginformation/expectedcertificatefingerprint

# expectedCertificateFingerprint

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

The SHA-256 fingerprint of the server’s TLS certificate, as attested by the session management protocol during a previous successful pairing.

## Declaration

```swift
let expectedCertificateFingerprint: Data?
```

<a id="discussion"></a>

## Discussion

The extension **must** verify the server’s actual certificate matches this value, if non-`nil`.
