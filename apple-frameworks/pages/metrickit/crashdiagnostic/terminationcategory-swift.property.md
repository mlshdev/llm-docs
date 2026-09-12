> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/crashdiagnostic/terminationcategory-swift.property](https://developer.apple.com/documentation/metrickit/crashdiagnostic/terminationcategory-swift.property)

# terminationCategory

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The category of termination that caused this crash.

## Declaration

```swift
let terminationCategory: CrashDiagnostic.TerminationCategory?
```

<a id="discussion"></a>

## Discussion

This value corresponds to the termination categories reported by [ForegroundTerminationMetric](../foregroundterminationmetric.md) and [BackgroundTerminationMetric](../backgroundterminationmetric.md), enabling correlation between individual crash diagnostics and aggregate termination counts.

This property is `nil` when the termination category cannot be determined from the available crash metadata.

## See Also

### Termination counts

- [terminationReason](terminationreason-swift.property.md): The reason the app was terminated as a human-readable string.
