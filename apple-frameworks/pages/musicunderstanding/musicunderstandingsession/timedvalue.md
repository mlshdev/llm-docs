> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/musicunderstandingsession/timedvalue](https://developer.apple.com/documentation/musicunderstanding/musicunderstandingsession/timedvalue)

# MusicUnderstandingSession.TimedValue

**Framework:** Music Understanding  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A structure that pairs a value with a time.

## Declaration

```swift
struct TimedValue<Value> where Value : Decodable, Value : Encodable, Value : Equatable, Value : Sendable
```

<a id="overview"></a>

## Overview

The `TimedValue` pairs a value with a `CMTime` point — a measurement at a specific instant, as opposed to a span. Contrast: properties that hold constant over a span (key, pace) use RangedValue with a `CMTimeRange`; instantaneous measurements use `TimedValue` with a `CMTime`.

## Topics

### Getting the time

- [time](timedvalue/time.md): The time at which the value applies.

### Getting the value

- [value](timedvalue/value.md): The value associated with the time.

### Initializers

- [init(from:)](timedvalue/init%28from_%29.md): Creates a timed value by decoding from the given decoder.

### Instance Methods

- [encode(to:)](timedvalue/encode%28to_%29.md): Encodes the timed value into the given encoder.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Support types

- [MusicUnderstandingSession.RangedValue](rangedvalue.md): A structure that pairs a value over a time range.
- [AnalysisType](../analysistype.md): The analysis type for each session.
