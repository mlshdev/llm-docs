> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediadevice/mediadeviceroutingmanager/reportqualitymetricspassed(_:forsession:)

# reportQualityMetricsPassed(\_:forSession:)

**Framework:** Media Device  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Reports whether the realtime sample delivery session has met its quality KPIs.

## Declaration

```swift
@MainActor final func reportQualityMetricsPassed(_ thresholdsMet: Bool, forSession session: MediaOutputSession)
```

## Parameters

- `thresholdsMet`: `true` if the realtime session met quality KPIs, `false` otherwise.
- `session`: The session associated with the realtime delivery.

<a id="discussion"></a>

## Discussion

Call this function after [stopRealtimeSampleDelivery(session:)](../realtimesamplehandling/stoprealtimesampledelivery%28session_%29.md) to indicate whether the realtime streaming session has met the expected quality thresholds for the duration of the session (e.g., latency, frame rate, audio quality).
