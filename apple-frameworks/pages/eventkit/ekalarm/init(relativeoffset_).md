> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarm/init(relativeoffset:)](https://developer.apple.com/documentation/eventkit/ekalarm/init(relativeoffset:))

# init(relativeOffset:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an alarm with a relative offset.

## Declaration

```swift
init(relativeOffset offset: TimeInterval)
```

## Parameters

- `offset`: The offset from the start of an event, at which the alarm fires.

<a id="return-value"></a>

## Return Value

The created alarm.

<a id="Discussion"></a>

## Discussion

Negative offset values fire before the start of the event, while positive values fire after the start.

## See Also

### Creating an Alarm

- [init(absoluteDate:)](init%28absolutedate_%29.md): Creates and returns an alarm with an absolute date.

# alarmWithRelativeOffset: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an alarm with a relative offset.

## Declaration

```objectivec
+ (EKAlarm *) alarmWithRelativeOffset:(NSTimeInterval) offset;
```

## Parameters

- `offset`: The offset from the start of an event, at which the alarm fires.

<a id="return-value"></a>

## Return Value

The created alarm.

<a id="Discussion"></a>

## Discussion

Negative offset values fire before the start of the event, while positive values fire after the start.

## See Also

### Creating an Alarm

- [alarmWithAbsoluteDate:](init%28absolutedate_%29.md): Creates and returns an alarm with an absolute date.
