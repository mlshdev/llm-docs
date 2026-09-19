> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/customerengagementsession/token-swift.property

# token

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The session token.

## Declaration

```swift
final let token: CustomerEngagementSession.Token
```

<a id="discussion"></a>

## Discussion

This token can be associated with the customer profile and used to check if the new session is a reconnection of the previous session.
