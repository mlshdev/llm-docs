> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributednotificationcenter/suspended](https://developer.apple.com/documentation/foundation/distributednotificationcenter/suspended)

# suspended (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Suspends or resumes notification delivery.

## Declaration

```swift
var suspended: Bool { get set }
```

## Parameters

- `suspended`: [true](https://developer.apple.com/documentation/swift/true) suspends notification delivery, [false](https://developer.apple.com/documentation/swift/false) resumes it.

<a id="Discussion"></a>

## Discussion

See [DistributedNotificationCenter.SuspensionBehavior](suspensionbehavior.md) for details on how the receiver delivers notifications to their observers when normal notification delivery is suspended.

The [NSApplication](https://developer.apple.com/documentation/appkit/nsapplication) class automatically suspends distributed notification delivery when the application is not active. Applications based on the Application Kit framework should let AppKit manage the suspension of notification delivery. Foundation-only programs may have occasional need to use this method.

## See Also

### Related Documentation

- [addObserver(\_:selector:name:object:suspensionBehavior:)](addobserver%28__selector_name_object_suspensionbehavior_%29.md): Adds an entry to the receiver’s dispatch table with a specific observer and suspended-notifications behavior, and optional notification name and sender.
- [postNotificationName(\_:object:userInfo:deliverImmediately:)](postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.

# suspended (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Suspends or resumes notification delivery.

## Declaration

```objectivec
@property BOOL suspended;
```

## Parameters

- `suspended`: [true](https://developer.apple.com/documentation/swift/true) suspends notification delivery, [false](https://developer.apple.com/documentation/swift/false) resumes it.

<a id="Discussion"></a>

## Discussion

See [NSNotificationSuspensionBehavior](suspensionbehavior.md) for details on how the receiver delivers notifications to their observers when normal notification delivery is suspended.

The [NSApplication](https://developer.apple.com/documentation/appkit/nsapplication) class automatically suspends distributed notification delivery when the application is not active. Applications based on the Application Kit framework should let AppKit manage the suspension of notification delivery. Foundation-only programs may have occasional need to use this method.

## See Also

### Related Documentation

- [addObserver:selector:name:object:suspensionBehavior:](addobserver%28__selector_name_object_suspensionbehavior_%29.md): Adds an entry to the receiver’s dispatch table with a specific observer and suspended-notifications behavior, and optional notification name and sender.
- [postNotificationName:object:userInfo:deliverImmediately:](postnotificationname%28__object_userinfo_deliverimmediately_%29.md): Creates a notification with information and an immediate-delivery specifier, and posts it to the receiver.
