> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/kgssicverifycredential](https://developer.apple.com/documentation/gss/kgssicverifycredential)

# kGSSICVerifyCredential (Swift)

**Framework:** GSS  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The value indicates whether to validate the credential with a trusted source to ensure there was no machine-in-the-middle attack.

## Declaration

```swift
var kGSSICVerifyCredential: String { get }
```

## See Also

### Initial Credential Keys

- [kGSSICPassword](kgssicpassword.md): The value is a string that indicates a password.
- [kGSSICCertificate](kgssiccertificate.md): The value that indicates a certificate to use with PKINIT/PKU2U.
- [kGSSCredentialUsage](kgsscredentialusage.md): The value indicates how to use the credential.
- [kGSSICLKDCHostname](kgssiclkdchostname.md): The value is a string indicating the LKDC hostname.
- [kGSSICKerberosCacheName](kgssickerberoscachename.md): The value is a string indicating the name of the cache created for use with the Kerberos mechanism.
- [kGSSICSiteName](kgssicsitename.md): The value is a string that is the name of site you are authenticating with, used for load balancing in DNS in Kerberos.
- [kGSSICAppIdentifierACL](kgssicappidentifieracl.md): The value is an array of strings containing the list of bundle ID prefixes allowed to access this credential.
- [kGSSICCreateNewCredential](kgssiccreatenewcredential.md): The value is a Boolean that indicates whether the caller wants to create a new credential and not overwrite a credential with the same name.
- [kGSSICAppleSourceApp](kgssicapplesourceapp.md): The value is a dictionary indicating attributes of the app that the credential is for (only applies to AppVPN).
- [kGSSICVerifyCredentialAcceptorName](kgssicverifycredentialacceptorname.md): The value is a string indicating the name of the acceptor.
- [kGSSICAuthenticationContext](kgssicauthenticationcontext.md): The value indicates whether to allow the authentication UI or a context to pass a pre-evaluated authentication context.

# kGSSICVerifyCredential (Objective-C)

**Framework:** GSS  
**Kind:** Macro  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The value indicates whether to validate the credential with a trusted source to ensure there was no machine-in-the-middle attack.

## Declaration

```objectivec
#define kGSSICVerifyCredential
```

## See Also

### Initial Credential Keys

- [kGSSICPassword](kgssicpassword.md): The value is a string that indicates a password.
- [kGSSICCertificate](kgssiccertificate.md): The value that indicates a certificate to use with PKINIT/PKU2U.
- [kGSSCredentialUsage](kgsscredentialusage.md): The value indicates how to use the credential.
- [kGSSICLKDCHostname](kgssiclkdchostname.md): The value is a string indicating the LKDC hostname.
- [kGSSICKerberosCacheName](kgssickerberoscachename.md): The value is a string indicating the name of the cache created for use with the Kerberos mechanism.
- [kGSSICSiteName](kgssicsitename.md): The value is a string that is the name of site you are authenticating with, used for load balancing in DNS in Kerberos.
- [kGSSICAppIdentifierACL](kgssicappidentifieracl.md): The value is an array of strings containing the list of bundle ID prefixes allowed to access this credential.
- [kGSSICCreateNewCredential](kgssiccreatenewcredential.md): The value is a Boolean that indicates whether the caller wants to create a new credential and not overwrite a credential with the same name.
- [kGSSICAppleSourceApp](kgssicapplesourceapp.md): The value is a dictionary indicating attributes of the app that the credential is for (only applies to AppVPN).
- [kGSSICVerifyCredentialAcceptorName](kgssicverifycredentialacceptorname.md): The value is a string indicating the name of the acceptor.
- [kGSSICAuthenticationContext](kgssicauthenticationcontext.md): The value indicates whether to allow the authentication UI or a context to pass a pre-evaluated authentication context.
