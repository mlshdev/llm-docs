> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassbalance/expirydate](https://developer.apple.com/documentation/passkit/pkstoredvaluepassbalance/expirydate)

# expiryDate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

The date that the balance expires.

## Declaration

```swift
var expiryDate: Date? { get }
```

## See Also

### Getting the pass status

- [amount](amount-2nwf5.md): The current balance of a stored-value pass in money or points.
- [balanceType](balancetype-swift.property.md): The type of value that the balance represents, such as money or points.
- [currencyCode](currencycode.md): The ISO 4217 currency code of the balance.
- [PKStoredValuePassBalance.BalanceType](balancetype-swift.struct.md): The type of value that the balance represents, such as money or points.

# expiryDate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

The date that the balance expires.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSDate * expiryDate;
```

## See Also

### Getting the pass status

- [amount](amount-2vfd3.md): The current balance in money or points.
- [balanceType](balancetype-swift.property.md): The type of value that the balance represents, such as money or points.
- [currencyCode](currencycode.md): The ISO 4217 currency code of the balance.
- [PKStoredValuePassBalanceType](balancetype-swift.struct.md): The type of value that the balance represents, such as money or points.
