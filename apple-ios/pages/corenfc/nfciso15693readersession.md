> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693readersession](https://developer.apple.com/documentation/corenfc/nfciso15693readersession)

# NFCISO15693ReaderSession

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 17.0) · iPadOS 11.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0)

## Declaration

```objectivec
@interface NFCISO15693ReaderSession : NFCReaderSession
```

<a id="overview"></a>

## Overview

Reader session for processing ISO15693 tags.  @link \[NFCReaderSessionDelegate readerSession:didDetectTags:\] @link/ will return tag objects that are conformed to the NFCISO15693Tag protocol.  This session requires the “com.apple.developer.nfc.readersession.formats” entitlement in your process.

NOTE: Only one NFCReaderSession can be active at any time in the system. Subsequent opened sessions will get queued up and processed by the system in FIFO order. The NFCISO15693 tag object returned by this session will only respond to the legacy APIs that are introduced in iOS11.

## Topics

### Instance Methods

- [initWithDelegate:queue:](nfciso15693readersession/initwithdelegate_queue_.md): Deprecated.
- [restartPolling](nfciso15693readersession/restartpolling.md): Deprecated.

## Relationships

### Inherits From

- [NFCReaderSession](nfcreadersession-swift.class.md)
