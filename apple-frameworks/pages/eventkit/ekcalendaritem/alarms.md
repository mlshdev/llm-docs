> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/alarms](https://developer.apple.com/documentation/eventkit/ekcalendaritem/alarms)

# alarms (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The alarms associated with the calendar item, as an array of [EKAlarm](../ekalarm.md) objects.

## Declaration

```swift
var alarms: [EKAlarm]? { get set }
```

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

This property is `nil` if the calendar item has no alarms.

## See Also

### Adding and Removing Alarms

- [hasAlarms](hasalarms.md): A Boolean value that indicates whether the calendar item has alarms.
- [addAlarm(\_:)](addalarm%28__%29.md): Adds an alarm to the receiver.
- [removeAlarm(\_:)](removealarm%28__%29.md): Removes an alarm from the calendar item.

# alarms (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The alarms associated with the calendar item, as an array of [EKAlarm](../ekalarm.md) objects.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<EKAlarm *> * alarms;
```

## Mentioned In

- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

This property is `nil` if the calendar item has no alarms.

## See Also

### Adding and Removing Alarms

- [hasAlarms](hasalarms.md): A Boolean value that indicates whether the calendar item has alarms.
- [addAlarm:](addalarm%28__%29.md): Adds an alarm to the receiver.
- [removeAlarm:](removealarm%28__%29.md): Removes an alarm from the calendar item.
