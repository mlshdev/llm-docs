> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/authentication-types](https://developer.apple.com/documentation/opendirectory/authentication-types)

# Authentication Types (Swift)

**Framework:** Open Directory  
**Kind:** API Collection

Types of authentication available in Open Directory.

## Topics

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
- [kODAuthenticationTypeKerberosTickets](kodauthenticationtypekerberostickets.md): The authentication type used to provide write access to LDAP with an existing Kerberos ticket.
- [kODAuthenticationTypeMPPEMasterKeys](kodauthenticationtypemppemasterkeys.md): Deprecated. The authentication type used to specify primary keys for MPPE encryption.
- [kODAuthenticationTypeMSCHAP2](kodauthenticationtypemschap2.md): The authentication type used to specify MS-CHAPv2 encryption.
- [kODAuthenticationTypeNTLMv2](kodauthenticationtypentlmv2.md): The authentication type used to verify an NTLMv2 challenge and response.
- [kODAuthenticationTypeNTLMv2WithSessionKey](kodauthenticationtypentlmv2withsessionkey.md): The authentication type used to verify an NTLMv2 challenge and response and retrieve session keys in a single call.
- [kODAuthenticationTypeNewUser](kodauthenticationtypenewuser.md): The authentication type used to create a new user on an Apple password server.
- [kODAuthenticationTypeNewUserWithPolicy](kodauthenticationtypenewuserwithpolicy.md): The authentication type used to create a new user with specified policy settings on an Apple password server.
- [kODAuthenticationTypeNodeNativeClearTextOK](kodauthenticationtypenodenativecleartextok.md): The authentication type used to specify that the plug-in should determine the authentication method to use. It also specifies that cleartext is an acceptable authentication method.
- [kODAuthenticationTypeNodeNativeNoClearText](kodauthenticationtypenodenativenocleartext.md): The authentication type used to specify that the plug-in should determine the authentication method to use. It also specifies that cleartext is not an acceptable authentication method.
- [kODAuthenticationTypeReadSecureHash](kodauthenticationtypereadsecurehash.md): The authentication type used to access the SHA1 or seeded SHA1 hash for a local user.
- [kODAuthenticationTypeSMBNTv2UserSessionKey](kodauthenticationtypesmbntv2usersessionkey.md): The authentication type used to generate an NTLMv2 user session key.
- [kODAuthenticationTypeSMBWorkstationCredentialSessionKey](kodauthenticationtypesmbworkstationcredentialsessionkey.md): The authentication type used to generate an SMB workstation credential session key.
- [kODAuthenticationTypeSMB_LM_Key](kodauthenticationtypesmb_lm_key.md): The authentication type used to specify SMB LAN manager authentication.
- [kODAuthenticationTypeSMB_NT_Key](kodauthenticationtypesmb_nt_key.md): The authentication type used to specify SMB NT authentication.
- [kODAuthenticationTypeSMB_NT_UserSessionKey](kodauthenticationtypesmb_nt_usersessionkey.md): The authentication type used by Samba to access session keys on an Apple password server.
- [kODAuthenticationTypeSMB_NT_WithUserSessionKey](kodauthenticationtypesmb_nt_withusersessionkey.md): The authentication type used by Samba to authenticate and access session keys on an Apple password server.
- [kODAuthenticationTypeSetGlobalPolicy](kodauthenticationtypesetglobalpolicy.md): The authentication type used to set the global authentication policy.
- [kODAuthenticationTypeSetLMHash](kodauthenticationtypesetlmhash.md): The authentication type used to set the LAN manager hash for an account.
- [kODAuthenticationTypeSetNTHash](kodauthenticationtypesetnthash.md): The authentication type used to set the NT hash for a user.
- [kODAuthenticationTypeSetPassword](kodauthenticationtypesetpassword.md): The authentication type used to set a password.
- [kODAuthenticationTypeSetPasswordAsCurrent](kodauthenticationtypesetpasswordascurrent.md): The authentication type used to set a password using the current credentials.
- [kODAuthenticationTypeSetPolicy](kodauthenticationtypesetpolicy.md): The authentication type used to specify that the plug-in should determine the authentication method to use.
- [kODAuthenticationTypeSetPolicyAsCurrent](kodauthenticationtypesetpolicyascurrent.md): The authentication type used to set the authentication policy using the current credentials.
- [kODAuthenticationTypeSetUserData](kodauthenticationtypesetuserdata.md): The authentication type used to set user data on an Apple password server.
- [kODAuthenticationTypeSetUserName](kodauthenticationtypesetusername.md): The authentication type used to set a username on an Apple password server.
- [kODAuthenticationTypeSetWorkstationPassword](kodauthenticationtypesetworkstationpassword.md): An authentication type used to support PDC SMB interaction with Directory Services.
- [kODAuthenticationTypeWithAuthorizationRef](kodauthenticationtypewithauthorizationref.md): The authentication type used to allow root access to local directories with valid authorization.
- [kODAuthenticationTypeWriteSecureHash](kodauthenticationtypewritesecurehash.md): The authentication type used to enable a root process to write the secure hash of a user record.
- [kODAuthenticationTypeSetCertificateHashAsCurrent](kodauthenticationtypesetcertificatehashascurrent.md): An authentication type to set the certificate using the authenticated user’s credentials.

## See Also

### Constants

- [Session Keys](session-keys.md): Keys used when specifying session information.
- [Node Types](1497602-node-types.md): Open Directory node types.
- [Match Types](match-types.md): Types of matches used for searches.
- [Record Types](record-types.md): Types of Open Directory records.
- [General Attribute Types](general-attribute-types.md): Types of Open Directory attributes.
- [Configuration Attribute Types](configuration-attribute-types.md): Types of Open Directory attributes specifically for use with configure nodes.

# Authentication Types (Objective-C)

**Framework:** Open Directory  
**Kind:** API Collection

Types of authentication available in Open Directory.

## Topics

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
- [kODAuthenticationTypeKerberosTickets](kodauthenticationtypekerberostickets.md): The authentication type used to provide write access to LDAP with an existing Kerberos ticket.
- [kODAuthenticationTypeMPPEMasterKeys](kodauthenticationtypemppemasterkeys.md): Deprecated. The authentication type used to specify primary keys for MPPE encryption.
- [kODAuthenticationTypeMSCHAP2](kodauthenticationtypemschap2.md): The authentication type used to specify MS-CHAPv2 encryption.
- [kODAuthenticationTypeNTLMv2](kodauthenticationtypentlmv2.md): The authentication type used to verify an NTLMv2 challenge and response.
- [kODAuthenticationTypeNTLMv2WithSessionKey](kodauthenticationtypentlmv2withsessionkey.md): The authentication type used to verify an NTLMv2 challenge and response and retrieve session keys in a single call.
- [kODAuthenticationTypeNewUser](kodauthenticationtypenewuser.md): The authentication type used to create a new user on an Apple password server.
- [kODAuthenticationTypeNewUserWithPolicy](kodauthenticationtypenewuserwithpolicy.md): The authentication type used to create a new user with specified policy settings on an Apple password server.
- [kODAuthenticationTypeNodeNativeClearTextOK](kodauthenticationtypenodenativecleartextok.md): The authentication type used to specify that the plug-in should determine the authentication method to use. It also specifies that cleartext is an acceptable authentication method.
- [kODAuthenticationTypeNodeNativeNoClearText](kodauthenticationtypenodenativenocleartext.md): The authentication type used to specify that the plug-in should determine the authentication method to use. It also specifies that cleartext is not an acceptable authentication method.
- [kODAuthenticationTypeReadSecureHash](kodauthenticationtypereadsecurehash.md): The authentication type used to access the SHA1 or seeded SHA1 hash for a local user.
- [kODAuthenticationTypeSMBNTv2UserSessionKey](kodauthenticationtypesmbntv2usersessionkey.md): The authentication type used to generate an NTLMv2 user session key.
- [kODAuthenticationTypeSMBWorkstationCredentialSessionKey](kodauthenticationtypesmbworkstationcredentialsessionkey.md): The authentication type used to generate an SMB workstation credential session key.
- [kODAuthenticationTypeSMB_LM_Key](kodauthenticationtypesmb_lm_key.md): The authentication type used to specify SMB LAN manager authentication.
- [kODAuthenticationTypeSMB_NT_Key](kodauthenticationtypesmb_nt_key.md): The authentication type used to specify SMB NT authentication.
- [kODAuthenticationTypeSMB_NT_UserSessionKey](kodauthenticationtypesmb_nt_usersessionkey.md): The authentication type used by Samba to access session keys on an Apple password server.
- [kODAuthenticationTypeSMB_NT_WithUserSessionKey](kodauthenticationtypesmb_nt_withusersessionkey.md): The authentication type used by Samba to authenticate and access session keys on an Apple password server.
- [kODAuthenticationTypeSecureHash](kodauthenticationtypesecurehash.md): Deprecated. The authentication type used to specify secure hash authentication.
- [kODAuthenticationTypeSetGlobalPolicy](kodauthenticationtypesetglobalpolicy.md): The authentication type used to set the global authentication policy.
- [kODAuthenticationTypeSetLMHash](kodauthenticationtypesetlmhash.md): The authentication type used to set the LAN manager hash for an account.
- [kODAuthenticationTypeSetNTHash](kodauthenticationtypesetnthash.md): The authentication type used to set the NT hash for a user.
- [kODAuthenticationTypeSetPassword](kodauthenticationtypesetpassword.md): The authentication type used to set a password.
- [kODAuthenticationTypeSetPasswordAsCurrent](kodauthenticationtypesetpasswordascurrent.md): The authentication type used to set a password using the current credentials.
- [kODAuthenticationTypeSetPolicy](kodauthenticationtypesetpolicy.md): The authentication type used to specify that the plug-in should determine the authentication method to use.
- [kODAuthenticationTypeSetPolicyAsCurrent](kodauthenticationtypesetpolicyascurrent.md): The authentication type used to set the authentication policy using the current credentials.
- [kODAuthenticationTypeSetUserData](kodauthenticationtypesetuserdata.md): The authentication type used to set user data on an Apple password server.
- [kODAuthenticationTypeSetUserName](kodauthenticationtypesetusername.md): The authentication type used to set a username on an Apple password server.
- [kODAuthenticationTypeSetWorkstationPassword](kodauthenticationtypesetworkstationpassword.md): An authentication type used to support PDC SMB interaction with Directory Services.
- [kODAuthenticationTypeWithAuthorizationRef](kodauthenticationtypewithauthorizationref.md): The authentication type used to allow root access to local directories with valid authorization.
- [kODAuthenticationTypeWriteSecureHash](kodauthenticationtypewritesecurehash.md): The authentication type used to enable a root process to write the secure hash of a user record.
- [kODAuthenticationTypeSetCertificateHashAsCurrent](kodauthenticationtypesetcertificatehashascurrent.md): An authentication type to set the certificate using the authenticated user’s credentials.

## See Also

### Constants

- [Session Keys](session-keys.md): Keys used when specifying session information.
- [Node Types](1497602-node-types.md): Open Directory node types.
- [Match Types](match-types.md): Types of matches used for searches.
- [Record Types](record-types.md): Types of Open Directory records.
- [General Attribute Types](general-attribute-types.md): Types of Open Directory attributes.
- [Configuration Attribute Types](configuration-attribute-types.md): Types of Open Directory attributes specifically for use with configure nodes.
