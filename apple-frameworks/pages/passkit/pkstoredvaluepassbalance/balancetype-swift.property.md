> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassbalance/balancetype-swift.property](https://developer.apple.com/documentation/passkit/pkstoredvaluepassbalance/balancetype-swift.property)

# balanceType (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

The type of value that the balance represents, such as money or points.

## Declaration

```swift
var balanceType: PKStoredValuePassBalance.BalanceType { get }
```

## See Also

### Getting the pass status

- [expiryDate](expirydate.md): The date that the balance expires.
- [amount](amount-2nwf5.md): The current balance of a stored-value pass in money or points.
- [currencyCode](currencycode.md): The ISO 4217 currency code of the balance.
- [PKStoredValuePassBalance.BalanceType](balancetype-swift.struct.md): The type of value that the balance represents, such as money or points.

# balanceType (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

The type of value that the balance represents, such as money or points.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) PKStoredValuePassBalanceType balanceType;
```

## See Also

### Getting the pass status

- [expiryDate](expirydate.md): The date that the balance expires.
- [amount](amount-2vfd3.md): The current balance in money or points.
- [currencyCode](currencycode.md): The ISO 4217 currency code of the balance.
- [PKStoredValuePassBalanceType](balancetype-swift.struct.md): The type of value that the balance represents, such as money or points.
