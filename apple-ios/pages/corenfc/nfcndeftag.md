> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndeftag](https://developer.apple.com/documentation/corenfc/nfcndeftag)

# NFCNDEFTag (Swift)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An interface for interacting with an NDEF tag.

## Declaration

```swift
protocol NFCNDEFTag : NSCopying, NSSecureCoding, NSObjectProtocol
```

## Topics

### Getting the Tag Status

- [isAvailable](nfcndeftag/isavailable.md): A Boolean value that determines whether the NDEF tag is available in the current reader session.
- [queryNDEFStatus(completionHandler:)](nfcndeftag/queryndefstatus%28completionhandler_%29.md): Asks the reader session for the NDEF support status of the tag.
- [NFCNDEFStatus](nfcndefstatus.md): Constants that indicate status for an NDEF tag.

### Reading the Tag

- [readNDEF(completionHandler:)](nfcndeftag/readndef%28completionhandler_%29.md): Retrieves an NDEF message from the tag.

### Writing to the Tag

- [writeNDEF(\_:completionHandler:)](nfcndeftag/writendef%28__completionhandler_%29.md): Saves an NDEF message to a writable tag.
- [writeLock(completionHandler:)](nfcndeftag/writelock%28completionhandler_%29.md): Changes the NDEF tag status to read-only, preventing future write operations.

## Relationships

### Inherits From

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
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
- [NFCTag](nfctag-swift.enum.md): An object that represents an NFC tag object.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.

# NFCNDEFTag (Objective-C)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An interface for interacting with an NDEF tag.

## Declaration

```objectivec
@protocol NFCNDEFTag <NSObject, NSSecureCoding, NSCopying>
```

## Topics

### Getting the Tag Status

- [available](nfcndeftag/isavailable.md): A Boolean value that determines whether the NDEF tag is available in the current reader session.
- [queryNDEFStatusWithCompletionHandler:](nfcndeftag/queryndefstatus%28completionhandler_%29.md): Asks the reader session for the NDEF support status of the tag.
- [NFCNDEFStatus](nfcndefstatus.md): Constants that indicate status for an NDEF tag.

### Reading the Tag

- [readNDEFWithCompletionHandler:](nfcndeftag/readndef%28completionhandler_%29.md): Retrieves an NDEF message from the tag.

### Writing to the Tag

- [writeNDEF:completionHandler:](nfcndeftag/writendef%28__completionhandler_%29.md): Saves an NDEF message to a writable tag.
- [writeLockWithCompletionHandler:](nfcndeftag/writelock%28completionhandler_%29.md): Changes the NDEF tag status to read-only, preventing future write operations.

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
- [NFCTag](nfctag-c.protocol.md): An interface for interacting with an NFC or RFID tag.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.
