> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acaccountstore](https://developer.apple.com/documentation/accounts/acaccountstore)

# ACAccountStore (Swift)

**Framework:** Accounts  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The object you use to request, manage, and store the user’s account information.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```swift
class ACAccountStore
```

<a id="overview"></a>

## Overview

The [ACAccountStore](acaccountstore.md) class provides an interface for accessing, managing, and storing accounts. To create and retrieve accounts from the Accounts database, you must create an [ACAccountStore](acaccountstore.md) object. Each [ACAccount](acaccount.md) object belongs to a single account store object.

## Topics

### Requesting Access

- [requestAccessToAccounts(with:options:completion:)](acaccountstore/requestaccesstoaccounts%28with_options_completion_%29.md): Deprecated. Obtains permission to access protected user properties.
- [ACAccountStoreRequestAccessCompletionHandler](acaccountstorerequestaccesscompletionhandler.md): Specifies a handler to call when access is granted or denied.

### Getting Accounts

- [accounts](acaccountstore/accounts.md): Deprecated. The accounts managed by this account store.
- [account(withIdentifier:)](acaccountstore/account%28withidentifier_%29.md): Deprecated. Returns the account with the specified identifier.
- [accounts(with:)](acaccountstore/accounts%28with_%29.md): Deprecated. Returns all accounts of the specified type.

### Getting Account Types

- [accountType(withAccountTypeIdentifier:)](acaccountstore/accounttype%28withaccounttypeidentifier_%29.md): Deprecated. Returns an account type that matches the specified identifier.

### Saving Accounts

- [saveAccount(\_:withCompletionHandler:)](acaccountstore/saveaccount%28__withcompletionhandler_%29.md): Deprecated. Saves an account to the Accounts database.
- [ACAccountStoreSaveCompletionHandler](acaccountstoresavecompletionhandler.md): Specifies a handler to call when an Accounts database operation is complete.

### Renewing Account Credentials

- [renewCredentials(for:completion:)](acaccountstore/renewcredentials%28for_completion_%29.md): Deprecated. Renews account credentials when the credentials are no longer valid.
- [ACAccountStoreCredentialRenewalHandler](acaccountstorecredentialrenewalhandler.md): Specifies a handler to call when credentials are renewed.
- [ACAccountCredentialRenewResult](acaccountcredentialrenewresult.md): Status codes of credential renewal requests.

### Removing Accounts

- [removeAccount(\_:withCompletionHandler:)](acaccountstore/removeaccount%28__withcompletionhandler_%29.md): Deprecated. Removes an account from the account store.
- [ACAccountStoreRemoveCompletionHandler](acaccountstoreremovecompletionhandler.md): Specifies a handler to call when an account is removed from the store.

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

- [ACAccount](acaccount.md): Deprecated. The information associated with one of the user’s accounts.
- [ACAccountCredential](acaccountcredential.md): Deprecated. A credential object that encapsulates the information needed to authenticate a user.

# ACAccountStore (Objective-C)

**Framework:** Accounts  
**Kind:** Class  
**Availability:** iOS 6.0+ (deprecated in 15.0) · iPadOS 6.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.8+ (deprecated in 12.0)

The object you use to request, manage, and store the user’s account information.

> Use appropriate non-Apple SDK corresponding to the type of account you want to reference instead

## Declaration

```objectivec
@interface ACAccountStore : NSObject
```

<a id="overview"></a>

## Overview

The [ACAccountStore](acaccountstore.md) class provides an interface for accessing, managing, and storing accounts. To create and retrieve accounts from the Accounts database, you must create an [ACAccountStore](acaccountstore.md) object. Each [ACAccount](acaccount.md) object belongs to a single account store object.

## Topics

### Requesting Access

- [requestAccessToAccountsWithType:withCompletionHandler:](acaccountstore/requestaccesstoaccountswithtype_withcompletionhandler_.md): Deprecated. Requests access to accounts of the specified type.
- [requestAccessToAccountsWithType:options:completion:](acaccountstore/requestaccesstoaccounts%28with_options_completion_%29.md): Deprecated. Obtains permission to access protected user properties.
- [ACAccountStoreRequestAccessCompletionHandler](acaccountstorerequestaccesscompletionhandler.md): Specifies a handler to call when access is granted or denied.

### Getting Accounts

- [accounts](acaccountstore/accounts.md): Deprecated. The accounts managed by this account store.
- [accountWithIdentifier:](acaccountstore/account%28withidentifier_%29.md): Deprecated. Returns the account with the specified identifier.
- [accountsWithAccountType:](acaccountstore/accounts%28with_%29.md): Deprecated. Returns all accounts of the specified type.

### Getting Account Types

- [accountTypeWithAccountTypeIdentifier:](acaccountstore/accounttype%28withaccounttypeidentifier_%29.md): Deprecated. Returns an account type that matches the specified identifier.

### Saving Accounts

- [saveAccount:withCompletionHandler:](acaccountstore/saveaccount%28__withcompletionhandler_%29.md): Deprecated. Saves an account to the Accounts database.
- [ACAccountStoreSaveCompletionHandler](acaccountstoresavecompletionhandler.md): Specifies a handler to call when an Accounts database operation is complete.

### Renewing Account Credentials

- [renewCredentialsForAccount:completion:](acaccountstore/renewcredentials%28for_completion_%29.md): Deprecated. Renews account credentials when the credentials are no longer valid.
- [ACAccountStoreCredentialRenewalHandler](acaccountstorecredentialrenewalhandler.md): Specifies a handler to call when credentials are renewed.
- [ACAccountCredentialRenewResult](acaccountcredentialrenewresult.md): Status codes of credential renewal requests.

### Removing Accounts

- [removeAccount:withCompletionHandler:](acaccountstore/removeaccount%28__withcompletionhandler_%29.md): Deprecated. Removes an account from the account store.
- [ACAccountStoreRemoveCompletionHandler](acaccountstoreremovecompletionhandler.md): Specifies a handler to call when an account is removed from the store.

### Responding to Changes

- [ACAccountStoreDidChangeNotification](acaccountstoredidchangenotification.md): Deprecated. Posted when the accounts managed by this account store changed in the database.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Account Management

- [ACAccount](acaccount.md): Deprecated. The information associated with one of the user’s accounts.
- [ACAccountCredential](acaccountcredential.md): Deprecated. A credential object that encapsulates the information needed to authenticate a user.
