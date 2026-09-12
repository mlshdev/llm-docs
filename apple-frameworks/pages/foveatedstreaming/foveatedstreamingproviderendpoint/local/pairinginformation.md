> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingproviderendpoint/local/pairinginformation](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingproviderendpoint/local/pairinginformation)

# pairingInformation

**Framework:** Foveated Streaming  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

Credential data obtained during QR code pairing.

## Declaration

```swift
let pairingInformation: FoveatedStreamingProviderEndpoint.LocalPairingInformation
```

<a id="discussion"></a>

## Discussion

The extension is responsible for decoding this (e.g., extracting client tokens for its streaming protocol).
