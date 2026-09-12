> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersession/init(configuration:delegate:queue:)-soy8](https://developer.apple.com/documentation/corenfc/nfctagreadersession/init(configuration:delegate:queue:)-soy8)

# init(configuration:delegate:queue:)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Creates a new NFCTagReaderSession instance.

## Declaration

```swift
convenience init(configuration: NFCTagReaderSession.Configuration, delegate: any NFCTagReaderSessionDelegate, queue: DispatchQueue? = nil)
```

## Parameters

- `configuration`: Reader configuration used for the session.  The config is applied when `begin()` or `restartPolling()` is called.
- `delegate`: The session will hold a weak ARC reference to this `NFCTagReaderSessionDelegate` object.
- `queue`: A dispatch queue where `NFCTagReaderSessionDelegate` delegate callbacks will be dispatched to.  A nil value will cause the creation of a serial dispatch queue internally for the session.  The session object will retain the provided dispatch queue.
