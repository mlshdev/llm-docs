> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksuicapassproperties/isgreencarticketused](https://developer.apple.com/documentation/passkit/pksuicapassproperties/isgreencarticketused)

# isGreenCarTicketUsed (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

A Boolean value that indicates whether the customer has redeemed the Green Car ticket.

## Declaration

```swift
var isGreenCarTicketUsed: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A Green Car ticket is valid for a single use. This flag indicates the ticket has been used and is not eligible for a refund.

## See Also

### Getting pass status

- [isBlocked](isblocked.md): Deprecated. A Boolean value that indicates whether the pass issuer disabled the pass.
- [isBlacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates whether the transit pass issuer disabled the pass.
- [isInShinkansenStation](isinshinkansenstation.md): A Boolean value that indicates whether the pass has tapped in at a Shinkansen Station and has not tapped out.
- [isInStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.

# greenCarTicketUsed (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

A Boolean value that indicates whether the customer has redeemed the Green Car ticket.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isGreenCarTicketUsed) BOOL greenCarTicketUsed;
```

<a id="Discussion"></a>

## Discussion

A Green Car ticket is valid for a single use. This flag indicates the ticket has been used and is not eligible for a refund.

## See Also

### Getting pass status

- [blacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates whether the transit pass issuer disabled the pass.
- [inShinkansenStation](isinshinkansenstation.md): A Boolean value that indicates whether the pass has tapped in at a Shinkansen Station and has not tapped out.
- [inStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
