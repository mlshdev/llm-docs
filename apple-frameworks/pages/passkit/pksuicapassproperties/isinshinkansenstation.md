> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksuicapassproperties/isinshinkansenstation](https://developer.apple.com/documentation/passkit/pksuicapassproperties/isinshinkansenstation)

# isInShinkansenStation (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

A Boolean value that indicates whether the pass has tapped in at a Shinkansen Station and has not tapped out.

## Declaration

```swift
var isInShinkansenStation: Bool { get }
```

## See Also

### Getting pass status

- [isBlocked](isblocked.md): Deprecated. A Boolean value that indicates whether the pass issuer disabled the pass.
- [isBlacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates whether the transit pass issuer disabled the pass.
- [isGreenCarTicketUsed](isgreencarticketused.md): A Boolean value that indicates whether the customer has redeemed the Green Car ticket.
- [isInStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.

# inShinkansenStation (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

A Boolean value that indicates whether the pass has tapped in at a Shinkansen Station and has not tapped out.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isInShinkansenStation) BOOL inShinkansenStation;
```

## See Also

### Getting pass status

- [blacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates whether the transit pass issuer disabled the pass.
- [greenCarTicketUsed](isgreencarticketused.md): A Boolean value that indicates whether the customer has redeemed the Green Car ticket.
- [inStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
