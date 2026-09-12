> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager/reportedstate](https://developer.apple.com/documentation/metrickit/metricmanager/reportedstate)

# MetricManager.ReportedState

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A recorded app state associated with a metric or diagnostic report entry.

## Declaration

```swift
struct ReportedState
```

<a id="Discussion"></a>

## Discussion

`ReportedState` describes a single state that your app was in during a reporting interval. It carries the domain and label identifying the state, the duration the app spent in that state, and any stable context values your app recorded with the state.

Access reported states in metric reports through [states](../metricreport/intervalentry/states.md) or [state](../metricreport/stateentry/state.md). Access them in diagnostic reports through [states](../diagnosticreport/environment-swift.struct/states.md).

## Topics

### State details

- [domain](reportedstate/domain.md): The StateReporting domain this state belongs to
- [label](reportedstate/label.md): The state label
- [duration](reportedstate/duration.md): The duration when the state was active during performance data collection.

### Instance Properties

- [stableMetadata](reportedstate/stablemetadata.md): Context dictionary containing state-specific information

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
