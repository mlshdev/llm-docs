> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/untimeintervalnotificationtrigger/timeinterval](https://developer.apple.com/documentation/usernotifications/untimeintervalnotificationtrigger/timeinterval)

# timeInterval (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The time interval to create the trigger.

## Declaration

```swift
var timeInterval: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the original time interval that you specified when creating the trigger object. The value in this property isn’t updated as time counts down. To find out when the trigger will fire next, call the [nextTriggerDate()](nexttriggerdate%28%29.md) method.

## See Also

### Getting the Trigger Information

- [nextTriggerDate()](nexttriggerdate%28%29.md): The next date at which the trigger conditions are met.

# timeInterval (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The time interval to create the trigger.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timeInterval;
```

```objectivec
@property (atomic, readonly) NSTimeInterval timeInterval;
```

<a id="Discussion"></a>

## Discussion

This property contains the original time interval that you specified when creating the trigger object. The value in this property isn’t updated as time counts down. To find out when the trigger will fire next, call the [nextTriggerDate](nexttriggerdate%28%29.md) method.

## See Also

### Getting the Trigger Information

- [nextTriggerDate](nexttriggerdate%28%29.md): The next date at which the trigger conditions are met.
