> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccount/accountdescription](https://developer.apple.com/documentation/accounts/acaccount/accountdescription)

# accountDescription (Swift)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

A human-readable description of the account.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
var accountDescription: String! { get set }
```

<a id="Discussion"></a>

## Discussion

This property is available if the user grants the application access to this account; otherwise it’s `nil`.

## See Also

### Accessing Properties

- [accountType](accounttype.md): Deprecated. The type of service account.
- [credential](credential.md): Deprecated. The credential used to authenticate the user of this account.
- [identifier](identifier.md): Deprecated. A unique identifier for this account.
- [username](username.md): Deprecated. The username for this account.
- [userFullName](userfullname.md): Deprecated. The full name associated with the user account.

# accountDescription (Objective-C)

**Framework:** Accounts  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

A human-readable description of the account.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@property (nonatomic, copy) NSString * accountDescription;
```

```objectivec
@property (atomic, copy) NSString * accountDescription;
```

<a id="Discussion"></a>

## Discussion

This property is available if the user grants the application access to this account; otherwise it’s `nil`.

## See Also

### Accessing Properties

- [accountType](accounttype.md): Deprecated. The type of service account.
- [credential](credential.md): Deprecated. The credential used to authenticate the user of this account.
- [identifier](identifier.md): Deprecated. A unique identifier for this account.
- [username](username.md): Deprecated. The username for this account.
- [userFullName](userfullname.md): Deprecated. The full name associated with the user account.
