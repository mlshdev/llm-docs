> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkstoredvaluepassbalance/balancetype-swift.struct](https://developer.apple.com/documentation/passkit/pkstoredvaluepassbalance/balancetype-swift.struct)

# PKStoredValuePassBalance.BalanceType (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The type of value that the balance represents, such as money or points.

## Declaration

```swift
struct BalanceType
```

## Topics

### Creating a balance type

- [init(rawValue:)](balancetype-swift.struct/init%28rawvalue_%29.md): Creates a balance type.

### Reading the balance type

- [cash](balancetype-swift.struct/cash.md): An identifier indicating a balance that represents money.
- [loyaltyPoints](balancetype-swift.struct/loyaltypoints.md): An identifier indicating a balance that represents points.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the pass status

- [expiryDate](expirydate.md): The date that the balance expires.
- [amount](amount-2nwf5.md): The current balance of a stored-value pass in money or points.
- [balanceType](balancetype-swift.property.md): The type of value that the balance represents, such as money or points.
- [currencyCode](currencycode.md): The ISO 4217 currency code of the balance.

# PKStoredValuePassBalanceType (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The type of value that the balance represents, such as money or points.

## Declaration

```objectivec
typedef NSString * PKStoredValuePassBalanceType;
```

## Topics

### Reading the balance type

- [PKStoredValuePassBalanceTypeCash](balancetype-swift.struct/cash.md): An identifier indicating a balance that represents money.
- [PKStoredValuePassBalanceTypeLoyaltyPoints](balancetype-swift.struct/loyaltypoints.md): An identifier indicating a balance that represents points.

## See Also

### Getting the pass status

- [expiryDate](expirydate.md): The date that the balance expires.
- [amount](amount-2vfd3.md): The current balance in money or points.
- [balanceType](balancetype-swift.property.md): The type of value that the balance represents, such as money or points.
- [currencyCode](currencycode.md): The ISO 4217 currency code of the balance.
