> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnectiondidinitializenotification](https://developer.apple.com/documentation/foundation/nsconnectiondidinitializenotification)

# NSConnectionDidInitializeNotification

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Posted when an `NSConnection` object is initialized using [initWithReceivePort:sendPort:](nsconnection/initwithreceiveport_sendport_.md) (the designated initializer for `NSConnection`). The notification object is the `NSConnection` object. This notification does not contain a `userInfo` dictionary.

## Declaration

```objectivec
extern NSString * const NSConnectionDidInitializeNotification;
```

<a id="Discussion"></a>

## Discussion

## See Also

### Related Documentation

- [initWithReceivePort:sendPort:](nsconnection/initwithreceiveport_sendport_.md): Deprecated. Returns an `NSConnection` object initialized with given send and receive ports.

### Notifications

- [NSConnectionDidDieNotification](nsconnectiondiddienotification.md): Deprecated. Posted when an `NSConnection` object is deallocated or when it’s notified that its `NSPort` object has become invalid. The notification object is the `NSConnection` object. This notification does not contain a `userInfo` dictionary.
