> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmssignedattributes](https://developer.apple.com/documentation/security/cmssignedattributes)

# CMSSignedAttributes (Swift)

**Framework:** Security  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Optional attributes you can add to a signed message.

## Declaration

```swift
struct CMSSignedAttributes
```

<a id="overview"></a>

## Overview

Use these flags with the [CMSEncoderAddSignedAttributes(\_:\_:)](cmsencoderaddsignedattributes%28____%29.md) method to cause the encoder to add attributes to a signed message that can be interpreted by the recipient. These attributes are not used for unsigned messages.

## Topics

### Attributes

- [attrSmimeCapabilities](cmssignedattributes/attrsmimecapabilities.md): Identify signature, encryption, and digest algorithms supported by the encoder.
- [attrSmimeEncryptionKeyPrefs](cmssignedattributes/attrsmimeencryptionkeyprefs.md): Indicate that the signing certificate included with the message is the preferred one for S/MIME encryption.
- [attrSmimeMSEncryptionKeyPrefs](cmssignedattributes/attrsmimemsencryptionkeyprefs.md): Indicate that the signing certificate included with the message is the preferred one for S/MIME encryption, but using an attribute object identifier (OID) preferred by Microsoft.
- [attrSigningTime](cmssignedattributes/attrsigningtime.md): Include the signing time.
- [attrAppleCodesigningHashAgility](cmssignedattributes/attrapplecodesigninghashagility.md): Include Apple codesigning hash agility.
- [attrAppleCodesigningHashAgilityV2](cmssignedattributes/attrapplecodesigninghashagilityv2.md): Include Apple codesigning hash agility, version 2.
- [attrAppleExpirationTime](cmssignedattributes/attrappleexpirationtime.md): Include the expiration time.

### Initializers

- [init(rawValue:)](cmssignedattributes/init%28rawvalue_%29.md): Initializes a new attributes structure.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# CMSSignedAttributes (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Optional attributes you can add to a signed message.

## Declaration

```objectivec
enum CMSSignedAttributes : uint32_t;
```

<a id="overview"></a>

## Overview

Use these flags with the [CMSEncoderAddSignedAttributes](cmsencoderaddsignedattributes%28____%29.md) method to cause the encoder to add attributes to a signed message that can be interpreted by the recipient. These attributes are not used for unsigned messages.

## Topics

### Attributes

- [kCMSAttrNone](cmssignedattributes/kcmsattrnone.md): No attributes.
- [kCMSAttrSmimeCapabilities](cmssignedattributes/attrsmimecapabilities.md): Identify signature, encryption, and digest algorithms supported by the encoder.
- [kCMSAttrSmimeEncryptionKeyPrefs](cmssignedattributes/attrsmimeencryptionkeyprefs.md): Indicate that the signing certificate included with the message is the preferred one for S/MIME encryption.
- [kCMSAttrSmimeMSEncryptionKeyPrefs](cmssignedattributes/attrsmimemsencryptionkeyprefs.md): Indicate that the signing certificate included with the message is the preferred one for S/MIME encryption, but using an attribute object identifier (OID) preferred by Microsoft.
- [kCMSAttrSigningTime](cmssignedattributes/attrsigningtime.md): Include the signing time.
- [kCMSAttrAppleCodesigningHashAgility](cmssignedattributes/attrapplecodesigninghashagility.md): Include Apple codesigning hash agility.
- [kCMSAttrAppleCodesigningHashAgilityV2](cmssignedattributes/attrapplecodesigninghashagilityv2.md): Include Apple codesigning hash agility, version 2.
- [kCMSAttrAppleExpirationTime](cmssignedattributes/attrappleexpirationtime.md): Include the expiration time.
