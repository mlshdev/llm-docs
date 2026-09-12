> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/backgroundterminationmetric](https://developer.apple.com/documentation/metrickit/backgroundterminationmetric)

# BackgroundTerminationMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that counts app terminations from the background by category.

## Declaration

```swift
struct BackgroundTerminationMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.backgroundTermination(\_:)](metricresult/backgroundtermination%28__%29.md) case. It appears in both [intervalEntries](metricreport/intervalentries.md) and [stateEntries](metricreport/stateentries.md) when state reporting is enabled.

Use [terminationCategory](crashdiagnostic/terminationcategory-swift.property.md) to correlate individual crash diagnostics with these aggregate counts.

Unexpected background terminations can affect downstream performance metrics such as launch time, because the app must fully restart instead of resuming from suspension. For information about launch times when the app resumes from suspension, see [ApplicationResumeTimeMetric](applicationresumetimemetric.md).

## Topics

### Background termination counts

- [normalTerminationCount](backgroundterminationmetric/normalterminationcount.md): The number of times the application terminated normally from the background.
- [memoryLimitTerminationCount](backgroundterminationmetric/memorylimitterminationcount.md): The number of times the system terminated the app from the background for using too much memory.
- [highCPUTerminationCount](backgroundterminationmetric/highcputerminationcount.md): The number of times the system terminated the app from the background for using too much CPU time.
- [systemPressureTerminationCount](backgroundterminationmetric/systempressureterminationcount.md): The number of times the system terminated the app from the background to free up memory.
- [badAccessTerminationCount](backgroundterminationmetric/badaccessterminationcount.md): The number of times the system terminated the app from the background for attempting an invalid memory access.
- [abnormalTerminationCount](backgroundterminationmetric/abnormalterminationcount.md): The number of times the app terminated abnormally from the background.
- [illegalInstructionTerminationCount](backgroundterminationmetric/illegalinstructionterminationcount.md): The number of times the system terminated the app from the background for attempting to execute an illegal or undefined instruction.
- [watchdogTerminationCount](backgroundterminationmetric/watchdogterminationcount.md): The number of times the system watchdog terminated the app from the background.
- [fileLockTerminationCount](backgroundterminationmetric/filelockterminationcount.md): The number of times the system terminated the app from the background while being suspended and having file locks.
- [taskTimeoutTerminationCount](backgroundterminationmetric/tasktimeoutterminationcount.md): The number of times the system terminated the app from the background for exceeding the allocated time for a background task.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Termination metrics

- [ForegroundTerminationMetric](foregroundterminationmetric.md): A metric that counts app terminations from the foreground by category.
