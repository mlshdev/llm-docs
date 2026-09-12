> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/session(_:didfinish:error:)-8627b](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/session(_:didfinish:error:)-8627b)

# session(\_:didFinish:error:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a data transfer operation has finished successfully or ended because of an error.

## Declaration

```swift
optional func session(_ session: WCSession, didFinish userInfoTransfer: WCSessionUserInfoTransfer, error: (any Error)?)
```

## Parameters

- `session`: The session object of the current process.
- `userInfoTransfer`: An object containing information about the data that was transferred.
- `error`: An error object if a problem occurred.

<a id="Discussion"></a>

## Discussion

The session object calls this method when a data transfer initiated by the current app finished, either successfully or unsuccessfully. Use this method to note that the transfer completed or to respond to errors, perhaps by trying to send the data again at a later time.

This method is called on a background thread of your app.

## See Also

### Managing Data Dictionary Transfers

- [session(\_:didReceiveUserInfo:)](session%28__didreceiveuserinfo_%29.md): Tells the delegate that the session successfully received a data directory from its counterpart.

# session:didFinishUserInfoTransfer:error: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that a data transfer operation has finished successfully or ended because of an error.

## Declaration

```objectivec
- (void) session:(WCSession *) session didFinishUserInfoTransfer:(WCSessionUserInfoTransfer *) userInfoTransfer error:(NSError *) error;
```

## Parameters

- `session`: The session object of the current process.
- `userInfoTransfer`: An object containing information about the data that was transferred.
- `error`: An error object if a problem occurred.

<a id="Discussion"></a>

## Discussion

The session object calls this method when a data transfer initiated by the current app finished, either successfully or unsuccessfully. Use this method to note that the transfer completed or to respond to errors, perhaps by trying to send the data again at a later time.

This method is called on a background thread of your app.

## See Also

### Managing Data Dictionary Transfers

- [session:didReceiveUserInfo:](session%28__didreceiveuserinfo_%29.md): Tells the delegate that the session successfully received a data directory from its counterpart.
