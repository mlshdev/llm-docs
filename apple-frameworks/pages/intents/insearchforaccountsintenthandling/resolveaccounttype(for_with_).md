> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintenthandling/resolveaccounttype(for:with:)](https://developer.apple.com/documentation/intents/insearchforaccountsintenthandling/resolveaccounttype(for:with:))

# resolveAccountType(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the account type to look for in a search.

## Declaration

```swift
optional func resolveAccountType(for intent: INSearchForAccountsIntent, with completion: @escaping @Sendable (INAccountTypeResolutionResult) -> Void)
```

```swift
optional func resolveAccountType(for intent: INSearchForAccountsIntent) async -> INAccountTypeResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

<a id="Discussion"></a>

## Discussion

Implement this question to resolve any questions about the account type to look for in a search. Use this method to examine the [accountType](../insearchforaccountsintent/accounttype.md) property of the intent object. Return a successful resolution if you can search for accounts of the specified type.

## See Also

### Resolving the Intent Parameters

- [resolveAccountNickname(for:with:)](resolveaccountnickname%28for_with_%29.md): Resolves the account nickname to use during a search.
- [resolveOrganizationName(for:with:)](resolveorganizationname%28for_with_%29.md): Resolves the organization name to use during a search.
- [resolveRequestedBalanceType(for:with:)](resolverequestedbalancetype%28for_with_%29.md): Resolves the balance type to look for in a search.

# resolveAccountTypeForSearchForAccounts:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the account type to look for in a search.

## Declaration

```objectivec
- (void) resolveAccountTypeForSearchForAccounts:(INSearchForAccountsIntent *) intent withCompletion:(void (^)(INAccountTypeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

<a id="Discussion"></a>

## Discussion

Implement this question to resolve any questions about the account type to look for in a search. Use this method to examine the [accountType](../insearchforaccountsintent/accounttype.md) property of the intent object. Return a successful resolution if you can search for accounts of the specified type.

## See Also

### Resolving the Intent Parameters

- [resolveAccountNicknameForSearchForAccounts:withCompletion:](resolveaccountnickname%28for_with_%29.md): Resolves the account nickname to use during a search.
- [resolveOrganizationNameForSearchForAccounts:withCompletion:](resolveorganizationname%28for_with_%29.md): Resolves the organization name to use during a search.
- [resolveRequestedBalanceTypeForSearchForAccounts:withCompletion:](resolverequestedbalancetype%28for_with_%29.md): Resolves the balance type to look for in a search.
