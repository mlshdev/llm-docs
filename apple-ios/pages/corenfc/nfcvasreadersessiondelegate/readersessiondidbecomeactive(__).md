> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvasreadersessiondelegate/readersessiondidbecomeactive(_:)](https://developer.apple.com/documentation/corenfc/nfcvasreadersessiondelegate/readersessiondidbecomeactive(_:))

# readerSessionDidBecomeActive(\_:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the reader session is active.

## Declaration

```swift
optional func readerSessionDidBecomeActive(_ session: NFCVASReaderSession)
```

## Parameters

- `session`: The active reader session. Only one session can be active at a time.

<a id="Discussion"></a>

## Discussion

The reader session calls this method after the device begins scanning for new tags.

# readerSessionDidBecomeActive: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the reader session is active.

## Declaration

```objectivec
- (void) readerSessionDidBecomeActive:(NFCVASReaderSession *) session;
```

## Parameters

- `session`: The active reader session. Only one session can be active at a time.

<a id="Discussion"></a>

## Discussion

The reader session calls this method after the device begins scanning for new tags.
