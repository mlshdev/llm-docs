> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarm/init(absolutedate:)](https://developer.apple.com/documentation/eventkit/ekalarm/init(absolutedate:))

# init(absoluteDate:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an alarm with an absolute date.

## Declaration

```swift
init(absoluteDate date: Date)
```

## Parameters

- `date`: The date for the alarm.

<a id="return-value"></a>

## Return Value

The created alarm.

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Creating an Alarm

- [init(relativeOffset:)](init%28relativeoffset_%29.md): Creates and returns an alarm with a relative offset.

# alarmWithAbsoluteDate: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an alarm with an absolute date.

## Declaration

```objectivec
+ (EKAlarm *) alarmWithAbsoluteDate:(NSDate *) date;
```

## Parameters

- `date`: The date for the alarm.

<a id="return-value"></a>

## Return Value

The created alarm.

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Creating an Alarm

- [alarmWithRelativeOffset:](init%28relativeoffset_%29.md): Creates and returns an alarm with a relative offset.
