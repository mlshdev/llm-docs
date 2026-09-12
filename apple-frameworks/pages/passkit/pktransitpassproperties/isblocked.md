> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pktransitpassproperties/isblocked](https://developer.apple.com/documentation/passkit/pktransitpassproperties/isblocked)

# isBlocked

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS · watchOS 7.5+

A Boolean value that indicates the pass issuer disabled the pass.

> Use `PKStoredValuePassProperties` property [blocked](../pkstoredvaluepassproperties/blocked.md) instead.

## Declaration

```swift
override dynamic var isBlocked: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A blocked pass isn’t accepted at a transit terminal.

## See Also

### Getting pass status

- [expirationDate](expirationdate.md): The date that the transit card expires.
- [isInStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
- [isBlacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates the transit pass issuer disabled the pass.
