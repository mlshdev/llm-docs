> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/session(_:didreceiveuserinfo:)](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/session(_:didreceiveuserinfo:))

# session(\_:didReceiveUserInfo:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the session successfully received a data directory from its counterpart.

## Declaration

```swift
optional func session(_ session: WCSession, didReceiveUserInfo userInfo: [String : Any] = [:])
```

## Parameters

- `session`: The session object of the current process.
- `userInfo`: A dictionary of property list values representing the contents of the message. Use the contents of this dictionary to determine what course of action to take.

<a id="Discussion"></a>

## Discussion

The session object calls this method when it successfully receives a data dictionary from its counterpart. Implement this method to incorporate the data into the app’s content.

The system calls this method on a background thread.

> **Warning**

>  Always test Watch Connectivity data transfers on paired devices. The system doesn’t call the [session(\_:didReceiveUserInfo:)](session%28__didreceiveuserinfo_%29.md) method in Simulator.

## See Also

### Managing Data Dictionary Transfers

- [session(\_:didFinish:error:)](session%28__didfinish_error_%29-8627b.md): Tells the delegate that a data transfer operation has finished successfully or ended because of an error.

# session:didReceiveUserInfo: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the session successfully received a data directory from its counterpart.

## Declaration

```objectivec
- (void) session:(WCSession *) session didReceiveUserInfo:(NSDictionary<NSString *,id> *) userInfo;
```

## Parameters

- `session`: The session object of the current process.
- `userInfo`: A dictionary of property list values representing the contents of the message. Use the contents of this dictionary to determine what course of action to take.

<a id="Discussion"></a>

## Discussion

The session object calls this method when it successfully receives a data dictionary from its counterpart. Implement this method to incorporate the data into the app’s content.

The system calls this method on a background thread.

> **Warning**

>  Always test Watch Connectivity data transfers on paired devices. The system doesn’t call the [session:didReceiveUserInfo:](session%28__didreceiveuserinfo_%29.md) method in Simulator.

## See Also

### Managing Data Dictionary Transfers

- [session:didFinishUserInfoTransfer:error:](session%28__didfinish_error_%29-8627b.md): Tells the delegate that a data transfer operation has finished successfully or ended because of an error.
