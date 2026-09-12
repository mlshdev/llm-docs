> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassbalance/amount-2vfd3](https://developer.apple.com/documentation/passkit/pkstoredvaluepassbalance/amount-2vfd3)

# amount

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

The current balance in money or points.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDecimalNumber * amount;
```

## See Also

### Getting the pass status

- [expiryDate](expirydate.md): The date that the balance expires.
- [balanceType](balancetype-swift.property.md): The type of value that the balance represents, such as money or points.
- [currencyCode](currencycode.md): The ISO 4217 currency code of the balance.
- [PKStoredValuePassBalanceType](balancetype-swift.struct.md): The type of value that the balance represents, such as money or points.
