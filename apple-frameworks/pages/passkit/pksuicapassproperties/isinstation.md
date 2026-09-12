> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksuicapassproperties/isinstation](https://developer.apple.com/documentation/passkit/pksuicapassproperties/isinstation)

# isInStation (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.

## Declaration

```swift
var isInStation: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Transit networks that have tap-in and tap-out ride accounting use this value. Wallet may display this status as “en-route” in its user interface.

## See Also

### Getting pass status

- [isBlocked](isblocked.md): Deprecated. A Boolean value that indicates whether the pass issuer disabled the pass.
- [isBlacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates whether the transit pass issuer disabled the pass.
- [isGreenCarTicketUsed](isgreencarticketused.md): A Boolean value that indicates whether the customer has redeemed the Green Car ticket.
- [isInShinkansenStation](isinshinkansenstation.md): A Boolean value that indicates whether the pass has tapped in at a Shinkansen Station and has not tapped out.

# inStation (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isInStation) BOOL inStation;
```

<a id="Discussion"></a>

## Discussion

Transit networks that have tap-in and tap-out ride accounting use this value. Wallet may display this status as “en-route” in its user interface.

## See Also

### Getting pass status

- [blacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates whether the transit pass issuer disabled the pass.
- [greenCarTicketUsed](isgreencarticketused.md): A Boolean value that indicates whether the customer has redeemed the Green Car ticket.
- [inShinkansenStation](isinshinkansenstation.md): A Boolean value that indicates whether the pass has tapped in at a Shinkansen Station and has not tapped out.
