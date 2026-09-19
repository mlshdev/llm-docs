> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxunitsignalbars/bars

# bars (Swift)

**Framework:** MetricKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The number of bars of connectivity to the cellular network.

> Use [SignalBars](../signalbars.md) instead.

## Declaration

```swift
@NSCopying class var bars: MXUnitSignalBars { get }
```

<a id="Discussion"></a>

## Discussion

The value of `bars` is a whole number ranging from 0 to the number of bars that represents a full-strength connection. A value of 0 represents no connectivity. The maximum value varies depending on the country or region, and the carrier.

# bars (Objective-C)

**Framework:** MetricKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The number of bars of connectivity to the cellular network.

> Use [SignalBars](../signalbars.md) instead.

## Declaration

```objectivec
@property (class, copy, readonly) MXUnitSignalBars * bars;
```

<a id="Discussion"></a>

## Discussion

The value of `bars` is a whole number ranging from 0 to the number of bars that represents a full-strength connection. A value of 0 represents no connectivity. The maximum value varies depending on the country or region, and the carrier.
