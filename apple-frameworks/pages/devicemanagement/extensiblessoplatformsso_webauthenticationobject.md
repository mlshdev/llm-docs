> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/extensiblessoplatformsso_webauthenticationobject](https://developer.apple.com/documentation/devicemanagement/extensiblessoplatformsso_webauthenticationobject)

# ExtensibleSSOPlatformSSO_WebAuthenticationObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

Settings for web authentication behavior.

## Declaration

```
object ExtensibleSSOPlatformSSO_WebAuthenticationObject
```

## Properties

- `AllowPasswordSync` — `boolean`: If `true`, the system detects the password during web authentication and synchronizes it to the local account password for the user.
  **Default:** `false`
- `URLAllowList` — `[string]`: The set of allowed hosts that the system can load in the PSSO web view. Required if `AuthenticationMethod` is set to `OpenID`, or `UserCreation.AuthenticationMethods` contains `OpenID`.

## See Also

### Objects

- [ExtensibleSSOPlatformSSO_AccessKeyObject](extensiblessoplatformsso_accesskeyobject.md): Settings for Access Key authentication.
- [ExtensibleSSOPlatformSSO_AccountObject](extensiblessoplatformsso_accountobject.md): Account display and profile settings.
- [ExtensibleSSOPlatformSSO_AuthorizationObject](extensiblessoplatformsso_authorizationobject.md): Settings for authorization prompts and group management.
- [ExtensibleSSOPlatformSSO_PoliciesObject](extensiblessoplatformsso_policiesobject.md): Policies for login, unlock, and FileVault behavior.
- [ExtensibleSSOPlatformSSO_UserCreationObject](extensiblessoplatformsso_usercreationobject.md): Settings for creating new users via Platform SSO.
