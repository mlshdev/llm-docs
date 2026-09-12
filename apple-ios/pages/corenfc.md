> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc](https://developer.apple.com/documentation/corenfc)

# Core NFC (Swift)

**Framework:** Core NFC  
**Kind:** Framework  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Detect NFC tags, read messages that contain NDEF data, and save data to writable tags.

<a id="overview"></a>

## Overview

Your app can read tags to give users more information about their physical environment and the real-world objects in it. Using Core NFC, you can read Near Field Communication (NFC) tags of types 1 through 5 that contain data in the NFC Data Exchange Format (NDEF). For example, your app might give users information about products they find in a store or exhibits they visit in a museum.

Your app can also write data to tags, and interact with protocol-specific tags such as ISO 7816, ISO 15693, FeliCa™, and MIFARE® tags.

Core NFC isn’t available for use in app extensions, and it requires a device that supports Near Field Communication. To determine if support is available, check the [readingAvailable](corenfc/nfcreadersession-swift.class/readingavailable.md) class property before starting a reader session.

## Topics

### Essentials

- [Building an NFC Tag-Reader App](corenfc/building-an-nfc-tag-reader-app.md): Read NFC tags with NDEF messages in your app.
- [Adding Support for Background Tag Reading](corenfc/adding-support-for-background-tag-reading.md): Allow users to scan NFC tags without an app using background tag reading.
- [NFCReaderUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nfcreaderusagedescription): A message that tells people why the app is requesting access to the device’s NFC hardware.

### Reader sessions

Create a reader session to scan and detect NFC tags.

- [NFCNDEFReaderSession](corenfc/nfcndefreadersession.md): A reader session for detecting NFC Data Exchange Format (NDEF) tags.
- [NFCTagReaderSession](corenfc/nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCPaymentTagReaderSession](corenfc/nfcpaymenttagreadersession.md): A reader session that supports the use of payment tags.
- [NFCVASReaderSession](corenfc/nfcvasreadersession.md): A reader session for processing Value Added Service (VAS) tags.
- [NFCReaderSession](corenfc/nfcreadersession-swift.class.md): The abstract base class that represents a reader session for detecting NFC tags.
- [NFCReaderSessionProtocol](corenfc/nfcreadersessionprotocol.md): A general interface for interacting with a reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.

### Tag types

Read tag data, and save data to writable tags, by using the appropriate tag type interface.

- [Creating NFC Tags from Your iPhone](corenfc/creating-nfc-tags-from-your-iphone.md): Save data to tags, and interact with them using native tag protocols.
- [NFCISO7816Tag](corenfc/nfciso7816tag.md): An interface for interacting with an ISO 7816 tag.
- [NFCISO15693Tag](corenfc/nfciso15693tag.md): An interface for interacting with an ISO 15693 tag.
- [NFCFeliCaTag](corenfc/nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCMiFareTag](corenfc/nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](corenfc/nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](corenfc/nfctag-swift.enum.md): An object that represents an NFC tag object.
- [NFCTagCommandConfiguration](corenfc/nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.

### NDEF messages and payloads

- [NFCNDEFMessage](corenfc/nfcndefmessage.md): An NFC NDEF message consisting of an array of payload records.
- [NFCNDEFPayload](corenfc/nfcndefpayload.md): A payload record in an NFC NDEF message.

### Card sessions

- [CardSession](corenfc/cardsession.md): An ISO 7816 card emulation session.
- [NFCPresentmentIntentAssertion](corenfc/nfcpresentmentintentassertion.md): An object that signals your app’s intention to make exclusive use of the device’s contactless features.

### NFC window scenes

- [NFCWindowSceneDelegate](corenfc/nfcwindowscenedelegate.md): A protocol to notify your app’s user interface about NFC-related events.
- [NFCWindowSceneEvent](corenfc/nfcwindowsceneevent.md): An NFC-related event that your app uses to update its user interface.

### Errors

- [NFCReaderError.Code](corenfc/nfcreadererror-swift.struct/code.md): Reader session and tag error codes.
- [NFCReaderError](corenfc/nfcreadererror-swift.struct.md): An error type that indicates problems with reader sessions or tags.
- [NFCErrorDomain](corenfc/nfcerrordomain.md): The domain for errors associated with Core NFC APIs.
- [NFCTagResponseUnexpectedLengthErrorKey](corenfc/nfctagresponseunexpectedlengtherrorkey.md): A user-information dictionary key that indicates an invalid received response packet length.

### Reference

- [CoreNFC Enumerations](corenfc/corenfc-enumerations.md)

### Classes

- [NFCISO15693CustomCommandConfiguration](corenfc/nfciso15693customcommandconfiguration.md)
- [NFCISO15693ReadMultipleBlocksConfiguration](corenfc/nfciso15693readmultipleblocksconfiguration.md)

### Structures

- [NFCFeliCaPollingResponse](corenfc/nfcfelicapollingresponse.md)
- [NFCFeliCaRequestSpecificationVersionResponse](corenfc/nfcfelicarequestspecificationversionresponse.md)
- [NFCFeliCaRequsetServiceV2Response](corenfc/nfcfelicarequsetservicev2response.md)
- [NFCFeliCaStatusFlag](corenfc/nfcfelicastatusflag.md)
- [NFCISO15693MultipleBlockSecurityStatus](corenfc/nfciso15693multipleblocksecuritystatus.md)
- [NFCISO15693SystemInfo](corenfc/nfciso15693systeminfo.md)

# Core NFC (Objective-C)

**Framework:** Core NFC  
**Kind:** Framework  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Detect NFC tags, read messages that contain NDEF data, and save data to writable tags.

<a id="overview"></a>

## Overview

Your app can read tags to give users more information about their physical environment and the real-world objects in it. Using Core NFC, you can read Near Field Communication (NFC) tags of types 1 through 5 that contain data in the NFC Data Exchange Format (NDEF). For example, your app might give users information about products they find in a store or exhibits they visit in a museum.

Your app can also write data to tags, and interact with protocol-specific tags such as ISO 7816, ISO 15693, FeliCa™, and MIFARE® tags.

Core NFC isn’t available for use in app extensions, and it requires a device that supports Near Field Communication. To determine if support is available, check the [readingAvailable](corenfc/nfcreadersession-swift.class/readingavailable.md) class property before starting a reader session.

## Topics

### Essentials

- [Building an NFC Tag-Reader App](corenfc/building-an-nfc-tag-reader-app.md): Read NFC tags with NDEF messages in your app.
- [Adding Support for Background Tag Reading](corenfc/adding-support-for-background-tag-reading.md): Allow users to scan NFC tags without an app using background tag reading.
- [NFCReaderUsageDescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nfcreaderusagedescription): A message that tells people why the app is requesting access to the device’s NFC hardware.

### Reader sessions

Create a reader session to scan and detect NFC tags.

- [NFCNDEFReaderSession](corenfc/nfcndefreadersession.md): A reader session for detecting NFC Data Exchange Format (NDEF) tags.
- [NFCTagReaderSession](corenfc/nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCPaymentTagReaderSession](corenfc/nfcpaymenttagreadersession.md): A reader session that supports the use of payment tags.
- [NFCVASReaderSession](corenfc/nfcvasreadersession.md): A reader session for processing Value Added Service (VAS) tags.
- [NFCReaderSession](corenfc/nfcreadersession-swift.class.md): The abstract base class that represents a reader session for detecting NFC tags.
- [NFCReaderSession](corenfc/nfcreadersessionprotocol.md): A general interface for interacting with a reader session.
- [NFCReaderSessionDelegate](corenfc/nfcreadersessiondelegate.md): A collection of callbacks that provide information about the status of an NFC reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.

### Tag types

Read tag data, and save data to writable tags, by using the appropriate tag type interface.

- [Creating NFC Tags from Your iPhone](corenfc/creating-nfc-tags-from-your-iphone.md): Save data to tags, and interact with them using native tag protocols.
- [NFCISO7816Tag](corenfc/nfciso7816tag.md): An interface for interacting with an ISO 7816 tag.
- [NFCISO15693Tag](corenfc/nfciso15693tag.md): An interface for interacting with an ISO 15693 tag.
- [NFCFeliCaTag](corenfc/nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCMiFareTag](corenfc/nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](corenfc/nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](corenfc/nfctag-c.protocol.md): An interface for interacting with an NFC or RFID tag.
- [NFCTagCommandConfiguration](corenfc/nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.

### NDEF messages and payloads

- [NFCNDEFMessage](corenfc/nfcndefmessage.md): An NFC NDEF message consisting of an array of payload records.
- [NFCNDEFPayload](corenfc/nfcndefpayload.md): A payload record in an NFC NDEF message.

### Errors

- [NFCReaderError](corenfc/nfcreadererror-swift.struct/code.md): Reader session and tag error codes.
- [NFCErrorDomain](corenfc/nfcerrordomain.md): The domain for errors associated with Core NFC APIs.
- [NFCTagResponseUnexpectedLengthErrorKey](corenfc/nfctagresponseunexpectedlengtherrorkey.md): A user-information dictionary key that indicates an invalid received response packet length.

### Reference

- [CoreNFC Enumerations](corenfc/corenfc-enumerations.md)

### Classes

- [NFCISO15693CustomCommandConfiguration](corenfc/nfciso15693customcommandconfiguration.md)
- [NFCISO15693ReadMultipleBlocksConfiguration](corenfc/nfciso15693readmultipleblocksconfiguration.md)
- [NFCISO15693ReaderSession](corenfc/nfciso15693readersession.md): Deprecated.
- [NFCTagReaderSessionConfiguration](corenfc/nfctagreadersessionconfiguration.md)
