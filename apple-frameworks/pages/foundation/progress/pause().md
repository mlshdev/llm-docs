> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/pause()](https://developer.apple.com/documentation/foundation/progress/pause())

# pause() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Pauses progress tracking.

## Declaration

```swift
func pause()
```

<a id="Discussion"></a>

## Discussion

This method invokes the block for [pausingHandler](pausinghandler.md), if there is one, and ensures that any subsequent reads of the [isPaused](ispaused.md) property return [true](https://developer.apple.com/documentation/swift/true).

If the receiver has suboperations, the system pauses their progress as well.

## See Also

### Controlling Progress

- [cancel()](cancel%28%29.md): Cancels progress tracking.
- [resume()](resume%28%29.md): Resumes progress tracking.
- [resumingHandler](resuminghandler.md): The block to invoke when progress resumes.

# pause (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Pauses progress tracking.

## Declaration

```objectivec
- (void) pause;
```

<a id="Discussion"></a>

## Discussion

This method invokes the block for [pausingHandler](pausinghandler.md), if there is one, and ensures that any subsequent reads of the [paused](ispaused.md) property return [true](https://developer.apple.com/documentation/swift/true).

If the receiver has suboperations, the system pauses their progress as well.

## See Also

### Controlling Progress

- [cancel](cancel%28%29.md): Cancels progress tracking.
- [resume](resume%28%29.md): Resumes progress tracking.
- [resumingHandler](resuminghandler.md): The block to invoke when progress resumes.
