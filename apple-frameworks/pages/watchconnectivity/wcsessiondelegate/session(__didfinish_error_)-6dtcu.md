> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/session(_:didfinish:error:)-6dtcu](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/session(_:didfinish:error:)-6dtcu)

# session(\_:didFinish:error:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a file transfer has finished successfully or ended because of an error.

## Declaration

```swift
optional func session(_ session: WCSession, didFinish fileTransfer: WCSessionFileTransfer, error: (any Error)?)
```

## Parameters

- `session`: The session object of the current process.
- `fileTransfer`: An object containing information about the file that was transferred.
- `error`: An error object if a problem occurred.

<a id="Discussion"></a>

## Discussion

The session object calls this method when a file transfer initiated by the current app finished, either successfully or unsuccessfully. Use this method to note that the transfer completed or to respond to errors, perhaps by trying to send the file again at a later time.

This method is called on a background thread of your app.

## See Also

### Managing File Transfers

- [session(\_:didReceive:)](session%28__didreceive_%29.md): Tells the delegate that the session successfully received a file from its counterpart.

# session:didFinishFileTransfer:error: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a file transfer has finished successfully or ended because of an error.

## Declaration

```objectivec
- (void) session:(WCSession *) session didFinishFileTransfer:(WCSessionFileTransfer *) fileTransfer error:(NSError *) error;
```

## Parameters

- `session`: The session object of the current process.
- `fileTransfer`: An object containing information about the file that was transferred.
- `error`: An error object if a problem occurred.

<a id="Discussion"></a>

## Discussion

The session object calls this method when a file transfer initiated by the current app finished, either successfully or unsuccessfully. Use this method to note that the transfer completed or to respond to errors, perhaps by trying to send the file again at a later time.

This method is called on a background thread of your app.

## See Also

### Managing File Transfers

- [session:didReceiveFile:](session%28__didreceive_%29.md): Tells the delegate that the session successfully received a file from its counterpart.
