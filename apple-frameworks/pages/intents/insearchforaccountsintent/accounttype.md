> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintent/accounttype](https://developer.apple.com/documentation/intents/insearchforaccountsintent/accounttype)

# accountType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The type of the account.

## Declaration

```swift
var accountType: INAccountType { get }
```

<a id="Discussion"></a>

## Discussion

If this property contains a value other than [INAccountType.unknown](../inaccounttype/unknown.md), use the value to limit your search to accounts of the specified type.

## See Also

### Getting the Search Attributes

- [accountNickname](accountnickname.md): The nickname that the user assigned to the account.
- [organizationName](organizationname.md): The name of an organization attached to the account.
- [requestedBalanceType](requestedbalancetype.md): The balance type requested by the user.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.

# accountType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The type of the account.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INAccountType accountType;
```

```objectivec
@property (atomic, assign, readonly) INAccountType accountType;
```

<a id="Discussion"></a>

## Discussion

If this property contains a value other than [INAccountTypeUnknown](../inaccounttype/unknown.md), use the value to limit your search to accounts of the specified type.

## See Also

### Getting the Search Attributes

- [accountNickname](accountnickname.md): The nickname that the user assigned to the account.
- [organizationName](organizationname.md): The name of an organization attached to the account.
- [requestedBalanceType](requestedbalancetype.md): The balance type requested by the user.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.
