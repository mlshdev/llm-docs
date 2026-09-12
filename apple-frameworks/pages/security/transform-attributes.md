> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/transform-attributes](https://developer.apple.com/documentation/security/transform-attributes)

# Transform Attributes (Swift)

**Framework:** Security  
**Kind:** API Collection

Specify the attributes of a transform.

<a id="overview"></a>

## Overview

Use these keys and values when accessing transform attributes by name, such as with the [SecTransformSetAttribute(\_:\_:\_:\_:)](sectransformsetattribute%28________%29.md) and [SecTransformGetAttribute(\_:\_:)](sectransformgetattribute%28____%29.md) functions. You can also use some of the values directly in certain function calls, such as when you create a encode transform with the [SecEncodeTransformCreate(\_:\_:)](secencodetransformcreate%28____%29.md) function and give it an `encodeType` parameter to seed the [kSecEncodeTypeAttribute](ksecencodetypeattribute.md) attribute.

## Topics

### Encode and Decode Keys

- [kSecEncodeLineLengthAttribute](ksecencodelinelengthattribute.md): Deprecated. The length of encoded Base32 or Base64 lines.
- [kSecEncodeTypeAttribute](ksecencodetypeattribute.md): Deprecated. The encoding used by an encode transform.
- [kSecDecodeTypeAttribute](ksecdecodetypeattribute.md): The encoding used by a decode transform.
- [kSecCompressionRatio](kseccompressionratio.md): Deprecated. The compression ratio.

### Digest and Encryption Keys

- [kSecDigestTypeAttribute](ksecdigesttypeattribute.md): Deprecated. The digest algorithm.
- [kSecDigestLengthAttribute](ksecdigestlengthattribute.md): Deprecated. The digest length.
- [kSecDigestHMACKeyAttribute](ksecdigesthmackeyattribute.md): Deprecated. The key for HMAC operation.
- [kSecInputIsAttributeName](ksecinputisattributename.md): Deprecated. The type of input to the transform.
- [kSecEncryptionMode](ksecencryptionmode.md): Deprecated. The encryption mode.
- [kSecEncryptKey](ksecencryptkey.md): Deprecated. The encryption key for the transform.
- [kSecIVKey](ksecivkey.md): Deprecated. The setting for an initialization vector.
- [kSecPaddingKey](ksecpaddingkey.md): Deprecated. The kind of padding to use.
- [kSecOAEPEncodingParametersAttributeName](ksecoaepencodingparametersattributename.md): Deprecated. The OAEP encoding parameters.
- [kSecOAEPMGF1DigestAlgorithmAttributeName](ksecoaepmgf1digestalgorithmattributename.md): Deprecated. The OAEP MGF1 digest algorithm.
- [kSecOAEPMessageLengthAttributeName](ksecoaepmessagelengthattributename.md): Deprecated. The OAEP message length.

### Transform Keys

- [kSecTransformInputAttributeName](ksectransforminputattributename.md): Deprecated. The input to a transform.
- [kSecTransformOutputAttributeName](ksectransformoutputattributename.md): Deprecated. The output of a transform.
- [kSecTransformDebugAttributeName](ksectransformdebugattributename.md): Deprecated. A write stream that should receive debug data.
- [kSecKeyAttributeName](kseckeyattributename.md): The cryptographic key associated with a transform.
- [kSecSignatureAttributeName](ksecsignatureattributename.md): The cryptographic signature associated with a transform.
- [kSecTransformAbortAttributeName](ksectransformabortattributename.md): Deprecated. The reason for an abort.
- [kSecTransformTransformName](ksectransformtransformname.md): Deprecated. The name of a transform.

### Encode Types

Values you use with the [kSecEncodeTypeAttribute](ksecencodetypeattribute.md) and [kSecDecodeTypeAttribute](ksecdecodetypeattribute.md) keys.

- [kSecBase32Encoding](ksecbase32encoding.md): Deprecated. A base 32 encoding.
- [kSecBase64Encoding](ksecbase64encoding.md): Deprecated. A base 64 encoding.
- [kSecZLibEncoding](kseczlibencoding.md): Deprecated. A compressed encoding.

### Digest Types

Values you use with the [kSecDigestTypeAttribute](ksecdigesttypeattribute.md) key.

- [kSecDigestMD2](ksecdigestmd2.md): Deprecated. An MD2 digest.
- [kSecDigestMD4](ksecdigestmd4.md): Deprecated. An MD4 digest.
- [kSecDigestMD5](ksecdigestmd5.md): Deprecated. An MD5 digest.
- [kSecDigestSHA1](ksecdigestsha1.md): Deprecated. An SHA1 digest.
- [kSecDigestSHA2](ksecdigestsha2.md): Deprecated. An SHA2 digest.
- [kSecDigestHMACMD5](ksecdigesthmacmd5.md): Deprecated. An HMAC using the MD5 digest algorithm.
- [kSecDigestHMACSHA1](ksecdigesthmacsha1.md): Deprecated. An HMAC using the SHA1 digest algorithm.
- [kSecDigestHMACSHA2](ksecdigesthmacsha2.md): Deprecated. An HMAC using one of the SHA2 digest algorithms.

### Line Lengths

Values you use with the [kSecEncodeLineLengthAttribute](ksecencodelinelengthattribute.md) key.

- [kSecLineLength64](kseclinelength64.md): Deprecated. A line length of 64 bytes.
- [kSecLineLength76](kseclinelength76.md): Deprecated. A line length of 76 bytes.

### Input Types

Values you use with the [kSecInputIsAttributeName](ksecinputisattributename.md) key.

- [kSecInputIsDigest](ksecinputisdigest.md): The input is a digest of the original data.
- [kSecInputIsPlainText](ksecinputisplaintext.md): The input is plain text.
- [kSecInputIsRaw](ksecinputisraw.md): Deprecated. The input is raw.

### Padding Types

Values you use with the [kSecPaddingKey](ksecpaddingkey.md) key.

- [kSecPaddingNoneKey](ksecpaddingnonekey.md): Deprecated. No padding will be used when encrypting or decrypting.
- [kSecPaddingOAEPKey](ksecpaddingoaepkey.md): Deprecated. PKCS7 padding will be used when encrypting or decrypting.
- [kSecPaddingPKCS1Key](ksecpaddingpkcs1key.md): Deprecated. PKCS1 padding will be used when encrypting or decrypting.
- [kSecPaddingPKCS5Key](ksecpaddingpkcs5key.md): Deprecated. PKCS5 padding will be used when encrypting or decrypting.
- [kSecPaddingPKCS7Key](ksecpaddingpkcs7key.md): Deprecated. PKCS7 padding will be used when encrypting or decrypting.

### Encryption Modes

Values you use with the [kSecEncryptionMode](ksecencryptionmode.md) key.

- [kSecModeNoneKey](ksecmodenonekey.md): Deprecated. No mode will be used when encrypting or decrypting.
- [kSecModeCBCKey](ksecmodecbckey.md): Deprecated. CBC mode will be used when encrypting or decrypting.
- [kSecModeCFBKey](ksecmodecfbkey.md): Deprecated. CFB mode will be used when encrypting or decrypting.
- [kSecModeECBKey](ksecmodeecbkey.md): Deprecated. ECB mode will be used when encrypting or decrypting.
- [kSecModeOFBKey](ksecmodeofbkey.md): Deprecated. OFB mode will be used when encrypting or decrypting.

# Transform Attributes (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Specify the attributes of a transform.

<a id="overview"></a>

## Overview

Use these keys and values when accessing transform attributes by name, such as with the [SecTransformSetAttribute](sectransformsetattribute%28________%29.md) and [SecTransformGetAttribute](sectransformgetattribute%28____%29.md) functions. You can also use some of the values directly in certain function calls, such as when you create a encode transform with the [SecEncodeTransformCreate](secencodetransformcreate%28____%29.md) function and give it an `encodeType` parameter to seed the [kSecEncodeTypeAttribute](ksecencodetypeattribute.md) attribute.

## Topics

### Encode and Decode Keys

- [kSecEncodeLineLengthAttribute](ksecencodelinelengthattribute.md): Deprecated. The length of encoded Base32 or Base64 lines.
- [kSecEncodeTypeAttribute](ksecencodetypeattribute.md): Deprecated. The encoding used by an encode transform.
- [kSecDecodeTypeAttribute](ksecdecodetypeattribute.md): The encoding used by a decode transform.
- [kSecCompressionRatio](kseccompressionratio.md): Deprecated. The compression ratio.

### Digest and Encryption Keys

- [kSecDigestTypeAttribute](ksecdigesttypeattribute.md): Deprecated. The digest algorithm.
- [kSecDigestLengthAttribute](ksecdigestlengthattribute.md): Deprecated. The digest length.
- [kSecDigestHMACKeyAttribute](ksecdigesthmackeyattribute.md): Deprecated. The key for HMAC operation.
- [kSecInputIsAttributeName](ksecinputisattributename.md): Deprecated. The type of input to the transform.
- [kSecEncryptionMode](ksecencryptionmode.md): Deprecated. The encryption mode.
- [kSecEncryptKey](ksecencryptkey.md): Deprecated. The encryption key for the transform.
- [kSecIVKey](ksecivkey.md): Deprecated. The setting for an initialization vector.
- [kSecPaddingKey](ksecpaddingkey.md): Deprecated. The kind of padding to use.
- [kSecOAEPEncodingParametersAttributeName](ksecoaepencodingparametersattributename.md): Deprecated. The OAEP encoding parameters.
- [kSecOAEPMGF1DigestAlgorithmAttributeName](ksecoaepmgf1digestalgorithmattributename.md): Deprecated. The OAEP MGF1 digest algorithm.
- [kSecOAEPMessageLengthAttributeName](ksecoaepmessagelengthattributename.md): Deprecated. The OAEP message length.

### Transform Keys

- [kSecTransformInputAttributeName](ksectransforminputattributename.md): Deprecated. The input to a transform.
- [kSecTransformOutputAttributeName](ksectransformoutputattributename.md): Deprecated. The output of a transform.
- [kSecTransformDebugAttributeName](ksectransformdebugattributename.md): Deprecated. A write stream that should receive debug data.
- [kSecKeyAttributeName](kseckeyattributename.md): The cryptographic key associated with a transform.
- [kSecSignatureAttributeName](ksecsignatureattributename.md): The cryptographic signature associated with a transform.
- [kSecTransformAbortAttributeName](ksectransformabortattributename.md): Deprecated. The reason for an abort.
- [kSecTransformTransformName](ksectransformtransformname.md): Deprecated. The name of a transform.

### Encode Types

Values you use with the [kSecEncodeTypeAttribute](ksecencodetypeattribute.md) and [kSecDecodeTypeAttribute](ksecdecodetypeattribute.md) keys.

- [kSecBase32Encoding](ksecbase32encoding.md): Deprecated. A base 32 encoding.
- [kSecBase64Encoding](ksecbase64encoding.md): Deprecated. A base 64 encoding.
- [kSecZLibEncoding](kseczlibencoding.md): Deprecated. A compressed encoding.

### Digest Types

Values you use with the [kSecDigestTypeAttribute](ksecdigesttypeattribute.md) key.

- [kSecDigestMD2](ksecdigestmd2.md): Deprecated. An MD2 digest.
- [kSecDigestMD4](ksecdigestmd4.md): Deprecated. An MD4 digest.
- [kSecDigestMD5](ksecdigestmd5.md): Deprecated. An MD5 digest.
- [kSecDigestSHA1](ksecdigestsha1.md): Deprecated. An SHA1 digest.
- [kSecDigestSHA2](ksecdigestsha2.md): Deprecated. An SHA2 digest.
- [kSecDigestHMACMD5](ksecdigesthmacmd5.md): Deprecated. An HMAC using the MD5 digest algorithm.
- [kSecDigestHMACSHA1](ksecdigesthmacsha1.md): Deprecated. An HMAC using the SHA1 digest algorithm.
- [kSecDigestHMACSHA2](ksecdigesthmacsha2.md): Deprecated. An HMAC using one of the SHA2 digest algorithms.

### Line Lengths

Values you use with the [kSecEncodeLineLengthAttribute](ksecencodelinelengthattribute.md) key.

- [kSecLineLength64](kseclinelength64.md): Deprecated. A line length of 64 bytes.
- [kSecLineLength76](kseclinelength76.md): Deprecated. A line length of 76 bytes.

### Input Types

Values you use with the [kSecInputIsAttributeName](ksecinputisattributename.md) key.

- [kSecInputIsDigest](ksecinputisdigest.md): The input is a digest of the original data.
- [kSecInputIsPlainText](ksecinputisplaintext.md): The input is plain text.
- [kSecInputIsRaw](ksecinputisraw.md): Deprecated. The input is raw.

### Padding Types

Values you use with the [kSecPaddingKey](ksecpaddingkey.md) key.

- [kSecPaddingNoneKey](ksecpaddingnonekey.md): Deprecated. No padding will be used when encrypting or decrypting.
- [kSecPaddingOAEPKey](ksecpaddingoaepkey.md): Deprecated. PKCS7 padding will be used when encrypting or decrypting.
- [kSecPaddingPKCS1Key](ksecpaddingpkcs1key.md): Deprecated. PKCS1 padding will be used when encrypting or decrypting.
- [kSecPaddingPKCS5Key](ksecpaddingpkcs5key.md): Deprecated. PKCS5 padding will be used when encrypting or decrypting.
- [kSecPaddingPKCS7Key](ksecpaddingpkcs7key.md): Deprecated. PKCS7 padding will be used when encrypting or decrypting.

### Encryption Modes

Values you use with the [kSecEncryptionMode](ksecencryptionmode.md) key.

- [kSecModeNoneKey](ksecmodenonekey.md): Deprecated. No mode will be used when encrypting or decrypting.
- [kSecModeCBCKey](ksecmodecbckey.md): Deprecated. CBC mode will be used when encrypting or decrypting.
- [kSecModeCFBKey](ksecmodecfbkey.md): Deprecated. CFB mode will be used when encrypting or decrypting.
- [kSecModeECBKey](ksecmodeecbkey.md): Deprecated. ECB mode will be used when encrypting or decrypting.
- [kSecModeOFBKey](ksecmodeofbkey.md): Deprecated. OFB mode will be used when encrypting or decrypting.
