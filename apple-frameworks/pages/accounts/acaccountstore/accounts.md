> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstore/accounts](https://developer.apple.com/documentation/accounts/acaccountstore/accounts)

# accounts (Swift)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The accounts managed by this account store.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
weak var accounts: NSArray! { get }
```

## See Also

### Getting Accounts

- [account(withIdentifier:)](account%28withidentifier_%29.md): Deprecated. Returns the account with the specified identifier.
- [accounts(with:)](accounts%28with_%29.md): Deprecated. Returns all accounts of the specified type.

# accounts (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The accounts managed by this account store.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@property (nonatomic, weak, readonly) NSArray * accounts;
```

```objectivec
@property (atomic, weak, readonly) NSArray * accounts;
```

## See Also

### Getting Accounts

- [accountWithIdentifier:](account%28withidentifier_%29.md): Deprecated. Returns the account with the specified identifier.
- [accountsWithAccountType:](accounts%28with_%29.md): Deprecated. Returns all accounts of the specified type.
