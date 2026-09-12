> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccount/credential](https://developer.apple.com/documentation/accounts/acaccount/credential)

# credential (Swift)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The credential used to authenticate the user of this account.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
var credential: ACAccountCredential! { get set }
```

<a id="Discussion"></a>

## Discussion

This property is required and must be set before the account is saved. For privacy reasons, this property is inaccessible after the account is saved.

## See Also

### Accessing Properties

- [accountDescription](accountdescription.md): Deprecated. A human-readable description of the account.
- [accountType](accounttype.md): Deprecated. The type of service account.
- [identifier](identifier.md): Deprecated. A unique identifier for this account.
- [username](username.md): Deprecated. The username for this account.
- [userFullName](userfullname.md): Deprecated. The full name associated with the user account.

# credential (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The credential used to authenticate the user of this account.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@property (nonatomic, strong) ACAccountCredential * credential;
```

```objectivec
@property (atomic, strong) ACAccountCredential * credential;
```

<a id="Discussion"></a>

## Discussion

This property is required and must be set before the account is saved. For privacy reasons, this property is inaccessible after the account is saved.

## See Also

### Accessing Properties

- [accountDescription](accountdescription.md): Deprecated. A human-readable description of the account.
- [accountType](accounttype.md): Deprecated. The type of service account.
- [identifier](identifier.md): Deprecated. A unique identifier for this account.
- [username](username.md): Deprecated. The username for this account.
- [userFullName](userfullname.md): Deprecated. The full name associated with the user account.
