> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksuicapassproperties/isblocked](https://developer.apple.com/documentation/passkit/pksuicapassproperties/isblocked)

# isBlocked

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 10.1+ · macOS · visionOS · watchOS 3.1+

A Boolean value that indicates whether the pass issuer disabled the pass.

> Use `PKStoredValuePassProperties` property [blocked](../pkstoredvaluepassproperties/blocked.md) instead.

## Declaration

```swift
override dynamic var isBlocked: Bool { get }
```

## See Also

### Getting pass status

- [isBlacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates whether the transit pass issuer disabled the pass.
- [isGreenCarTicketUsed](isgreencarticketused.md): A Boolean value that indicates whether the customer has redeemed the Green Car ticket.
- [isInShinkansenStation](isinshinkansenstation.md): A Boolean value that indicates whether the pass has tapped in at a Shinkansen Station and has not tapped out.
- [isInStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
