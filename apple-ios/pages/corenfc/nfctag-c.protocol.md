> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctag-c.protocol](https://developer.apple.com/documentation/corenfc/nfctag-c.protocol)

# NFCTag

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

An interface for interacting with an NFC or RFID tag.

## Declaration

```objectivec
@protocol NFCTag <NSObject, NSSecureCoding, NSCopying>
```

<a id="overview"></a>

## Overview

When an NFC reader session detects a tag, it returns an object that conforms to this protocol.

## Topics

### Getting Information About a Tag

- [available](nfctag-c.protocol/available.md): A Boolean value that indicates whether a detected tag is available.
- [session](nfctag-c.protocol/session.md): The reader session that provides the tag.

### Getting the Tag Type

- [type](nfctag-c.protocol/type.md): The tag type.
- [asNFCISO15693Tag](nfctag-c.protocol/asnfciso15693tag.md): Returns the tag as an ISO 15693 tag object.
- [asNFCISO7816Tag](nfctag-c.protocol/asnfciso7816tag.md): Returns the tag as an ISO 7816 tag object.
- [asNFCFeliCaTag](nfctag-c.protocol/asnfcfelicatag.md): Returns the tag as a FeliCa tag object.
- [asNFCMiFareTag](nfctag-c.protocol/asnfcmifaretag.md): Returns the tag as a MIFARE tag object.
- [NFCTagType](nfctagtype.md): Constants that identify the type of an NFC tag.

## Relationships

### Inherits From

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

### Inherited By

- [NFCFeliCaTag](nfcfelicatag.md)
- [NFCISO15693Tag](nfciso15693tag.md)
- [NFCISO7816Tag](nfciso7816tag.md)
- [NFCMiFareTag](nfcmifaretag.md)

## See Also

### Tag types

- [Creating NFC Tags from Your iPhone](creating-nfc-tags-from-your-iphone.md): Save data to tags, and interact with them using native tag protocols.
- [NFCISO7816Tag](nfciso7816tag.md): An interface for interacting with an ISO 7816 tag.
- [NFCISO15693Tag](nfciso15693tag.md): An interface for interacting with an ISO 15693 tag.
- [NFCFeliCaTag](nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCMiFareTag](nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.
