> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintent/organizationname](https://developer.apple.com/documentation/intents/insearchforaccountsintent/organizationname)

# organizationName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The name of an organization attached to the account.

## Declaration

```swift
@NSCopying var organizationName: INSpeakableString? { get }
```

## See Also

### Getting the Search Attributes

- [accountNickname](accountnickname.md): The nickname that the user assigned to the account.
- [accountType](accounttype.md): The type of the account.
- [requestedBalanceType](requestedbalancetype.md): The balance type requested by the user.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.

# organizationName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The name of an organization attached to the account.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * organizationName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * organizationName;
```

## See Also

### Getting the Search Attributes

- [accountNickname](accountnickname.md): The nickname that the user assigned to the account.
- [accountType](accounttype.md): The type of the account.
- [requestedBalanceType](requestedbalancetype.md): The balance type requested by the user.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.
