> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/errorcode/userauthorizationtimedout](https://developer.apple.com/documentation/secureelementcredential/credentialsession/errorcode/userauthorizationtimedout)

# CredentialSession.ErrorCode.userAuthorizationTimedOut

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ (deprecated in 27.0) · iPadOS 18.1+ (deprecated in 27.0)

Authorization timed out while waiting for the person using the app.

> This error is no longer thrown by the framework.

## Declaration

```swift
case userAuthorizationTimedOut
```

## See Also

### Authorization and permission error codes

- [CredentialSession.ErrorCode.userNotAuthorized](usernotauthorized.md): Deprecated. The person using the app isn’t authorized to perform the operation.
- [CredentialSession.ErrorCode.accessDenied](accessdenied.md): The person using the app declined to grant permission for the operation.
- [CredentialSession.ErrorCode.clientNotInForeground](clientnotinforeground.md): Deprecated. Your app isn’t in the foreground, which is required to use the credential session.
- [CredentialSession.ErrorCode.userCanceledAuthorization](usercanceledauthorization.md): The person using the app dismissed the authorization sheet.
- [CredentialSession.ErrorCode.featureUnavailable](featureunavailable.md): The feature is unavailable.
- [CredentialSession.ErrorCode.ineligible](ineligible.md): The current device and user configuation are ineligible to use this service.
- [CredentialSession.ErrorCode.conditionsNotSatisfied](conditionsnotsatisfied.md): The iCloud account or passcode of the person using the app don’t satisfy the conditions to use this service.
