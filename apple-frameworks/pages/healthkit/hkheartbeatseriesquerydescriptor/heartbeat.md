> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartbeatseriesquerydescriptor/heartbeat](https://developer.apple.com/documentation/healthkit/hkheartbeatseriesquerydescriptor/heartbeat)

# HKHeartbeatSeriesQueryDescriptor.Heartbeat

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Data about an individual heartbeat.

## Declaration

```swift
struct Heartbeat
```

## Topics

### Accessing Heartbeat Data

- [precededByGap](heartbeat/precededbygap.md)
- [timeIntervalSinceStart](heartbeat/timeintervalsincestart.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Running Queries

- [results(for:)](results%28for_%29.md): Runs a one-shot query that returns an asynchronous sequence of data representing individual heartbeats.
- [HKHeartbeatSeriesQueryDescriptor.Results](results.md): An asynchronous sequence that emits data about individual heartbeats from a heartbeat series sample.
