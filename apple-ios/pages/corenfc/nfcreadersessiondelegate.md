> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcreadersessiondelegate](https://developer.apple.com/documentation/corenfc/nfcreadersessiondelegate)

# NFCReaderSessionDelegate

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A collection of callbacks that provide information about the status of an NFC reader session.

## Declaration

```objectivec
@protocol NFCReaderSessionDelegate <NSObject>
```

## Topics

### Getting the Status of a Reader Session

- [readerSession:didDetectTags:](nfcreadersessiondelegate/readersession_diddetecttags_.md): Provides an array of tags detected by the reader session.
- [readerSession:didInvalidateWithError:](nfcreadersessiondelegate/readersession_didinvalidatewitherror_.md): Provides information about the error that invalidated the reader session.
- [readerSessionDidBecomeActive:](nfcreadersessiondelegate/readersessiondidbecomeactive_.md): Tells you when radio-frequency polling is enabled and the reader session has become active and is scanning for tags.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Reader sessions

- [NFCNDEFReaderSession](nfcndefreadersession.md): A reader session for detecting NFC Data Exchange Format (NDEF) tags.
- [NFCTagReaderSession](nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCPaymentTagReaderSession](nfcpaymenttagreadersession.md): A reader session that supports the use of payment tags.
- [NFCVASReaderSession](nfcvasreadersession.md): A reader session for processing Value Added Service (VAS) tags.
- [NFCReaderSession](nfcreadersession-swift.class.md): The abstract base class that represents a reader session for detecting NFC tags.
- [NFCReaderSession](nfcreadersessionprotocol.md): A general interface for interacting with a reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.
