> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/recoverableerror/attemptrecovery(optionindex:resulthandler:)](https://developer.apple.com/documentation/foundation/recoverableerror/attemptrecovery(optionindex:resulthandler:))

# attemptRecovery(optionIndex:resultHandler:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempt to recover from this error when the user selected the option at the given index. This routine must call handler and indicate whether recovery was successful (or not).

## Declaration

```swift
func attemptRecovery(optionIndex recoveryOptionIndex: Int, resultHandler handler: @escaping (Bool) -> Void)
```

<a id="discussion"></a>

## Discussion

This entry point is used for recovery of errors handled at a “document” granularity, that do not affect the entire application.

## Default Implementations

### RecoverableError Implementations

- [attemptRecovery(optionIndex:resultHandler:)](attemptrecovery%28optionindex_resulthandler_%29-1zbgz.md): Default implementation that uses the application-model recovery mechanism ([attemptRecovery(optionIndex:)](attemptrecovery%28optionindex_%29.md)) to implement document-modal recovery.
