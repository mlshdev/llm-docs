> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartbeatseriesquerydescriptor/results(for:)](https://developer.apple.com/documentation/healthkit/hkheartbeatseriesquerydescriptor/results(for:))

# results(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Runs a one-shot query that returns an asynchronous sequence of data representing individual heartbeats.

## Declaration

```swift
func results(for healthStore: HKHealthStore) -> HKHeartbeatSeriesQueryDescriptor.Results
```

## Parameters

- `healthStore`: The access point for HealthKit data.

## See Also

### Running Queries

- [HKHeartbeatSeriesQueryDescriptor.Results](results.md): An asynchronous sequence that emits data about individual heartbeats from a heartbeat series sample.
- [HKHeartbeatSeriesQueryDescriptor.Heartbeat](heartbeat.md): Data about an individual heartbeat.
