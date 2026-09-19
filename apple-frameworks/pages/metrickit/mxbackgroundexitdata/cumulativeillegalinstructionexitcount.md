> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxbackgroundexitdata/cumulativeillegalinstructionexitcount

# cumulativeIllegalInstructionExitCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The number of times the system terminated the app from the background for attempting to execute an illegal or undefined instruction.

> Use [illegalInstructionTerminationCount](../backgroundterminationmetric/illegalinstructionterminationcount.md) instead.

## Declaration

```swift
var cumulativeIllegalInstructionExitCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

One way to trigger this exit is by invoking a function with a misconfigured function pointer.

## See Also

### Reading the Crash Count

- [cumulativeBadAccessExitCount](cumulativebadaccessexitcount.md): Deprecated. The number of times the system terminated the app from the background for attempting an invalid memory access.

# cumulativeIllegalInstructionExitCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The number of times the system terminated the app from the background for attempting to execute an illegal or undefined instruction.

> Use [illegalInstructionTerminationCount](../backgroundterminationmetric/illegalinstructionterminationcount.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger cumulativeIllegalInstructionExitCount;
```

<a id="Discussion"></a>

## Discussion

One way to trigger this exit is by invoking a function with a misconfigured function pointer.

## See Also

### Reading the Crash Count

- [cumulativeBadAccessExitCount](cumulativebadaccessexitcount.md): Deprecated. The number of times the system terminated the app from the background for attempting an invalid memory access.
