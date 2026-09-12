> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassproperties/expirationdate](https://developer.apple.com/documentation/passkit/pkstoredvaluepassproperties/expirationdate)

# expirationDate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

The expiration date of a pass.

## Declaration

```swift
var expirationDate: Date? { get }
```

## See Also

### Reading the stored-value pass properties

- [balances](balances.md): The amount available for transactions for a service represented by a stored-value pass.
- [isBlocked](isblocked.md): A Boolean value that indicates the pass issuer disabled a stored-value pass.
- [isBlacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates the pass issuer disabled a stored-value pass.

# expirationDate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

The expiration date of a pass.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * expirationDate;
```

## See Also

### Reading the stored-value pass properties

- [balances](balances.md): The amount available for transactions for a service represented by a stored-value pass.
- [blocked](blocked.md): A Boolean value that indicates the pass issuer disabled a stored-value pass.
- [blacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates the pass issuer disabled a stored-value pass.
