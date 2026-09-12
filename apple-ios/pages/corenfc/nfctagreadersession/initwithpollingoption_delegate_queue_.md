> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersession/initwithpollingoption:delegate:queue:](https://developer.apple.com/documentation/corenfc/nfctagreadersession/initwithpollingoption:delegate:queue:)

# initWithPollingOption:delegate:queue:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Intializes an NFC tag reader session.

## Declaration

```objectivec
- (instancetype) initWithPollingOption:(NFCPollingOption) pollingOption delegate:(id<NFCTagReaderSessionDelegate>) delegate queue:(dispatch_queue_t) queue;
```

## Parameters

- `pollingOption`: One or more options specifying the type of tags that the reader session scans for and detects.
- `delegate`: An object that handles callbacks from the reader session.
- `queue`: A dispatch queue that the reader session uses when making callbacks to the delegate. When `queue` is `nil`, the session creates and uses a serial dispatch queue.

<a id="return-value"></a>

## Return Value

A newly initialized NFC tag reader session.

## See Also

### Creating a Tag Reader Session

- [NFCPollingOption](pollingoption.md): Options that determine the type of tags that a reader session should detect during a polling sequence.
- [NFCTagReaderSessionDelegate](../nfctagreadersessiondelegate-5gxiw.md): A protocol that an object implements to receive callbacks sent from an NFC tag reader session.
