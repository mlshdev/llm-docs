> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fstask/didcomplete(error:)](https://developer.apple.com/documentation/fskit/fstask/didcomplete(error:))

# didComplete(error:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Informs the client that the task completed.

## Declaration

```swift
func didComplete(error: (any Error)?)
```

## Parameters

- `error`: `nil` if the task completed successfully; otherwise, an error that caused the task to fail.

# didCompleteWithError: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Informs the client that the task completed.

## Declaration

```objectivec
- (void) didCompleteWithError:(NSError *) error;
```

## Parameters

- `error`: `nil` if the task completed successfully; otherwise, an error that caused the task to fail.
