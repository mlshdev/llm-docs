> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersession/init(pollingoption:delegate:queue:)](https://developer.apple.com/documentation/corenfc/nfctagreadersession/init(pollingoption:delegate:queue:))

# init(pollingOption:delegate:queue:)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 26.4) · iPadOS 13.0+ (deprecated in 26.4) · Mac Catalyst 13.0+ (deprecated in 26.4)

Creates an NFC tag reader session.

> Use init(configuration:delegate:queue) instead

## Declaration

```swift
convenience init?(pollingOption: NFCTagReaderSession.PollingOption, delegate: any NFCTagReaderSessionDelegate, queue: DispatchQueue? = nil)
```

## Parameters

- `pollingOption`: One or more options specifying the type of tags that the reader session scans for and detects.
- `delegate`: An object that handles callbacks from the reader session.
- `queue`: A dispatch queue that the reader session uses when making callbacks to the delegate. When queue is `nil`, the session creates and uses a serial dispatch queue.

## See Also

### Creating a Tag Reader Session

- [NFCTagReaderSession.PollingOption](pollingoption.md): Options that determine the type of tags that a reader session should detect during a polling sequence.
- [NFCTagReaderSessionDelegate](../nfctagreadersessiondelegate-2joku.md): A protocol that an object implements to receive callbacks sent from an NFC tag reader session.
