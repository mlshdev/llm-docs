> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassbalance/currencycode](https://developer.apple.com/documentation/passkit/pkstoredvaluepassbalance/currencycode)

# currencyCode (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

The ISO 4217 currency code of the balance.

## Declaration

```swift
var currencyCode: String? { get }
```

## See Also

### Getting the pass status

- [expiryDate](expirydate.md): The date that the balance expires.
- [amount](amount-2nwf5.md): The current balance of a stored-value pass in money or points.
- [balanceType](balancetype-swift.property.md): The type of value that the balance represents, such as money or points.
- [PKStoredValuePassBalance.BalanceType](balancetype-swift.struct.md): The type of value that the balance represents, such as money or points.

# currencyCode (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS · visionOS 1.0+ · watchOS 8.0+

The ISO 4217 currency code of the balance.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * currencyCode;
```

## See Also

### Getting the pass status

- [expiryDate](expirydate.md): The date that the balance expires.
- [amount](amount-2vfd3.md): The current balance in money or points.
- [balanceType](balancetype-swift.property.md): The type of value that the balance represents, such as money or points.
- [PKStoredValuePassBalanceType](balancetype-swift.struct.md): The type of value that the balance represents, such as money or points.
