> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/kodauthenticationtypesetcertificatehashascurrent](https://developer.apple.com/documentation/opendirectory/kodauthenticationtypesetcertificatehashascurrent)

# kODAuthenticationTypeSetCertificateHashAsCurrent (Swift)

**Framework:** Open Directory  
**Kind:** Global Variable  
**Availability:** Mac Catalyst · macOS 10.7+

An authentication type to set the certificate using the authenticated user’s credentials.

## Declaration

```swift
let kODAuthenticationTypeSetCertificateHashAsCurrent: String
```

<a id="Discussion"></a>

## Discussion

The authentication array contains the following items (in order):

- The username in UTF-8 format
- Hashed certificate data (40 hex digits)

## See Also

### Constants

- [kODAuthenticationType2WayRandom](kodauthenticationtype2wayrandom.md): The authentication type used to specify two way random authentication.
- [kODAuthenticationType2WayRandomChangePasswd](kodauthenticationtype2wayrandomchangepasswd.md): The authentication type used to change a user’s password using two way random authentication.
- [kODAuthenticationTypeAPOP](kodauthenticationtypeapop.md): The authentication type used to specify APOP authentication.
- [kODAuthenticationTypeCRAM_MD5](kodauthenticationtypecram_md5.md): The authentication type used to specify CRAM MD5 authentication.
- [kODAuthenticationTypeChangePasswd](kodauthenticationtypechangepasswd.md): The authentication type used to change a user’s password using CRAM MD5 authentication.
- [kODAuthenticationTypeClearText](kodauthenticationtypecleartext.md): The authentication type used to specify cleartext authentication.
- [kODAuthenticationTypeCrypt](kodauthenticationtypecrypt.md): The authentication type used to specify crypt authentication, which uses a crypt password stored in a user’s record if available.
- [kODAuthenticationTypeDIGEST_MD5](kodauthenticationtypedigest_md5.md): The authentication type used to specify digest MD5 authentication.
- [kODAuthenticationTypeDeleteUser](kodauthenticationtypedeleteuser.md): The authentication type used to specify that a user on an Apple password server be deleted.
- [kODAuthenticationTypeGetEffectivePolicy](kodauthenticationtypegeteffectivepolicy.md): The authentication type used to access the policies applied to a user.
- [kODAuthenticationTypeGetGlobalPolicy](kodauthenticationtypegetglobalpolicy.md): The authentication type used to access the global authentication policy.
- [kODAuthenticationTypeGetKerberosPrincipal](kodauthenticationtypegetkerberosprincipal.md): The authentication type used to access the name of the Kerberos principal.
- [kODAuthenticationTypeGetPolicy](kodauthenticationtypegetpolicy.md): The authentication type used to specify that the plug-in should determine the authentication method to use.
- [kODAuthenticationTypeGetUserData](kodauthenticationtypegetuserdata.md): The authentication type used to access user data on an Apple password server.
- [kODAuthenticationTypeGetUserName](kodauthenticationtypegetusername.md): The authentication type used to access a username on an Apple password server.

# kODAuthenticationTypeSetCertificateHashAsCurrent (Objective-C)

**Framework:** Open Directory  
**Kind:** Global Variable  
**Availability:** Mac Catalyst · macOS 10.7+

An authentication type to set the certificate using the authenticated user’s credentials.

## Declaration

```objectivec
extern ODAuthenticationType const kODAuthenticationTypeSetCertificateHashAsCurrent;
```

<a id="Discussion"></a>

## Discussion

The authentication array contains the following items (in order):

- The username in UTF-8 format
- Hashed certificate data (40 hex digits)

## See Also

### Constants

- [kODAuthenticationType2WayRandom](kodauthenticationtype2wayrandom.md): The authentication type used to specify two way random authentication.
- [kODAuthenticationType2WayRandomChangePasswd](kodauthenticationtype2wayrandomchangepasswd.md): The authentication type used to change a user’s password using two way random authentication.
- [kODAuthenticationTypeAPOP](kodauthenticationtypeapop.md): The authentication type used to specify APOP authentication.
- [kODAuthenticationTypeCRAM_MD5](kodauthenticationtypecram_md5.md): The authentication type used to specify CRAM MD5 authentication.
- [kODAuthenticationTypeChangePasswd](kodauthenticationtypechangepasswd.md): The authentication type used to change a user’s password using CRAM MD5 authentication.
- [kODAuthenticationTypeClearText](kodauthenticationtypecleartext.md): The authentication type used to specify cleartext authentication.
- [kODAuthenticationTypeCrypt](kodauthenticationtypecrypt.md): The authentication type used to specify crypt authentication, which uses a crypt password stored in a user’s record if available.
- [kODAuthenticationTypeDIGEST_MD5](kodauthenticationtypedigest_md5.md): The authentication type used to specify digest MD5 authentication.
- [kODAuthenticationTypeDeleteUser](kodauthenticationtypedeleteuser.md): The authentication type used to specify that a user on an Apple password server be deleted.
- [kODAuthenticationTypeGetEffectivePolicy](kodauthenticationtypegeteffectivepolicy.md): The authentication type used to access the policies applied to a user.
- [kODAuthenticationTypeGetGlobalPolicy](kodauthenticationtypegetglobalpolicy.md): The authentication type used to access the global authentication policy.
- [kODAuthenticationTypeGetKerberosPrincipal](kodauthenticationtypegetkerberosprincipal.md): The authentication type used to access the name of the Kerberos principal.
- [kODAuthenticationTypeGetPolicy](kodauthenticationtypegetpolicy.md): The authentication type used to specify that the plug-in should determine the authentication method to use.
- [kODAuthenticationTypeGetUserData](kodauthenticationtypegetuserdata.md): The authentication type used to access user data on an Apple password server.
- [kODAuthenticationTypeGetUserName](kodauthenticationtypegetusername.md): The authentication type used to access a username on an Apple password server.
