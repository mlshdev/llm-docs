> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/addalarm(_:)](https://developer.apple.com/documentation/eventkit/ekcalendaritem/addalarm(_:))

# addAlarm(\_:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Adds an alarm to the receiver.

## Declaration

```swift
func addAlarm(_ alarm: EKAlarm)
```

## Parameters

- `alarm`: The alarm to be added.

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)
- [Setting an alarm](../setting-an-alarm.md)

## See Also

### Adding and Removing Alarms

- [hasAlarms](hasalarms.md): A Boolean value that indicates whether the calendar item has alarms.
- [removeAlarm(\_:)](removealarm%28__%29.md): Removes an alarm from the calendar item.
- [alarms](alarms.md): The alarms associated with the calendar item, as an array of [EKAlarm](../ekalarm.md) objects.

# addAlarm: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Adds an alarm to the receiver.

## Declaration

```objectivec
- (void) addAlarm:(EKAlarm *) alarm;
```

## Parameters

- `alarm`: The alarm to be added.

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)
- [Setting an alarm](../setting-an-alarm.md)

## See Also

### Adding and Removing Alarms

- [hasAlarms](hasalarms.md): A Boolean value that indicates whether the calendar item has alarms.
- [removeAlarm:](removealarm%28__%29.md): Removes an alarm from the calendar item.
- [alarms](alarms.md): The alarms associated with the calendar item, as an array of [EKAlarm](../ekalarm.md) objects.
