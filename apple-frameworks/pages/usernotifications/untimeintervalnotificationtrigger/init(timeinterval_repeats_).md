> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/untimeintervalnotificationtrigger/init(timeinterval:repeats:)](https://developer.apple.com/documentation/usernotifications/untimeintervalnotificationtrigger/init(timeinterval:repeats:))

# init(timeInterval:repeats:) (Swift)

**Framework:** User Notifications  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a time interval trigger using the time value parameter.

## Declaration

```swift
convenience init(timeInterval: TimeInterval, repeats: Bool)
```

## Parameters

- `timeInterval`: The time (in seconds) that must elapse from the current time before the trigger fires. This value must be greater than zero.
- `repeats`: Specify [false](https://developer.apple.com/documentation/swift/false) to deliver the notification one time. Specify [true](https://developer.apple.com/documentation/swift/true) to reschedule the notification request each time the system delivers the notification. If this parameter is [true](https://developer.apple.com/documentation/swift/true), the value in the `timeInterval` parameter must be 60 seconds or greater.

<a id="return-value"></a>

## Return Value

A new time interval trigger based on the specified temporal information.

<a id="Discussion"></a>

## Discussion

If you specify `true` for the `repeats` parameter, you must explicitly remove the notification request to stop the delivery of the associated notification. Use the methods of [UNUserNotificationCenter](../unusernotificationcenter.md) to remove notification requests that are no longer needed.

# triggerWithTimeInterval:repeats: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a time interval trigger using the time value parameter.

## Declaration

```objectivec
+ (instancetype) triggerWithTimeInterval:(NSTimeInterval) timeInterval repeats:(BOOL) repeats;
```

## Parameters

- `timeInterval`: The time (in seconds) that must elapse from the current time before the trigger fires. This value must be greater than zero.
- `repeats`: Specify [false](https://developer.apple.com/documentation/swift/false) to deliver the notification one time. Specify [true](https://developer.apple.com/documentation/swift/true) to reschedule the notification request each time the system delivers the notification. If this parameter is [true](https://developer.apple.com/documentation/swift/true), the value in the `timeInterval` parameter must be 60 seconds or greater.

<a id="return-value"></a>

## Return Value

A new time interval trigger based on the specified temporal information.

<a id="Discussion"></a>

## Discussion

If you specify `true` for the `repeats` parameter, you must explicitly remove the notification request to stop the delivery of the associated notification. Use the methods of [UNUserNotificationCenter](../unusernotificationcenter.md) to remove notification requests that are no longer needed.
