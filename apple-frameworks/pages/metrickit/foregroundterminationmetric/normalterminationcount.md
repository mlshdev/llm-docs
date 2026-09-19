> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/foregroundterminationmetric/normalterminationcount

# normalTerminationCount

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The number of times the application terminated normally from the foreground.

## Declaration

```swift
let normalTerminationCount: Int
```

## See Also

### Foreground termination counts

- [memoryLimitTerminationCount](memorylimitterminationcount.md): The number of times the system terminated the app from the foreground for using too much memory.
- [badAccessTerminationCount](badaccessterminationcount.md): The number of times the system terminated the app from the foreground for attempting an invalid memory access.
- [abnormalTerminationCount](abnormalterminationcount.md): The number of times the app terminated abnormally from the foreground.
- [illegalInstructionTerminationCount](illegalinstructionterminationcount.md): The number of times the system terminated the app from the foreground for attempting to execute an illegal or undefined instruction.
- [watchdogTerminationCount](watchdogterminationcount.md): The number of times the system watchdog terminated the app from the foreground.
