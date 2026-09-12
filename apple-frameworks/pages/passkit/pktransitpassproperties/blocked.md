> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pktransitpassproperties/blocked](https://developer.apple.com/documentation/passkit/pktransitpassproperties/blocked)

# blocked

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+ · watchOS 7.5+

A Boolean value that indicates the pass issuer disabled the pass.

> Use `PKStoredValuePassProperties` property [blocked](../pkstoredvaluepassproperties/blocked.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isBlocked) BOOL blocked;
```

<a id="Discussion"></a>

## Discussion

A blocked pass isn’t accepted at a transit terminal.

## See Also

### Getting pass status

- [expirationDate](expirationdate.md): The date that the transit card expires.
- [inStation](isinstation.md): A Boolean value that indicates whether the transit pass has tapped in at a station and has not tapped out.
- [blacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates the transit pass issuer disabled the pass.
