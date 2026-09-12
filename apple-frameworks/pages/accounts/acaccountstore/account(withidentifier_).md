> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstore/account(withidentifier:)](https://developer.apple.com/documentation/accounts/acaccountstore/account(withidentifier:))

# account(withIdentifier:) (Swift)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Returns the account with the specified identifier.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
func account(withIdentifier identifier: String!) -> ACAccount!
```

## Parameters

- `identifier`: A unique identifier for an account.

<a id="return-value"></a>

## Return Value

The account that matches the value specified in `identifier`.

## See Also

### Getting Accounts

- [accounts](accounts.md): Deprecated. The accounts managed by this account store.
- [accounts(with:)](accounts%28with_%29.md): Deprecated. Returns all accounts of the specified type.

# accountWithIdentifier: (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

Returns the account with the specified identifier.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
- (ACAccount *) accountWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A unique identifier for an account.

<a id="return-value"></a>

## Return Value

The account that matches the value specified in `identifier`.

## See Also

### Getting Accounts

- [accounts](accounts.md): Deprecated. The accounts managed by this account store.
- [accountsWithAccountType:](accounts%28with_%29.md): Deprecated. Returns all accounts of the specified type.
