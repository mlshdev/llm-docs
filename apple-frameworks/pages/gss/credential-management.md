> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/credential-management](https://developer.apple.com/documentation/gss/credential-management)

# Credential Management (Swift)

**Framework:** GSS  
**Kind:** API Collection

Securely establish connections between endpoints.

## Topics

### Allocation and Deallocation

- [GSSCreateCredentialFromUUID(\_:)](gsscreatecredentialfromuuid%28__%29.md): Creates a credential from a universally unique identifier.
- [gss_add_cred(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_add_cred%28______________________%29.md): Adds a new credential element to an existing credential.
- [gss_set_cred_option(\_:\_:\_:\_:)](gss_set_cred_option%28________%29.md): Changes a credential option.
- [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_destroy_cred(\_:\_:)](gss_destroy_cred%28____%29.md): Purges a credential from memory.

### Initial Credential Keys

The keys used in the attributes dictionary when acquiring new credentials.

- [kGSSICPassword](kgssicpassword.md): The value is a string that indicates a password.
- [kGSSICCertificate](kgssiccertificate.md): The value that indicates a certificate to use with PKINIT/PKU2U.
- [kGSSCredentialUsage](kgsscredentialusage.md): The value indicates how to use the credential.
- [kGSSICVerifyCredential](kgssicverifycredential.md): The value indicates whether to validate the credential with a trusted source to ensure there was no machine-in-the-middle attack.
- [kGSSICLKDCHostname](kgssiclkdchostname.md): The value is a string indicating the LKDC hostname.
- [kGSSICKerberosCacheName](kgssickerberoscachename.md): The value is a string indicating the name of the cache created for use with the Kerberos mechanism.
- [kGSSICSiteName](kgssicsitename.md): The value is a string that is the name of site you are authenticating with, used for load balancing in DNS in Kerberos.
- [kGSSICAppIdentifierACL](kgssicappidentifieracl.md): The value is an array of strings containing the list of bundle ID prefixes allowed to access this credential.
- [kGSSICCreateNewCredential](kgssiccreatenewcredential.md): The value is a Boolean that indicates whether the caller wants to create a new credential and not overwrite a credential with the same name.
- [kGSSICAppleSourceApp](kgssicapplesourceapp.md): The value is a dictionary indicating attributes of the app that the credential is for (only applies to AppVPN).
- [kGSSICVerifyCredentialAcceptorName](kgssicverifycredentialacceptorname.md): The value is a string indicating the name of the acceptor.
- [kGSSICAuthenticationContext](kgssicauthenticationcontext.md): The value indicates whether to allow the authentication UI or a context to pass a pre-evaluated authentication context.

### Pseudo Random Constants

- [GSS_C_PRF_KEY_FULL](gss_c_prf_key_full.md): This value indicates using the sub-session key by acceptor, initiator, or the ticket’s session key.
- [GSS_C_PRF_KEY_PARTIAL](gss_c_prf_key_partial.md): This value indicates using the sub-session key the initiator or the ticket’s session key.

### Credential Usage Values

The values for use with the credential usage key.

- [kGSS_C_INITIATE](kgss_c_initiate.md): The value that indicates a credential may be used to initiate a context.
- [kGSS_C_ACCEPT](kgss_c_accept.md): The value that indicates that a credential may be used to accept a context.
- [kGSS_C_BOTH](kgss_c_both.md): The value that indicates that a credential may be used to either initiate or accept a context.

### Password Keys

The keys used in the attributes dictionary for the changing passwords.

- [kGSSChangePasswordOldPassword](kgsschangepasswordoldpassword.md): The value is a string that indicates the old password.
- [kGSSChangePasswordNewPassword](kgsschangepasswordnewpassword.md): The value is a string that indicates the new password.

### Credential Masks and Macros

- [GSS_C_INDEFINITE](gss_c_indefinite.md): The value that indicates the maximum permitted lifetime when used in a time request.
- [GSS_C_INITIATE](gss_c_initiate.md): The value that indicates a credential that can initiate a security context.
- [GSS_C_ACCEPT](gss_c_accept.md): The value that indicates a credential that can accept a security context.
- [GSS_C_BOTH](gss_c_both.md): The value that indicates a credential that can both initiate and accept security contexts.
- [GSS_C_OPTION_MASK](gss_c_option_mask.md): The masking constant for options.
- [GSS_C_CRED_NO_UI](gss_c_cred_no_ui.md): The value that indicates no UI.
- [gss_auth_identity_t](gss_auth_identity_t.md): A pointer to an opaque object used to manage authentication identities.
- [gss_const_cred_id_t](gss_const_cred_id_t.md): A pointer to an immutable opaque type that you use to exchange a credential object with GSS-API functions.
- [gss_cred_id_t](gss_cred_id_t.md): A pointer to an opaque type that you use to exchange a credential object with GSS-API functions.
- [gss_cred_usage_t](gss_cred_usage_t.md): A credential usage value.

### Acquisition

- [gss_aapl_initial_cred(\_:\_:\_:\_:\_:)](gss_aapl_initial_cred%28__________%29.md): Acquires a new credential using a password or certificate.
- [gss_acquire_cred(\_:\_:\_:\_:\_:\_:\_:\_:)](gss_acquire_cred%28________________%29.md): Acquires a credential for use in establishing a security context.
- [gss_acquire_cred_with_password(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_acquire_cred_with_password%28__________________%29.md): Acquires a credential for use in establishing a security context using a password.
- [GSSCredentialCopyUUID(\_:)](gsscredentialcopyuuid%28__%29.md): Returns a copy of the universally unique identifier corresponding to a GSS credential.
- [GSSCredentialCopyName(\_:)](gsscredentialcopyname%28__%29.md): Returns the name describing the credential.
- [gss_pseudo_random(\_:\_:\_:\_:\_:\_:)](gss_pseudo_random%28____________%29.md): Returns a pseudo-random byte stream for keying.

### Inquiries

- [gss_inquire_cred(\_:\_:\_:\_:\_:\_:)](gss_inquire_cred%28____________%29.md): Obtains information about a credential.
- [gss_inquire_cred_by_mech(\_:\_:\_:\_:\_:\_:\_:)](gss_inquire_cred_by_mech%28______________%29.md): Obtains per-mechanism information about a credential.
- [gss_inquire_cred_by_oid(\_:\_:\_:\_:)](gss_inquire_cred_by_oid%28________%29.md): Inquires about a particular characteristic of a credential.
- [GSSCredentialGetLifetime(\_:)](gsscredentialgetlifetime%28__%29.md): Returns the remaining time in seconds before the credential expires.

### Iteration

- [gss_iter_creds(\_:\_:\_:\_:)](gss_iter_creds%28________%29.md): Iterates over all credentials.
- [gss_iter_creds_f(\_:\_:\_:\_:\_:)](gss_iter_creds_f%28__________%29.md): Iterates over all credentials with a user context.

### Import and Export

- [gss_import_cred(\_:\_:\_:)](gss_import_cred%28______%29.md): Imports a credential from a token.
- [gss_export_cred(\_:\_:\_:)](gss_export_cred%28______%29.md): Exports a credential to a token.

## See Also

### Credentials

- [Security Mechanisms](security-mechanisms.md): Provide a security mechanism for your implementation.

# Credential Management (Objective-C)

**Framework:** GSS  
**Kind:** API Collection

Securely establish connections between endpoints.

## Topics

### Allocation and Deallocation

- [GSSCreateCredentialFromUUID](gsscreatecredentialfromuuid%28__%29.md): Creates a credential from a universally unique identifier.
- [gss_add_cred](gss_add_cred%28______________________%29.md): Adds a new credential element to an existing credential.
- [gss_set_cred_option](gss_set_cred_option%28________%29.md): Changes a credential option.
- [gss_release_cred](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_destroy_cred](gss_destroy_cred%28____%29.md): Purges a credential from memory.

### Initial Credential Keys

The keys used in the attributes dictionary when acquiring new credentials.

- [kGSSICPassword](kgssicpassword.md): The value is a string that indicates a password.
- [kGSSICCertificate](kgssiccertificate.md): The value that indicates a certificate to use with PKINIT/PKU2U.
- [kGSSCredentialUsage](kgsscredentialusage.md): The value indicates how to use the credential.
- [kGSSICVerifyCredential](kgssicverifycredential.md): The value indicates whether to validate the credential with a trusted source to ensure there was no machine-in-the-middle attack.
- [kGSSICLKDCHostname](kgssiclkdchostname.md): The value is a string indicating the LKDC hostname.
- [kGSSICKerberosCacheName](kgssickerberoscachename.md): The value is a string indicating the name of the cache created for use with the Kerberos mechanism.
- [kGSSICSiteName](kgssicsitename.md): The value is a string that is the name of site you are authenticating with, used for load balancing in DNS in Kerberos.
- [kGSSICAppIdentifierACL](kgssicappidentifieracl.md): The value is an array of strings containing the list of bundle ID prefixes allowed to access this credential.
- [kGSSICCreateNewCredential](kgssiccreatenewcredential.md): The value is a Boolean that indicates whether the caller wants to create a new credential and not overwrite a credential with the same name.
- [kGSSICAppleSourceApp](kgssicapplesourceapp.md): The value is a dictionary indicating attributes of the app that the credential is for (only applies to AppVPN).
- [kGSSICVerifyCredentialAcceptorName](kgssicverifycredentialacceptorname.md): The value is a string indicating the name of the acceptor.
- [kGSSICAuthenticationContext](kgssicauthenticationcontext.md): The value indicates whether to allow the authentication UI or a context to pass a pre-evaluated authentication context.

### Pseudo Random Constants

- [GSS_C_PRF_KEY_FULL](gss_c_prf_key_full.md): This value indicates using the sub-session key by acceptor, initiator, or the ticket’s session key.
- [GSS_C_PRF_KEY_PARTIAL](gss_c_prf_key_partial.md): This value indicates using the sub-session key the initiator or the ticket’s session key.

### Credential Usage Values

The values for use with the credential usage key.

- [kGSS_C_INITIATE](kgss_c_initiate.md): The value that indicates a credential may be used to initiate a context.
- [kGSS_C_ACCEPT](kgss_c_accept.md): The value that indicates that a credential may be used to accept a context.
- [kGSS_C_BOTH](kgss_c_both.md): The value that indicates that a credential may be used to either initiate or accept a context.

### Password Keys

The keys used in the attributes dictionary for the changing passwords.

- [kGSSChangePasswordOldPassword](kgsschangepasswordoldpassword.md): The value is a string that indicates the old password.
- [kGSSChangePasswordNewPassword](kgsschangepasswordnewpassword.md): The value is a string that indicates the new password.

### Credential Masks and Macros

- [GSS_C_CRED_PASSWORD](gss_c_cred_password.md): The value that indicates a password-based credential.
- [GSS_C_CRED_CERTIFICATE](gss_c_cred_certificate.md): The value that indicates a certificate-based credential.
- [GSS_C_CRED_SecIdentity](gss_c_cred_secidentity.md): The value that indicates a security identity-based credential.
- [GSS_C_CRED_HEIMBASE](gss_c_cred_heimbase.md): The value that indicates a Heimdal-based credential.
- [GSS_C_NO_CREDENTIAL](gss_c_no_credential.md): The value that indicates an empty credential object.
- [GSS_C_INDEFINITE](gss_c_indefinite.md): The value that indicates the maximum permitted lifetime when used in a time request.
- [GSS_C_INITIATE](gss_c_initiate.md): The value that indicates a credential that can initiate a security context.
- [GSS_C_ACCEPT](gss_c_accept.md): The value that indicates a credential that can accept a security context.
- [GSS_C_BOTH](gss_c_both.md): The value that indicates a credential that can both initiate and accept security contexts.
- [GSS_C_OPTION_MASK](gss_c_option_mask.md): The masking constant for options.
- [GSS_C_CRED_NO_UI](gss_c_cred_no_ui.md): The value that indicates no UI.
- [gss_auth_identity_t](gss_auth_identity_t.md): A pointer to an opaque object used to manage authentication identities.
- [gss_const_cred_id_t](gss_const_cred_id_t.md): A pointer to an immutable opaque type that you use to exchange a credential object with GSS-API functions.
- [gss_cred_id_t](gss_cred_id_t.md): A pointer to an opaque type that you use to exchange a credential object with GSS-API functions.
- [gss_cred_usage_t](gss_cred_usage_t.md): A credential usage value.

### Acquisition

- [gss_aapl_initial_cred](gss_aapl_initial_cred%28__________%29.md): Acquires a new credential using a password or certificate.
- [gss_acquire_cred](gss_acquire_cred%28________________%29.md): Acquires a credential for use in establishing a security context.
- [gss_acquire_cred_with_password](gss_acquire_cred_with_password%28__________________%29.md): Acquires a credential for use in establishing a security context using a password.
- [GSSCredentialCopyUUID](gsscredentialcopyuuid%28__%29.md): Returns a copy of the universally unique identifier corresponding to a GSS credential.
- [GSSCredentialCopyName](gsscredentialcopyname%28__%29.md): Returns the name describing the credential.
- [gss_pseudo_random](gss_pseudo_random%28____________%29.md): Returns a pseudo-random byte stream for keying.

### Inquiries

- [gss_inquire_cred](gss_inquire_cred%28____________%29.md): Obtains information about a credential.
- [gss_inquire_cred_by_mech](gss_inquire_cred_by_mech%28______________%29.md): Obtains per-mechanism information about a credential.
- [gss_inquire_cred_by_oid](gss_inquire_cred_by_oid%28________%29.md): Inquires about a particular characteristic of a credential.
- [GSSCredentialGetLifetime](gsscredentialgetlifetime%28__%29.md): Returns the remaining time in seconds before the credential expires.

### Iteration

- [gss_iter_creds](gss_iter_creds%28________%29.md): Iterates over all credentials.
- [gss_iter_creds_f](gss_iter_creds_f%28__________%29.md): Iterates over all credentials with a user context.

### Import and Export

- [gss_import_cred](gss_import_cred%28______%29.md): Imports a credential from a token.
- [gss_export_cred](gss_export_cred%28______%29.md): Exports a credential to a token.

## See Also

### Credentials

- [Security Mechanisms](security-mechanisms.md): Provide a security mechanism for your implementation.
