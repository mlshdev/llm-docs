> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcndefreadersessiondelegate/readersessiondidbecomeactive(_:)

# readerSessionDidBecomeActive(\_:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the reader session is active.

## Declaration

```swift
optional func readerSessionDidBecomeActive(_ session: NFCNDEFReaderSession)
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
- (void) readerSessionDidBecomeActive:(NFCNDEFReaderSession *) session;
```

## Parameters

- `session`: The active reader session. Only one session can be active at a time.

<a id="Discussion"></a>

## Discussion

The reader session calls this method after the device begins scanning for new tags.
