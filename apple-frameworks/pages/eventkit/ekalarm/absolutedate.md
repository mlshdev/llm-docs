> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarm/absolutedate](https://developer.apple.com/documentation/eventkit/ekalarm/absolutedate)

# absoluteDate (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The absolute date for the alarm.

## Declaration

```swift
var absoluteDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

If you set this property for a relative offset alarm, it loses the relative offset and becomes an absolute alarm.

## See Also

### Accessing Alarm Dates

- [relativeOffset](relativeoffset.md): The offset from the start of an event, at which the alarm fires.

# absoluteDate (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The absolute date for the alarm.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDate * absoluteDate;
```

<a id="Discussion"></a>

## Discussion

If you set this property for a relative offset alarm, it loses the relative offset and becomes an absolute alarm.

## See Also

### Accessing Alarm Dates

- [relativeOffset](relativeoffset.md): The offset from the start of an event, at which the alarm fires.
