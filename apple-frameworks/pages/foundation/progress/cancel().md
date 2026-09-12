> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/cancel()](https://developer.apple.com/documentation/foundation/progress/cancel())

# cancel() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels progress tracking.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

This method invokes the block for [cancellationHandler](cancellationhandler.md), if there is one, and ensures that any subsequent reads of the [isCancelled](iscancelled.md) property return [true](https://developer.apple.com/documentation/swift/true).

If the receiver has suboperations, the system cancels their progress as well.

## See Also

### Controlling Progress

- [pause()](pause%28%29.md): Pauses progress tracking.
- [resume()](resume%28%29.md): Resumes progress tracking.
- [resumingHandler](resuminghandler.md): The block to invoke when progress resumes.

# cancel (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels progress tracking.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

This method invokes the block for [cancellationHandler](cancellationhandler.md), if there is one, and ensures that any subsequent reads of the [cancelled](iscancelled.md) property return [true](https://developer.apple.com/documentation/swift/true).

If the receiver has suboperations, the system cancels their progress as well.

## See Also

### Controlling Progress

- [pause](pause%28%29.md): Pauses progress tracking.
- [resume](resume%28%29.md): Resumes progress tracking.
- [resumingHandler](resuminghandler.md): The block to invoke when progress resumes.
