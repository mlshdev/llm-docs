> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag](https://developer.apple.com/documentation/corenfc/nfcfelicatag)

# NFCFeliCaTag (Swift)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An interface for interacting with a FeliCa™ tag.

## Declaration

```swift
protocol NFCFeliCaTag : NFCNDEFTag, __NFCTag
```

<a id="overview"></a>

## Overview

FeliCa is a trademark of Sony Corporation.

## Topics

### Specifying System Codes

- [ISO18092 system codes for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.felica.systemcodes): A list of FeliCa system codes that the app supports.

### Getting Current Information

- [currentSystemCode](nfcfelicatag/currentsystemcode.md): The system code most recently selected by the reader session during a polling sequence.
- [currentIDm](nfcfelicatag/currentidm.md): The manufacturer identifier for the system currently selected by the reader session.

### Polling

- [polling(systemCode:requestCode:timeSlot:completionHandler:)](nfcfelicatag/polling%28systemcode_requestcode_timeslot_completionhandler_%29.md): Sends the Polling command as defined by FeliCa card specification to the tag.
- [PollingRequestCode](pollingrequestcode.md): Deprecated. Codes that specify the type of the data to request when polling.
- [PollingTimeSlot](pollingtimeslot.md): Deprecated. Constants that specify the maximum number of time slots.

### Requesting Services

- [requestService(nodeCodeList:completionHandler:)](nfcfelicatag/requestservice%28nodecodelist_completionhandler_%29.md): Sends the Request Service command, as defined by the FeliCa card specification, to the tag.
- [requestServiceV2(nodeCodeList:completionHandler:)](nfcfelicatag/requestservicev2%28nodecodelist_completionhandler_%29.md): Sends the Request Service V2 command, as defined by the FeliCa card specification, to the tag.
- [EncryptionId](encryptionid.md): Deprecated. Encryption identifiers indicating the type of encryption algorithm used in the response of a Request Service V2 command.

### Requesting Responses

- [requestResponse(completionHandler:)](nfcfelicatag/requestresponse%28completionhandler_%29.md): Sends the Request Response command, as defined by the FeliCa card specification, to the tag.

### Requesting Specification Versions

- [requestSpecificationVersion(completionHandler:)](nfcfelicatag/requestspecificationversion%28completionhandler_%29.md): Sends the Request Specification Version command, as defined by the FeliCa card specification, to the tag.

### Requesting System Codes

- [requestSystemCode(completionHandler:)](nfcfelicatag/requestsystemcode%28completionhandler_%29.md): Sends the Request System Code command, as defined by the FeliCa card specification, to the tag.

### Resetting Modes

- [resetMode(completionHandler:)](nfcfelicatag/resetmode%28completionhandler_%29.md): Sends the Reset Mode command, as defined by the FeliCa card specification, to the tag.

### Reading and Writing Without Encryption

- [readWithoutEncryption(serviceCodeList:blockList:completionHandler:)](nfcfelicatag/readwithoutencryption%28servicecodelist_blocklist_completionhandler_%29.md): Sends the Read Without Encryption command, as defined by the FeliCa card specification, to the tag.
- [writeWithoutEncryption(serviceCodeList:blockList:blockData:completionHandler:)](nfcfelicatag/writewithoutencryption%28servicecodelist_blocklist_blockdata_completionhandler_%29.md): Sends the Write Without Encryption command, as defined by the FeliCa card specification, to the tag.

### Sending FeliCa Commands

- [sendFeliCaCommand(commandPacket:completionHandler:)](nfcfelicatag/sendfelicacommand%28commandpacket_completionhandler_%29.md): Sends the FeliCa command packet data to the tag.

### Instance Methods

- [polling(systemCode:requestCode:timeSlot:resultHandler:)](nfcfelicatag/polling%28systemcode_requestcode_timeslot_resulthandler_%29.md)
- [readWithoutEncryption(serviceCodeList:blockList:resultHandler:)](nfcfelicatag/readwithoutencryption%28servicecodelist_blocklist_resulthandler_%29.md)
- [requestResponse(resultHandler:)](nfcfelicatag/requestresponse%28resulthandler_%29.md)
- [requestService(nodeCodeList:resultHandler:)](nfcfelicatag/requestservice%28nodecodelist_resulthandler_%29.md)
- [requestServiceV2(nodeCodeList:resultHandler:)](nfcfelicatag/requestservicev2%28nodecodelist_resulthandler_%29.md)
- [requestSpecificationVersion(resultHandler:)](nfcfelicatag/requestspecificationversion%28resulthandler_%29.md)
- [requestSystemCode(resultHandler:)](nfcfelicatag/requestsystemcode%28resulthandler_%29.md)
- [resetMode(resultHandler:)](nfcfelicatag/resetmode%28resulthandler_%29.md)
- [sendFeliCaCommand(commandPacket:resultHandler:)](nfcfelicatag/sendfelicacommand%28commandpacket_resulthandler_%29.md)
- [writeWithoutEncryption(serviceCodeList:blockList:blockData:resultHandler:)](nfcfelicatag/writewithoutencryption%28servicecodelist_blocklist_blockdata_resulthandler_%29.md)

## Relationships

### Inherits From

- [NFCNDEFTag](nfcndeftag.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Tag types

- [Creating NFC Tags from Your iPhone](creating-nfc-tags-from-your-iphone.md): Save data to tags, and interact with them using native tag protocols.
- [NFCISO7816Tag](nfciso7816tag.md): An interface for interacting with an ISO 7816 tag.
- [NFCISO15693Tag](nfciso15693tag.md): An interface for interacting with an ISO 15693 tag.
- [NFCMiFareTag](nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](nfctag-swift.enum.md): An object that represents an NFC tag object.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.

# NFCFeliCaTag (Objective-C)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An interface for interacting with a FeliCa™ tag.

## Declaration

```objectivec
@protocol NFCFeliCaTag <NFCTag, NFCNDEFTag>
```

<a id="overview"></a>

## Overview

FeliCa is a trademark of Sony Corporation.

## Topics

### Specifying System Codes

- [ISO18092 system codes for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.felica.systemcodes): A list of FeliCa system codes that the app supports.

### Getting Current Information

- [currentSystemCode](nfcfelicatag/currentsystemcode.md): The system code most recently selected by the reader session during a polling sequence.
- [currentIDm](nfcfelicatag/currentidm.md): The manufacturer identifier for the system currently selected by the reader session.

### Polling

- [pollingWithSystemCode:requestCode:timeSlot:completionHandler:](nfcfelicatag/polling%28systemcode_requestcode_timeslot_completionhandler_%29.md): Sends the Polling command as defined by FeliCa card specification to the tag.
- [PollingRequestCode](pollingrequestcode.md): Deprecated. Codes that specify the type of the data to request when polling.
- [PollingTimeSlot](pollingtimeslot.md): Deprecated. Constants that specify the maximum number of time slots.

### Requesting Services

- [requestServiceWithNodeCodeList:completionHandler:](nfcfelicatag/requestservice%28nodecodelist_completionhandler_%29.md): Sends the Request Service command, as defined by the FeliCa card specification, to the tag.
- [requestServiceV2WithNodeCodeList:completionHandler:](nfcfelicatag/requestservicev2%28nodecodelist_completionhandler_%29.md): Sends the Request Service V2 command, as defined by the FeliCa card specification, to the tag.
- [EncryptionId](encryptionid.md): Deprecated. Encryption identifiers indicating the type of encryption algorithm used in the response of a Request Service V2 command.

### Requesting Responses

- [requestResponseWithCompletionHandler:](nfcfelicatag/requestresponse%28completionhandler_%29.md): Sends the Request Response command, as defined by the FeliCa card specification, to the tag.

### Requesting Specification Versions

- [requestSpecificationVersionWithCompletionHandler:](nfcfelicatag/requestspecificationversion%28completionhandler_%29.md): Sends the Request Specification Version command, as defined by the FeliCa card specification, to the tag.

### Requesting System Codes

- [requestSystemCodeWithCompletionHandler:](nfcfelicatag/requestsystemcode%28completionhandler_%29.md): Sends the Request System Code command, as defined by the FeliCa card specification, to the tag.

### Resetting Modes

- [resetModeWithCompletionHandler:](nfcfelicatag/resetmode%28completionhandler_%29.md): Sends the Reset Mode command, as defined by the FeliCa card specification, to the tag.

### Reading and Writing Without Encryption

- [readWithoutEncryptionWithServiceCodeList:blockList:completionHandler:](nfcfelicatag/readwithoutencryption%28servicecodelist_blocklist_completionhandler_%29.md): Sends the Read Without Encryption command, as defined by the FeliCa card specification, to the tag.
- [writeWithoutEncryptionWithServiceCodeList:blockList:blockData:completionHandler:](nfcfelicatag/writewithoutencryption%28servicecodelist_blocklist_blockdata_completionhandler_%29.md): Sends the Write Without Encryption command, as defined by the FeliCa card specification, to the tag.

### Sending FeliCa Commands

- [sendFeliCaCommandPacket:completionHandler:](nfcfelicatag/sendfelicacommand%28commandpacket_completionhandler_%29.md): Sends the FeliCa command packet data to the tag.

## Relationships

### Inherits From

- [NFCNDEFTag](nfcndeftag.md)
- [NFCTag](nfctag-c.protocol.md)

## See Also

### Tag types

- [Creating NFC Tags from Your iPhone](creating-nfc-tags-from-your-iphone.md): Save data to tags, and interact with them using native tag protocols.
- [NFCISO7816Tag](nfciso7816tag.md): An interface for interacting with an ISO 7816 tag.
- [NFCISO15693Tag](nfciso15693tag.md): An interface for interacting with an ISO 15693 tag.
- [NFCMiFareTag](nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](nfctag-c.protocol.md): An interface for interacting with an NFC or RFID tag.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.
