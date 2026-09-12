> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secitemattr](https://developer.apple.com/documentation/security/secitemattr)

# SecItemAttr (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies a keychain item’s attributes.

## Declaration

```swift
enum SecItemAttr
```

<a id="overview"></a>

## Overview

Not all of these attributes are used for all types of items. Which set of attributes exist for each type of item is documented in the “Data Storage Library Services” chapter of *Common Security: CDSA and CSSM, version 2 (with corrigenda)* from The Open Group ([http://www.opengroup.org/security/cdsa.htm](http://www.opengroup.org/security/cdsa.htm)) for standard items and in the DL section of the *Security Release Notes* for Apple-defined item types (if any).

To obtain information about a certificate, use the CDSA Certificate Library (CL) API. To obtain information about a key, use the `SecKeyGetCSSMKey` function and the CDSA Cryptographic Service Provider (CSP) API.

For attributes for keys, see [Keychain Item Attribute Constants For Keys](keychain-item-attribute-constants-for-keys.md).

## Topics

### Constants

- [SecItemAttr.creationDateItemAttr](secitemattr/creationdateitemattr.md): Identifies the creation date attribute.
- [SecItemAttr.modDateItemAttr](secitemattr/moddateitemattr.md): Identifies the modification date attribute.
- [SecItemAttr.descriptionItemAttr](secitemattr/descriptionitemattr.md): Identifies the description attribute.
- [SecItemAttr.commentItemAttr](secitemattr/commentitemattr.md): Identifies the comment attribute.
- [SecItemAttr.creatorItemAttr](secitemattr/creatoritemattr.md): Identifies the creator attribute.
- [SecItemAttr.typeItemAttr](secitemattr/typeitemattr.md): Identifies the type attribute.
- [SecItemAttr.scriptCodeItemAttr](secitemattr/scriptcodeitemattr.md): Identifies the script code attribute.
- [SecItemAttr.labelItemAttr](secitemattr/labelitemattr.md): Identifies the label attribute.
- [SecItemAttr.invisibleItemAttr](secitemattr/invisibleitemattr.md): Identifies the invisible attribute.
- [SecItemAttr.negativeItemAttr](secitemattr/negativeitemattr.md): Identifies the negative attribute.
- [SecItemAttr.customIconItemAttr](secitemattr/customiconitemattr.md): Identifies the custom icon attribute.
- [SecItemAttr.accountItemAttr](secitemattr/accountitemattr.md): Identifies the account attribute.
- [SecItemAttr.serviceItemAttr](secitemattr/serviceitemattr.md): Identifies the service attribute.
- [SecItemAttr.genericItemAttr](secitemattr/genericitemattr.md): Identifies the generic attribute.
- [SecItemAttr.securityDomainItemAttr](secitemattr/securitydomainitemattr.md): Identifies the security domain attribute.
- [SecItemAttr.serverItemAttr](secitemattr/serveritemattr.md): Identifies the server attribute.
- [SecItemAttr.authenticationTypeItemAttr](secitemattr/authenticationtypeitemattr.md): Identifies the authentication type attribute.
- [SecItemAttr.portItemAttr](secitemattr/portitemattr.md): Identifies the port attribute.
- [SecItemAttr.pathItemAttr](secitemattr/pathitemattr.md): Identifies the path attribute.
- [SecItemAttr.volumeItemAttr](secitemattr/volumeitemattr.md): Identifies the volume attribute.
- [SecItemAttr.addressItemAttr](secitemattr/addressitemattr.md): Identifies the address attribute.
- [SecItemAttr.signatureItemAttr](secitemattr/signatureitemattr.md): Identifies the server signature attribute.
- [SecItemAttr.protocolItemAttr](secitemattr/protocolitemattr.md): Identifies the protocol attribute.
- [SecItemAttr.certificateType](secitemattr/certificatetype.md): Indicates a `CSSM_CERT_TYPE` type.
- [SecItemAttr.certificateEncoding](secitemattr/certificateencoding.md): Indicates a `CSSM_CERT_ENCODING` type.
- [SecItemAttr.crlType](secitemattr/crltype.md): Indicates a `CSSM_CRL_TYPE` type.
- [SecItemAttr.crlEncoding](secitemattr/crlencoding.md): Indicates a `CSSM_CRL_ENCODING` type.
- [SecItemAttr.alias](secitemattr/alias.md): Indicates an alias.

### Initializers

- [init(rawValue:)](secitemattr/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies a keychain item’s attributes.

## Declaration

```objectivec
enum SecItemAttr : FourCharCode;
```

<a id="overview"></a>

## Overview

Not all of these attributes are used for all types of items. Which set of attributes exist for each type of item is documented in the “Data Storage Library Services” chapter of *Common Security: CDSA and CSSM, version 2 (with corrigenda)* from The Open Group ([http://www.opengroup.org/security/cdsa.htm](http://www.opengroup.org/security/cdsa.htm)) for standard items and in the DL section of the *Security Release Notes* for Apple-defined item types (if any).

To obtain information about a certificate, use the CDSA Certificate Library (CL) API. To obtain information about a key, use the `SecKeyGetCSSMKey` function and the CDSA Cryptographic Service Provider (CSP) API.

For attributes for keys, see [Keychain Item Attribute Constants For Keys](keychain-item-attribute-constants-for-keys.md).

## Topics

### Constants

- [kSecCreationDateItemAttr](secitemattr/creationdateitemattr.md): Identifies the creation date attribute.
- [kSecModDateItemAttr](secitemattr/moddateitemattr.md): Identifies the modification date attribute.
- [kSecDescriptionItemAttr](secitemattr/descriptionitemattr.md): Identifies the description attribute.
- [kSecCommentItemAttr](secitemattr/commentitemattr.md): Identifies the comment attribute.
- [kSecCreatorItemAttr](secitemattr/creatoritemattr.md): Identifies the creator attribute.
- [kSecTypeItemAttr](secitemattr/typeitemattr.md): Identifies the type attribute.
- [kSecScriptCodeItemAttr](secitemattr/scriptcodeitemattr.md): Identifies the script code attribute.
- [kSecLabelItemAttr](secitemattr/labelitemattr.md): Identifies the label attribute.
- [kSecInvisibleItemAttr](secitemattr/invisibleitemattr.md): Identifies the invisible attribute.
- [kSecNegativeItemAttr](secitemattr/negativeitemattr.md): Identifies the negative attribute.
- [kSecCustomIconItemAttr](secitemattr/customiconitemattr.md): Identifies the custom icon attribute.
- [kSecAccountItemAttr](secitemattr/accountitemattr.md): Identifies the account attribute.
- [kSecServiceItemAttr](secitemattr/serviceitemattr.md): Identifies the service attribute.
- [kSecGenericItemAttr](secitemattr/genericitemattr.md): Identifies the generic attribute.
- [kSecSecurityDomainItemAttr](secitemattr/securitydomainitemattr.md): Identifies the security domain attribute.
- [kSecServerItemAttr](secitemattr/serveritemattr.md): Identifies the server attribute.
- [kSecAuthenticationTypeItemAttr](secitemattr/authenticationtypeitemattr.md): Identifies the authentication type attribute.
- [kSecPortItemAttr](secitemattr/portitemattr.md): Identifies the port attribute.
- [kSecPathItemAttr](secitemattr/pathitemattr.md): Identifies the path attribute.
- [kSecVolumeItemAttr](secitemattr/volumeitemattr.md): Identifies the volume attribute.
- [kSecAddressItemAttr](secitemattr/addressitemattr.md): Identifies the address attribute.
- [kSecSignatureItemAttr](secitemattr/signatureitemattr.md): Identifies the server signature attribute.
- [kSecProtocolItemAttr](secitemattr/protocolitemattr.md): Identifies the protocol attribute.
- [kSecCertificateType](secitemattr/certificatetype.md): Indicates a `CSSM_CERT_TYPE` type.
- [kSecCertificateEncoding](secitemattr/certificateencoding.md): Indicates a `CSSM_CERT_ENCODING` type.
- [kSecCrlType](secitemattr/crltype.md): Indicates a `CSSM_CRL_TYPE` type.
- [kSecCrlEncoding](secitemattr/crlencoding.md): Indicates a `CSSM_CRL_ENCODING` type.
- [kSecAlias](secitemattr/alias.md): Indicates an alias.
