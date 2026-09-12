> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersession/init(configuration:delegate:queue:)-8g6tm](https://developer.apple.com/documentation/corenfc/nfctagreadersession/init(configuration:delegate:queue:)-8g6tm)

# init(configuration:delegate:queue:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

## Declaration

```swift
init(configuration: NFCTagReaderSessionConfiguration, delegate: any __NFCTagReaderSessionDelegate, queue: dispatch_queue_t)
```

## Parameters

- `configuration`: Reader configuration for the session.  The configuration is applied when `[NFCTagReaderSession beginSession]` or `[NFCTagReaderSession restartPolling]` is called.
- `delegate`: The session will hold a weak ARC reference to this `NFCTagReaderSessionDelegate` object.
- `queue`: A dispatch queue where NFCTagReaderSessionDelegate delegate callbacks will be dispatched to.  A nil value will cause the creation of a serial dispatch queue internally for the session.  The session object will retain the provided dispatch queue.

<a id="return-value"></a>

## Return Value

A new NFCTagReaderSession instance.

# initWithConfiguration:delegate:queue: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(NFCTagReaderSessionConfiguration *) configuration delegate:(id<NFCTagReaderSessionDelegate>) delegate queue:(dispatch_queue_t) queue;
```

## Parameters

- `configuration`: Reader configuration for the session.  The configuration is applied when `[NFCTagReaderSession beginSession]` or `[NFCTagReaderSession restartPolling]` is called.
- `delegate`: The session will hold a weak ARC reference to this `NFCTagReaderSessionDelegate` object.
- `queue`: A dispatch queue where NFCTagReaderSessionDelegate delegate callbacks will be dispatched to.  A nil value will cause the creation of a serial dispatch queue internally for the session.  The session object will retain the provided dispatch queue.

<a id="return-value"></a>

## Return Value

A new NFCTagReaderSession instance.
