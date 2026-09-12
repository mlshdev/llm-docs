> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/customerconfiguration-swift.struct/clienttype](https://developer.apple.com/documentation/proximityreader/customerengagementsession/customerconfiguration-swift.struct/clienttype)

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
