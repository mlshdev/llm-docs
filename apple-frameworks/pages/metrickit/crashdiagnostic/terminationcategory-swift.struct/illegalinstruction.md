> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/crashdiagnostic/terminationcategory-swift.struct/illegalinstruction](https://developer.apple.com/documentation/metrickit/crashdiagnostic/terminationcategory-swift.struct/illegalinstruction)

# illegalInstruction

**Framework:** MetricKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The app was terminated for executing an illegal or undefined instruction.

## Declaration

```swift
static let illegalInstruction: CrashDiagnostic.TerminationCategory
```

<a id="discussion"></a>

## Discussion

Corresponds to [illegalInstructionTerminationCount](../../foregroundterminationmetric/illegalinstructionterminationcount.md) and [illegalInstructionTerminationCount](../../backgroundterminationmetric/illegalinstructionterminationcount.md).

## See Also

### Termination categories

- [badAccess](badaccess.md): The app was terminated for attempting an invalid memory access.
- [abnormal](abnormal.md): The app terminated abnormally, typically due to an uncaught exception or call to `abort()`.
- [watchdog](watchdog.md): The app was terminated by the system watchdog for failing to respond in time.
- [taskTimeout](tasktimeout.md): The app was terminated for exceeding the allocated time for a background task.
- [fileLock](filelock.md): The app was terminated while suspended for holding file locks.
