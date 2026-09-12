> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccount](https://developer.apple.com/documentation/accounts/acaccount)

# ACAccount (Swift)

**Framework:** Accounts  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The information associated with one of the user’s accounts.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
class ACAccount
```

<a id="overview"></a>

## Overview

An [ACAccount](acaccount.md) object encapsulates information about a user account stored in the Accounts database. You can create and retrieve accounts using an [ACAccountStore](acaccountstore.md) object. The [ACAccountStore](acaccountstore.md) object provides an interface to the persistent Accounts database. For each user, all account objects belong to a single [ACAccountStore](acaccountstore.md) object.

## Topics

### Creating an Account Object

- [init(accountType:)](acaccount/init%28accounttype_%29.md): Deprecated. Initializes a new account of the specified type.

### Accessing Properties

- [accountDescription](acaccount/accountdescription.md): Deprecated. A human-readable description of the account.
- [accountType](acaccount/accounttype.md): Deprecated. The type of service account.
- [credential](acaccount/credential.md): Deprecated. The credential used to authenticate the user of this account.
- [identifier](acaccount/identifier.md): Deprecated. A unique identifier for this account.
- [username](acaccount/username.md): Deprecated. The username for this account.
- [userFullName](acaccount/userfullname.md): Deprecated. The full name associated with the user account.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Account Management

- [ACAccountStore](acaccountstore.md): Deprecated. The object you use to request, manage, and store the user’s account information.
- [ACAccountCredential](acaccountcredential.md): Deprecated. A credential object that encapsulates the information needed to authenticate a user.

# ACAccount (Objective-C)

**Framework:** Accounts  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The information associated with one of the user’s accounts.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@interface ACAccount : NSObject
```

<a id="overview"></a>

## Overview

An [ACAccount](acaccount.md) object encapsulates information about a user account stored in the Accounts database. You can create and retrieve accounts using an [ACAccountStore](acaccountstore.md) object. The [ACAccountStore](acaccountstore.md) object provides an interface to the persistent Accounts database. For each user, all account objects belong to a single [ACAccountStore](acaccountstore.md) object.

## Topics

### Creating an Account Object

- [initWithAccountType:](acaccount/init%28accounttype_%29.md): Deprecated. Initializes a new account of the specified type.

### Accessing Properties

- [accountDescription](acaccount/accountdescription.md): Deprecated. A human-readable description of the account.
- [accountType](acaccount/accounttype.md): Deprecated. The type of service account.
- [credential](acaccount/credential.md): Deprecated. The credential used to authenticate the user of this account.
- [identifier](acaccount/identifier.md): Deprecated. A unique identifier for this account.
- [username](acaccount/username.md): Deprecated. The username for this account.
- [userFullName](acaccount/userfullname.md): Deprecated. The full name associated with the user account.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Account Management

- [ACAccountStore](acaccountstore.md): Deprecated. The object you use to request, manage, and store the user’s account information.
- [ACAccountCredential](acaccountcredential.md): Deprecated. A credential object that encapsulates the information needed to authenticate a user.
