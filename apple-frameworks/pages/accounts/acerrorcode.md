> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acerrorcode](https://developer.apple.com/documentation/accounts/acerrorcode)

# ACErrorCode (Swift)

**Framework:** Accounts  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Codes for errors that may occur.

## Declaration

```swift
struct ACErrorCode
```

## Topics

### Errors

- [ACErrorUnknown](acerrorunknown.md): Error code that indicates an unknown error occurred.
- [ACErrorAccountMissingRequiredProperty](acerroraccountmissingrequiredproperty.md): Error code that indicates an account wasn’t saved because a required property is missing.
- [ACErrorAccountAuthenticationFailed](acerroraccountauthenticationfailed.md): Error code that indicates an account wasn’t saved because authentication of its credential failed.
- [ACErrorAccountTypeInvalid](acerroraccounttypeinvalid.md): Error code that indicates an account wasn’t saved because its account type is invalid.
- [ACErrorAccountAlreadyExists](acerroraccountalreadyexists.md): Error code that indicates an account wasn’t added because it already exists.
- [ACErrorAccountNotFound](acerroraccountnotfound.md): Error code that indicates an account wasn’t deleted because it couldn’t be found.
- [ACErrorPermissionDenied](acerrorpermissiondenied.md): Error code that indicates the operation failed because the application doesn’t have permission to perform the operation.
- [ACErrorAccessInfoInvalid](acerroraccessinfoinvalid.md): Error code that indicates the client’s access info dictionary has incorrect or missing values.
- [ACErrorClientPermissionDenied](acerrorclientpermissiondenied.md): Error code that indicates the client doesn’t have access to the requested data.
- [ACErrorAccessDeniedByProtectionPolicy](acerroraccessdeniedbyprotectionpolicy.md): Error code that indicates due to the current protection policy, the credentials couldn’t be fetched.
- [ACErrorCredentialNotFound](acerrorcredentialnotfound.md): Error code that indicates no credentials were found.
- [ACErrorFetchCredentialFailed](acerrorfetchcredentialfailed.md): Error code that indicates the credentials couldn’t be fetched from Keychain.
- [ACErrorStoreCredentialFailed](acerrorstorecredentialfailed.md): Error code that indicates the credentials couldn’t be stored in Keychain.
- [ACErrorRemoveCredentialFailed](acerrorremovecredentialfailed.md): Error code that indicates the credentials couldn’t be removed from Keychain.
- [ACErrorUpdatingNonexistentAccount](acerrorupdatingnonexistentaccount.md): Error code that indicates an account save failed because the account being updated has been removed.
- [ACErrorInvalidClientBundleID](acerrorinvalidclientbundleid.md): Error code that indicates the client making the request doesn’t have a valid bundle ID.
- [ACErrorDeniedByPlugin](acerrordeniedbyplugin.md): Error code that indicates a plugin prevented the expected action from occurring.
- [ACErrorCoreDataSaveFailed](acerrorcoredatasavefailed.md): Error code that indicates an error occurred while trying to save to a Core Data store.
- [ACErrorFailedSerializingAccountInfo](acerrorfailedserializingaccountinfo.md): Error code that indicates an account’s information couldn’t be serialized.
- [ACErrorInvalidCommand](acerrorinvalidcommand.md): Error code that indicates an invalid command was attempted.
- [ACErrorMissingTransportMessageID](acerrormissingtransportmessageid.md): Error code that indicates an expected message identifier wasn’t found while performing a command.
- [ACErrorCredentialItemNotFound](acerrorcredentialitemnotfound.md): Error code that indicates a credential item wasn’t saved because it couldn’t be found.
- [ACErrorCredentialItemNotExpired](acerrorcredentialitemnotexpired.md): Error code that indicates a credential item wasn’t removed because it hasn’t yet expired.

### Initializers

- [init(\_:)](acerrorcode/init%28__%29.md): Initializes a new error code structure.
- [init(rawValue:)](acerrorcode/init%28rawvalue_%29.md): Initializes a new error code structure.

### Instance Properties

- [rawValue](acerrorcode/rawvalue.md): The raw integer value of the error code.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Errors

- [ACErrorDomain](acerrordomain.md): The error domain for the Accounts framework.

# ACErrorCode (Objective-C)

**Framework:** Accounts  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Codes for errors that may occur.

## Declaration

```objectivec
typedef enum ACErrorCode : unsigned int { ... } ACErrorCode;
```

## Topics

### Errors

- [ACErrorUnknown](acerrorunknown.md): Error code that indicates an unknown error occurred.
- [ACErrorAccountMissingRequiredProperty](acerroraccountmissingrequiredproperty.md): Error code that indicates an account wasn’t saved because a required property is missing.
- [ACErrorAccountAuthenticationFailed](acerroraccountauthenticationfailed.md): Error code that indicates an account wasn’t saved because authentication of its credential failed.
- [ACErrorAccountTypeInvalid](acerroraccounttypeinvalid.md): Error code that indicates an account wasn’t saved because its account type is invalid.
- [ACErrorAccountAlreadyExists](acerroraccountalreadyexists.md): Error code that indicates an account wasn’t added because it already exists.
- [ACErrorAccountNotFound](acerroraccountnotfound.md): Error code that indicates an account wasn’t deleted because it couldn’t be found.
- [ACErrorPermissionDenied](acerrorpermissiondenied.md): Error code that indicates the operation failed because the application doesn’t have permission to perform the operation.
- [ACErrorAccessInfoInvalid](acerroraccessinfoinvalid.md): Error code that indicates the client’s access info dictionary has incorrect or missing values.
- [ACErrorClientPermissionDenied](acerrorclientpermissiondenied.md): Error code that indicates the client doesn’t have access to the requested data.
- [ACErrorAccessDeniedByProtectionPolicy](acerroraccessdeniedbyprotectionpolicy.md): Error code that indicates due to the current protection policy, the credentials couldn’t be fetched.
- [ACErrorCredentialNotFound](acerrorcredentialnotfound.md): Error code that indicates no credentials were found.
- [ACErrorFetchCredentialFailed](acerrorfetchcredentialfailed.md): Error code that indicates the credentials couldn’t be fetched from Keychain.
- [ACErrorStoreCredentialFailed](acerrorstorecredentialfailed.md): Error code that indicates the credentials couldn’t be stored in Keychain.
- [ACErrorRemoveCredentialFailed](acerrorremovecredentialfailed.md): Error code that indicates the credentials couldn’t be removed from Keychain.
- [ACErrorUpdatingNonexistentAccount](acerrorupdatingnonexistentaccount.md): Error code that indicates an account save failed because the account being updated has been removed.
- [ACErrorInvalidClientBundleID](acerrorinvalidclientbundleid.md): Error code that indicates the client making the request doesn’t have a valid bundle ID.
- [ACErrorDeniedByPlugin](acerrordeniedbyplugin.md): Error code that indicates a plugin prevented the expected action from occurring.
- [ACErrorCoreDataSaveFailed](acerrorcoredatasavefailed.md): Error code that indicates an error occurred while trying to save to a Core Data store.
- [ACErrorFailedSerializingAccountInfo](acerrorfailedserializingaccountinfo.md): Error code that indicates an account’s information couldn’t be serialized.
- [ACErrorInvalidCommand](acerrorinvalidcommand.md): Error code that indicates an invalid command was attempted.
- [ACErrorMissingTransportMessageID](acerrormissingtransportmessageid.md): Error code that indicates an expected message identifier wasn’t found while performing a command.
- [ACErrorCredentialItemNotFound](acerrorcredentialitemnotfound.md): Error code that indicates a credential item wasn’t saved because it couldn’t be found.
- [ACErrorCredentialItemNotExpired](acerrorcredentialitemnotexpired.md): Error code that indicates a credential item wasn’t removed because it hasn’t yet expired.

## See Also

### Errors

- [ACErrorDomain](acerrordomain.md): The error domain for the Accounts framework.
