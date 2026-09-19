> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxcellularconditionmetric/histogrammedcellularconditiontime

# histogrammedCellularConditionTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

An object representing the distribution of the different levels of connectivity to the cellular network.

> Use [CellularConditionTimeMetric](../cellularconditiontimemetric.md) instead.

## Declaration

```swift
var histogrammedCellularConditionTime: MXHistogram<MXUnitSignalBars> { get }
```

<a id="Discussion"></a>

## Discussion

Each bucket in the histogram is the percentage of total app runtime spent at the represented connectivity level during the reporting period.

## See Also

### Viewing cellular connectivity metrics

- [MXUnitSignalBars](../mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.

# histogrammedCellularConditionTime (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

An object representing the distribution of the different levels of connectivity to the cellular network.

> Use [CellularConditionTimeMetric](../cellularconditiontimemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) MXHistogram<MXUnitSignalBars *> * histogrammedCellularConditionTime;
```

<a id="Discussion"></a>

## Discussion

Each bucket in the histogram is the percentage of total app runtime spent at the represented connectivity level during the reporting period.

## See Also

### Viewing cellular connectivity metrics

- [MXUnitSignalBars](../mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.
