> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstore/accounts(with:)](https://developer.apple.com/documentation/accounts/acaccountstore/accounts(with:))

# accounts(with:) (Swift)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Returns all accounts of the specified type.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
func accounts(with accountType: ACAccountType!) -> [Any]!
```

## Parameters

- `accountType`: The type of an account.

<a id="return-value"></a>

## Return Value

All accounts that match `accountType`.

## See Also

### Getting Accounts

- [accounts](accounts.md): Deprecated. The accounts managed by this account store.
- [account(withIdentifier:)](account%28withidentifier_%29.md): Deprecated. Returns the account with the specified identifier.

# accountsWithAccountType: (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Returns all accounts of the specified type.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
- (NSArray *) accountsWithAccountType:(ACAccountType *) accountType;
```

## Parameters

- `accountType`: The type of an account.

<a id="return-value"></a>

## Return Value

All accounts that match `accountType`.

## See Also

### Getting Accounts

- [accounts](accounts.md): Deprecated. The accounts managed by this account store.
- [accountWithIdentifier:](account%28withidentifier_%29.md): Deprecated. Returns the account with the specified identifier.
