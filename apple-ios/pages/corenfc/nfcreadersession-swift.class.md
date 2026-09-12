> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersession-swift.class](https://developer.apple.com/documentation/corenfc/nfcreadersession-swift.class)

# NFCReaderSession (Swift)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The abstract base class that represents a reader session for detecting NFC tags.

## Declaration

```swift
class NFCReaderSession
```

<a id="overview"></a>

## Overview

You do not create instances of this class. Instead, you create and use an instance of [NFCNDEFReaderSession](nfcndefreadersession.md) or [NFCTagReaderSession](nfctagreadersession.md). Only one reader session of any type can be active in the system at a time. The system puts additional sessions in a queue and processes them in FIFO order.

## Topics

### Determining Tag Reading Capability

- [readingAvailable](nfcreadersession-swift.class/readingavailable.md): A Boolean value that determines whether the device supports NFC tag reading.

### Working with a Session

- [delegate](nfcreadersession-swift.class/delegate.md): The delegate of the reader session.
- [sessionQueue](nfcreadersession-swift.class/sessionqueue.md): The queue on which the reader session delegate callbacks and completion block handlers are dispatched.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NFCNDEFReaderSession](nfcndefreadersession.md)
- [NFCTagReaderSession](nfctagreadersession.md)
- [NFCVASReaderSession](nfcvasreadersession.md)

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
- [NFCPaymentTagReaderSession](nfcpaymenttagreadersession.md): A reader session that supports the use of payment tags.
- [NFCVASReaderSession](nfcvasreadersession.md): A reader session for processing Value Added Service (VAS) tags.
- [NFCReaderSessionProtocol](nfcreadersessionprotocol.md): A general interface for interacting with a reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.

# NFCReaderSession (Objective-C)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The abstract base class that represents a reader session for detecting NFC tags.

## Declaration

```objectivec
@interface NFCReaderSession : NSObject
```

<a id="overview"></a>

## Overview

You do not create instances of this class. Instead, you create and use an instance of [NFCNDEFReaderSession](nfcndefreadersession.md) or [NFCTagReaderSession](nfctagreadersession.md). Only one reader session of any type can be active in the system at a time. The system puts additional sessions in a queue and processes them in FIFO order.

## Topics

### Determining Tag Reading Capability

- [readingAvailable](nfcreadersession-swift.class/readingavailable.md): A Boolean value that determines whether the device supports NFC tag reading.

### Working with a Session

- [delegate](nfcreadersession-swift.class/delegate.md): The delegate of the reader session.
- [sessionQueue](nfcreadersession-swift.class/sessionqueue.md): The queue on which the reader session delegate callbacks and completion block handlers are dispatched.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NFCISO15693ReaderSession](nfciso15693readersession.md)
- [NFCNDEFReaderSession](nfcndefreadersession.md)
- [NFCTagReaderSession](nfctagreadersession.md)
- [NFCVASReaderSession](nfcvasreadersession.md)

### Conforms To

- [NFCReaderSession](nfcreadersessionprotocol.md)

## See Also

### Reader sessions

- [NFCNDEFReaderSession](nfcndefreadersession.md): A reader session for detecting NFC Data Exchange Format (NDEF) tags.
- [NFCTagReaderSession](nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCPaymentTagReaderSession](nfcpaymenttagreadersession.md): A reader session that supports the use of payment tags.
- [NFCVASReaderSession](nfcvasreadersession.md): A reader session for processing Value Added Service (VAS) tags.
- [NFCReaderSession](nfcreadersessionprotocol.md): A general interface for interacting with a reader session.
- [NFCReaderSessionDelegate](nfcreadersessiondelegate.md): A collection of callbacks that provide information about the status of an NFC reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.
