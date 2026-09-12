> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/kgsscredentialusage](https://developer.apple.com/documentation/gss/kgsscredentialusage)

# kGSSCredentialUsage (Swift)

**Framework:** GSS  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The value indicates how to use the credential.

## Declaration

```swift
var kGSSCredentialUsage: String { get }
```

<a id="Discussion"></a>

## Discussion

Set to one of the following: `kGSS_C_INITIATE` (the default), `kGSS_C_ACCEPT`, or `kGSS_C_BOTH`.

## See Also

### Initial Credential Keys

- [kGSSICPassword](kgssicpassword.md): The value is a string that indicates a password.
- [kGSSICCertificate](kgssiccertificate.md): The value that indicates a certificate to use with PKINIT/PKU2U.
- [kGSSICVerifyCredential](kgssicverifycredential.md): The value indicates whether to validate the credential with a trusted source to ensure there was no machine-in-the-middle attack.
- [kGSSICLKDCHostname](kgssiclkdchostname.md): The value is a string indicating the LKDC hostname.
- [kGSSICKerberosCacheName](kgssickerberoscachename.md): The value is a string indicating the name of the cache created for use with the Kerberos mechanism.
- [kGSSICSiteName](kgssicsitename.md): The value is a string that is the name of site you are authenticating with, used for load balancing in DNS in Kerberos.
- [kGSSICAppIdentifierACL](kgssicappidentifieracl.md): The value is an array of strings containing the list of bundle ID prefixes allowed to access this credential.
- [kGSSICCreateNewCredential](kgssiccreatenewcredential.md): The value is a Boolean that indicates whether the caller wants to create a new credential and not overwrite a credential with the same name.
- [kGSSICAppleSourceApp](kgssicapplesourceapp.md): The value is a dictionary indicating attributes of the app that the credential is for (only applies to AppVPN).
- [kGSSICVerifyCredentialAcceptorName](kgssicverifycredentialacceptorname.md): The value is a string indicating the name of the acceptor.
- [kGSSICAuthenticationContext](kgssicauthenticationcontext.md): The value indicates whether to allow the authentication UI or a context to pass a pre-evaluated authentication context.

# kGSSCredentialUsage (Objective-C)

**Framework:** GSS  
**Kind:** Macro  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The value indicates how to use the credential.

## Declaration

```objectivec
#define kGSSCredentialUsage
```

<a id="Discussion"></a>

## Discussion

Set to one of the following: `kGSS_C_INITIATE` (the default), `kGSS_C_ACCEPT`, or `kGSS_C_BOTH`.

## See Also

### Initial Credential Keys

- [kGSSICPassword](kgssicpassword.md): The value is a string that indicates a password.
- [kGSSICCertificate](kgssiccertificate.md): The value that indicates a certificate to use with PKINIT/PKU2U.
- [kGSSICVerifyCredential](kgssicverifycredential.md): The value indicates whether to validate the credential with a trusted source to ensure there was no machine-in-the-middle attack.
- [kGSSICLKDCHostname](kgssiclkdchostname.md): The value is a string indicating the LKDC hostname.
- [kGSSICKerberosCacheName](kgssickerberoscachename.md): The value is a string indicating the name of the cache created for use with the Kerberos mechanism.
- [kGSSICSiteName](kgssicsitename.md): The value is a string that is the name of site you are authenticating with, used for load balancing in DNS in Kerberos.
- [kGSSICAppIdentifierACL](kgssicappidentifieracl.md): The value is an array of strings containing the list of bundle ID prefixes allowed to access this credential.
- [kGSSICCreateNewCredential](kgssiccreatenewcredential.md): The value is a Boolean that indicates whether the caller wants to create a new credential and not overwrite a credential with the same name.
- [kGSSICAppleSourceApp](kgssicapplesourceapp.md): The value is a dictionary indicating attributes of the app that the credential is for (only applies to AppVPN).
- [kGSSICVerifyCredentialAcceptorName](kgssicverifycredentialacceptorname.md): The value is a string indicating the name of the acceptor.
- [kGSSICAuthenticationContext](kgssicauthenticationcontext.md): The value indicates whether to allow the authentication UI or a context to pass a pre-evaluated authentication context.
