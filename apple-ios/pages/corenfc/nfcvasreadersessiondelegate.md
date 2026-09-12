> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvasreadersessiondelegate](https://developer.apple.com/documentation/corenfc/nfcvasreadersessiondelegate)

# NFCVASReaderSessionDelegate (Swift)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A protocol that an object implements to receive callbacks from a VAS reader session.

## Declaration

```swift
protocol NFCVASReaderSessionDelegate : NSObjectProtocol
```

## Topics

### Handling Session Activation

- [readerSessionDidBecomeActive(\_:)](nfcvasreadersessiondelegate/readersessiondidbecomeactive%28__%29.md): Tells the delegate that the reader session is active.

### Receiving VAS Responses

- [readerSession(\_:didReceive:)](nfcvasreadersessiondelegate/readersession%28__didreceive_%29.md): Tells the delegate that the reader session received a VAS response.
- [NFCVASResponse](nfcvasresponse.md): An object representing the response from a single `GET VAS DATA` command.

### Handling an Invalidated Session

- [readerSession(\_:didInvalidateWithError:)](nfcvasreadersessiondelegate/readersession%28__didinvalidatewitherror_%29.md): Tells the delegate that the session become invalid and provides the reason.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a VAS Reader Session

- [init(vasCommandConfigurations:delegate:queue:)](nfcvasreadersession/init%28vascommandconfigurations_delegate_queue_%29-23h52.md): Creates a VAS reader session.
- [NFCVASCommandConfiguration](nfcvascommandconfiguration.md): An object providing the configuration for a GET VAS DATA command.

# NFCVASReaderSessionDelegate (Objective-C)

**Framework:** Core NFC  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A protocol that an object implements to receive callbacks from a VAS reader session.

## Declaration

```objectivec
@protocol NFCVASReaderSessionDelegate <NSObject>
```

## Topics

### Handling Session Activation

- [readerSessionDidBecomeActive:](nfcvasreadersessiondelegate/readersessiondidbecomeactive%28__%29.md): Tells the delegate that the reader session is active.

### Receiving VAS Responses

- [readerSession:didReceiveVASResponses:](nfcvasreadersessiondelegate/readersession%28__didreceive_%29.md): Tells the delegate that the reader session received a VAS response.
- [NFCVASResponse](nfcvasresponse.md): An object representing the response from a single `GET VAS DATA` command.

### Handling an Invalidated Session

- [readerSession:didInvalidateWithError:](nfcvasreadersessiondelegate/readersession%28__didinvalidatewitherror_%29.md): Tells the delegate that the session become invalid and provides the reason.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a VAS Reader Session

- [initWithVASCommandConfigurations:delegate:queue:](nfcvasreadersession/init%28vascommandconfigurations_delegate_queue_%29-23h52.md): Creates a VAS reader session.
- [NFCVASCommandConfiguration](nfcvascommandconfiguration.md): An object providing the configuration for a GET VAS DATA command.
