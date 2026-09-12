> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/removealarm(_:)](https://developer.apple.com/documentation/eventkit/ekcalendaritem/removealarm(_:))

# removeAlarm(\_:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Removes an alarm from the calendar item.

## Declaration

```swift
func removeAlarm(_ alarm: EKAlarm)
```

## Parameters

- `alarm`: The alarm to be removed.

## Mentioned In

- [Setting an alarm](../setting-an-alarm.md)

## See Also

### Adding and Removing Alarms

- [hasAlarms](hasalarms.md): A Boolean value that indicates whether the calendar item has alarms.
- [addAlarm(\_:)](addalarm%28__%29.md): Adds an alarm to the receiver.
- [alarms](alarms.md): The alarms associated with the calendar item, as an array of [EKAlarm](../ekalarm.md) objects.

# removeAlarm: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Removes an alarm from the calendar item.

## Declaration

```objectivec
- (void) removeAlarm:(EKAlarm *) alarm;
```

## Parameters

- `alarm`: The alarm to be removed.

## Mentioned In

- [Setting an alarm](../setting-an-alarm.md)

## See Also

### Adding and Removing Alarms

- [hasAlarms](hasalarms.md): A Boolean value that indicates whether the calendar item has alarms.
- [addAlarm:](addalarm%28__%29.md): Adds an alarm to the receiver.
- [alarms](alarms.md): The alarms associated with the calendar item, as an array of [EKAlarm](../ekalarm.md) objects.
