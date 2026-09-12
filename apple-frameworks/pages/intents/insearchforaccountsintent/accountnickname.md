> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintent/accountnickname](https://developer.apple.com/documentation/intents/insearchforaccountsintent/accountnickname)

# accountNickname (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The nickname that the user assigned to the account.

## Declaration

```swift
@NSCopying var accountNickname: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

When the user provides a nickname, look for an account whose name contains all or part of the specified string. Match the string against the user-visible nickname shown by your app.

## See Also

### Getting the Search Attributes

- [accountType](accounttype.md): The type of the account.
- [organizationName](organizationname.md): The name of an organization attached to the account.
- [requestedBalanceType](requestedbalancetype.md): The balance type requested by the user.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.

# accountNickname (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The nickname that the user assigned to the account.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * accountNickname;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * accountNickname;
```

<a id="Discussion"></a>

## Discussion

When the user provides a nickname, look for an account whose name contains all or part of the specified string. Match the string against the user-visible nickname shown by your app.

## See Also

### Getting the Search Attributes

- [accountType](accounttype.md): The type of the account.
- [organizationName](organizationname.md): The name of an organization attached to the account.
- [requestedBalanceType](requestedbalancetype.md): The balance type requested by the user.
- [INBalanceType](../inbalancetype.md): Constants indicating the meaning of a balance.
