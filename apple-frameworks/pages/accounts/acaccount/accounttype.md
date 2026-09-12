> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccount/accounttype](https://developer.apple.com/documentation/accounts/acaccount/accounttype)

# accountType (Swift)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The type of service account.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
var accountType: ACAccountType! { get set }
```

<a id="Discussion"></a>

## Discussion

This property is required. You specify the account type using the [init(accountType:)](init%28accounttype_%29.md) method. You can use the [accounts(with:)](../acaccountstore/accounts%28with_%29.md) method to retrieve all accounts of a particular type.

## See Also

### Accessing Properties

- [accountDescription](accountdescription.md): Deprecated. A human-readable description of the account.
- [credential](credential.md): Deprecated. The credential used to authenticate the user of this account.
- [identifier](identifier.md): Deprecated. A unique identifier for this account.
- [username](username.md): Deprecated. The username for this account.
- [userFullName](userfullname.md): Deprecated. The full name associated with the user account.

# accountType (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The type of service account.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@property (nonatomic, strong) ACAccountType * accountType;
```

```objectivec
@property (atomic, strong) ACAccountType * accountType;
```

<a id="Discussion"></a>

## Discussion

This property is required. You specify the account type using the [initWithAccountType:](init%28accounttype_%29.md) method. You can use the [accountsWithAccountType:](../acaccountstore/accounts%28with_%29.md) method to retrieve all accounts of a particular type.

## See Also

### Accessing Properties

- [accountDescription](accountdescription.md): Deprecated. A human-readable description of the account.
- [credential](credential.md): Deprecated. The credential used to authenticate the user of this account.
- [identifier](identifier.md): Deprecated. A unique identifier for this account.
- [username](username.md): Deprecated. The username for this account.
- [userFullName](userfullname.md): Deprecated. The full name associated with the user account.
