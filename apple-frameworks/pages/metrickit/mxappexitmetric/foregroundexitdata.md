> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxappexitmetric/foregroundexitdata

# foregroundExitData (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The metrics for the foreground app exits.

> Use [ForegroundTerminationMetric](../foregroundterminationmetric.md) instead.

## Declaration

```swift
var foregroundExitData: MXForegroundExitData { get }
```

## See Also

### Reading the foreground exit data

- [MXForegroundExitData](../mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.

# foregroundExitData (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The metrics for the foreground app exits.

> Use [ForegroundTerminationMetric](../foregroundterminationmetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) MXForegroundExitData * foregroundExitData;
```

## See Also

### Reading the foreground exit data

- [MXForegroundExitData](../mxforegroundexitdata.md): Deprecated. An object representing counts for the different types of foreground app exits.
