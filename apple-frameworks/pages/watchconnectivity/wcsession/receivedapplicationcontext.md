> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/receivedapplicationcontext](https://developer.apple.com/documentation/watchconnectivity/wcsession/receivedapplicationcontext)

# receivedApplicationContext (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the last update data received from a paired and active device.

## Declaration

```swift
var receivedApplicationContext: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

Use this method to access the most recently received update dictionary. The session object also sends a newly arrived dictionary to the [session(\_:didReceiveApplicationContext:)](../wcsessiondelegate/session%28__didreceiveapplicationcontext_%29.md) method of its delegate.

## See Also

### Managing Background Updates

- [updateApplicationContext(\_:)](updateapplicationcontext%28__%29.md): Sends a dictionary of values that a paired and active device can use to synchronize its state.
- [applicationContext](applicationcontext.md): The most recent contextual data sent to the paired and active device.

# receivedApplicationContext (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the last update data received from a paired and active device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary<NSString *,id> * receivedApplicationContext;
```

<a id="Discussion"></a>

## Discussion

Use this method to access the most recently received update dictionary. The session object also sends a newly arrived dictionary to the [session:didReceiveApplicationContext:](../wcsessiondelegate/session%28__didreceiveapplicationcontext_%29.md) method of its delegate.

## See Also

### Managing Background Updates

- [updateApplicationContext:error:](updateapplicationcontext%28__%29.md): Sends a dictionary of values that a paired and active device can use to synchronize its state.
- [applicationContext](applicationcontext.md): The most recent contextual data sent to the paired and active device.
