> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pktransitpassproperties/isblacklisted](https://developer.apple.com/documentation/passkit/pktransitpassproperties/isblacklisted)

# isBlacklisted (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ (deprecated in 15.0) · iPadOS 11.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.3+ (deprecated in 8.0)

A Boolean value that indicates the transit pass issuer disabled the pass.

> Use `PKStoredValuePassProperties` property [blocked](../pkstoredvaluepassproperties/blocked.md) instead.

## Declaration

```swift
var isBlacklisted: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A blocked pass isn’t accepted at a transit terminal.

## See Also

### Getting pass status

- [expirationDate](expirationdate.md): The date that the transit card expires.
- [isInStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
- [isBlocked](isblocked.md): Deprecated. A Boolean value that indicates the pass issuer disabled the pass.

# blacklisted (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ (deprecated in 15.0) · iPadOS 11.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.3+ (deprecated in 8.0)

A Boolean value that indicates the transit pass issuer disabled the pass.

> Use `PKStoredValuePassProperties` property [blocked](../pkstoredvaluepassproperties/blocked.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isBlacklisted) BOOL blacklisted;
```

<a id="Discussion"></a>

## Discussion

A blocked pass isn’t accepted at a transit terminal.

## See Also

### Getting pass status

- [expirationDate](expirationdate.md): The date that the transit card expires.
- [inStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
- [blocked](blocked.md): Deprecated. A Boolean value that indicates the pass issuer disabled the pass.
