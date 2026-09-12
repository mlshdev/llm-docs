> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbalancetype](https://developer.apple.com/documentation/intents/inbalancetype)

# INBalanceType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the meaning of a balance.

## Declaration

```swift
enum INBalanceType
```

## Topics

### Constants

- [INBalanceType.unknown](inbalancetype/unknown.md): An unknown balance type.
- [INBalanceType.money](inbalancetype/money.md): A monetary balance involving a known currency.
- [INBalanceType.points](inbalancetype/points.md): A balance of points, such as those associated with a reward or bonus program.
- [INBalanceType.miles](inbalancetype/miles.md): A balance of miles, such as those associated with a frequent flier program.

### Initializers

- [init(rawValue:)](inbalancetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Search Attributes

- [accountNickname](insearchforaccountsintent/accountnickname.md): The nickname that the user assigned to the account.
- [accountType](insearchforaccountsintent/accounttype.md): The type of the account.
- [organizationName](insearchforaccountsintent/organizationname.md): The name of an organization attached to the account.
- [requestedBalanceType](insearchforaccountsintent/requestedbalancetype.md): The balance type requested by the user.

# INBalanceType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the meaning of a balance.

## Declaration

```objectivec
enum INBalanceType : NSInteger;
```

## Topics

### Constants

- [INBalanceTypeUnknown](inbalancetype/unknown.md): An unknown balance type.
- [INBalanceTypeMoney](inbalancetype/money.md): A monetary balance involving a known currency.
- [INBalanceTypePoints](inbalancetype/points.md): A balance of points, such as those associated with a reward or bonus program.
- [INBalanceTypeMiles](inbalancetype/miles.md): A balance of miles, such as those associated with a frequent flier program.

## See Also

### Getting the Search Attributes

- [accountNickname](insearchforaccountsintent/accountnickname.md): The nickname that the user assigned to the account.
- [accountType](insearchforaccountsintent/accounttype.md): The type of the account.
- [organizationName](insearchforaccountsintent/organizationname.md): The name of an organization attached to the account.
- [requestedBalanceType](insearchforaccountsintent/requestedbalancetype.md): The balance type requested by the user.
