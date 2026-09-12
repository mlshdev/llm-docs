> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/backgroundterminationmetric/normalterminationcount](https://developer.apple.com/documentation/metrickit/backgroundterminationmetric/normalterminationcount)

# normalTerminationCount

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The number of times the application terminated normally from the background.

## Declaration

```swift
let normalTerminationCount: Int
```

## See Also

### Background termination counts

- [memoryLimitTerminationCount](memorylimitterminationcount.md): The number of times the system terminated the app from the background for using too much memory.
- [highCPUTerminationCount](highcputerminationcount.md): The number of times the system terminated the app from the background for using too much CPU time.
- [systemPressureTerminationCount](systempressureterminationcount.md): The number of times the system terminated the app from the background to free up memory.
- [badAccessTerminationCount](badaccessterminationcount.md): The number of times the system terminated the app from the background for attempting an invalid memory access.
- [abnormalTerminationCount](abnormalterminationcount.md): The number of times the app terminated abnormally from the background.
- [illegalInstructionTerminationCount](illegalinstructionterminationcount.md): The number of times the system terminated the app from the background for attempting to execute an illegal or undefined instruction.
- [watchdogTerminationCount](watchdogterminationcount.md): The number of times the system watchdog terminated the app from the background.
- [fileLockTerminationCount](filelockterminationcount.md): The number of times the system terminated the app from the background while being suspended and having file locks.
- [taskTimeoutTerminationCount](tasktimeoutterminationcount.md): The number of times the system terminated the app from the background for exceeding the allocated time for a background task.
