> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/foregroundterminationmetric](https://developer.apple.com/documentation/metrickit/foregroundterminationmetric)

# ForegroundTerminationMetric

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A metric that counts app terminations from the foreground by category.

## Declaration

```swift
struct ForegroundTerminationMetric
```

<a id="Discussion"></a>

## Discussion

This metric corresponds to the [MetricResult.foregroundTermination(\_:)](metricresult/foregroundtermination%28__%29.md) case. It appears in both [intervalEntries](metricreport/intervalentries.md) and [stateEntries](metricreport/stateentries.md) when state reporting is enabled.

Foreground exits are user-visible terminations; when unexpected, they directly interrupt usage. Not all exits are unexpected — normal exits such as the user quitting the app from the switcher appear in [normalTerminationCount](foregroundterminationmetric/normalterminationcount.md).

Use [terminationCategory](crashdiagnostic/terminationcategory-swift.property.md) to correlate individual crash diagnostics with these aggregate counts.

## Topics

### Foreground termination counts

- [normalTerminationCount](foregroundterminationmetric/normalterminationcount.md): The number of times the application terminated normally from the foreground.
- [memoryLimitTerminationCount](foregroundterminationmetric/memorylimitterminationcount.md): The number of times the system terminated the app from the foreground for using too much memory.
- [badAccessTerminationCount](foregroundterminationmetric/badaccessterminationcount.md): The number of times the system terminated the app from the foreground for attempting an invalid memory access.
- [abnormalTerminationCount](foregroundterminationmetric/abnormalterminationcount.md): The number of times the app terminated abnormally from the foreground.
- [illegalInstructionTerminationCount](foregroundterminationmetric/illegalinstructionterminationcount.md): The number of times the system terminated the app from the foreground for attempting to execute an illegal or undefined instruction.
- [watchdogTerminationCount](foregroundterminationmetric/watchdogterminationcount.md): The number of times the system watchdog terminated the app from the foreground.

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

- [BackgroundTerminationMetric](backgroundterminationmetric.md): A metric that counts app terminations from the background by category.
