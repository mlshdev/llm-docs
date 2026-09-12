> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersessiondelegate-2joku/tagreadersessiondidbecomeactive(_:)](https://developer.apple.com/documentation/corenfc/nfctagreadersessiondelegate-2joku/tagreadersessiondidbecomeactive(_:))

# tagReaderSessionDidBecomeActive(\_:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

Tells the delegate that the reader session is active.

## Declaration

```swift
func tagReaderSessionDidBecomeActive(_ session: NFCTagReaderSession)
```

## Parameters

- `session`: The active reader session. Only one session can be active at a time.

<a id="Discussion"></a>

## Discussion

The reader session calls this method after the device begins scanning for new tags.
