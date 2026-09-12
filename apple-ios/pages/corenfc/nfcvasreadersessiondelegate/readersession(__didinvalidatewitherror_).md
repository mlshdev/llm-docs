> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvasreadersessiondelegate/readersession(_:didinvalidatewitherror:)](https://developer.apple.com/documentation/corenfc/nfcvasreadersessiondelegate/readersession(_:didinvalidatewitherror:))

# readerSession(\_:didInvalidateWithError:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the session become invalid and provides the reason.

## Declaration

```swift
func readerSession(_ session: NFCVASReaderSession, didInvalidateWithError error: any Error)
```

## Parameters

- `session`: The reader session that calls this method.
- `error`: The error indicating the reason for invalidating the session.

<a id="Discussion"></a>

## Discussion

Your app should release any references it has to the reader session that called this method.

# readerSession:didInvalidateWithError: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the session become invalid and provides the reason.

## Declaration

```objectivec
- (void) readerSession:(NFCVASReaderSession *) session didInvalidateWithError:(NSError *) error;
```

## Parameters

- `session`: The reader session that calls this method.
- `error`: The error indicating the reason for invalidating the session.

<a id="Discussion"></a>

## Discussion

Your app should release any references it has to the reader session that called this method.
