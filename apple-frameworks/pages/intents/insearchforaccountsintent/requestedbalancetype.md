> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintent/requestedbalancetype](https://developer.apple.com/documentation/intents/insearchforaccountsintent/requestedbalancetype)

# requestedBalanceType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The balance type requested by the user.

## Declaration

```swift
var requestedBalanceType: INBalanceType { get }
```

<a id="Discussion"></a>

## Discussion

If this property contains a value other than [INBalanceType.unknown](../inbalancetype/unknown.md), use the value to retrieve the balance associated with the specified account. Include the balance information in your response object.

## See Also

### Getting the Search Attributes

- [accountNickname](accountnickname.md): The nickname that the user assigned to the account.
- [accountType](accounttype.md): The type of the account.
- [organizationName](organizationname.md): The name of an organization attached to the account.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.

# requestedBalanceType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The balance type requested by the user.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INBalanceType requestedBalanceType;
```

```objectivec
@property (atomic, assign, readonly) INBalanceType requestedBalanceType;
```

<a id="Discussion"></a>

## Discussion

If this property contains a value other than [INBalanceTypeUnknown](../inbalancetype/unknown.md), use the value to retrieve the balance associated with the specified account. Include the balance information in your response object.

## See Also

### Getting the Search Attributes

- [accountNickname](accountnickname.md): The nickname that the user assigned to the account.
- [accountType](accounttype.md): The type of the account.
- [organizationName](organizationname.md): The name of an organization attached to the account.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.
