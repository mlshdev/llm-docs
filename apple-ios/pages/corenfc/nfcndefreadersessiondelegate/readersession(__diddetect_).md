> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefreadersessiondelegate/readersession(_:diddetect:)](https://developer.apple.com/documentation/corenfc/nfcndefreadersessiondelegate/readersession(_:diddetect:))

# readerSession(\_:didDetect:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the session detected NFC tags with NDEF messages and enables read-write capability for the session.

## Declaration

```swift
optional func readerSession(_ session: NFCNDEFReaderSession, didDetect tags: [any NFCNDEFTag])
```

## See Also

### Finding NDEF Messages and Tags

- [readerSession(\_:didDetectNDEFs:)](readersession%28__diddetectndefs_%29.md): Tells the delegate that the session detected NFC tags with NDEF messages.

# readerSession:didDetectTags: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the session detected NFC tags with NDEF messages and enables read-write capability for the session.

## Declaration

```objectivec
- (void) readerSession:(NFCNDEFReaderSession *) session didDetectTags:(NSArray<__kindof id<NFCNDEFTag>> *) tags;
```

## See Also

### Finding NDEF Messages and Tags

- [readerSession:didDetectNDEFs:](readersession%28__diddetectndefs_%29.md): Tells the delegate that the session detected NFC tags with NDEF messages.
