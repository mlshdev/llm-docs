> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxapplaunchdiagnostic/launchduration

# launchDuration (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.2) · iPadOS 16.0+ (deprecated in 27.2) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2)

The total app launch duration.

> Use [launchDuration](../applaunchdiagnostic/launchduration.md) instead.

## Declaration

```swift
var launchDuration: Measurement<UnitDuration> { get }
```

## See Also

### Reading app launch metrics

- [callStackTree](callstacktree.md): Deprecated. The call stack tree associated with the app launch.

# launchDuration (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ (deprecated in 27.2) · iPadOS 16.0+ (deprecated in 27.2) · Mac Catalyst 16.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.2)

The total app launch duration.

> Use [launchDuration](../applaunchdiagnostic/launchduration.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitDuration *> * launchDuration;
```

## See Also

### Reading app launch metrics

- [callStackTree](callstacktree.md): Deprecated. The call stack tree associated with the app launch.
