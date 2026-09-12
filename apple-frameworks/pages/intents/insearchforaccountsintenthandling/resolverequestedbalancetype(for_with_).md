> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintenthandling/resolverequestedbalancetype(for:with:)](https://developer.apple.com/documentation/intents/insearchforaccountsintenthandling/resolverequestedbalancetype(for:with:))

# resolveRequestedBalanceType(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the balance type to look for in a search.

## Declaration

```swift
optional func resolveRequestedBalanceType(for intent: INSearchForAccountsIntent, with completion: @escaping @Sendable (INBalanceTypeResolutionResult) -> Void)
```

```swift
optional func resolveRequestedBalanceType(for intent: INSearchForAccountsIntent) async -> INBalanceTypeResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any questions about the balance type to look for in a search. Use this method to examine the [requestedBalanceType](../insearchforaccountsintent/requestedbalancetype.md) property of the `intent` object. Return a successful resolution if you can retrieve the specified balance information from the user’s account as part of your search. If you do not support the specified balance type, return a different balance type and ask for confirmation.

## See Also

### Resolving the Intent Parameters

- [resolveAccountNickname(for:with:)](resolveaccountnickname%28for_with_%29.md): Resolves the account nickname to use during a search.
- [resolveAccountType(for:with:)](resolveaccounttype%28for_with_%29.md): Resolves the account type to look for in a search.
- [resolveOrganizationName(for:with:)](resolveorganizationname%28for_with_%29.md): Resolves the organization name to use during a search.

# resolveRequestedBalanceTypeForSearchForAccounts:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the balance type to look for in a search.

## Declaration

```objectivec
- (void) resolveRequestedBalanceTypeForSearchForAccounts:(INSearchForAccountsIntent *) intent withCompletion:(void (^)(INBalanceTypeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any questions about the balance type to look for in a search. Use this method to examine the [requestedBalanceType](../insearchforaccountsintent/requestedbalancetype.md) property of the `intent` object. Return a successful resolution if you can retrieve the specified balance information from the user’s account as part of your search. If you do not support the specified balance type, return a different balance type and ask for confirmation.

## See Also

### Resolving the Intent Parameters

- [resolveAccountNicknameForSearchForAccounts:withCompletion:](resolveaccountnickname%28for_with_%29.md): Resolves the account nickname to use during a search.
- [resolveAccountTypeForSearchForAccounts:withCompletion:](resolveaccounttype%28for_with_%29.md): Resolves the account type to look for in a search.
- [resolveOrganizationNameForSearchForAccounts:withCompletion:](resolveorganizationname%28for_with_%29.md): Resolves the organization name to use during a search.
