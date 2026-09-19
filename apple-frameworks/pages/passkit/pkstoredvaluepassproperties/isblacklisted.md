> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkstoredvaluepassproperties/isblacklisted

# isBlacklisted (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 15.0) · iPadOS 15.0+ (deprecated in 15.0) · Mac Catalyst 15.0+ (deprecated in 15.0) · macOS 12.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 8.0+ (deprecated in 8.0)

A Boolean value that indicates the pass issuer disabled a stored-value pass.

> Use `PKStoredValuePassProperties` property [blocked](blocked.md) instead.

## Declaration

```swift
var isBlacklisted: Bool { get }
```

## See Also

### Reading the stored-value pass properties

- [balances](balances.md): The amount available for transactions for a service represented by a stored-value pass.
- [expirationDate](expirationdate.md): The expiration date of a pass.
- [isBlocked](isblocked.md): A Boolean value that indicates the pass issuer disabled a stored-value pass.

# blacklisted (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ (deprecated in 15.0) · iPadOS 15.0+ (deprecated in 15.0) · Mac Catalyst 15.0+ (deprecated in 15.0) · macOS 12.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 8.0+ (deprecated in 8.0)

A Boolean value that indicates the pass issuer disabled a stored-value pass.

> Use `PKStoredValuePassProperties` property [blocked](blocked.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isBlacklisted) BOOL blacklisted;
```

## See Also

### Reading the stored-value pass properties

- [balances](balances.md): The amount available for transactions for a service represented by a stored-value pass.
- [expirationDate](expirationdate.md): The expiration date of a pass.
- [blocked](blocked.md): A Boolean value that indicates the pass issuer disabled a stored-value pass.
