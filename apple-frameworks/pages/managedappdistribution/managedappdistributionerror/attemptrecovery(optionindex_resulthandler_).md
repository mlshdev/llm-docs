> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedappdistributionerror/attemptrecovery(optionindex:resulthandler:)](https://developer.apple.com/documentation/managedappdistribution/managedappdistributionerror/attemptrecovery(optionindex:resulthandler:))

# attemptRecovery(optionIndex:resultHandler:)

**Framework:** ManagedAppDistribution  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 2.4+

Attempt to recover from this error when someone selects the option at the given index.

## Declaration

```swift
func attemptRecovery(optionIndex recoveryOptionIndex: Int, resultHandler handler: @escaping (Bool) -> Void)
```

## See Also

### Recovering from errors

- [attemptRecovery(optionIndex:)](attemptrecovery%28optionindex_%29.md): Attempt to recover from this error when someone selects the option at the given index.
