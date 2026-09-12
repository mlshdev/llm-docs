> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefreadersessiondelegate](https://developer.apple.com/documentation/corenfc/nfcndefreadersessiondelegate)

# NFCNDEFReaderSessionDelegate (Swift)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A protocol that an object implements to serve as an NDEF reader session delegate.

## Declaration

```swift
protocol NFCNDEFReaderSessionDelegate : NSObjectProtocol
```

## Topics

### Handling Session Activation

- [readerSessionDidBecomeActive(\_:)](nfcndefreadersessiondelegate/readersessiondidbecomeactive%28__%29.md): Tells the delegate that the reader session is active.

### Finding NDEF Messages and Tags

- [readerSession(\_:didDetectNDEFs:)](nfcndefreadersessiondelegate/readersession%28__diddetectndefs_%29.md): Tells the delegate that the session detected NFC tags with NDEF messages.
- [readerSession(\_:didDetect:)](nfcndefreadersessiondelegate/readersession%28__diddetect_%29.md): Tells the delegate that the session detected NFC tags with NDEF messages and enables read-write capability for the session.

### Handling an Invalidated Session

- [readerSession(\_:didInvalidateWithError:)](nfcndefreadersessiondelegate/readersession%28__didinvalidatewitherror_%29.md): Tells the delegate the reason for invalidating a reader session.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a Session

- [init(delegate:queue:invalidateAfterFirstRead:)](nfcndefreadersession/init%28delegate_queue_invalidateafterfirstread_%29.md): Creates and initializes a new NFC NDEF reader session.

# NFCNDEFReaderSessionDelegate (Objective-C)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A protocol that an object implements to serve as an NDEF reader session delegate.

## Declaration

```objectivec
@protocol NFCNDEFReaderSessionDelegate <NSObject>
```

## Topics

### Handling Session Activation

- [readerSessionDidBecomeActive:](nfcndefreadersessiondelegate/readersessiondidbecomeactive%28__%29.md): Tells the delegate that the reader session is active.

### Finding NDEF Messages and Tags

- [readerSession:didDetectNDEFs:](nfcndefreadersessiondelegate/readersession%28__diddetectndefs_%29.md): Tells the delegate that the session detected NFC tags with NDEF messages.
- [readerSession:didDetectTags:](nfcndefreadersessiondelegate/readersession%28__diddetect_%29.md): Tells the delegate that the session detected NFC tags with NDEF messages and enables read-write capability for the session.

### Handling an Invalidated Session

- [readerSession:didInvalidateWithError:](nfcndefreadersessiondelegate/readersession%28__didinvalidatewitherror_%29.md): Tells the delegate the reason for invalidating a reader session.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a Session

- [initWithDelegate:queue:invalidateAfterFirstRead:](nfcndefreadersession/init%28delegate_queue_invalidateafterfirstread_%29.md): Creates and initializes a new NFC NDEF reader session.
