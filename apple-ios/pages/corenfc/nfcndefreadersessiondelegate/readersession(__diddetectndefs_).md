> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefreadersessiondelegate/readersession(_:diddetectndefs:)](https://developer.apple.com/documentation/corenfc/nfcndefreadersessiondelegate/readersession(_:diddetectndefs:))

# readerSession(\_:didDetectNDEFs:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Tells the delegate that the session detected NFC tags with NDEF messages.

## Declaration

```swift
func readerSession(_ session: NFCNDEFReaderSession, didDetectNDEFs messages: [NFCNDEFMessage])
```

## Parameters

- `session`: The reader session calling this method.
- `messages`: An array of the NDEF messages in the order they were discovered on the tag.

<a id="Discussion"></a>

## Discussion

The reader session calls this method when it detects NFC tags with NDEF messages in the polling sequence. The session restarts polling when the detected tags are no longer within reading range of the iOS device.

> **Important**

>  The reader session doesn’t call this method when the delegate provides the [readerSession(\_:didDetect:)](readersession%28__diddetect_%29.md) method.

## See Also

### Finding NDEF Messages and Tags

- [readerSession(\_:didDetect:)](readersession%28__diddetect_%29.md): Tells the delegate that the session detected NFC tags with NDEF messages and enables read-write capability for the session.

# readerSession:didDetectNDEFs: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

Tells the delegate that the session detected NFC tags with NDEF messages.

## Declaration

```objectivec
- (void) readerSession:(NFCNDEFReaderSession *) session didDetectNDEFs:(NSArray<NFCNDEFMessage *> *) messages;
```

## Parameters

- `session`: The reader session calling this method.
- `messages`: An array of the NDEF messages in the order they were discovered on the tag.

<a id="Discussion"></a>

## Discussion

The reader session calls this method when it detects NFC tags with NDEF messages in the polling sequence. The session restarts polling when the detected tags are no longer within reading range of the iOS device.

> **Important**

>  The reader session doesn’t call this method when the delegate provides the [readerSession:didDetectTags:](readersession%28__diddetect_%29.md) method.

## See Also

### Finding NDEF Messages and Tags

- [readerSession:didDetectTags:](readersession%28__diddetect_%29.md): Tells the delegate that the session detected NFC tags with NDEF messages and enables read-write capability for the session.
