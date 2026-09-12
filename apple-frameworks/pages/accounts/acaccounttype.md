> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccounttype](https://developer.apple.com/documentation/accounts/acaccounttype)

# ACAccountType (Swift)

**Framework:** Accounts  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

An object that encapsulates information about all accounts of a particular type.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
class ACAccountType
```

<a id="overview"></a>

## Overview

You don’t create account type objects directly. To obtain an account type object, use the [accountType(withAccountTypeIdentifier:)](acaccountstore/accounttype%28withaccounttypeidentifier_%29.md) method or the [accountType](acaccount/accounttype.md) property of an account object. Use the [accounts(with:)](acaccountstore/accounts%28with_%29.md) method to obtain all accounts of a particular type.

## Topics

### Accessing Properties

- [accessGranted](acaccounttype/accessgranted.md): Deprecated. A Boolean value indicating whether the user granted the application access to accounts of this type.
- [accountTypeDescription](acaccounttype/accounttypedescription.md): Deprecated. A human-readable description of the account type.
- [identifier](acaccounttype/identifier.md): Deprecated. The unique identifier for the account type.

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

# ACAccountType (Objective-C)

**Framework:** Accounts  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

An object that encapsulates information about all accounts of a particular type.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@interface ACAccountType : NSObject
```

<a id="overview"></a>

## Overview

You don’t create account type objects directly. To obtain an account type object, use the [accountTypeWithAccountTypeIdentifier:](acaccountstore/accounttype%28withaccounttypeidentifier_%29.md) method or the [accountType](acaccount/accounttype.md) property of an account object. Use the [accountsWithAccountType:](acaccountstore/accounts%28with_%29.md) method to obtain all accounts of a particular type.

## Topics

### Accessing Properties

- [accessGranted](acaccounttype/accessgranted.md): Deprecated. A Boolean value indicating whether the user granted the application access to accounts of this type.
- [accountTypeDescription](acaccounttype/accounttypedescription.md): Deprecated. A human-readable description of the account type.
- [identifier](acaccounttype/identifier.md): Deprecated. The unique identifier for the account type.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
