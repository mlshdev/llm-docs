> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcpaymenttagreadersession](https://developer.apple.com/documentation/corenfc/nfcpaymenttagreadersession)

# NFCPaymentTagReaderSession (Swift)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A reader session that supports the use of payment tags.

## Declaration

```swift
class NFCPaymentTagReaderSession
```

<a id="overview"></a>

## Overview

This subclass of [NFCTagReaderSession](nfctagreadersession.md) adds support for payment tags, when someone uses your app in certain regions. To support payment tags in your app, intialize this class with a [NFCTagReaderSessionDelegate](nfctagreadersessiondelegate-2joku.md). The delegate receives an object that conforms to the [NFCISO7816Tag](nfciso7816tag.md) protocol when the [NFCTagReaderSession](nfctagreadersession.md) detects an ISO 7816-compatible tag. For the delegate to receive the tag object, your app must include:

- The [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats)
- A list of supported application identifiers in the [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers) information property list key

When the session discovers an ISO 7816-compatible tag, the session performs a `SELECT` command for each application identifier provided in [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers). The `SELECT` command searches for the identifiers in the order in which they appear in the array. The session calls the [tagReaderSession:didDetectTags:](nfctagreadersessiondelegate-5gxiw/tagreadersession_diddetecttags_.md) delegate method after the first successful `SELECT` command. The [initialSelectedAID](nfciso7816tag/initialselectedaid.md) property of the found tag contains the selected identifier.

The tag must be available to the reader session, so it can read and write data to the tag. Use the [isAvailable](nfctag-swift.enum/isavailable.md) property to check the tag’s availability. To connect to an available tag, call the superclass’s [connect(to:completionHandler:)](nfctagreadersession/connect%28to_completionhandler_%29.md) method.

The system only supports one active [NFCReaderSession](nfcreadersession-swift.class.md) at a time. The system queues and processes subsequently opened sessions in first-in-first-out order.

> **Important**

> The system supports use of `NFCPaymentTagReaderSession` only within the European Union (EU). To develop and test an app that uses this feature, see [Request the NFCTagReaderSession Development Entitlement](https://developer.apple.com/contact/request/nfc-payment-tag-reader/). People using your app must have an account registered in the EU, and their device must be located within the EU. If the device isn’t currently eligible to use `NFCPaymentTagReaderSession`, the `NFCPaymentTagReaderSession.readingAvailable` property is `false`.

## Topics

### Creating a tag reader session

- [init(delegate:queue:)](nfcpaymenttagreadersession/init%28delegate_queue_%29.md): Creates a new session instance for processing NFC payment tags.
- [NFCTagReaderSessionDelegate](nfctagreadersessiondelegate-2joku.md): A protocol that an object implements to receive callbacks sent from an NFC tag reader session.

## Relationships

### Inherits From

- [NFCTagReaderSession](nfctagreadersession.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NFCReaderSessionProtocol](nfcreadersessionprotocol.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Reader sessions

- [NFCNDEFReaderSession](nfcndefreadersession.md): A reader session for detecting NFC Data Exchange Format (NDEF) tags.
- [NFCTagReaderSession](nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCVASReaderSession](nfcvasreadersession.md): A reader session for processing Value Added Service (VAS) tags.
- [NFCReaderSession](nfcreadersession-swift.class.md): The abstract base class that represents a reader session for detecting NFC tags.
- [NFCReaderSessionProtocol](nfcreadersessionprotocol.md): A general interface for interacting with a reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.

# NFCPaymentTagReaderSession (Objective-C)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A reader session that supports the use of payment tags.

## Declaration

```objectivec
@interface NFCPaymentTagReaderSession : NFCTagReaderSession
```

<a id="overview"></a>

## Overview

This subclass of [NFCTagReaderSession](nfctagreadersession.md) adds support for payment tags, when someone uses your app in certain regions. To support payment tags in your app, intialize this class with a [NFCTagReaderSessionDelegate](nfctagreadersessiondelegate-2joku.md). The delegate receives an object that conforms to the [NFCISO7816Tag](nfciso7816tag.md) protocol when the [NFCTagReaderSession](nfctagreadersession.md) detects an ISO 7816-compatible tag. For the delegate to receive the tag object, your app must include:

- The [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats)
- A list of supported application identifiers in the [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers) information property list key

When the session discovers an ISO 7816-compatible tag, the session performs a `SELECT` command for each application identifier provided in [ISO7816 application identifiers for NFC Tag Reader Session](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.iso7816.select-identifiers). The `SELECT` command searches for the identifiers in the order in which they appear in the array. The session calls the [tagReaderSession:didDetectTags:](nfctagreadersessiondelegate-5gxiw/tagreadersession_diddetecttags_.md) delegate method after the first successful `SELECT` command. The [initialSelectedAID](nfciso7816tag/initialselectedaid.md) property of the found tag contains the selected identifier.

The tag must be available to the reader session, so it can read and write data to the tag. Use the [isAvailable](nfctag-swift.enum/isavailable.md) property to check the tag’s availability. To connect to an available tag, call the superclass’s [connect(to:completionHandler:)](nfctagreadersession/connect%28to_completionhandler_%29.md) method.

The system only supports one active [NFCReaderSession](nfcreadersession-swift.class.md) at a time. The system queues and processes subsequently opened sessions in first-in-first-out order.

> **Important**

> The system supports use of `NFCPaymentTagReaderSession` only within the European Union (EU). To develop and test an app that uses this feature, see [Request the NFCTagReaderSession Development Entitlement](https://developer.apple.com/contact/request/nfc-payment-tag-reader/). People using your app must have an account registered in the EU, and their device must be located within the EU. If the device isn’t currently eligible to use `NFCPaymentTagReaderSession`, the `NFCPaymentTagReaderSession.readingAvailable` property is `false`.

## Topics

### Creating a tag reader session

- [initWithDelegate:queue:](nfcpaymenttagreadersession/initwithdelegate_queue_.md): Creates a new session instance for processing NFC payment tags.
- [NFCTagReaderSessionDelegate](nfctagreadersessiondelegate-5gxiw.md): A protocol that an object implements to receive callbacks sent from an NFC tag reader session.

## Relationships

### Inherits From

- [NFCTagReaderSession](nfctagreadersession.md)

## See Also

### Reader sessions

- [NFCNDEFReaderSession](nfcndefreadersession.md): A reader session for detecting NFC Data Exchange Format (NDEF) tags.
- [NFCTagReaderSession](nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCVASReaderSession](nfcvasreadersession.md): A reader session for processing Value Added Service (VAS) tags.
- [NFCReaderSession](nfcreadersession-swift.class.md): The abstract base class that represents a reader session for detecting NFC tags.
- [NFCReaderSession](nfcreadersessionprotocol.md): A general interface for interacting with a reader session.
- [NFCReaderSessionDelegate](nfcreadersessiondelegate.md): A collection of callbacks that provide information about the status of an NFC reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.
