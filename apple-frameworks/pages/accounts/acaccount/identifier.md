> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccount/identifier](https://developer.apple.com/documentation/accounts/acaccount/identifier)

# identifier (Swift)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

A unique identifier for this account.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
weak var identifier: NSString! { get }
```

<a id="Discussion"></a>

## Discussion

Use the [account(withIdentifier:)](../acaccountstore/account%28withidentifier_%29.md) method to get an account with the specified identifier.

## See Also

### Accessing Properties

- [accountDescription](accountdescription.md): Deprecated. A human-readable description of the account.
- [accountType](accounttype.md): Deprecated. The type of service account.
- [credential](credential.md): Deprecated. The credential used to authenticate the user of this account.
- [username](username.md): Deprecated. The username for this account.
- [userFullName](userfullname.md): Deprecated. The full name associated with the user account.

# identifier (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

A unique identifier for this account.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@property (nonatomic, weak, readonly) NSString * identifier;
```

```objectivec
@property (atomic, weak, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Use the [accountWithIdentifier:](../acaccountstore/account%28withidentifier_%29.md) method to get an account with the specified identifier.

## See Also

### Accessing Properties

- [accountDescription](accountdescription.md): Deprecated. A human-readable description of the account.
- [accountType](accounttype.md): Deprecated. The type of service account.
- [credential](credential.md): Deprecated. The credential used to authenticate the user of this account.
- [username](username.md): Deprecated. The username for this account.
- [userFullName](userfullname.md): Deprecated. The full name associated with the user account.
