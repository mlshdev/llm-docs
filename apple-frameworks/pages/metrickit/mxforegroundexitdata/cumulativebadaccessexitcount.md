> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxforegroundexitdata/cumulativebadaccessexitcount](https://developer.apple.com/documentation/metrickit/mxforegroundexitdata/cumulativebadaccessexitcount)

# cumulativeBadAccessExitCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system terminated the app from the foreground for attempting an invalid memory access.

> Use [badAccessTerminationCount](../foregroundterminationmetric/badaccessterminationcount.md) instead.

## Declaration

```swift
var cumulativeBadAccessExitCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The most common reasons for this kind of termination are an attempt to access a nonexistent or reserved memory location, or to access memory in a way that’s inconsistent with the protection level, such as writing to read-only memory.

## See Also

### Reading the Crash Count

- [cumulativeIllegalInstructionExitCount](cumulativeillegalinstructionexitcount.md): Deprecated. The number of times the system terminated the app from the foreground for attempting to execute an illegal or undefined instruction.

# cumulativeBadAccessExitCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The number of times the system terminated the app from the foreground for attempting an invalid memory access.

> Use [badAccessTerminationCount](../foregroundterminationmetric/badaccessterminationcount.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger cumulativeBadAccessExitCount;
```

<a id="Discussion"></a>

## Discussion

The most common reasons for this kind of termination are an attempt to access a nonexistent or reserved memory location, or to access memory in a way that’s inconsistent with the protection level, such as writing to read-only memory.

## See Also

### Reading the Crash Count

- [cumulativeIllegalInstructionExitCount](cumulativeillegalinstructionexitcount.md): Deprecated. The number of times the system terminated the app from the foreground for attempting to execute an illegal or undefined instruction.
