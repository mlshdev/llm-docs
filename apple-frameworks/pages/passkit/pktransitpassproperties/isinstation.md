> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pktransitpassproperties/isinstation](https://developer.apple.com/documentation/passkit/pktransitpassproperties/isinstation)

# isInStation (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 4.3+

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

- [expirationDate](expirationdate.md): The date that the transit card expires.
- [isBlocked](isblocked.md): Deprecated. A Boolean value that indicates the pass issuer disabled the pass.
- [isBlacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates the transit pass issuer disabled the pass.

# inStation (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 4.3+

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

- [expirationDate](expirationdate.md): The date that the transit card expires.
- [blocked](blocked.md): Deprecated. A Boolean value that indicates the pass issuer disabled the pass.
- [blacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates the transit pass issuer disabled the pass.
