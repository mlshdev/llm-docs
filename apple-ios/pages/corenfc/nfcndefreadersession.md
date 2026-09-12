> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefreadersession](https://developer.apple.com/documentation/corenfc/nfcndefreadersession)

# NFCNDEFReaderSession (Swift)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A reader session for detecting NFC Data Exchange Format (NDEF) tags.

## Declaration

```swift
class NFCNDEFReaderSession
```

<a id="overview"></a>

## Overview

As with the [NFCReaderSession](nfcreadersession-swift.class.md) base class, only one NFC NDEF reader session can be active in the system at a time. If you create an additional session, the system puts it in a queue and processes it in first-in, first-out (FIFO) order.

## Topics

### Creating a Session

- [init(delegate:queue:invalidateAfterFirstRead:)](nfcndefreadersession/init%28delegate_queue_invalidateafterfirstread_%29.md): Creates and initializes a new NFC NDEF reader session.
- [NFCNDEFReaderSessionDelegate](nfcndefreadersessiondelegate.md): A protocol that an object implements to serve as an NDEF reader session delegate.

### Connecting to a Tag

- [connect(to:completionHandler:)](nfcndefreadersession/connect%28to_completionhandler_%29.md): Connects the reader session to a tag and activates that tag.

### Restarting the Polling Sequence

- [restartPolling()](nfcndefreadersession/restartpolling%28%29.md): Restarts the polling sequence so the reader session can discover new tags.

## Relationships

### Inherits From

- [NFCReaderSession](nfcreadersession-swift.class.md)

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

- [NFCTagReaderSession](nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCPaymentTagReaderSession](nfcpaymenttagreadersession.md): A reader session that supports the use of payment tags.
- [NFCVASReaderSession](nfcvasreadersession.md): A reader session for processing Value Added Service (VAS) tags.
- [NFCReaderSession](nfcreadersession-swift.class.md): The abstract base class that represents a reader session for detecting NFC tags.
- [NFCReaderSessionProtocol](nfcreadersessionprotocol.md): A general interface for interacting with a reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.

# NFCNDEFReaderSession (Objective-C)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A reader session for detecting NFC Data Exchange Format (NDEF) tags.

## Declaration

```objectivec
@interface NFCNDEFReaderSession : NFCReaderSession
```

<a id="overview"></a>

## Overview

As with the [NFCReaderSession](nfcreadersession-swift.class.md) base class, only one NFC NDEF reader session can be active in the system at a time. If you create an additional session, the system puts it in a queue and processes it in first-in, first-out (FIFO) order.

## Topics

### Creating a Session

- [initWithDelegate:queue:invalidateAfterFirstRead:](nfcndefreadersession/init%28delegate_queue_invalidateafterfirstread_%29.md): Creates and initializes a new NFC NDEF reader session.
- [NFCNDEFReaderSessionDelegate](nfcndefreadersessiondelegate.md): A protocol that an object implements to serve as an NDEF reader session delegate.

### Connecting to a Tag

- [connectToTag:completionHandler:](nfcndefreadersession/connect%28to_completionhandler_%29.md): Connects the reader session to a tag and activates that tag.

### Restarting the Polling Sequence

- [restartPolling](nfcndefreadersession/restartpolling%28%29.md): Restarts the polling sequence so the reader session can discover new tags.

## Relationships

### Inherits From

- [NFCReaderSession](nfcreadersession-swift.class.md)

## See Also

### Reader sessions

- [NFCTagReaderSession](nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCPaymentTagReaderSession](nfcpaymenttagreadersession.md): A reader session that supports the use of payment tags.
- [NFCVASReaderSession](nfcvasreadersession.md): A reader session for processing Value Added Service (VAS) tags.
- [NFCReaderSession](nfcreadersession-swift.class.md): The abstract base class that represents a reader session for detecting NFC tags.
- [NFCReaderSession](nfcreadersessionprotocol.md): A general interface for interacting with a reader session.
- [NFCReaderSessionDelegate](nfcreadersessiondelegate.md): A collection of callbacks that provide information about the status of an NFC reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.
