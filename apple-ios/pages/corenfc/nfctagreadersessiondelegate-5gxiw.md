> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersessiondelegate-5gxiw](https://developer.apple.com/documentation/corenfc/nfctagreadersessiondelegate-5gxiw)

# NFCTagReaderSessionDelegate

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A protocol that an object implements to receive callbacks sent from an NFC tag reader session.

## Declaration

```objectivec
@protocol NFCTagReaderSessionDelegate <NSObject>
```

## Topics

### Handling Session Activation

- [tagReaderSessionDidBecomeActive:](nfctagreadersessiondelegate-5gxiw/tagreadersessiondidbecomeactive_.md): Tells the delegate that the reader session is active.

### Finding NFC Tags

- [tagReaderSession:didDetectTags:](nfctagreadersessiondelegate-5gxiw/tagreadersession_diddetecttags_.md): Tells the delegate that the session detected NFC tags.

### Handling an Invalidated Session

- [tagReaderSession:didInvalidateWithError:](nfctagreadersessiondelegate-5gxiw/tagreadersession_didinvalidatewitherror_.md): Tells the delegate the reason for invalidating a reader session.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a tag reader session

- [initWithDelegate:queue:](nfcpaymenttagreadersession/initwithdelegate_queue_.md): Creates a new session instance for processing NFC payment tags.
