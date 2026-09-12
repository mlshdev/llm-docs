> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/extensiblessoplatformssoobject](https://developer.apple.com/documentation/devicemanagement/extensiblessoplatformssoobject)

# ExtensibleSSOPlatformSSOObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

The dictionary to configure Platform SSO.

## Declaration

```
object ExtensibleSSOPlatformSSOObject
```

## Properties

- `AccessKey` — `ExtensibleSSOPlatformSSO_AccessKeyObject`: Settings for Access Key authentication.
- `Account` — `ExtensibleSSOPlatformSSO_AccountObject`: Account display and profile settings.
- `AllowDeviceIdentifiersInAttestation` — `boolean`: If `true`, the system includes the device UDID and serial number in Platform SSO attestations.
  **Default:** `false`
- `AuthenticationMethod` — `string`: The Platform SSO authentication method to use with the extension. Requires that the SSO Extension also support the method.
  **Allowed values:** `Password`, `UserSecureEnclaveKey`, `SmartCard`, `OpenID`
- `Authorization` — `ExtensibleSSOPlatformSSO_AuthorizationObject`: Settings for authorization prompts and group management.
- `LoginFrequency` — `integer`: The duration, in seconds, until the system requires a full login instead of a refresh. The default value is 64,800 (18 hours). The minimum value is 3600 (1 hour).
  **Default:** `64800`  
  **Minimum:** `3600`
- `Policies` — `ExtensibleSSOPlatformSSO_PoliciesObject`: Policies for login, unlock, and FileVault behavior.
- `RegistrationToken` — `string`: The token this device uses for registration with Platform SSO. Use it for silent registration with the Identity Provider. Requires that `AuthenticationMethod` in `PlatformSSO` isn’t empty.
- `UserCreation` — `ExtensibleSSOPlatformSSO_UserCreationObject`: Settings for creating new users via Platform SSO.
- `UseSharedDeviceKeys` — `boolean`: If `true`, the system uses the same signing and encryption keys for all users.

  Allowed scopes: system  
  **Default:** `false`
- `WebAuthentication` — `ExtensibleSSOPlatformSSO_WebAuthenticationObject`: Settings for web authentication behavior.

## Topics

### Objects

- [ExtensibleSSOPlatformSSO_AccessKeyObject](extensiblessoplatformsso_accesskeyobject.md): Settings for Access Key authentication.
- [ExtensibleSSOPlatformSSO_AccountObject](extensiblessoplatformsso_accountobject.md): Account display and profile settings.
- [ExtensibleSSOPlatformSSO_AuthorizationObject](extensiblessoplatformsso_authorizationobject.md): Settings for authorization prompts and group management.
- [ExtensibleSSOPlatformSSO_PoliciesObject](extensiblessoplatformsso_policiesobject.md): Policies for login, unlock, and FileVault behavior.
- [ExtensibleSSOPlatformSSO_UserCreationObject](extensiblessoplatformsso_usercreationobject.md): Settings for creating new users via Platform SSO.
- [ExtensibleSSOPlatformSSO_WebAuthenticationObject](extensiblessoplatformsso_webauthenticationobject.md): Settings for web authentication behavior.

## See Also

### Objects

- [ExtensibleSSOExtensionDataObject](extensiblessoextensiondataobject.md): A dictionary of arbitrary data passed through to the app extension.
