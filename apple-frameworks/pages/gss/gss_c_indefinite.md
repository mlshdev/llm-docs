> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_c_indefinite](https://developer.apple.com/documentation/gss/gss_c_indefinite)

# GSS_C_INDEFINITE (Swift)

**Framework:** GSS  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The value that indicates the maximum permitted lifetime when used in a time request.

## Declaration

```swift
var GSS_C_INDEFINITE: UInt { get }
```

## See Also

### Credential Masks and Macros

- [GSS_C_INITIATE](gss_c_initiate.md): The value that indicates a credential that can initiate a security context.
- [GSS_C_ACCEPT](gss_c_accept.md): The value that indicates a credential that can accept a security context.
- [GSS_C_BOTH](gss_c_both.md): The value that indicates a credential that can both initiate and accept security contexts.
- [GSS_C_OPTION_MASK](gss_c_option_mask.md): The masking constant for options.
- [GSS_C_CRED_NO_UI](gss_c_cred_no_ui.md): The value that indicates no UI.
- [gss_auth_identity_t](gss_auth_identity_t.md): A pointer to an opaque object used to manage authentication identities.
- [gss_const_cred_id_t](gss_const_cred_id_t.md): A pointer to an immutable opaque type that you use to exchange a credential object with GSS-API functions.
- [gss_cred_id_t](gss_cred_id_t.md): A pointer to an opaque type that you use to exchange a credential object with GSS-API functions.
- [gss_cred_usage_t](gss_cred_usage_t.md): A credential usage value.

# GSS_C_INDEFINITE (Objective-C)

**Framework:** GSS  
**Kind:** Macro  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The value that indicates the maximum permitted lifetime when used in a time request.

## Declaration

```objectivec
#define GSS_C_INDEFINITE
```

## See Also

### Credential Masks and Macros

- [GSS_C_CRED_PASSWORD](gss_c_cred_password.md): The value that indicates a password-based credential.
- [GSS_C_CRED_CERTIFICATE](gss_c_cred_certificate.md): The value that indicates a certificate-based credential.
- [GSS_C_CRED_SecIdentity](gss_c_cred_secidentity.md): The value that indicates a security identity-based credential.
- [GSS_C_CRED_HEIMBASE](gss_c_cred_heimbase.md): The value that indicates a Heimdal-based credential.
- [GSS_C_NO_CREDENTIAL](gss_c_no_credential.md): The value that indicates an empty credential object.
- [GSS_C_INITIATE](gss_c_initiate.md): The value that indicates a credential that can initiate a security context.
- [GSS_C_ACCEPT](gss_c_accept.md): The value that indicates a credential that can accept a security context.
- [GSS_C_BOTH](gss_c_both.md): The value that indicates a credential that can both initiate and accept security contexts.
- [GSS_C_OPTION_MASK](gss_c_option_mask.md): The masking constant for options.
- [GSS_C_CRED_NO_UI](gss_c_cred_no_ui.md): The value that indicates no UI.
- [gss_auth_identity_t](gss_auth_identity_t.md): A pointer to an opaque object used to manage authentication identities.
- [gss_const_cred_id_t](gss_const_cred_id_t.md): A pointer to an immutable opaque type that you use to exchange a credential object with GSS-API functions.
- [gss_cred_id_t](gss_cred_id_t.md): A pointer to an opaque type that you use to exchange a credential object with GSS-API functions.
- [gss_cred_usage_t](gss_cred_usage_t.md): A credential usage value.
