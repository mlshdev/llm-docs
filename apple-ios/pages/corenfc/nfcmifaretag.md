> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcmifaretag](https://developer.apple.com/documentation/corenfc/nfcmifaretag)

# NFCMiFareTag (Swift)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An interface for interacting with a MIFARE® tag.

## Declaration

```swift
protocol NFCMiFareTag : NFCNDEFTag, __NFCTag
```

<a id="overview"></a>

## Overview

The [NFCTagReaderSessionDelegate](nfctagreadersessiondelegate-2joku.md) receives an object that conforms to the [NFCMiFareTag](nfcmifaretag.md) protocol when the [NFCTagReaderSession](nfctagreadersession.md) detects a compatible tag. However, if you include the application identifier `D2760000850101`—the identifier for the NDEF application on MIFARE® DESFire® tags (NFC Forum T4T tag platform)—in the [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers) array of your `Info.plist` file, the reader session sends the delegate an [NFCISO7816Tag](nfciso7816tag.md) object when it finds a tag matching the identifier. To receive the MIFARE DESFire tag as an [NFCMiFareTag](nfcmifaretag.md) object, don’t include `D2760000850101` in the array.

For the delegate to receive the tag object, your app must include the [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats).

For the reader session to read and write data to the tag, it must be available to the reader session. Use the [isAvailable](nfctag-swift.enum/isavailable.md) property to check the tag’s availability.

MIFARE, MIFARE DESFire, MIFARE Ultralight, and MIFARE Plus are registered trademarks of NXP B.V.

## Topics

### Getting Tag Information

- [mifareFamily](nfcmifaretag/mifarefamily.md): The MIFARE product family identifier for the tag.
- [NFCMiFareFamily](nfcmifarefamily.md): Identifiers for the MIFARE product families.
- [identifier](nfcmifaretag/identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](nfcmifaretag/historicalbytes.md): The historical bytes extracted from an Answer To Select response.

### Sending Commands

- [sendMiFareCommand(commandPacket:completionHandler:)](nfcmifaretag/sendmifarecommand%28commandpacket_completionhandler_%29.md): Sends a native MIFARE command to the tag.
- [sendMiFareISO7816Command(\_:completionHandler:)](nfcmifaretag/sendmifareiso7816command%28__completionhandler_%29.md): Sends an ISO 7816 command APDU to the tag and receives a response APDU.

### Instance Methods

- [sendMiFareCommand(commandPacket:resultHandler:)](nfcmifaretag/sendmifarecommand%28commandpacket_resulthandler_%29.md)
- [sendMiFareISO7816Command(\_:resultHandler:)](nfcmifaretag/sendmifareiso7816command%28__resulthandler_%29.md)

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
- [NFCFeliCaTag](nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](nfctag-swift.enum.md): An object that represents an NFC tag object.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.

# NFCMiFareTag (Objective-C)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

An interface for interacting with a MIFARE® tag.

## Declaration

```objectivec
@protocol NFCMiFareTag <NFCTag, NFCNDEFTag>
```

<a id="overview"></a>

## Overview

The [NFCTagReaderSessionDelegate](nfctagreadersessiondelegate-2joku.md) receives an object that conforms to the [NFCMiFareTag](nfcmifaretag.md) protocol when the [NFCTagReaderSession](nfctagreadersession.md) detects a compatible tag. However, if you include the application identifier `D2760000850101`—the identifier for the NDEF application on MIFARE® DESFire® tags (NFC Forum T4T tag platform)—in the [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers) array of your `Info.plist` file, the reader session sends the delegate an [NFCISO7816Tag](nfciso7816tag.md) object when it finds a tag matching the identifier. To receive the MIFARE DESFire tag as an [NFCMiFareTag](nfcmifaretag.md) object, don’t include `D2760000850101` in the array.

For the delegate to receive the tag object, your app must include the [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats).

For the reader session to read and write data to the tag, it must be available to the reader session. Use the [isAvailable](nfctag-swift.enum/isavailable.md) property to check the tag’s availability.

MIFARE, MIFARE DESFire, MIFARE Ultralight, and MIFARE Plus are registered trademarks of NXP B.V.

## Topics

### Getting Tag Information

- [mifareFamily](nfcmifaretag/mifarefamily.md): The MIFARE product family identifier for the tag.
- [NFCMiFareFamily](nfcmifarefamily.md): Identifiers for the MIFARE product families.
- [identifier](nfcmifaretag/identifier.md): The unique hardware identifier of the tag.
- [historicalBytes](nfcmifaretag/historicalbytes.md): The historical bytes extracted from an Answer To Select response.

### Sending Commands

- [sendMiFareCommand:completionHandler:](nfcmifaretag/sendmifarecommand%28commandpacket_completionhandler_%29.md): Sends a native MIFARE command to the tag.
- [sendMiFareISO7816Command:completionHandler:](nfcmifaretag/sendmifareiso7816command%28__completionhandler_%29.md): Sends an ISO 7816 command APDU to the tag and receives a response APDU.

## Relationships

### Inherits From

- [NFCNDEFTag](nfcndeftag.md)
- [NFCTag](nfctag-c.protocol.md)

## See Also

### Tag types

- [Creating NFC Tags from Your iPhone](creating-nfc-tags-from-your-iphone.md): Save data to tags, and interact with them using native tag protocols.
- [NFCISO7816Tag](nfciso7816tag.md): An interface for interacting with an ISO 7816 tag.
- [NFCISO15693Tag](nfciso15693tag.md): An interface for interacting with an ISO 15693 tag.
- [NFCFeliCaTag](nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTag](nfctag-c.protocol.md): An interface for interacting with an NFC or RFID tag.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.
