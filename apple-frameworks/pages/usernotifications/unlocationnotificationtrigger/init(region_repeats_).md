> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unlocationnotificationtrigger/init(region:repeats:)](https://developer.apple.com/documentation/usernotifications/unlocationnotificationtrigger/init(region:repeats:))

# init(region:repeats:) (Swift)

**Framework:** User Notifications  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · watchOS 8.0+

Creates a location trigger using the region parameter.

## Declaration

```swift
convenience init(region: CLRegion, repeats: Bool)
```

## Parameters

- `region`: The geographic region that must be entered or exited. Use the region object to specify whether to deliver notifications on entry, on exit, or both.
- `repeats`: Specify [false](https://developer.apple.com/documentation/swift/false) to deliver the notification one time. Specify [true](https://developer.apple.com/documentation/swift/true) to reschedule the notification request each time the system delivers the notification.

<a id="return-value"></a>

## Return Value

A new location trigger object with the specified region.

<a id="Discussion"></a>

## Discussion

If you specify `true` for the `repeats` parameter, you must explicitly remove the notification request to stop the delivery of the associated notification. Use the methods of [UNUserNotificationCenter](../unusernotificationcenter.md) to remove notification requests that are no longer needed.

# triggerWithRegion:repeats: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · watchOS 8.0+

Creates a location trigger using the region parameter.

## Declaration

```objectivec
+ (instancetype) triggerWithRegion:(CLRegion *) region repeats:(BOOL) repeats;
```

## Parameters

- `region`: The geographic region that must be entered or exited. Use the region object to specify whether to deliver notifications on entry, on exit, or both.
- `repeats`: Specify [false](https://developer.apple.com/documentation/swift/false) to deliver the notification one time. Specify [true](https://developer.apple.com/documentation/swift/true) to reschedule the notification request each time the system delivers the notification.

<a id="return-value"></a>

## Return Value

A new location trigger object with the specified region.

<a id="Discussion"></a>

## Discussion

If you specify `true` for the `repeats` parameter, you must explicitly remove the notification request to stop the delivery of the associated notification. Use the methods of [UNUserNotificationCenter](../unusernotificationcenter.md) to remove notification requests that are no longer needed.
