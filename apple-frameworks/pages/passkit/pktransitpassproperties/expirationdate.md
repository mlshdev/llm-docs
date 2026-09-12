> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pktransitpassproperties/expirationdate](https://developer.apple.com/documentation/passkit/pktransitpassproperties/expirationdate)

# expirationDate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.3+

The date that the transit card expires.

## Declaration

```swift
var expirationDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

Rules for expiry depend on the pass provider. The return value can be `nil` if the transit card does not support an expiration date.

## See Also

### Getting pass status

- [isInStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
- [isBlocked](isblocked.md): Deprecated. A Boolean value that indicates the pass issuer disabled the pass.
- [isBlacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates the transit pass issuer disabled the pass.

# expirationDate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.3+

The date that the transit card expires.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * expirationDate;
```

<a id="Discussion"></a>

## Discussion

Rules for expiry depend on the pass provider. The return value can be `nil` if the transit card does not support an expiration date.

## See Also

### Getting pass status

- [inStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
- [blocked](blocked.md): Deprecated. A Boolean value that indicates the pass issuer disabled the pass.
- [blacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates the transit pass issuer disabled the pass.
