> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/fortype(_:)](https://developer.apple.com/documentation/foundation/distributednotificationcenter/fortype(_:))

# forType(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the distributed notification center for a particular notification center type.

## Declaration

```swift
class func forType(_ notificationCenterType: DistributedNotificationCenter.CenterType) -> DistributedNotificationCenter
```

## Parameters

- `notificationCenterType`: Notification center type being inquired about.

<a id="return-value"></a>

## Return Value

Distributed notification center for `notificationCenterType`.

<a id="Discussion"></a>

## Discussion

Currently only one type, `NSLocalNotificationCenterType`, is supported.

## See Also

### Getting Distributed Notification Centers

- [default()](default%28%29.md): Returns the default distributed notification center, representing the local notification center for the computer.

# notificationCenterForType: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the distributed notification center for a particular notification center type.

## Declaration

```objectivec
+ (NSDistributedNotificationCenter *) notificationCenterForType:(NSDistributedNotificationCenterType) notificationCenterType;
```

## Parameters

- `notificationCenterType`: Notification center type being inquired about.

<a id="return-value"></a>

## Return Value

Distributed notification center for `notificationCenterType`.

<a id="Discussion"></a>

## Discussion

Currently only one type, `NSLocalNotificationCenterType`, is supported.

## See Also

### Getting Distributed Notification Centers

- [defaultCenter](default%28%29.md): Returns the default distributed notification center, representing the local notification center for the computer.
