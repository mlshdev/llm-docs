> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekreminder/iscompleted](https://developer.apple.com/documentation/eventkit/ekreminder/iscompleted)

# isCompleted (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value determining whether or not the reminder is marked completed.

## Declaration

```swift
var isCompleted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) will set [completionDate](completiondate.md) to the current date; setting this property to [false](https://developer.apple.com/documentation/swift/false) will set `completionDate` to `nil`.

<a id="Special-Considerations"></a>

### Special Considerations

If the reminder was completed using a different client, you may encounter the case where this property is [true](https://developer.apple.com/documentation/swift/true), but `completionDate` is `nil`.

## See Also

### Accessing Reminder Properties

- [EKReminderPriority](../ekreminderpriority.md): The priority of the reminder.
- [priority](priority.md): The reminder’s priority.
- [startDateComponents](startdatecomponents.md): The start date of the task.
- [dueDateComponents](duedatecomponents.md): The date by which the reminder should be completed.
- [completionDate](completiondate.md): The date on which the reminder was completed.

# completed (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value determining whether or not the reminder is marked completed.

## Declaration

```objectivec
@property (nonatomic, getter=isCompleted) BOOL completed;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) will set [completionDate](completiondate.md) to the current date; setting this property to [false](https://developer.apple.com/documentation/swift/false) will set `completionDate` to `nil`.

<a id="Special-Considerations"></a>

### Special Considerations

If the reminder was completed using a different client, you may encounter the case where this property is [true](https://developer.apple.com/documentation/swift/true), but `completionDate` is `nil`.

## See Also

### Accessing Reminder Properties

- [EKReminderPriority](../ekreminderpriority.md): The priority of the reminder.
- [priority](priority.md): The reminder’s priority.
- [startDateComponents](startdatecomponents.md): The start date of the task.
- [dueDateComponents](duedatecomponents.md): The date by which the reminder should be completed.
- [completionDate](completiondate.md): The date on which the reminder was completed.
