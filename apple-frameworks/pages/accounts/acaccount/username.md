> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccount/username](https://developer.apple.com/documentation/accounts/acaccount/username)

# username (Swift)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The username for this account.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
var username: String! { get set }
```

<a id="Discussion"></a>

## Discussion

This property must be set before the account is saved. After the account is saved, this property is available if the user grants the application access to this account; otherwise it’s `nil`.

## See Also

### Accessing Properties

- [accountDescription](accountdescription.md): Deprecated. A human-readable description of the account.
- [accountType](accounttype.md): Deprecated. The type of service account.
- [credential](credential.md): Deprecated. The credential used to authenticate the user of this account.
- [identifier](identifier.md): Deprecated. A unique identifier for this account.
- [userFullName](userfullname.md): Deprecated. The full name associated with the user account.

# username (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The username for this account.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@property (nonatomic, copy) NSString * username;
```

```objectivec
@property (atomic, copy) NSString * username;
```

<a id="Discussion"></a>

## Discussion

This property must be set before the account is saved. After the account is saved, this property is available if the user grants the application access to this account; otherwise it’s `nil`.

## See Also

### Accessing Properties

- [accountDescription](accountdescription.md): Deprecated. A human-readable description of the account.
- [accountType](accounttype.md): Deprecated. The type of service account.
- [credential](credential.md): Deprecated. The credential used to authenticate the user of this account.
- [identifier](identifier.md): Deprecated. A unique identifier for this account.
- [userFullName](userfullname.md): Deprecated. The full name associated with the user account.
