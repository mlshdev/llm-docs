> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cryptographic-message-syntax-services](https://developer.apple.com/documentation/security/cryptographic-message-syntax-services)

# Cryptographic Message Syntax Services (Swift)

**Framework:** Security  
**Kind:** API Collection

Cryptographically sign and encrypt S/MIME messages.

<a id="overview"></a>

## Overview

When you want to exchange data securely using the Multipurpose Internet Mail Extensions (MIME) protocol, you use the version of the protocol known as S/MIME defined in [RFC 3851](https://tools.ietf.org/html/rfc3851). This allows you to, among other things, ensure data integrity through digital signatures and data confidentiality through encryption. S/MIME in turn relies on the Cryptographic Message Syntax (CMS) protocol defined in [RFC 3852](https://tools.ietf.org/html/rfc3852) to carry out these operations.

Cryptographic message syntax services provides encoder objects that perform encryption using the CMS protocol’s enveloped-data content type and sign using the signed-data content type. When a message is both signed and encrypted, the enveloped data content contains the signed data content. That is, the message is first signed and then the signed content is encrypted.

## Topics

### The Encoder

- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoder](cmsencoder.md): Opaque reference to a CMS encoder object.
- [CMSEncoderGetTypeID()](cmsencodergettypeid%28%29.md): Returns the type identifier for the CMSEncoder opaque type.

### Message Creation

- [CMSEncoderAddSigners(\_:\_:)](cmsencoderaddsigners%28____%29.md): Specifies signers of the message.
- [CMSEncoderAddRecipients(\_:\_:)](cmsencoderaddrecipients%28____%29.md): Specifies a message is to be encrypted and specifies the recipients of the message.
- [CMSEncoderSetHasDetachedContent(\_:\_:)](cmsencodersethasdetachedcontent%28____%29.md): Specifies whether the signed data is to be separate from the message.
- [CMSEncoderSetEncapsulatedContentTypeOID(\_:\_:)](cmsencodersetencapsulatedcontenttypeoid%28____%29.md): Specifies an object identifier for the encapsulated data of a signed message.
- [CMSEncoderAddSupportingCerts(\_:\_:)](cmsencoderaddsupportingcerts%28____%29.md): Adds certificates to a message.
- [CMSEncoderAddSignedAttributes(\_:\_:)](cmsencoderaddsignedattributes%28____%29.md): Specifies attributes for a signed message.
- [CMSSignedAttributes](cmssignedattributes.md): Optional attributes you can add to a signed message.
- [CMSEncoderSetCertificateChainMode(\_:\_:)](cmsencodersetcertificatechainmode%28____%29.md): Specifies which certificates to include in a signed CMS message.
- [CMSCertificateChainMode](cmscertificatechainmode.md): Constants that can be set to specify what certificates to include in a signed message.
- [CMSEncoderSetSignerAlgorithm(\_:\_:)](cmsencodersetsigneralgorithm%28____%29.md): Sets the digest algorithm to use for the signer.

### Message Characteristics

- [CMSEncoderCopySigners(\_:\_:)](cmsencodercopysigners%28____%29.md): Obtains the array of signers specified with the `CMSEncoderAddSigners` function.
- [CMSEncoderCopyRecipients(\_:\_:)](cmsencodercopyrecipients%28____%29.md): Obtains the array of recipients specified with the `CMSEncoderAddRecipients` function.
- [CMSEncoderGetHasDetachedContent(\_:\_:)](cmsencodergethasdetachedcontent%28____%29.md): Indicates whether the message is to have detached content.
- [CMSEncoderCopyEncapsulatedContentType(\_:\_:)](cmsencodercopyencapsulatedcontenttype%28____%29.md): Obtains the object identifier for the encapsulated data of a signed message.
- [CMSEncoderCopySupportingCerts(\_:\_:)](cmsencodercopysupportingcerts%28____%29.md): Obtains the certificates added to a message with `CMSEncoderAddSupportingCerts`.
- [CMSEncoderGetCertificateChainMode(\_:\_:)](cmsencodergetcertificatechainmode%28____%29.md): Obtains a constant that indicates which certificates are to be included in a signed CMS message.

### Encoding

- [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCopyEncodedContent(\_:\_:)](cmsencodercopyencodedcontent%28____%29.md): Finishes encoding the message and obtains the encoded result.
- [CMSEncodeContent(\_:\_:\_:\_:\_:\_:\_:\_:)](cmsencodecontent%28________________%29.md): Encodes a message and obtains the result in one high-level function call.

### The Decoder

- [CMSDecoderCreate(\_:)](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoder](cmsdecoder.md): An opaque reference to a CMS decoder object.
- [CMSDecoderGetTypeID()](cmsdecodergettypeid%28%29.md): Returns the type identifier for the CMSDecoder opaque type.

### Decoding

- [CMSDecoderUpdateMessage(\_:\_:\_:)](cmsdecoderupdatemessage%28______%29.md): Feeds raw bytes of the message to be decoded into the decoder.
- [CMSDecoderFinalizeMessage(\_:)](cmsdecoderfinalizemessage%28__%29.md): Indicates that there is no more data to decode.
- [CMSDecoderSetDetachedContent(\_:\_:)](cmsdecodersetdetachedcontent%28____%29.md): Specifies the message’s detached content, if any.
- [CMSDecoderCopyDetachedContent(\_:\_:)](cmsdecodercopydetachedcontent%28____%29.md): Obtains the detached content specified with the `CMSDecoderSetDetachedContent` function.

### Signature Verification

- [CMSDecoderSetSearchKeychain(\_:\_:)](cmsdecodersetsearchkeychain%28____%29.md): Deprecated. Specifies the keychains to search for intermediate certificates to be used in verifying a signed message’s signer certificates.
- [CMSDecoderGetNumSigners(\_:\_:)](cmsdecodergetnumsigners%28____%29.md): Obtains the number of signers of a message.
- [CMSDecoderCopySignerEmailAddress(\_:\_:\_:)](cmsdecodercopysigneremailaddress%28______%29.md): Obtains the email address of the specified signer of a CMS message.
- [CMSDecoderCopySignerCert(\_:\_:\_:)](cmsdecodercopysignercert%28______%29.md): Obtains the certificate of the specified signer of a CMS message.
- [CMSDecoderCopySignerStatus(\_:\_:\_:\_:\_:\_:\_:)](cmsdecodercopysignerstatus%28______________%29.md): Obtains the status of a CMS message’s signature.
- [CMSSignerStatus](cmssignerstatus.md): The constants that indicate the status of the signature and signer information in a signed message.

### Message Content

- [CMSDecoderIsContentEncrypted(\_:\_:)](cmsdecoderiscontentencrypted%28____%29.md): Determines whether a CMS message was encrypted.
- [CMSDecoderCopyEncapsulatedContentType(\_:\_:)](cmsdecodercopyencapsulatedcontenttype%28____%29.md): Obtains the object identifier for the encapsulated data of a signed message.
- [CMSDecoderCopyAllCerts(\_:\_:)](cmsdecodercopyallcerts%28____%29.md): Obtains an array of all of the certificates in a message.
- [CMSDecoderCopyContent(\_:\_:)](cmsdecodercopycontent%28____%29.md): Obtains the message content, if any.

### Timestamps

- [CMSDecoderCopySignerSigningTime(\_:\_:\_:)](cmsdecodercopysignersigningtime%28______%29.md): Obtains the signing time of a CMS message, if present.
- [CMSDecoderCopySignerTimestamp(\_:\_:\_:)](cmsdecodercopysignertimestamp%28______%29.md): Returns the timestamp of a signer of a CMS message, if present.
- [CMSDecoderCopySignerTimestampCertificates(\_:\_:\_:)](cmsdecodercopysignertimestampcertificates%28______%29.md): Returns an array containing the certificates from a timestamp response.
- [CMSDecoderCopySignerTimestampWithPolicy(\_:\_:\_:\_:)](cmsdecodercopysignertimestampwithpolicy%28________%29.md): Returns the timestamp of a signer of a CMS message using a given policy, if present.
- [CMSEncoderCopySignerTimestamp(\_:\_:\_:)](cmsencodercopysignertimestamp%28______%29.md): Returns the timestamp of a signer of a CMS message, if present.
- [CMSEncoderCopySignerTimestampWithPolicy(\_:\_:\_:\_:)](cmsencodercopysignertimestampwithpolicy%28________%29.md): Returns the timestamp of a signer of a CMS message using a particular policy, if present.

# Cryptographic Message Syntax Services (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Cryptographically sign and encrypt S/MIME messages.

<a id="overview"></a>

## Overview

When you want to exchange data securely using the Multipurpose Internet Mail Extensions (MIME) protocol, you use the version of the protocol known as S/MIME defined in [RFC 3851](https://tools.ietf.org/html/rfc3851). This allows you to, among other things, ensure data integrity through digital signatures and data confidentiality through encryption. S/MIME in turn relies on the Cryptographic Message Syntax (CMS) protocol defined in [RFC 3852](https://tools.ietf.org/html/rfc3852) to carry out these operations.

Cryptographic message syntax services provides encoder objects that perform encryption using the CMS protocol’s enveloped-data content type and sign using the signed-data content type. When a message is both signed and encrypted, the enveloped data content contains the signed data content. That is, the message is first signed and then the signed content is encrypted.

## Topics

### The Encoder

- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
- [CMSEncoderRef](cmsencoder.md): Opaque reference to a CMS encoder object.
- [CMSEncoderGetTypeID](cmsencodergettypeid%28%29.md): Returns the type identifier for the CMSEncoder opaque type.

### Message Creation

- [CMSEncoderAddSigners](cmsencoderaddsigners%28____%29.md): Specifies signers of the message.
- [CMSEncoderAddRecipients](cmsencoderaddrecipients%28____%29.md): Specifies a message is to be encrypted and specifies the recipients of the message.
- [CMSEncoderSetHasDetachedContent](cmsencodersethasdetachedcontent%28____%29.md): Specifies whether the signed data is to be separate from the message.
- [CMSEncoderSetEncapsulatedContentTypeOID](cmsencodersetencapsulatedcontenttypeoid%28____%29.md): Specifies an object identifier for the encapsulated data of a signed message.
- [CMSEncoderSetEncapsulatedContentType](cmsencodersetencapsulatedcontenttype.md): Deprecated. Specifies an object identifier for the encapsulated data of a signed message.
- [CMSEncoderAddSupportingCerts](cmsencoderaddsupportingcerts%28____%29.md): Adds certificates to a message.
- [CMSEncoderAddSignedAttributes](cmsencoderaddsignedattributes%28____%29.md): Specifies attributes for a signed message.
- [CMSSignedAttributes](cmssignedattributes.md): Optional attributes you can add to a signed message.
- [CMSEncoderSetCertificateChainMode](cmsencodersetcertificatechainmode%28____%29.md): Specifies which certificates to include in a signed CMS message.
- [CMSCertificateChainMode](cmscertificatechainmode.md): Constants that can be set to specify what certificates to include in a signed message.
- [CMSEncoderSetSignerAlgorithm](cmsencodersetsigneralgorithm%28____%29.md): Sets the digest algorithm to use for the signer.

### Message Characteristics

- [CMSEncoderCopySigners](cmsencodercopysigners%28____%29.md): Obtains the array of signers specified with the `CMSEncoderAddSigners` function.
- [CMSEncoderCopyRecipients](cmsencodercopyrecipients%28____%29.md): Obtains the array of recipients specified with the `CMSEncoderAddRecipients` function.
- [CMSEncoderGetHasDetachedContent](cmsencodergethasdetachedcontent%28____%29.md): Indicates whether the message is to have detached content.
- [CMSEncoderCopyEncapsulatedContentType](cmsencodercopyencapsulatedcontenttype%28____%29.md): Obtains the object identifier for the encapsulated data of a signed message.
- [CMSEncoderCopySupportingCerts](cmsencodercopysupportingcerts%28____%29.md): Obtains the certificates added to a message with `CMSEncoderAddSupportingCerts`.
- [CMSEncoderGetCertificateChainMode](cmsencodergetcertificatechainmode%28____%29.md): Obtains a constant that indicates which certificates are to be included in a signed CMS message.

### Encoding

- [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderCopyEncodedContent](cmsencodercopyencodedcontent%28____%29.md): Finishes encoding the message and obtains the encoded result.
- [CMSEncodeContent](cmsencodecontent%28________________%29.md): Encodes a message and obtains the result in one high-level function call.
- [CMSEncode](cmsencode.md): Deprecated. Encodes a message and obtains the result in one high-level function call.

### The Decoder

- [CMSDecoderCreate](cmsdecodercreate%28__%29.md): Creates a CMSDecoder reference.
- [CMSDecoderRef](cmsdecoder.md): An opaque reference to a CMS decoder object.
- [CMSDecoderGetTypeID](cmsdecodergettypeid%28%29.md): Returns the type identifier for the CMSDecoder opaque type.

### Decoding

- [CMSDecoderUpdateMessage](cmsdecoderupdatemessage%28______%29.md): Feeds raw bytes of the message to be decoded into the decoder.
- [CMSDecoderFinalizeMessage](cmsdecoderfinalizemessage%28__%29.md): Indicates that there is no more data to decode.
- [CMSDecoderSetDetachedContent](cmsdecodersetdetachedcontent%28____%29.md): Specifies the message’s detached content, if any.
- [CMSDecoderCopyDetachedContent](cmsdecodercopydetachedcontent%28____%29.md): Obtains the detached content specified with the `CMSDecoderSetDetachedContent` function.

### Signature Verification

- [CMSDecoderSetSearchKeychain](cmsdecodersetsearchkeychain%28____%29.md): Deprecated. Specifies the keychains to search for intermediate certificates to be used in verifying a signed message’s signer certificates.
- [CMSDecoderGetNumSigners](cmsdecodergetnumsigners%28____%29.md): Obtains the number of signers of a message.
- [CMSDecoderCopySignerEmailAddress](cmsdecodercopysigneremailaddress%28______%29.md): Obtains the email address of the specified signer of a CMS message.
- [CMSDecoderCopySignerCert](cmsdecodercopysignercert%28______%29.md): Obtains the certificate of the specified signer of a CMS message.
- [CMSDecoderCopySignerStatus](cmsdecodercopysignerstatus%28______________%29.md): Obtains the status of a CMS message’s signature.
- [CMSSignerStatus](cmssignerstatus.md): The constants that indicate the status of the signature and signer information in a signed message.

### Message Content

- [CMSDecoderIsContentEncrypted](cmsdecoderiscontentencrypted%28____%29.md): Determines whether a CMS message was encrypted.
- [CMSDecoderCopyEncapsulatedContentType](cmsdecodercopyencapsulatedcontenttype%28____%29.md): Obtains the object identifier for the encapsulated data of a signed message.
- [CMSDecoderCopyAllCerts](cmsdecodercopyallcerts%28____%29.md): Obtains an array of all of the certificates in a message.
- [CMSDecoderCopyContent](cmsdecodercopycontent%28____%29.md): Obtains the message content, if any.

### Timestamps

- [CMSDecoderCopySignerSigningTime](cmsdecodercopysignersigningtime%28______%29.md): Obtains the signing time of a CMS message, if present.
- [CMSDecoderCopySignerTimestamp](cmsdecodercopysignertimestamp%28______%29.md): Returns the timestamp of a signer of a CMS message, if present.
- [CMSDecoderCopySignerTimestampCertificates](cmsdecodercopysignertimestampcertificates%28______%29.md): Returns an array containing the certificates from a timestamp response.
- [CMSDecoderCopySignerTimestampWithPolicy](cmsdecodercopysignertimestampwithpolicy%28________%29.md): Returns the timestamp of a signer of a CMS message using a given policy, if present.
- [CMSEncoderCopySignerTimestamp](cmsencodercopysignertimestamp%28______%29.md): Returns the timestamp of a signer of a CMS message, if present.
- [CMSEncoderCopySignerTimestampWithPolicy](cmsencodercopysignertimestampwithpolicy%28________%29.md): Returns the timestamp of a signer of a CMS message using a particular policy, if present.
