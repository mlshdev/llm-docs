> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/extensiblessoplatformsso_accountobject](https://developer.apple.com/documentation/devicemanagement/extensiblessoplatformsso_accountobject)

# ExtensibleSSOPlatformSSO_AccountObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

Account display and profile settings.

## Declaration

```
object ExtensibleSSOPlatformSSO_AccountObject
```

## Properties

- `DisplayName` — `string`: The display name for the account in notifications and authentication requests.
- `SynchronizeProfilePicture` — `boolean`: If `true`, the system requests the user’s profile picture from the SSO extension.
  **Default:** `false`

## See Also

### Objects

- [ExtensibleSSOPlatformSSO_AccessKeyObject](extensiblessoplatformsso_accesskeyobject.md): Settings for Access Key authentication.
- [ExtensibleSSOPlatformSSO_AuthorizationObject](extensiblessoplatformsso_authorizationobject.md): Settings for authorization prompts and group management.
- [ExtensibleSSOPlatformSSO_PoliciesObject](extensiblessoplatformsso_policiesobject.md): Policies for login, unlock, and FileVault behavior.
- [ExtensibleSSOPlatformSSO_UserCreationObject](extensiblessoplatformsso_usercreationobject.md): Settings for creating new users via Platform SSO.
- [ExtensibleSSOPlatformSSO_WebAuthenticationObject](extensiblessoplatformsso_webauthenticationobject.md): Settings for web authentication behavior.
