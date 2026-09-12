> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/resume()](https://developer.apple.com/documentation/foundation/progress/resume())

# resume() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Resumes progress tracking.

## Declaration

```swift
func resume()
```

<a id="Discussion"></a>

## Discussion

This method invokes the block for [resumingHandler](resuminghandler.md), if there is one, and ensures that any subsequent reads of the [isPaused](ispaused.md) property return [false](https://developer.apple.com/documentation/swift/false).

If the receiver has suboperations, the system resumes their progress as well.

## See Also

### Controlling Progress

- [cancel()](cancel%28%29.md): Cancels progress tracking.
- [pause()](pause%28%29.md): Pauses progress tracking.
- [resumingHandler](resuminghandler.md): The block to invoke when progress resumes.

# resume (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Resumes progress tracking.

## Declaration

```objectivec
- (void) resume;
```

<a id="Discussion"></a>

## Discussion

This method invokes the block for [resumingHandler](resuminghandler.md), if there is one, and ensures that any subsequent reads of the [paused](ispaused.md) property return [false](https://developer.apple.com/documentation/swift/false).

If the receiver has suboperations, the system resumes their progress as well.

## See Also

### Controlling Progress

- [cancel](cancel%28%29.md): Cancels progress tracking.
- [pause](pause%28%29.md): Pauses progress tracking.
- [resumingHandler](resuminghandler.md): The block to invoke when progress resumes.
