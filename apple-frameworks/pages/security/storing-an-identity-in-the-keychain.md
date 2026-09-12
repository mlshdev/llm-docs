> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/storing-an-identity-in-the-keychain](https://developer.apple.com/documentation/security/storing-an-identity-in-the-keychain)

# Storing an Identity in the Keychain (Swift)

**Framework:** Security  
**Kind:** Article

Securely store an identity in the keychain.

<a id="overview"></a>

## Overview

You store an identity in or retrieve an identity from a keychain much as you would a certificate, as described in [Storing a Certificate in the Keychain](storing-a-certificate-in-the-keychain.md).

Private keys have a one-to-many relationship with certificates. That is, a single private key can be paired with multiple certificates, but a given certificate corresponds to exactly one private key. As a result, the fields that distinguish one identity from another are the same as those of the certificate it contains. As a result, working with identities as keychain items is very much like working with certificates, with a few minor adjustments:

- Use [SecIdentity](secidentity.md) objects instead of [SecCertificate](seccertificate.md) objects.
- Use [kSecClassIdentity](ksecclassidentity.md) instead of [kSecClassCertificate](ksecclasscertificate.md) for the [kSecClass](ksecclass.md) attribute.

# Storing an Identity in the Keychain (Objective-C)

**Framework:** Security  
**Kind:** Article

Securely store an identity in the keychain.

<a id="overview"></a>

## Overview

You store an identity in or retrieve an identity from a keychain much as you would a certificate, as described in [Storing a Certificate in the Keychain](storing-a-certificate-in-the-keychain.md).

Private keys have a one-to-many relationship with certificates. That is, a single private key can be paired with multiple certificates, but a given certificate corresponds to exactly one private key. As a result, the fields that distinguish one identity from another are the same as those of the certificate it contains. As a result, working with identities as keychain items is very much like working with certificates, with a few minor adjustments:

- Use [SecIdentityRef](secidentity.md) objects instead of [SecCertificateRef](seccertificate.md) objects.
- Use [kSecClassIdentity](ksecclassidentity.md) instead of [kSecClassCertificate](ksecclasscertificate.md) for the [kSecClass](ksecclass.md) attribute.
