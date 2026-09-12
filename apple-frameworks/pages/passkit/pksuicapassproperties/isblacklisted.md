> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksuicapassproperties/isblacklisted](https://developer.apple.com/documentation/passkit/pksuicapassproperties/isblacklisted)

# isBlacklisted (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ (deprecated in 15.0) · iPadOS 10.1+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.1+ (deprecated in 8.0)

A Boolean value that indicates whether the transit pass issuer disabled the pass.

> Use `PKStoredValuePassProperties` property [blocked](../pkstoredvaluepassproperties/blocked.md) instead.

## Declaration

```swift
var isBlacklisted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Transit pass issuers are responsible for blacklisting transit passes according to their policies. Blacklisted transit passes are not accepted at transit terminals.

## See Also

### Getting pass status

- [isBlocked](isblocked.md): Deprecated. A Boolean value that indicates whether the pass issuer disabled the pass.
- [isGreenCarTicketUsed](isgreencarticketused.md): A Boolean value that indicates whether the customer has redeemed the Green Car ticket.
- [isInShinkansenStation](isinshinkansenstation.md): A Boolean value that indicates whether the pass has tapped in at a Shinkansen Station and has not tapped out.
- [isInStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.

# blacklisted (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 10.1+ (deprecated in 15.0) · iPadOS 10.1+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.1+ (deprecated in 8.0)

A Boolean value that indicates whether the transit pass issuer disabled the pass.

> Use `PKStoredValuePassProperties` property [blocked](../pkstoredvaluepassproperties/blocked.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isBlacklisted) BOOL blacklisted;
```

<a id="Discussion"></a>

## Discussion

Transit pass issuers are responsible for blacklisting transit passes according to their policies. Blacklisted transit passes are not accepted at transit terminals.

## See Also

### Getting pass status

- [greenCarTicketUsed](isgreencarticketused.md): A Boolean value that indicates whether the customer has redeemed the Green Car ticket.
- [inShinkansenStation](isinshinkansenstation.md): A Boolean value that indicates whether the pass has tapped in at a Shinkansen Station and has not tapped out.
- [inStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
