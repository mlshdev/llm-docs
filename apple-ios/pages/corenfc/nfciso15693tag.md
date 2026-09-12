> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693tag](https://developer.apple.com/documentation/corenfc/nfciso15693tag)

# NFCISO15693Tag (Swift)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

An interface for interacting with an ISO 15693 tag.

## Declaration

```swift
protocol NFCISO15693Tag : NFCNDEFTag, __NFCTag
```

<a id="overview"></a>

## Overview

The [NFCTagReaderSessionDelegate](nfctagreadersessiondelegate-2joku.md) receives an object that conforms to the [NFCISO15693Tag](nfciso15693tag.md) protocol when the [NFCTagReaderSession](nfctagreadersession.md) detects an ISO 15693-compatible tag. For the delegate to receive the tag object, your app must include the [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats).

For the reader session to read and write data to the tag, it must be available to the reader session. Use the [isAvailable](nfctag-swift.enum/isavailable.md) property to check the tag’s availability.

## Topics

### Getting Tag Information

- [icManufacturerCode](nfciso15693tag/icmanufacturercode.md): The IC manufacturer code of the tag.
- [icSerialNumber](nfciso15693tag/icserialnumber.md): The IC serial number assigned to the tag by the manufacturer.
- [identifier](nfciso15693tag/identifier.md): The unique hardware identifier of the tag.

### Selecting Request Flag Options

- [RequestFlag](requestflag.md): A set of bit mask options that, when combined, define the request flags to use when sending a command.

### Getting System Information

- [getSystemInfo(requestFlags:completionHandler:)](nfciso15693tag/getsysteminfo%28requestflags_completionhandler_%29.md): Deprecated. Sends the Get System Information command (0x2B command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Single Block Commands

- [readSingleBlock(requestFlags:blockNumber:completionHandler:)](nfciso15693tag/readsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends a Read Single Block command (0x20 command code), as defined in the ISO 15693-3 specification, to the tag.
- [writeSingleBlock(requestFlags:blockNumber:dataBlock:completionHandler:)](nfciso15693tag/writesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Write Single Block command (0x21 command code), as defined in the ISO 15693-3 specification, to the tag.
- [lockBlock(requestFlags:blockNumber:completionHandler:)](nfciso15693tag/lockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Lock Block command (0x22 command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Multi-block Commands

- [readMultipleBlocks(requestFlags:blockRange:completionHandler:)](nfciso15693tag/readmultipleblocks%28requestflags_blockrange_completionhandler_%29.md): Sends the Read Multiple Blocks command (0x23 command code), as defined in the ISO 15693-3 specification, to the tag.
- [writeMultipleBlocks(requestFlags:blockRange:dataBlocks:completionHandler:)](nfciso15693tag/writemultipleblocks%28requestflags_blockrange_datablocks_completionhandler_%29.md): Sends the Write Multiple Blocks command (0x24 command code), as defined in the ISO 15693-3 specification, to the tag.
- [getMultipleBlockSecurityStatus(requestFlags:blockRange:completionHandler:)](nfciso15693tag/getmultipleblocksecuritystatus%28requestflags_blockrange_completionhandler_%29.md): Sends the Get Multiple Block Security Status command (0x2C command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Application Family Identifier Commands

- [writeAFI(requestFlags:afi:completionHandler:)](nfciso15693tag/writeafi%28requestflags_afi_completionhandler_%29.md): Sends the Write AFI command (0x27 command code), as defined in the ISO 15693-3 specification, to the tag.
- [lockAFI(requestFlags:completionHandler:)](nfciso15693tag/lockafi%28requestflags_completionhandler_%29.md): Sends the Lock AFI command (0x28 command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Data Storage Format Identifier Commands

- [writeDSFID(requestFlags:dsfid:completionHandler:)](nfciso15693tag/writedsfid%28requestflags_dsfid_completionhandler_%29.md): Sends the Write DSFID command (0x29 command code), as defined in the ISO 15693-3 specification, to the tag.
- [lockDFSID(requestFlags:completionHandler:)](nfciso15693tag/lockdfsid%28requestflags_completionhandler_%29.md): Deprecated. Sends the Lock DSFID command (0x2A command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Reset to Ready Command

- [resetToReady(requestFlags:completionHandler:)](nfciso15693tag/resettoready%28requestflags_completionhandler_%29.md): Sends the Reset To Ready command (0x26 command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Select Command

- [select(requestFlags:completionHandler:)](nfciso15693tag/select%28requestflags_completionhandler_%29.md): Sends the Select command (0x25 command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Stay Quiet Command

- [stayQuiet(completionHandler:)](nfciso15693tag/stayquiet%28completionhandler_%29.md): Sends a Stay Quiet command (0x02 command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Custom Commands

- [customCommand(requestFlags:customCommandCode:customRequestParameters:completionHandler:)](nfciso15693tag/customcommand%28requestflags_customcommandcode_customrequestparameters_completionhandler_%29.md): Sends a custom command (0xA0 to 0xDF command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Extended Commands

- [extendedReadSingleBlock(requestFlags:blockNumber:completionHandler:)](nfciso15693tag/extendedreadsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Read Single Block command (0x30 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedWriteSingleBlock(requestFlags:blockNumber:dataBlock:completionHandler:)](nfciso15693tag/extendedwritesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Extended Write Single Block command (0x31 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedLockBlock(requestFlags:blockNumber:completionHandler:)](nfciso15693tag/extendedlockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Lock Single Block command (0x32 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedReadMultipleBlocks(requestFlags:blockRange:completionHandler:)](nfciso15693tag/extendedreadmultipleblocks%28requestflags_blockrange_completionhandler_%29.md): Sends the Extended Read Multiple Block command (0x33 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.

### Getting Response Errors

- [NFCISO15693TagResponseErrorKey](nfciso15693tagresponseerrorkey.md): A user information dictionary key indicating that a tag responded with a command error.

### Instance Methods

- [authenticate(requestFlags:cryptoSuiteIdentifier:message:)](nfciso15693tag/authenticate%28requestflags_cryptosuiteidentifier_message_%29.md)
- [authenticate(requestFlags:cryptoSuiteIdentifier:message:resultHandler:)](nfciso15693tag/authenticate%28requestflags_cryptosuiteidentifier_message_resulthandler_%29.md)
- [challenge(requestFlags:cryptoSuiteIdentifier:message:)](nfciso15693tag/challenge%28requestflags_cryptosuiteidentifier_message_%29.md)
- [challenge(requestFlags:cryptoSuiteIdentifier:message:completionHandler:)](nfciso15693tag/challenge%28requestflags_cryptosuiteidentifier_message_completionhandler_%29.md)
- [customCommand(requestFlags:customCommandCode:customRequestParameters:resultHandler:)](nfciso15693tag/customcommand%28requestflags_customcommandcode_customrequestparameters_resulthandler_%29.md)
- [extendedFastReadMultipleBlocks(requestFlags:blockRange:)](nfciso15693tag/extendedfastreadmultipleblocks%28requestflags_blockrange_%29.md)
- [extendedFastReadMultipleBlocks(requestFlags:blockRange:resultHandler:)](nfciso15693tag/extendedfastreadmultipleblocks%28requestflags_blockrange_resulthandler_%29.md)
- [extendedGetMultipleBlockSecurityStatus(requestFlags:blockRange:)](nfciso15693tag/extendedgetmultipleblocksecuritystatus%28requestflags_blockrange_%29.md)
- [extendedGetMultipleBlockSecurityStatus(requestFlags:blockRange:resultHandler:)](nfciso15693tag/extendedgetmultipleblocksecuritystatus%28requestflags_blockrange_resulthandler_%29.md)
- [extendedReadSingleBlock(requestFlags:blockNumber:resultHandler:)](nfciso15693tag/extendedreadsingleblock%28requestflags_blocknumber_resulthandler_%29.md)
- [extendedWriteMultipleBlocks(requestFlags:blockRange:dataBlocks:)](nfciso15693tag/extendedwritemultipleblocks%28requestflags_blockrange_datablocks_%29.md)
- [extendedWriteMultipleBlocks(requestFlags:blockRange:dataBlocks:completionHandler:)](nfciso15693tag/extendedwritemultipleblocks%28requestflags_blockrange_datablocks_completionhandler_%29.md)
- [fastReadMultipleBlocks(requestFlags:blockRange:)](nfciso15693tag/fastreadmultipleblocks%28requestflags_blockrange_%29.md)
- [fastReadMultipleBlocks(requestFlags:blockRange:resultHandler:)](nfciso15693tag/fastreadmultipleblocks%28requestflags_blockrange_resulthandler_%29.md)
- [getSystemInfo(requestFlags:resultHandler:)](nfciso15693tag/getsysteminfo%28requestflags_resulthandler_%29.md)
- [keyUpdate(requestFlags:keyIdentifier:message:)](nfciso15693tag/keyupdate%28requestflags_keyidentifier_message_%29.md)
- [keyUpdate(requestFlags:keyIdentifier:message:resultHandler:)](nfciso15693tag/keyupdate%28requestflags_keyidentifier_message_resulthandler_%29.md)
- [lockDSFID(requestFlags:completionHandler:)](nfciso15693tag/lockdsfid%28requestflags_completionhandler_%29.md)
- [readBuffer(requestFlags:)](nfciso15693tag/readbuffer%28requestflags_%29.md)
- [readBuffer(requestFlags:resultHandler:)](nfciso15693tag/readbuffer%28requestflags_resulthandler_%29.md)
- [readMultipleBlock(readConfiguration:completionHandler:)](nfciso15693tag/readmultipleblock%28readconfiguration_completionhandler_%29.md)
- [readMultipleBlocks(requestFlags:blockRange:resultHandler:)](nfciso15693tag/readmultipleblocks%28requestflags_blockrange_resulthandler_%29.md)
- [readSingleBlock(requestFlags:blockNumber:resultHandler:)](nfciso15693tag/readsingleblock%28requestflags_blocknumber_resulthandler_%29.md)
- [sendCustomCommand(commandConfiguration:completionHandler:)](nfciso15693tag/sendcustomcommand%28commandconfiguration_completionhandler_%29.md)
- [sendRequest(requestFlags:commandCode:data:)](nfciso15693tag/sendrequest%28requestflags_commandcode_data_%29.md)
- [sendRequest(requestFlags:commandCode:data:resultHandler:)](nfciso15693tag/sendrequest%28requestflags_commandcode_data_resulthandler_%29.md)
- [systemInfo(requestFlags:)](nfciso15693tag/systeminfo%28requestflags_%29.md)

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
- [NFCFeliCaTag](nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCMiFareTag](nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](nfctag-swift.enum.md): An object that represents an NFC tag object.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.

# NFCISO15693Tag (Objective-C)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

An interface for interacting with an ISO 15693 tag.

## Declaration

```objectivec
@protocol NFCISO15693Tag <NFCTag, NFCNDEFTag>
```

<a id="overview"></a>

## Overview

The [NFCTagReaderSessionDelegate](nfctagreadersessiondelegate-2joku.md) receives an object that conforms to the [NFCISO15693Tag](nfciso15693tag.md) protocol when the [NFCTagReaderSession](nfctagreadersession.md) detects an ISO 15693-compatible tag. For the delegate to receive the tag object, your app must include the [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats).

For the reader session to read and write data to the tag, it must be available to the reader session. Use the [isAvailable](nfctag-swift.enum/isavailable.md) property to check the tag’s availability.

## Topics

### Getting Tag Information

- [icManufacturerCode](nfciso15693tag/icmanufacturercode.md): The IC manufacturer code of the tag.
- [icSerialNumber](nfciso15693tag/icserialnumber.md): The IC serial number assigned to the tag by the manufacturer.
- [identifier](nfciso15693tag/identifier.md): The unique hardware identifier of the tag.

### Selecting Request Flag Options

- [RequestFlag](requestflag.md): A set of bit mask options that, when combined, define the request flags to use when sending a command.

### Getting System Information

- [getSystemInfoWithRequestFlag:completionHandler:](nfciso15693tag/getsysteminfo%28requestflags_completionhandler_%29.md): Deprecated. Sends the Get System Information command (0x2B command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Single Block Commands

- [readSingleBlockWithRequestFlags:blockNumber:completionHandler:](nfciso15693tag/readsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends a Read Single Block command (0x20 command code), as defined in the ISO 15693-3 specification, to the tag.
- [writeSingleBlockWithRequestFlags:blockNumber:dataBlock:completionHandler:](nfciso15693tag/writesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Write Single Block command (0x21 command code), as defined in the ISO 15693-3 specification, to the tag.
- [lockBlockWithRequestFlags:blockNumber:completionHandler:](nfciso15693tag/lockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Lock Block command (0x22 command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Multi-block Commands

- [readMultipleBlocksWithRequestFlags:blockRange:completionHandler:](nfciso15693tag/readmultipleblocks%28requestflags_blockrange_completionhandler_%29.md): Sends the Read Multiple Blocks command (0x23 command code), as defined in the ISO 15693-3 specification, to the tag.
- [writeMultipleBlocksWithRequestFlags:blockRange:dataBlocks:completionHandler:](nfciso15693tag/writemultipleblocks%28requestflags_blockrange_datablocks_completionhandler_%29.md): Sends the Write Multiple Blocks command (0x24 command code), as defined in the ISO 15693-3 specification, to the tag.
- [getMultipleBlockSecurityStatusWithRequestFlag:blockRange:completionHandler:](nfciso15693tag/getmultipleblocksecuritystatus%28requestflags_blockrange_completionhandler_%29.md): Sends the Get Multiple Block Security Status command (0x2C command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Application Family Identifier Commands

- [writeAFIWithRequestFlag:afi:completionHandler:](nfciso15693tag/writeafi%28requestflags_afi_completionhandler_%29.md): Sends the Write AFI command (0x27 command code), as defined in the ISO 15693-3 specification, to the tag.
- [lockAFIWithRequestFlag:completionHandler:](nfciso15693tag/lockafi%28requestflags_completionhandler_%29.md): Sends the Lock AFI command (0x28 command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Data Storage Format Identifier Commands

- [writeDSFIDWithRequestFlag:dsfid:completionHandler:](nfciso15693tag/writedsfid%28requestflags_dsfid_completionhandler_%29.md): Sends the Write DSFID command (0x29 command code), as defined in the ISO 15693-3 specification, to the tag.
- [lockDFSIDWithRequestFlag:completionHandler:](nfciso15693tag/lockdfsid%28requestflags_completionhandler_%29.md): Deprecated. Sends the Lock DSFID command (0x2A command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Reset to Ready Command

- [resetToReadyWithRequestFlags:completionHandler:](nfciso15693tag/resettoready%28requestflags_completionhandler_%29.md): Sends the Reset To Ready command (0x26 command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Select Command

- [selectWithRequestFlags:completionHandler:](nfciso15693tag/select%28requestflags_completionhandler_%29.md): Sends the Select command (0x25 command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Stay Quiet Command

- [stayQuietWithCompletionHandler:](nfciso15693tag/stayquiet%28completionhandler_%29.md): Sends a Stay Quiet command (0x02 command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Custom Commands

- [customCommandWithRequestFlag:customCommandCode:customRequestParameters:completionHandler:](nfciso15693tag/customcommand%28requestflags_customcommandcode_customrequestparameters_completionhandler_%29.md): Sends a custom command (0xA0 to 0xDF command code), as defined in the ISO 15693-3 specification, to the tag.

### Sending Extended Commands

- [extendedReadSingleBlockWithRequestFlags:blockNumber:completionHandler:](nfciso15693tag/extendedreadsingleblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Read Single Block command (0x30 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedWriteSingleBlockWithRequestFlags:blockNumber:dataBlock:completionHandler:](nfciso15693tag/extendedwritesingleblock%28requestflags_blocknumber_datablock_completionhandler_%29.md): Sends the Extended Write Single Block command (0x31 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedLockBlockWithRequestFlags:blockNumber:completionHandler:](nfciso15693tag/extendedlockblock%28requestflags_blocknumber_completionhandler_%29.md): Sends the Extended Lock Single Block command (0x32 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.
- [extendedReadMultipleBlocksWithRequestFlags:blockRange:completionHandler:](nfciso15693tag/extendedreadmultipleblocks%28requestflags_blockrange_completionhandler_%29.md): Sends the Extended Read Multiple Block command (0x33 command code), as defined in the NFC Forum Type 5 tag specification, to the tag.

### Getting Response Errors

- [NFCISO15693TagResponseErrorKey](nfciso15693tagresponseerrorkey.md): A user information dictionary key indicating that a tag responded with a command error.

### Instance Methods

- [authenticateWithRequestFlags:cryptoSuiteIdentifier:message:completionHandler:](nfciso15693tag/authenticatewithrequestflags_cryptosuiteidentifier_message_completionhandler_.md)
- [challengeWithRequestFlags:cryptoSuiteIdentifier:message:completionHandler:](nfciso15693tag/challengewithrequestflags_cryptosuiteidentifier_message_completionhandler_.md)
- [extendedFastReadMultipleBlocksWithRequestFlag:blockRange:completionHandler:](nfciso15693tag/extendedfastreadmultipleblockswithrequestflag_blockrange_completionhandler_.md)
- [extendedGetMultipleBlockSecurityStatusWithRequestFlag:blockRange:completionHandler:](nfciso15693tag/extendedgetmultipleblocksecuritystatuswithrequestflag_blockrange_completionhandler_.md)
- [extendedWriteMultipleBlocksWithRequestFlags:blockRange:dataBlocks:completionHandler:](nfciso15693tag/extendedwritemultipleblockswithrequestflags_blockrange_datablocks_completionhandler_.md)
- [fastReadMultipleBlocksWithRequestFlag:blockRange:completionHandler:](nfciso15693tag/fastreadmultipleblockswithrequestflag_blockrange_completionhandler_.md)
- [getSystemInfoAndUIDWithRequestFlag:completionHandler:](nfciso15693tag/getsysteminfoanduidwithrequestflag_completionhandler_.md)
- [keyUpdateWithRequestFlags:keyIdentifier:message:completionHandler:](nfciso15693tag/keyupdatewithrequestflags_keyidentifier_message_completionhandler_.md)
- [lockDSFIDWithRequestFlag:completionHandler:](nfciso15693tag/lockdsfid%28requestflags_completionhandler_%29.md)
- [readBufferWithRequestFlags:completionHandler:](nfciso15693tag/readbufferwithrequestflags_completionhandler_.md)
- [readMultipleBlocksWithConfiguration:completionHandler:](nfciso15693tag/readmultipleblock%28readconfiguration_completionhandler_%29.md)
- [sendCustomCommandWithConfiguration:completionHandler:](nfciso15693tag/sendcustomcommand%28commandconfiguration_completionhandler_%29.md)
- [sendRequestWithFlag:commandCode:data:completionHandler:](nfciso15693tag/sendrequestwithflag_commandcode_data_completionhandler_.md)

## Relationships

### Inherits From

- [NFCNDEFTag](nfcndeftag.md)
- [NFCTag](nfctag-c.protocol.md)

## See Also

### Tag types

- [Creating NFC Tags from Your iPhone](creating-nfc-tags-from-your-iphone.md): Save data to tags, and interact with them using native tag protocols.
- [NFCISO7816Tag](nfciso7816tag.md): An interface for interacting with an ISO 7816 tag.
- [NFCFeliCaTag](nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCMiFareTag](nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](nfctag-c.protocol.md): An interface for interacting with an NFC or RFID tag.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.
