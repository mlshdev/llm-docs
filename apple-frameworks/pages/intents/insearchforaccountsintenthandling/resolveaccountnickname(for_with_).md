> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforaccountsintenthandling/resolveaccountnickname(for:with:)](https://developer.apple.com/documentation/intents/insearchforaccountsintenthandling/resolveaccountnickname(for:with:))

# resolveAccountNickname(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the account nickname to use during a search.

## Declaration

```swift
optional func resolveAccountNickname(for intent: INSearchForAccountsIntent, with completion: @escaping @Sendable (INSpeakableStringResolutionResult) -> Void)
```

```swift
optional func resolveAccountNickname(for intent: INSearchForAccountsIntent) async -> INSpeakableStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any questions about the account nickname used during a search. Use this method to examine the [accountNickname](../insearchforaccountsintent/accountnickname.md) property of the `intent` object. Return a resolution of success if you can perform the search using the specified nickname. If the property does not contain a value, return a resolution of success or not required based if you can use other information in the `intent` object to perform the search.

## See Also

### Resolving the Intent Parameters

- [resolveAccountType(for:with:)](resolveaccounttype%28for_with_%29.md): Resolves the account type to look for in a search.
- [resolveOrganizationName(for:with:)](resolveorganizationname%28for_with_%29.md): Resolves the organization name to use during a search.
- [resolveRequestedBalanceType(for:with:)](resolverequestedbalancetype%28for_with_%29.md): Resolves the balance type to look for in a search.

# resolveAccountNicknameForSearchForAccounts:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the account nickname to use during a search.

## Declaration

```objectivec
- (void) resolveAccountNicknameForSearchForAccounts:(INSearchForAccountsIntent *) intent withCompletion:(void (^)(INSpeakableStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any questions about the account nickname used during a search. Use this method to examine the [accountNickname](../insearchforaccountsintent/accountnickname.md) property of the `intent` object. Return a resolution of success if you can perform the search using the specified nickname. If the property does not contain a value, return a resolution of success or not required based if you can use other information in the `intent` object to perform the search.

## See Also

### Resolving the Intent Parameters

- [resolveAccountTypeForSearchForAccounts:withCompletion:](resolveaccounttype%28for_with_%29.md): Resolves the account type to look for in a search.
- [resolveOrganizationNameForSearchForAccounts:withCompletion:](resolveorganizationname%28for_with_%29.md): Resolves the organization name to use during a search.
- [resolveRequestedBalanceTypeForSearchForAccounts:withCompletion:](resolverequestedbalancetype%28for_with_%29.md): Resolves the balance type to look for in a search.
