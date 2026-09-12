> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessiondelegate/session(_:didreceiveapplicationcontext:)](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate/session(_:didreceiveapplicationcontext:))

# session(\_:didReceiveApplicationContext:) (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the session has received context data from the counterpart.

## Declaration

```swift
optional func session(_ session: WCSession, didReceiveApplicationContext applicationContext: [String : Any])
```

## Parameters

- `session`: The session object that received the update from its counterpart.
- `applicationContext`: The context data from the counterpart. Use this data to

<a id="Discussion"></a>

## Discussion

The session uses this method to deliver the last known context data from its counterpart—that is, data sent by the counterpart using the [updateApplicationContext(\_:)](../wcsession/updateapplicationcontext%28__%29.md) method of its own session object. If context data is already waiting to be delivered, this method is called shortly after you activate the session object for the current process.

Use context data to get a head start on updating your app’s user interface. A counterpart can send context data representing the last known state information. For example, a mail program running on iOS might include data from the five most recently received email messages in the `appContext` dictionary. A WatchKit extension would then replace any stale data with the new information.

A context update is not necessarily a replacement for other types of messaging. It is intended to help a newly launched app display recent data more quickly than it could if it had to query its counterpart first. You should still use other forms of messaging to retrieve a more complete set of data as needed.

You must implement this method if your app receives context updates.

# session:didReceiveApplicationContext: (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the session has received context data from the counterpart.

## Declaration

```objectivec
- (void) session:(WCSession *) session didReceiveApplicationContext:(NSDictionary<NSString *,id> *) applicationContext;
```

## Parameters

- `session`: The session object that received the update from its counterpart.
- `applicationContext`: The context data from the counterpart. Use this data to

<a id="Discussion"></a>

## Discussion

The session uses this method to deliver the last known context data from its counterpart—that is, data sent by the counterpart using the [updateApplicationContext:error:](../wcsession/updateapplicationcontext%28__%29.md) method of its own session object. If context data is already waiting to be delivered, this method is called shortly after you activate the session object for the current process.

Use context data to get a head start on updating your app’s user interface. A counterpart can send context data representing the last known state information. For example, a mail program running on iOS might include data from the five most recently received email messages in the `appContext` dictionary. A WatchKit extension would then replace any stale data with the new information.

A context update is not necessarily a replacement for other types of messaging. It is intended to help a newly launched app display recent data more quickly than it could if it had to query its counterpart first. You should still use other forms of messaging to retrieve a more complete set of data as needed.

You must implement this method if your app receives context updates.
