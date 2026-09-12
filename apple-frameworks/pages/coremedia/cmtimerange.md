> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerange](https://developer.apple.com/documentation/coremedia/cmtimerange)

# CMTimeRange (Swift)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that represents a time range.

## Declaration

```swift
struct CMTimeRange
```

## Topics

### Creating Time Ranges

- [init()](cmtimerange/init%28%29.md): Creates an empty time range at zero.
- [init(start:duration:)](cmtimerange/init%28start_duration_%29.md): Creates a valid time range with a start time and duration.
- [init(start:end:)](cmtimerange/init%28start_end_%29.md): Creates a valid time range from a start and end time.

### Inspecting Time Ranges

- [start](cmtimerange/start.md): The start time of the time range.
- [end](cmtimerange/end.md): The end time of the time range.
- [duration](cmtimerange/duration.md): The duration of the time range.
- [isValid](cmtimerange/isvalid.md): A Boolean value that indicates whether the time range is valid.
- [isEmpty](cmtimerange/isempty.md): A Boolean value that indicates whether the time range is empty.
- [isIndefinite](cmtimerange/isindefinite.md): A Boolean value that indicates whether the time range is indefinite.

### Finding Elements

- [containsTime(\_:)](cmtimerange/containstime%28__%29.md): Returns a Boolean value that indicates whether the time range contains a time.
- [containsTimeRange(\_:)](cmtimerange/containstimerange%28__%29.md): Returns a Boolean value that indicates whether the time range contains another time range.

### Combining Time Ranges

- [intersection(\_:)](cmtimerange/intersection%28__%29.md): Returns a new time range with the time elements that are common to both this time range and the given time range.
- [union(\_:)](cmtimerange/union%28__%29.md): Returns a new time range with the time elements of both this time range and the given time range.

### Constants

- [zero](cmtimerange/zero.md): A constant for generating an empty time range at zero.
- [invalid](cmtimerange/invalid.md): A constant for generating an invalid time range.

### Operators

- [!=(\_:\_:)](cmtimerange/!=%28____%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CVAttachmentValueRepresentable](../corevideo/cvattachmentvaluerepresentable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CMTimeRange (Objective-C)

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that represents a time range.

## Declaration

```objectivec
typedef struct { ... } CMTimeRange;
```

## Topics

### Inspecting Time Ranges

- [start](cmtimerange/start.md): The start time of the time range.
- [duration](cmtimerange/duration.md): The duration of the time range.

### Constants

- [kCMTimeRangeZero](cmtimerange/zero.md): A constant for generating an empty time range at zero.
- [kCMTimeRangeInvalid](cmtimerange/invalid.md): A constant for generating an invalid time range.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
