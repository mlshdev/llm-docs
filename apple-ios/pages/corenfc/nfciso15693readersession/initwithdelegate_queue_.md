> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfciso15693readersession/initwithdelegate:queue:

# initWithDelegate:queue:

**Interface language:** Objective-C

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 17.0) · iPadOS 11.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0)

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<NFCReaderSessionDelegate>) delegate queue:(dispatch_queue_t) queue;
```

## Parameters

- `delegate`: The session will hold a weak ARC reference to this @link NFCReaderSessionDelegate @link/ object.
- `queue`: A dispatch queue where NFCReaderSessionDelegate delegate callbacks will be dispatched to.  A nil value will cause the creation of a serial dispatch queue internally for the session.  The session object will retain the provided dispatch queue.

<a id="return-value"></a>

## Return Value

A new NFCISO15693ReaderSession instance.
