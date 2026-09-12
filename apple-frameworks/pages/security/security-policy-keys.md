> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/security-policy-keys](https://developer.apple.com/documentation/security/security-policy-keys)

# Security Policy Keys (Swift)

**Framework:** Security  
**Kind:** API Collection

Use these dictionary keys to get and set policy properties.

<a id="overview"></a>

## Overview

Use these keys with calls to the [SecPolicyCopyProperties(\_:)](secpolicycopyproperties%28__%29.md) and [SecPolicySetProperties](secpolicysetproperties.md) functions.

## Topics

### Constants

- [kSecPolicyOid](ksecpolicyoid.md): The object identifier that defines the policy type (`CFStringRef`). All policies have a value for this key.
- [kSecPolicyName](ksecpolicyname.md): A name (`CFStringRef`) that the certificate must match to satisfy this policy. For SSL/TLS, this specifies the server name which must match the common name of the certificate. For S/MIME, this specifies the RFC 822 email address.
- [kSecPolicyClient](ksecpolicyclient.md): If true, indicates this policy should be evaluated against the client certificate. If false, the policy is evaluated against the certificate for the server. Default is false.
- [kSecPolicyRevocationFlags](ksecpolicyrevocationflags.md)
- [kSecPolicyTeamIdentifier](ksecpolicyteamidentifier.md)
- [kSecPolicyKU_DigitalSignature](ksecpolicyku_digitalsignature.md): If true, the certificate’s key usage must allow it to be used for signing.
- [kSecPolicyKU_NonRepudiation](ksecpolicyku_nonrepudiation.md): If true, the certificate’s key usage must allow it to be used for non-repudiation.
- [kSecPolicyKU_KeyEncipherment](ksecpolicyku_keyencipherment.md): If true, the certificate’s key usage must allow it to be used for key encryption.
- [kSecPolicyKU_DataEncipherment](ksecpolicyku_dataencipherment.md): If true, the certificate’s key usage must allow it to be used for data encryption.
- [kSecPolicyKU_KeyAgreement](ksecpolicyku_keyagreement.md): If true, the certificate’s key usage must allow it to be used for key agreement.
- [kSecPolicyKU_KeyCertSign](ksecpolicyku_keycertsign.md): If true, the certificate’s key usage must allow it to be used for signing certificates.
- [kSecPolicyKU_CRLSign](ksecpolicyku_crlsign.md): If true, the certificate’s key usage must allow it to be used for signing certificate revocation lists (CRLs).
- [kSecPolicyKU_EncipherOnly](ksecpolicyku_encipheronly.md): If true, the certificate’s key usage must allow it to be used *only* for encryption.
- [kSecPolicyKU_DecipherOnly](ksecpolicyku_decipheronly.md): If true, the certificate’s key usage must allow it to be used *only* for decryption.

# Security Policy Keys (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Use these dictionary keys to get and set policy properties.

<a id="overview"></a>

## Overview

Use these keys with calls to the [SecPolicyCopyProperties](secpolicycopyproperties%28__%29.md) and [SecPolicySetProperties](secpolicysetproperties.md) functions.

## Topics

### Constants

- [kSecPolicyOid](ksecpolicyoid.md): The object identifier that defines the policy type (`CFStringRef`). All policies have a value for this key.
- [kSecPolicyName](ksecpolicyname.md): A name (`CFStringRef`) that the certificate must match to satisfy this policy. For SSL/TLS, this specifies the server name which must match the common name of the certificate. For S/MIME, this specifies the RFC 822 email address.
- [kSecPolicyClient](ksecpolicyclient.md): If true, indicates this policy should be evaluated against the client certificate. If false, the policy is evaluated against the certificate for the server. Default is false.
- [kSecPolicyRevocationFlags](ksecpolicyrevocationflags.md)
- [kSecPolicyTeamIdentifier](ksecpolicyteamidentifier.md)
- [kSecPolicyKU_DigitalSignature](ksecpolicyku_digitalsignature.md): If true, the certificate’s key usage must allow it to be used for signing.
- [kSecPolicyKU_NonRepudiation](ksecpolicyku_nonrepudiation.md): If true, the certificate’s key usage must allow it to be used for non-repudiation.
- [kSecPolicyKU_KeyEncipherment](ksecpolicyku_keyencipherment.md): If true, the certificate’s key usage must allow it to be used for key encryption.
- [kSecPolicyKU_DataEncipherment](ksecpolicyku_dataencipherment.md): If true, the certificate’s key usage must allow it to be used for data encryption.
- [kSecPolicyKU_KeyAgreement](ksecpolicyku_keyagreement.md): If true, the certificate’s key usage must allow it to be used for key agreement.
- [kSecPolicyKU_KeyCertSign](ksecpolicyku_keycertsign.md): If true, the certificate’s key usage must allow it to be used for signing certificates.
- [kSecPolicyKU_CRLSign](ksecpolicyku_crlsign.md): If true, the certificate’s key usage must allow it to be used for signing certificate revocation lists (CRLs).
- [kSecPolicyKU_EncipherOnly](ksecpolicyku_encipheronly.md): If true, the certificate’s key usage must allow it to be used *only* for encryption.
- [kSecPolicyKU_DecipherOnly](ksecpolicyku_decipheronly.md): If true, the certificate’s key usage must allow it to be used *only* for decryption.
