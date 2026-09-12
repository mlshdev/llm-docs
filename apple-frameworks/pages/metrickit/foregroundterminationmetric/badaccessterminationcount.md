> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/foregroundterminationmetric/badaccessterminationcount](https://developer.apple.com/documentation/metrickit/foregroundterminationmetric/badaccessterminationcount)

# badAccessTerminationCount

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The number of times the system terminated the app from the foreground for attempting an invalid memory access.

## Declaration

```swift
let badAccessTerminationCount: Int
```

## See Also

### Foreground termination counts

- [normalTerminationCount](normalterminationcount.md): The number of times the application terminated normally from the foreground.
- [memoryLimitTerminationCount](memorylimitterminationcount.md): The number of times the system terminated the app from the foreground for using too much memory.
- [abnormalTerminationCount](abnormalterminationcount.md): The number of times the app terminated abnormally from the foreground.
- [illegalInstructionTerminationCount](illegalinstructionterminationcount.md): The number of times the system terminated the app from the foreground for attempting to execute an illegal or undefined instruction.
- [watchdogTerminationCount](watchdogterminationcount.md): The number of times the system watchdog terminated the app from the foreground.
