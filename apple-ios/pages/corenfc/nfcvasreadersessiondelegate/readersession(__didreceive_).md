> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvasreadersessiondelegate/readersession(_:didreceive:)](https://developer.apple.com/documentation/corenfc/nfcvasreadersessiondelegate/readersession(_:didreceive:))

# readerSession(\_:didReceive:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the reader session received a VAS response.

## Declaration

```swift
func readerSession(_ session: NFCVASReaderSession, didReceive responses: [NFCVASResponse])
```

## Parameters

- `session`: The reader session that calls this method.
- `responses`: An array of [NFCVASResponse](../nfcvasresponse.md) objects. The order of the response objects follows the sequence of `GET VAS DATA` sent to the tag by the reader session.

<a id="Discussion"></a>

## Discussion

The reader session restarts polling when the detected tag moves from the session’s read range.

## See Also

### Receiving VAS Responses

- [NFCVASResponse](../nfcvasresponse.md): An object representing the response from a single `GET VAS DATA` command.

# readerSession:didReceiveVASResponses: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Tells the delegate that the reader session received a VAS response.

## Declaration

```objectivec
- (void) readerSession:(NFCVASReaderSession *) session didReceiveVASResponses:(NSArray<NFCVASResponse *> *) responses;
```

## Parameters

- `session`: The reader session that calls this method.
- `responses`: An array of [NFCVASResponse](../nfcvasresponse.md) objects. The order of the response objects follows the sequence of `GET VAS DATA` sent to the tag by the reader session.

<a id="Discussion"></a>

## Discussion

The reader session restarts polling when the detected tag moves from the session’s read range.

## See Also

### Receiving VAS Responses

- [NFCVASResponse](../nfcvasresponse.md): An object representing the response from a single `GET VAS DATA` command.
