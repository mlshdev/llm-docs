> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassbalance/amount-2nwf5](https://developer.apple.com/documentation/passkit/pkstoredvaluepassbalance/amount-2nwf5)

# amount

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS · watchOS 8.0+

The current balance of a stored-value pass in money or points.

## Declaration

```swift
var amount: Decimal { get }
```

## See Also

### Getting the pass status

- [expiryDate](expirydate.md): The date that the balance expires.
- [balanceType](balancetype-swift.property.md): The type of value that the balance represents, such as money or points.
- [currencyCode](currencycode.md): The ISO 4217 currency code of the balance.
- [PKStoredValuePassBalance.BalanceType](balancetype-swift.struct.md): The type of value that the balance represents, such as money or points.
