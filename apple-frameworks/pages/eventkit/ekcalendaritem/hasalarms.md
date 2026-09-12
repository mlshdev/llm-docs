> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/hasalarms](https://developer.apple.com/documentation/eventkit/ekcalendaritem/hasalarms)

# hasAlarms (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the calendar item has alarms.

## Declaration

```swift
var hasAlarms: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the calendar item has alarms; otherwise it does not.

## See Also

### Adding and Removing Alarms

- [addAlarm(\_:)](addalarm%28__%29.md): Adds an alarm to the receiver.
- [removeAlarm(\_:)](removealarm%28__%29.md): Removes an alarm from the calendar item.
- [alarms](alarms.md): The alarms associated with the calendar item, as an array of [EKAlarm](../ekalarm.md) objects.

# hasAlarms (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the calendar item has alarms.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasAlarms;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the calendar item has alarms; otherwise it does not.

## See Also

### Adding and Removing Alarms

- [addAlarm:](addalarm%28__%29.md): Adds an alarm to the receiver.
- [removeAlarm:](removealarm%28__%29.md): Removes an alarm from the calendar item.
- [alarms](alarms.md): The alarms associated with the calendar item, as an array of [EKAlarm](../ekalarm.md) objects.
