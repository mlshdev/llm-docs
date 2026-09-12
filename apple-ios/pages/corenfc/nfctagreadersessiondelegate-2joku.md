> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersessiondelegate-2joku](https://developer.apple.com/documentation/corenfc/nfctagreadersessiondelegate-2joku)

# NFCTagReaderSessionDelegate

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

A protocol that an object implements to receive callbacks sent from an NFC tag reader session.

## Declaration

```swift
protocol NFCTagReaderSessionDelegate : NSObjectProtocol
```

## Topics

### Handling Session Activation

- [tagReaderSessionDidBecomeActive(\_:)](nfctagreadersessiondelegate-2joku/tagreadersessiondidbecomeactive%28__%29.md): Tells the delegate that the reader session is active.

### Finding NFC Tags

- [tagReaderSession(\_:didDetect:)](nfctagreadersessiondelegate-2joku/tagreadersession%28__diddetect_%29.md): Tells the delegate that the session detected NFC tags.

### Handling an Invalidated Session

- [tagReaderSession(\_:didInvalidateWithError:)](nfctagreadersessiondelegate-2joku/tagreadersession%28__didinvalidatewitherror_%29.md): Tells the delegate the reason for invalidating a reader session.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a tag reader session

- [init(delegate:queue:)](nfcpaymenttagreadersession/init%28delegate_queue_%29.md): Creates a new session instance for processing NFC payment tags.
