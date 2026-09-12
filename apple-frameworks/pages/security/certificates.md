> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/certificates](https://developer.apple.com/documentation/security/certificates)

# Certificates (Swift)

**Framework:** Security  
**Kind:** API Collection

Manage digital certificates.

<a id="overview"></a>

## Overview

A digital certificate is a collection of data used to securely distribute the public half of a public/private key pair. Figure 1 shows the parts of a typical X.509 certificate that make this possible. Along with structural information, the certificate contains name and contact information for both its issuer and its owner (or subject), plus the owner’s public key. A date range indicates when the certificate is valid. Certificate extensions provide additional information and conditions, like acceptable uses for the public key. When assembling the certificate, to vouch for its integrity, the issuer digitally signs it using the issuer’s own identity (private key and certificate).

![Diagram showing the components of an X.509 certificate, including the version and serial number, the subject and issuer, the validity dates, the public key, the signature, and the extensions.](https://developer.apple.com/images/com.apple.security/media-2904073@2x.png)

To evaluate a certificate, you first verify its signature using the specified algorithm and the issuer’s public key, which you obtain from the issuer’s publicly available certificate. A valid signature confirms that the certificate under evaluation, known as the leaf certificate, is unaltered. But in order to trust this result, you must also trust the issuer’s certificate. You use a similar procedure to test this certificate, and the one that guarantees that certificate, and the next, and so on in a chain back to a trusted root authority whose certificate, known as the anchor, which you trust implicitly. The public key included in the leaf certificate is then considered trustworthy. You can be assured that it has come unaltered from the certificate’s owner who controls the corresponding private key. This allows you to securely use the public key to engage in asymmetric cryptography with the certificate’s owner.

For more details about how certificates work, read [Digital Certificates](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/CryptographyConcepts/CryptographyConcepts.html#//apple_ref/doc/uid/TP40011172-CH8-CHDBIGCE) in [Cryptographic Services Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011172).

## Topics

### Essentials

- [Getting a Certificate](getting-a-certificate.md): Obtain a certificate from an identity, from DER-encoded data, or from the keychain.
- [Storing a Certificate in the Keychain](storing-a-certificate-in-the-keychain.md): Store a certificate in the keychain for safekeeping.
- [SecCertificate](seccertificate.md): An abstract Core Foundation-type object representing an X.509 certificate.
- [SecCertificateGetTypeID()](seccertificategettypeid%28%29.md): Returns the unique identifier of the opaque type to which a certificate object belongs.

### Import and Export

- [Storing a DER-Encoded X.509 Certificate](storing-a-der-encoded-x-509-certificate.md): Import and export a certificate from a file.
- [SecCertificateCreateWithData(\_:\_:)](seccertificatecreatewithdata%28____%29.md): Creates a certificate object from a DER representation of a certificate.
- [SecCertificateCopyData(\_:)](seccertificatecopydata%28__%29.md): Returns a DER representation of a certificate given a certificate object.

### Certificate Components

- [Examining a Certificate](examining-a-certificate.md): Learn how to retrieve properties from a certificate.
- [SecCertificateCopySubjectSummary(\_:)](seccertificatecopysubjectsummary%28__%29.md): Returns a human-readable summary of a certificate.
- [SecCertificateCopyCommonName(\_:\_:)](seccertificatecopycommonname%28____%29.md): Retrieves the common name of the subject of a certificate.
- [SecCertificateCopyEmailAddresses(\_:\_:)](seccertificatecopyemailaddresses%28____%29.md): Retrieves the email addresses for the subject of a certificate.
- [SecCertificateCopyNormalizedIssuerSequence(\_:)](seccertificatecopynormalizedissuersequence%28__%29.md): Retrieves the normalized issuer sequence from a certificate.
- [SecCertificateCopyNormalizedSubjectSequence(\_:)](seccertificatecopynormalizedsubjectsequence%28__%29.md): Retrieves the normalized subject sequence from a certificate.
- [SecCertificateCopySerialNumberData(\_:\_:)](seccertificatecopyserialnumberdata%28____%29.md): Returns the certificate’s serial number.
- [SecCertificateCopyKey(\_:)](seccertificatecopykey%28__%29.md): Retrieves the public key for a given certificate.
- [SecCertificateCopyShortDescription(\_:\_:\_:)](seccertificatecopyshortdescription%28______%29.md): Returns a copy of the short description of a certificate.
- [SecCertificateCopyLongDescription(\_:\_:\_:)](seccertificatecopylongdescription%28______%29.md): Returns a copy of the long description of a certificate.

### Detailed Certificate Information

- [Getting Certificate Values](getting-certificate-values.md): Obtain all the values associated with a certificate.
- [SecCertificateCopyValues(\_:\_:\_:)](seccertificatecopyvalues%28______%29.md): Creates a dictionary that represents a certificate’s contents.
- [Certificate OIDs](certificate-oids.md): Use OIDs as keys in the dictionary representing certificate values.
- [Certificate Property Keys](certificate-property-keys.md): Recognize the dictionary keys that taken together define a certificate property.
- [Certificate Property Type Values](certificate-property-type-values.md): Recognize the possible certificate property types.
- [Certificate Item Attribute Constants](certificate-item-attribute-constants.md): Use these four character values to indicate certificate item attributes.

### Certificate Names

- [SecCertificateSetPreferred(\_:\_:\_:)](seccertificatesetpreferred%28______%29.md): Sets the certificate that should be preferred for the specified name and key use.
- [SecCertificateCopyPreferred(\_:\_:)](seccertificatecopypreferred%28____%29.md): Returns the preferred certificate for the specified name and key usage.

### Legacy Symbols

- [SecCertificateAddToKeychain(\_:\_:)](seccertificateaddtokeychain%28____%29.md): Adds a certificate to a keychain.
- [SecCertificateCopyNormalizedIssuerContent(\_:\_:)](seccertificatecopynormalizedissuercontent%28____%29.md): Deprecated. Returns a normalized copy of the distinguished name (DN) of the issuer of a certificate.
- [SecCertificateCopyNormalizedSubjectContent(\_:\_:)](seccertificatecopynormalizedsubjectcontent%28____%29.md): Deprecated. Returns a normalized copy of the distinguished name (DN) of the subject of a certificate.
- [SecCertificateCopySerialNumber(\_:)](seccertificatecopyserialnumber%28__%29.md): Deprecated. Returns a copy of a certificate’s serial number.
- [SecCertificateCopyPublicKey(\_:)](seccertificatecopypublickey%28__%29.md): Deprecated. Retrieves the public key from a certificate.

# Certificates (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Manage digital certificates.

<a id="overview"></a>

## Overview

A digital certificate is a collection of data used to securely distribute the public half of a public/private key pair. Figure 1 shows the parts of a typical X.509 certificate that make this possible. Along with structural information, the certificate contains name and contact information for both its issuer and its owner (or subject), plus the owner’s public key. A date range indicates when the certificate is valid. Certificate extensions provide additional information and conditions, like acceptable uses for the public key. When assembling the certificate, to vouch for its integrity, the issuer digitally signs it using the issuer’s own identity (private key and certificate).

![Diagram showing the components of an X.509 certificate, including the version and serial number, the subject and issuer, the validity dates, the public key, the signature, and the extensions.](https://developer.apple.com/images/com.apple.security/media-2904073@2x.png)

To evaluate a certificate, you first verify its signature using the specified algorithm and the issuer’s public key, which you obtain from the issuer’s publicly available certificate. A valid signature confirms that the certificate under evaluation, known as the leaf certificate, is unaltered. But in order to trust this result, you must also trust the issuer’s certificate. You use a similar procedure to test this certificate, and the one that guarantees that certificate, and the next, and so on in a chain back to a trusted root authority whose certificate, known as the anchor, which you trust implicitly. The public key included in the leaf certificate is then considered trustworthy. You can be assured that it has come unaltered from the certificate’s owner who controls the corresponding private key. This allows you to securely use the public key to engage in asymmetric cryptography with the certificate’s owner.

For more details about how certificates work, read [Digital Certificates](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/CryptographyConcepts/CryptographyConcepts.html#//apple_ref/doc/uid/TP40011172-CH8-CHDBIGCE) in [Cryptographic Services Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/cryptoservices/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011172).

## Topics

### Essentials

- [Getting a Certificate](getting-a-certificate.md): Obtain a certificate from an identity, from DER-encoded data, or from the keychain.
- [Storing a Certificate in the Keychain](storing-a-certificate-in-the-keychain.md): Store a certificate in the keychain for safekeeping.
- [SecCertificateRef](seccertificate.md): An abstract Core Foundation-type object representing an X.509 certificate.
- [SecCertificateGetTypeID](seccertificategettypeid%28%29.md): Returns the unique identifier of the opaque type to which a certificate object belongs.

### Import and Export

- [Storing a DER-Encoded X.509 Certificate](storing-a-der-encoded-x-509-certificate.md): Import and export a certificate from a file.
- [SecCertificateCreateWithData](seccertificatecreatewithdata%28____%29.md): Creates a certificate object from a DER representation of a certificate.
- [SecCertificateCopyData](seccertificatecopydata%28__%29.md): Returns a DER representation of a certificate given a certificate object.

### Certificate Components

- [Examining a Certificate](examining-a-certificate.md): Learn how to retrieve properties from a certificate.
- [SecCertificateCopySubjectSummary](seccertificatecopysubjectsummary%28__%29.md): Returns a human-readable summary of a certificate.
- [SecCertificateCopyCommonName](seccertificatecopycommonname%28____%29.md): Retrieves the common name of the subject of a certificate.
- [SecCertificateCopyEmailAddresses](seccertificatecopyemailaddresses%28____%29.md): Retrieves the email addresses for the subject of a certificate.
- [SecCertificateCopyNormalizedIssuerSequence](seccertificatecopynormalizedissuersequence%28__%29.md): Retrieves the normalized issuer sequence from a certificate.
- [SecCertificateCopyNormalizedSubjectSequence](seccertificatecopynormalizedsubjectsequence%28__%29.md): Retrieves the normalized subject sequence from a certificate.
- [SecCertificateCopySerialNumberData](seccertificatecopyserialnumberdata%28____%29.md): Returns the certificate’s serial number.
- [SecCertificateCopyKey](seccertificatecopykey%28__%29.md): Retrieves the public key for a given certificate.
- [SecCertificateCopyShortDescription](seccertificatecopyshortdescription%28______%29.md): Returns a copy of the short description of a certificate.
- [SecCertificateCopyLongDescription](seccertificatecopylongdescription%28______%29.md): Returns a copy of the long description of a certificate.

### Detailed Certificate Information

- [Getting Certificate Values](getting-certificate-values.md): Obtain all the values associated with a certificate.
- [SecCertificateCopyValues](seccertificatecopyvalues%28______%29.md): Creates a dictionary that represents a certificate’s contents.
- [Certificate OIDs](certificate-oids.md): Use OIDs as keys in the dictionary representing certificate values.
- [Certificate Property Keys](certificate-property-keys.md): Recognize the dictionary keys that taken together define a certificate property.
- [Certificate Property Type Values](certificate-property-type-values.md): Recognize the possible certificate property types.
- [Certificate Item Attribute Constants](certificate-item-attribute-constants.md): Use these four character values to indicate certificate item attributes.

### Certificate Names

- [SecCertificateSetPreferred](seccertificatesetpreferred%28______%29.md): Sets the certificate that should be preferred for the specified name and key use.
- [SecCertificateCopyPreferred](seccertificatecopypreferred%28____%29.md): Returns the preferred certificate for the specified name and key usage.

### Legacy Symbols

- [OpaqueSecCertificateRef](opaqueseccertificateref.md)
- [SecCertificateAddToKeychain](seccertificateaddtokeychain%28____%29.md): Adds a certificate to a keychain.
- [SecCertificateCopyNormalizedIssuerContent](seccertificatecopynormalizedissuercontent%28____%29.md): Deprecated. Returns a normalized copy of the distinguished name (DN) of the issuer of a certificate.
- [SecCertificateCopyNormalizedSubjectContent](seccertificatecopynormalizedsubjectcontent%28____%29.md): Deprecated. Returns a normalized copy of the distinguished name (DN) of the subject of a certificate.
- [SecCertificateCreateFromData](seccertificatecreatefromdata.md): Deprecated. Creates a certificate object based on the specified data, type, and encoding.
- [SecCertificateCopyPreference](seccertificatecopypreference.md): Deprecated. Retrieves the preferred certificate for the specified name and key use.
- [SecCertificateGetAlgorithmID](seccertificategetalgorithmid.md): Deprecated. Retrieves the algorithm identifier for a certificate.
- [SecCertificateGetCLHandle](seccertificategetclhandle.md): Deprecated. Retrieves the certificate library handle from a certificate object.
- [SecCertificateGetData](seccertificategetdata.md): Deprecated. Retrieves the data for a certificate.
- [SecCertificateGetIssuer](seccertificategetissuer.md): Deprecated. Unsupported.
- [SecCertificateGetSubject](seccertificategetsubject.md): Deprecated. Unsupported.
- [SecCertificateGetType](seccertificategettype.md): Deprecated. Retrieves the type of a specified certificate.
- [SecCertificateSetPreference](seccertificatesetpreference.md): Deprecated. Sets the preferred certificate for a specified name, key use, and date.
- [SecCertificateCopySerialNumber](seccertificatecopyserialnumber%28__%29.md): Deprecated. Returns a copy of a certificate’s serial number.
- [SecCertificateCopyPublicKey](seccertificatecopypublickey%28__%29.md): Deprecated. Retrieves the public key from a certificate.
