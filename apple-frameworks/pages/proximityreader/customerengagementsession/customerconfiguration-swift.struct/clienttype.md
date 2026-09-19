> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/customerengagementsession/customerconfiguration-swift.struct/clienttype

# clientType

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An enum value that indicates the type of connected peer client.

## Declaration

```swift
let clientType: CustomerEngagementSession.PeerClientType
```

<a id="discussion"></a>

## Discussion

Only certain request types are available if the peer client is the `web` type.
