> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxcpumetric/cumulativecpuinstructions

# cumulativeCPUInstructions (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The total number of CPU instructions the app executed during the reporting period.

> Use [CPUInstructionsCountMetric](../cpuinstructionscountmetric.md) instead.

## Declaration

```swift
var cumulativeCPUInstructions: Measurement<Unit> { get }
```

<a id="Discussion"></a>

## Discussion

For CPUs using out-of-order execution, this property represents the count of instructions the pipeline fully executes. These instructions are sometimes referred to as *retired instructions*.

## See Also

### Reading CPU use

- [cumulativeCPUTime](cumulativecputime.md): Deprecated. The total amount of CPU the app used.

# cumulativeCPUInstructions (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The total number of CPU instructions the app executed during the reporting period.

> Use [CPUInstructionsCountMetric](../cpuinstructionscountmetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnit *> * cumulativeCPUInstructions;
```

<a id="Discussion"></a>

## Discussion

For CPUs using out-of-order execution, this property represents the count of instructions the pipeline fully executes. These instructions are sometimes referred to as *retired instructions*.

## See Also

### Reading CPU use

- [cumulativeCPUTime](cumulativecputime.md): Deprecated. The total amount of CPU the app used.
