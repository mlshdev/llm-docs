> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarm/relativeoffset](https://developer.apple.com/documentation/eventkit/ekalarm/relativeoffset)

# relativeOffset (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The offset from the start of an event, at which the alarm fires.

## Declaration

```swift
var relativeOffset: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

If you set this value for an absolute alarm, it loses its absolute date and becomes a relative offset alarm.

## See Also

### Accessing Alarm Dates

- [absoluteDate](absolutedate.md): The absolute date for the alarm.

# relativeOffset (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The offset from the start of an event, at which the alarm fires.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval relativeOffset;
```

<a id="Discussion"></a>

## Discussion

If you set this value for an absolute alarm, it loses its absolute date and becomes a relative offset alarm.

## See Also

### Accessing Alarm Dates

- [absoluteDate](absolutedate.md): The absolute date for the alarm.
