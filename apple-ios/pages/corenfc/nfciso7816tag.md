> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816tag](https://developer.apple.com/documentation/corenfc/nfciso7816tag)

# NFCISO7816Tag (Swift)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An interface for interacting with an ISO 7816 tag.

## Declaration

```swift
protocol NFCISO7816Tag : NFCNDEFTag, __NFCTag
```

<a id="overview"></a>

## Overview

The [NFCTagReaderSessionDelegate](nfctagreadersessiondelegate-2joku.md) receives an object that conforms to the [NFCISO7816Tag](nfciso7816tag.md) protocol when the [NFCTagReaderSession](nfctagreadersession.md) detects an ISO 7816-compatible tag. For the delegate to receive the tag object, your app must include:

- The [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats).
- A list of supported application identifiers in the [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers)\_ \_information property list key.

When the session discovers a compatible ISO 7816 tag, the session performs a `SELECT` command for each application identifier provided in [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers). The `SELECT` command searches for the identifiers in the order in which they appear in the array. The session calls the [tagReaderSession:didDetectTags:](nfctagreadersessiondelegate-5gxiw/tagreadersession_diddetecttags_.md) delegate method after the first successful `SELECT` command. The [initialSelectedAID](nfciso7816tag/initialselectedaid.md) property of the found tag contains the selected identifier.

For the reader session to read and write data to the tag, it must be available to the reader session. Use the [isAvailable](nfctag-swift.enum/isavailable.md) property to check the tag’s availability.

## Topics

### Specifying Application Identifiers

- [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers): A list of application identifiers that the app supports.

### Getting Tag Information

- [initialSelectedAID](nfciso7816tag/initialselectedaid.md): A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.
- [identifier](nfciso7816tag/identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](nfciso7816tag/historicalbytes.md): The historical bytes extracted from the Type A Answer To Select response.
- [applicationData](nfciso7816tag/applicationdata.md): The application data bytes extracted from the Type B Answer To Request response.
- [proprietaryApplicationDataCoding](nfciso7816tag/proprietaryapplicationdatacoding.md): A Boolean value that indicates whether the application data follows proprietary data coding.

### Sending a Command

- [sendCommand(apdu:resultHandler:)](nfciso7816tag/sendcommand%28apdu_resulthandler_%29.md): Sends an application protocol data unit (APDU) to the tag and receives a response APDU.
- [sendCommand(apdu:completionHandler:)](nfciso7816tag/sendcommand%28apdu_completionhandler_%29.md): Sends an application protocol data unit (APDU) to the tag and receives a response APDU.
- [NFCISO7816APDU](nfciso7816apdu.md): An object representing an ISO 7816 application protocol data unit (APDU).
- [NFCISO7816ResponseAPDU](nfciso7816responseapdu.md): An object containing the response from the tag.

### Instance Properties

- [supportsPACE](nfciso7816tag/supportspace.md)

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
- [NFCISO15693Tag](nfciso15693tag.md): An interface for interacting with an ISO 15693 tag.
- [NFCFeliCaTag](nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCMiFareTag](nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](nfctag-swift.enum.md): An object that represents an NFC tag object.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.

# NFCISO7816Tag (Objective-C)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An interface for interacting with an ISO 7816 tag.

## Declaration

```objectivec
@protocol NFCISO7816Tag <NFCTag, NFCNDEFTag>
```

<a id="overview"></a>

## Overview

The [NFCTagReaderSessionDelegate](nfctagreadersessiondelegate-2joku.md) receives an object that conforms to the [NFCISO7816Tag](nfciso7816tag.md) protocol when the [NFCTagReaderSession](nfctagreadersession.md) detects an ISO 7816-compatible tag. For the delegate to receive the tag object, your app must include:

- The [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats).
- A list of supported application identifiers in the [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers)\_ \_information property list key.

When the session discovers a compatible ISO 7816 tag, the session performs a `SELECT` command for each application identifier provided in [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers). The `SELECT` command searches for the identifiers in the order in which they appear in the array. The session calls the [tagReaderSession:didDetectTags:](nfctagreadersessiondelegate-5gxiw/tagreadersession_diddetecttags_.md) delegate method after the first successful `SELECT` command. The [initialSelectedAID](nfciso7816tag/initialselectedaid.md) property of the found tag contains the selected identifier.

For the reader session to read and write data to the tag, it must be available to the reader session. Use the [isAvailable](nfctag-swift.enum/isavailable.md) property to check the tag’s availability.

## Topics

### Specifying Application Identifiers

- [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers): A list of application identifiers that the app supports.

### Getting Tag Information

- [initialSelectedAID](nfciso7816tag/initialselectedaid.md): A hexadecimal string of the application identifier for the tag selected by the reader session when discovering new tags.
- [identifier](nfciso7816tag/identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](nfciso7816tag/historicalbytes.md): The historical bytes extracted from the Type A Answer To Select response.
- [applicationData](nfciso7816tag/applicationdata.md): The application data bytes extracted from the Type B Answer To Request response.
- [proprietaryApplicationDataCoding](nfciso7816tag/proprietaryapplicationdatacoding.md): A Boolean value that indicates whether the application data follows proprietary data coding.

### Sending a Command

- [sendCommandAPDU:completionHandler:](nfciso7816tag/sendcommand%28apdu_completionhandler_%29.md): Sends an application protocol data unit (APDU) to the tag and receives a response APDU.
- [NFCISO7816APDU](nfciso7816apdu.md): An object representing an ISO 7816 application protocol data unit (APDU).

### Instance Properties

- [supportsPACE](nfciso7816tag/supportspace.md)

## Relationships

### Inherits From

- [NFCNDEFTag](nfcndeftag.md)
- [NFCTag](nfctag-c.protocol.md)

## See Also

### Tag types

- [Creating NFC Tags from Your iPhone](creating-nfc-tags-from-your-iphone.md): Save data to tags, and interact with them using native tag protocols.
- [NFCISO15693Tag](nfciso15693tag.md): An interface for interacting with an ISO 15693 tag.
- [NFCFeliCaTag](nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCMiFareTag](nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](nfctag-c.protocol.md): An interface for interacting with an NFC or RFID tag.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.
