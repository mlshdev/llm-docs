> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/untimeintervalnotificationtrigger/nexttriggerdate()](https://developer.apple.com/documentation/usernotifications/untimeintervalnotificationtrigger/nexttriggerdate())

# nextTriggerDate() (Swift)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The next date at which the trigger conditions are met.

## Declaration

```swift
func nextTriggerDate() -> Date?
```

<a id="return-value"></a>

## Return Value

The next trigger date.

<a id="Discussion"></a>

## Discussion

Use this property to find out when a notification associated with this trigger will next be delivered.

## See Also

### Getting the Trigger Information

- [timeInterval](timeinterval.md): The time interval to create the trigger.

# nextTriggerDate (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The next date at which the trigger conditions are met.

## Declaration

```objectivec
- (NSDate *) nextTriggerDate;
```

<a id="return-value"></a>

## Return Value

The next trigger date.

<a id="Discussion"></a>

## Discussion

Use this property to find out when a notification associated with this trigger will next be delivered.

## See Also

### Getting the Trigger Information

- [timeInterval](timeinterval.md): The time interval to create the trigger.
