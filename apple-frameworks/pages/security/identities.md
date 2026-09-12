> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/identities](https://developer.apple.com/documentation/security/identities)

# Identities (Swift)

**Framework:** Security  
**Kind:** API Collection

Combine certificates and cryptographic keys into identities.

<a id="overview"></a>

## Overview

An identity consists of a private key packaged with the certificate that contains and vouches for the corresponding public key. You use the certificate, key, and trust services API to create an identity from a private key and its certificate, or to import an identity from a password-protected PKCS #12 file. You then use the API to extract the key and certificate from the identity. You can also use the keychain services API to store the identity to or retrieve it from a keychain, much as you would the certificate or key by itself.

## Topics

### Essentials

- [Creating an Identity](creating-an-identity.md): Create an identity from a certificate and private key.
- [Storing an Identity in the Keychain](storing-an-identity-in-the-keychain.md): Securely store an identity in the keychain.
- [SecIdentityCreateWithCertificate(\_:\_:\_:)](secidentitycreatewithcertificate%28______%29.md): Creates a new identity for a certificate and its associated private key.
- [SecIdentity](secidentity.md): An abstract Core Foundation-type object representing an identity.
- [SecIdentityGetTypeID()](secidentitygettypeid%28%29.md): Returns the unique identifier of the opaque type to which an identity object belongs.

### Identity Import

- [Importing an Identity](importing-an-identity.md): Learn how to import an identity from file.
- [SecPKCS12Import(\_:\_:\_:)](secpkcs12import%28______%29.md): Returns the identities and certificates in a PKCS #12-formatted blob.
- [Keychain Import and Export Options](keychain-import-and-export-options.md): Use these constants when you pass dictionary-based arguments to import and export functions.
- [PKCS #12 Import Item Keys](pkcs-12-import-item-keys.md): Recognized the dictionary keys returned by an import operation.

### Identity Components

- [Parsing an Identity](parsing-an-identity.md): Extract the private key and certificate from an identity.
- [SecIdentityCopyCertificate(\_:\_:)](secidentitycopycertificate%28____%29.md): Retrieves a certificate associated with an identity.
- [SecIdentityCopyPrivateKey(\_:\_:)](secidentitycopyprivatekey%28____%29.md): Retrieves the private key associated with an identity.

### System Identities

- [SecIdentityCopySystemIdentity(\_:\_:\_:)](secidentitycopysystemidentity%28______%29.md): Obtains the system identity associated with a specified domain.
- [SecIdentitySetSystemIdentity(\_:\_:)](secidentitysetsystemidentity%28____%29.md): Assigns the system identity to be associated with a specified domain.
- [System Identity Domains](system-identity-domains.md): Set or obtain a system identity for domains.

### Identity Naming

- [SecIdentitySetPreferred(\_:\_:\_:)](secidentitysetpreferred%28______%29.md): Sets the identity that should be preferred for the specified name and key use.
- [SecIdentityCopyPreferred(\_:\_:\_:)](secidentitycopypreferred%28______%29.md): Retrieves the preferred identity for the specified name and key use.

### Identity Search

- [SecIdentitySearch](secidentitysearch.md): Contains information about an identity search.

### Creating an Identity for Local Network TLS

- [Creating an Identity for Local Network TLS](../network/creating-an-identity-for-local-network-tls.md): Learn how to create and use a digital identity in your application for local network TLS.

# Identities (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Combine certificates and cryptographic keys into identities.

<a id="overview"></a>

## Overview

An identity consists of a private key packaged with the certificate that contains and vouches for the corresponding public key. You use the certificate, key, and trust services API to create an identity from a private key and its certificate, or to import an identity from a password-protected PKCS #12 file. You then use the API to extract the key and certificate from the identity. You can also use the keychain services API to store the identity to or retrieve it from a keychain, much as you would the certificate or key by itself.

## Topics

### Essentials

- [Creating an Identity](creating-an-identity.md): Create an identity from a certificate and private key.
- [Storing an Identity in the Keychain](storing-an-identity-in-the-keychain.md): Securely store an identity in the keychain.
- [SecIdentityCreateWithCertificate](secidentitycreatewithcertificate%28______%29.md): Creates a new identity for a certificate and its associated private key.
- [SecIdentityRef](secidentity.md): An abstract Core Foundation-type object representing an identity.
- [SecIdentityGetTypeID](secidentitygettypeid%28%29.md): Returns the unique identifier of the opaque type to which an identity object belongs.

### Identity Import

- [Importing an Identity](importing-an-identity.md): Learn how to import an identity from file.
- [SecPKCS12Import](secpkcs12import%28______%29.md): Returns the identities and certificates in a PKCS #12-formatted blob.
- [Keychain Import and Export Options](keychain-import-and-export-options.md): Use these constants when you pass dictionary-based arguments to import and export functions.
- [PKCS #12 Import Item Keys](pkcs-12-import-item-keys.md): Recognized the dictionary keys returned by an import operation.

### Identity Components

- [Parsing an Identity](parsing-an-identity.md): Extract the private key and certificate from an identity.
- [SecIdentityCopyCertificate](secidentitycopycertificate%28____%29.md): Retrieves a certificate associated with an identity.
- [SecIdentityCopyPrivateKey](secidentitycopyprivatekey%28____%29.md): Retrieves the private key associated with an identity.

### System Identities

- [SecIdentityCopySystemIdentity](secidentitycopysystemidentity%28______%29.md): Obtains the system identity associated with a specified domain.
- [SecIdentitySetSystemIdentity](secidentitysetsystemidentity%28____%29.md): Assigns the system identity to be associated with a specified domain.
- [System Identity Domains](system-identity-domains.md): Set or obtain a system identity for domains.

### Identity Naming

- [SecIdentitySetPreferred](secidentitysetpreferred%28______%29.md): Sets the identity that should be preferred for the specified name and key use.
- [SecIdentityCopyPreferred](secidentitycopypreferred%28______%29.md): Retrieves the preferred identity for the specified name and key use.
- [SecIdentityCopyPreference](secidentitycopypreference.md): Deprecated. Returns the preferred identity for the specified name and key use.
- [SecIdentitySetPreference](secidentitysetpreference.md): Deprecated. Sets the preferred identity for the specified name and key use.

### Identity Search

- [SecIdentitySearchRef](secidentitysearch.md): Contains information about an identity search.
- [SecIdentitySearchCopyNext](secidentitysearchcopynext.md): Deprecated. Finds the next identity matching specified search criteria
- [SecIdentitySearchCreate](secidentitysearchcreate.md): Deprecated. Creates a search object for finding identities.
- [SecIdentitySearchGetTypeID](secidentitysearchgettypeid.md): Deprecated. Returns the unique identifier of the opaque type to which a `SecIdentitySearch` object belongs.

### Legacy Symbols

- [OpaqueSecIdentityRef](opaquesecidentityref.md)

### Creating an Identity for Local Network TLS

- [Creating an Identity for Local Network TLS](../network/creating-an-identity-for-local-network-tls.md): Learn how to create and use a digital identity in your application for local network TLS.
