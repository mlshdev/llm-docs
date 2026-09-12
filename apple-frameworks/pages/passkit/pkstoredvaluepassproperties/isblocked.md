> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassproperties/isblocked](https://developer.apple.com/documentation/passkit/pkstoredvaluepassproperties/isblocked)

# isBlocked

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS · watchOS 8.0+

A Boolean value that indicates the pass issuer disabled a stored-value pass.

## Declaration

```swift
@objc dynamic var isBlocked: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The pass issuer is responsible for blocking a stored-value pass according to their policy. The service provider can’t process transactions for a blocked pass.

## See Also

### Reading the stored-value pass properties

- [balances](balances.md): The amount available for transactions for a service represented by a stored-value pass.
- [expirationDate](expirationdate.md): The expiration date of a pass.
- [isBlacklisted](isblacklisted.md): Deprecated. A Boolean value that indicates the pass issuer disabled a stored-value pass.
