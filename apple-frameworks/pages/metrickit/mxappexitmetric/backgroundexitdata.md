> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxappexitmetric/backgroundexitdata

# backgroundExitData (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The metrics for the background app exits.

> Use [BackgroundTerminationMetric](../backgroundterminationmetric.md) instead.

## Declaration

```swift
var backgroundExitData: MXBackgroundExitData { get }
```

## See Also

### Reading the background exit data

- [MXBackgroundExitData](../mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.

# backgroundExitData (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The metrics for the background app exits.

> Use [BackgroundTerminationMetric](../backgroundterminationmetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) MXBackgroundExitData * backgroundExitData;
```

## See Also

### Reading the background exit data

- [MXBackgroundExitData](../mxbackgroundexitdata.md): Deprecated. An object representing counts for the different types of background app exits.
