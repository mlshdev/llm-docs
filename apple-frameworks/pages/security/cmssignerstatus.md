> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmssignerstatus](https://developer.apple.com/documentation/security/cmssignerstatus)

# CMSSignerStatus (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The constants that indicate the status of the signature and signer information in a signed message.

## Declaration

```swift
enum CMSSignerStatus
```

<a id="overview"></a>

## Overview

These are obtained using the [CMSDecoderCopySignerStatus(\_:\_:\_:\_:\_:\_:\_:)](cmsdecodercopysignerstatus%28______________%29.md) function.

## Topics

### Constants

- [CMSSignerStatus.unsigned](cmssignerstatus/unsigned.md): The message was not signed.
- [CMSSignerStatus.valid](cmssignerstatus/valid.md): The message was signed and both the signature and the signer certificate have been verified.
- [CMSSignerStatus.needsDetachedContent](cmssignerstatus/needsdetachedcontent.md): The message was signed but has detached content. You must call the [CMSDecoderSetDetachedContent(\_:\_:)](cmsdecodersetdetachedcontent%28____%29.md) function before ascertaining the signature status.
- [CMSSignerStatus.invalidSignature](cmssignerstatus/invalidsignature.md): The message was signed but the signature is invalid.
- [CMSSignerStatus.invalidCert](cmssignerstatus/invalidcert.md): The message was signed but the signer’s certificate could not be verified.
- [CMSSignerStatus.invalidIndex](cmssignerstatus/invalidindex.md): The specified value for the signer index (`signerIndex` parameter) is greater than the number of signers of the message minus one (`signerIndex > (numSigners – 1)`).

### Initializers

- [init(rawValue:)](cmssignerstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CMSSignerStatus (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The constants that indicate the status of the signature and signer information in a signed message.

## Declaration

```objectivec
enum CMSSignerStatus : uint32_t;
```

<a id="overview"></a>

## Overview

These are obtained using the [CMSDecoderCopySignerStatus](cmsdecodercopysignerstatus%28______________%29.md) function.

## Topics

### Constants

- [kCMSSignerUnsigned](cmssignerstatus/unsigned.md): The message was not signed.
- [kCMSSignerValid](cmssignerstatus/valid.md): The message was signed and both the signature and the signer certificate have been verified.
- [kCMSSignerNeedsDetachedContent](cmssignerstatus/needsdetachedcontent.md): The message was signed but has detached content. You must call the [CMSDecoderSetDetachedContent](cmsdecodersetdetachedcontent%28____%29.md) function before ascertaining the signature status.
- [kCMSSignerInvalidSignature](cmssignerstatus/invalidsignature.md): The message was signed but the signature is invalid.
- [kCMSSignerInvalidCert](cmssignerstatus/invalidcert.md): The message was signed but the signer’s certificate could not be verified.
- [kCMSSignerInvalidIndex](cmssignerstatus/invalidindex.md): The specified value for the signer index (`signerIndex` parameter) is greater than the number of signers of the message minus one (`signerIndex > (numSigners – 1)`).
