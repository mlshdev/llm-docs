> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationtrigger/repeats](https://developer.apple.com/documentation/usernotifications/unnotificationtrigger/repeats)

# repeats (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value indicating whether the system reschedules the notification after it’s delivered.

## Declaration

```swift
var repeats: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When this property is [false](https://developer.apple.com/documentation/swift/false), the system delivers the notification only once. When this property is [true](https://developer.apple.com/documentation/swift/true), the system reschedules the notification request automatically, resulting in the system delivering the notification each time the trigger condition is met. To unschedule the notification request, use the methods of the [UNUserNotificationCenter](../unusernotificationcenter.md) to remove the notification request.

# repeats (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value indicating whether the system reschedules the notification after it’s delivered.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL repeats;
```

```objectivec
@property (atomic, readonly) BOOL repeats;
```

<a id="Discussion"></a>

## Discussion

When this property is [false](https://developer.apple.com/documentation/swift/false), the system delivers the notification only once. When this property is [true](https://developer.apple.com/documentation/swift/true), the system reschedules the notification request automatically, resulting in the system delivering the notification each time the trigger condition is met. To unschedule the notification request, use the methods of the [UNUserNotificationCenter](../unusernotificationcenter.md) to remove the notification request.
