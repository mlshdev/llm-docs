> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/extensiblessoplatformsso_authorizationobject](https://developer.apple.com/documentation/devicemanagement/extensiblessoplatformsso_authorizationobject)

# ExtensibleSSOPlatformSSO_AuthorizationObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

Settings for authorization prompts and group management.

## Declaration

```
object ExtensibleSSOPlatformSSO_AuthorizationObject
```

## Properties

- `AdditionalGroups` — `[string]`: The list of created groups that don’t have administrator access.
- `AdministratorGroups` — `[string]`: The list of groups to use for administrator access. The system requests membership during authentication.
- `AuthorizationGroups` — `ExtensibleSSOPlatformSSO_Authorization_AuthorizationGroupsObject`: The pairing of Authorization Rights to group names. When using this, the system updates the Authorization Right to use the group.
- `EnableIdentityProviderAccounts` — `boolean`: Enables using identity provider accounts at authorization prompts. Requires that `UseSharedDeviceKeys` is `true`. The system assigns groups using `AdministratorGroups`, `AdditionalGroups`, or `AuthorizationGroups`.
  **Default:** `false`
- `UserAuthorizationMode` — `string`: The permission to apply to an account each time the user authenticates. Allowed values:

  - `Standard`: The account is a standard user.
  - `Admin`: The system adds the account to the local administrators group.
  - `Groups`: The system assigns group to the account using `AdministratorGroups`, `AdditionalGroups`, or `AuthorizationGroups`.  
  **Allowed values:** `Standard`, `Admin`, `Groups`

## Topics

### Objects

- [ExtensibleSSOPlatformSSO_Authorization_AuthorizationGroupsObject](extensiblessoplatformsso_authorization_authorizationgroupsobject.md): The pairing of Authorization Rights to group names. When using this, the system updates the Authorization Right to use the group.

## See Also

### Objects

- [ExtensibleSSOPlatformSSO_AccessKeyObject](extensiblessoplatformsso_accesskeyobject.md): Settings for Access Key authentication.
- [ExtensibleSSOPlatformSSO_AccountObject](extensiblessoplatformsso_accountobject.md): Account display and profile settings.
- [ExtensibleSSOPlatformSSO_PoliciesObject](extensiblessoplatformsso_policiesobject.md): Policies for login, unlock, and FileVault behavior.
- [ExtensibleSSOPlatformSSO_UserCreationObject](extensiblessoplatformsso_usercreationobject.md): Settings for creating new users via Platform SSO.
- [ExtensibleSSOPlatformSSO_WebAuthenticationObject](extensiblessoplatformsso_webauthenticationobject.md): Settings for web authentication behavior.
