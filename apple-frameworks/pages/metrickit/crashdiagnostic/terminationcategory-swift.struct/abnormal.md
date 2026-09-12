> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/crashdiagnostic/terminationcategory-swift.struct/abnormal](https://developer.apple.com/documentation/metrickit/crashdiagnostic/terminationcategory-swift.struct/abnormal)

# abnormal

**Framework:** MetricKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The app terminated abnormally, typically due to an uncaught exception or call to `abort()`.

## Declaration

```swift
static let abnormal: CrashDiagnostic.TerminationCategory
```

<a id="discussion"></a>

## Discussion

Corresponds to [abnormalTerminationCount](../../foregroundterminationmetric/abnormalterminationcount.md) and [abnormalTerminationCount](../../backgroundterminationmetric/abnormalterminationcount.md).

## See Also

### Termination categories

- [badAccess](badaccess.md): The app was terminated for attempting an invalid memory access.
- [illegalInstruction](illegalinstruction.md): The app was terminated for executing an illegal or undefined instruction.
- [watchdog](watchdog.md): The app was terminated by the system watchdog for failing to respond in time.
- [taskTimeout](tasktimeout.md): The app was terminated for exceeding the allocated time for a background task.
- [fileLock](filelock.md): The app was terminated while suspended for holding file locks.
