> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/default()](https://developer.apple.com/documentation/foundation/distributednotificationcenter/default())

# default() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the default distributed notification center, representing the local notification center for the computer.

## Declaration

```swift
class func `default`() -> DistributedNotificationCenter
```

<a id="return-value"></a>

## Return Value

Default distributed notification center for the computer.

<a id="Discussion"></a>

## Discussion

This method calls [forType(\_:)](fortype%28__%29.md) with an argument of `NSLocalNotificationCenterType`.

## See Also

### Related Documentation

- [Notification Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Notifications/Introduction/introNotifications.html#//apple_ref/doc/uid/10000043i)

### Getting Distributed Notification Centers

- [forType(\_:)](fortype%28__%29.md): Returns the distributed notification center for a particular notification center type.

# defaultCenter (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the default distributed notification center, representing the local notification center for the computer.

## Declaration

```objectivec
+ (NSDistributedNotificationCenter *) defaultCenter;
```

<a id="return-value"></a>

## Return Value

Default distributed notification center for the computer.

<a id="Discussion"></a>

## Discussion

This method calls [notificationCenterForType:](fortype%28__%29.md) with an argument of `NSLocalNotificationCenterType`.

## See Also

### Related Documentation

- [Notification Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Notifications/Introduction/introNotifications.html#//apple_ref/doc/uid/10000043i)

### Getting Distributed Notification Centers

- [notificationCenterForType:](fortype%28__%29.md): Returns the distributed notification center for a particular notification center type.
