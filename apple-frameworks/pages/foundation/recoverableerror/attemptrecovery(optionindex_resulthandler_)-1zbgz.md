> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/recoverableerror/attemptrecovery(optionindex:resulthandler:)-1zbgz](https://developer.apple.com/documentation/foundation/recoverableerror/attemptrecovery(optionindex:resulthandler:)-1zbgz)

# attemptRecovery(optionIndex:resultHandler:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Default implementation that uses the application-model recovery mechanism ([attemptRecovery(optionIndex:)](attemptrecovery%28optionindex_%29.md)) to implement document-modal recovery.

## Declaration

```swift
func attemptRecovery(optionIndex recoveryOptionIndex: Int, resultHandler handler: @escaping (Bool) -> Void)
```
