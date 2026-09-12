> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/recoverableerror/attemptrecovery(optionindex:)](https://developer.apple.com/documentation/foundation/recoverableerror/attemptrecovery(optionindex:))

# attemptRecovery(optionIndex:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempt to recover from this error when the user selected the option at the given index. Returns true to indicate successful recovery, and false otherwise.

## Declaration

```swift
func attemptRecovery(optionIndex recoveryOptionIndex: Int) -> Bool
```

<a id="Discussion"></a>

## Discussion

This entry point is used for recovery of errors handled at the “application” granularity, where nothing else in the application can proceed until the attempted error recovery completes.
