> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/uncalendarnotificationtrigger/init(datematching:repeats:)](https://developer.apple.com/documentation/usernotifications/uncalendarnotificationtrigger/init(datematching:repeats:))

# init(dateMatching:repeats:) (Swift)

**Framework:** User Notifications  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a calendar trigger using the date components parameter.

## Declaration

```swift
convenience init(dateMatching dateComponents: DateComponents, repeats: Bool)
```

## Parameters

- `dateComponents`: The temporal information to use when constructing the trigger. Provide only the date components that are relevant for your trigger.
- `repeats`: Specify [false](https://developer.apple.com/documentation/swift/false) to deliver the notification one time. Specify [true](https://developer.apple.com/documentation/swift/true) to reschedule the notification request each time the system delivers the notification.

<a id="return-value"></a>

## Return Value

A new calendar trigger based on the specified temporal information.

<a id="Discussion"></a>

## Discussion

If you specify `true` for the `repeats` parameter, you must explicitly remove the notification request to stop the delivery of the associated notification. Use the methods of [UNUserNotificationCenter](../unusernotificationcenter.md) to remove notification requests that are no longer needed.

# triggerWithDateMatchingComponents:repeats: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a calendar trigger using the date components parameter.

## Declaration

```objectivec
+ (instancetype) triggerWithDateMatchingComponents:(NSDateComponents *) dateComponents repeats:(BOOL) repeats;
```

## Parameters

- `dateComponents`: The temporal information to use when constructing the trigger. Provide only the date components that are relevant for your trigger.
- `repeats`: Specify [false](https://developer.apple.com/documentation/swift/false) to deliver the notification one time. Specify [true](https://developer.apple.com/documentation/swift/true) to reschedule the notification request each time the system delivers the notification.

<a id="return-value"></a>

## Return Value

A new calendar trigger based on the specified temporal information.

<a id="Discussion"></a>

## Discussion

If you specify `true` for the `repeats` parameter, you must explicitly remove the notification request to stop the delivery of the associated notification. Use the methods of [UNUserNotificationCenter](../unusernotificationcenter.md) to remove notification requests that are no longer needed.
