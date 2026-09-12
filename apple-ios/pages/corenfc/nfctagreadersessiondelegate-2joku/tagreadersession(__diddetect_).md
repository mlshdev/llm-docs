> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersessiondelegate-2joku/tagreadersession(_:diddetect:)](https://developer.apple.com/documentation/corenfc/nfctagreadersessiondelegate-2joku/tagreadersession(_:diddetect:))

# tagReaderSession(\_:didDetect:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

Tells the delegate that the session detected NFC tags.

## Declaration

```swift
func tagReaderSession(_ session: NFCTagReaderSession, didDetect tags: [NFCTag])
```

## Parameters

- `session`: The session that detected the tags.
- `tags`: An array of NFC tags detected by the session.

<a id="Discussion"></a>

## Discussion

The polling options specified when creating an [NFCTagReaderSession](../nfctagreadersession.md) object determine the types of tags that the session can detect.
