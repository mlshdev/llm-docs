> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accounts/acerrorinvalidclientbundleid](https://developer.apple.com/documentation/accounts/acerrorinvalidclientbundleid)

# ACErrorInvalidClientBundleID (Swift)

**Framework:** Accounts  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Error code that indicates the client making the request doesn’t have a valid bundle ID.

## Declaration

```swift
var ACErrorInvalidClientBundleID: ACErrorCode { get }
```

## See Also

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

# ACErrorInvalidClientBundleID (Objective-C)

**Framework:** Accounts  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.8+

Error code that indicates the client making the request doesn’t have a valid bundle ID.

## Declaration

```objectivec
ACErrorInvalidClientBundleID
```

## See Also

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
