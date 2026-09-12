> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersessionprotocol](https://developer.apple.com/documentation/corenfc/nfcreadersessionprotocol)

# NFCReaderSessionProtocol (Swift)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A general interface for interacting with a reader session.

## Declaration

```swift
protocol NFCReaderSessionProtocol : NSObjectProtocol
```

## Topics

### Determining Reader Session Readiness

- [isReady](nfcreadersessionprotocol/isready.md): A Boolean value that indicates whether the reader session is started and ready to use.
- [isReady](nfcreadersessionprotocol/isready.md): A Boolean value that indicates whether the reader session is started and ready to use.

### Managing a Reader Session

- [begin()](nfcreadersessionprotocol/begin%28%29.md): Starts the reader session.
- [invalidate()](nfcreadersessionprotocol/invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidate(errorMessage:)](nfcreadersessionprotocol/invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](nfcreadersessionprotocol/alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.
- [begin()](nfcreadersessionprotocol/begin%28%29.md): Starts the reader session.
- [invalidate()](nfcreadersessionprotocol/invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidate(errorMessage:)](nfcreadersessionprotocol/invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](nfcreadersessionprotocol/alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NFCNDEFReaderSession](nfcndefreadersession.md)
- [NFCPaymentTagReaderSession](nfcpaymenttagreadersession.md)
- [NFCReaderSession](nfcreadersession-swift.class.md)
- [NFCTagReaderSession](nfctagreadersession.md)
- [NFCVASReaderSession](nfcvasreadersession.md)

## See Also

### Reader sessions

- [NFCNDEFReaderSession](nfcndefreadersession.md): A reader session for detecting NFC Data Exchange Format (NDEF) tags.
- [NFCTagReaderSession](nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCPaymentTagReaderSession](nfcpaymenttagreadersession.md): A reader session that supports the use of payment tags.
- [NFCVASReaderSession](nfcvasreadersession.md): A reader session for processing Value Added Service (VAS) tags.
- [NFCReaderSession](nfcreadersession-swift.class.md): The abstract base class that represents a reader session for detecting NFC tags.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.

# NFCReaderSession (Objective-C)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A general interface for interacting with a reader session.

## Declaration

```objectivec
@protocol NFCReaderSession <NSObject>
```

## Topics

### Determining Reader Session Readiness

- [ready](nfcreadersessionprotocol/isready.md): A Boolean value that indicates whether the reader session is started and ready to use.
- [ready](nfcreadersessionprotocol/isready.md): A Boolean value that indicates whether the reader session is started and ready to use.

### Managing a Reader Session

- [beginSession](nfcreadersessionprotocol/begin%28%29.md): Starts the reader session.
- [invalidateSession](nfcreadersessionprotocol/invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidateSessionWithErrorMessage:](nfcreadersessionprotocol/invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](nfcreadersessionprotocol/alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.
- [beginSession](nfcreadersessionprotocol/begin%28%29.md): Starts the reader session.
- [invalidateSession](nfcreadersessionprotocol/invalidate%28%29.md): Closes the reader session, which prevents it from being reused.
- [invalidateSessionWithErrorMessage:](nfcreadersessionprotocol/invalidate%28errormessage_%29.md): Closes the reader session and displays an error message to the user.
- [alertMessage](nfcreadersessionprotocol/alertmessage.md): A custom description that helps users understand how they can use NFC reader mode in your app.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NFCReaderSession](nfcreadersession-swift.class.md)

## See Also

### Reader sessions

- [NFCNDEFReaderSession](nfcndefreadersession.md): A reader session for detecting NFC Data Exchange Format (NDEF) tags.
- [NFCTagReaderSession](nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCPaymentTagReaderSession](nfcpaymenttagreadersession.md): A reader session that supports the use of payment tags.
- [NFCVASReaderSession](nfcvasreadersession.md): A reader session for processing Value Added Service (VAS) tags.
- [NFCReaderSession](nfcreadersession-swift.class.md): The abstract base class that represents a reader session for detecting NFC tags.
- [NFCReaderSessionDelegate](nfcreadersessiondelegate.md): A collection of callbacks that provide information about the status of an NFC reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.
