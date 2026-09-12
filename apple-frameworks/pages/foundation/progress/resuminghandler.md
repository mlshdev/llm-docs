> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/resuminghandler](https://developer.apple.com/documentation/foundation/progress/resuminghandler)

# resumingHandler (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block to invoke when progress resumes.

## Declaration

```swift
var resumingHandler: (@Sendable () -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

If the receiver is a suboperation of another progress object, the system invokes the [resumingHandler](resuminghandler.md) block when pausing the containing progress object.

<a id="Special-Considerations"></a>

### Special Considerations

You’re responsible for resuming any work for the progress object.

You can invoke the resuming handler on any queue. If you must do work on a specific queue, dispatch to that queue from within the resuming handler block.

## See Also

### Controlling Progress

- [cancel()](cancel%28%29.md): Cancels progress tracking.
- [pause()](pause%28%29.md): Pauses progress tracking.
- [resume()](resume%28%29.md): Resumes progress tracking.

# resumingHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block to invoke when progress resumes.

## Declaration

```objectivec
@property (copy, nullable) void (^resumingHandler)();
```

<a id="Discussion"></a>

## Discussion

If the receiver is a suboperation of another progress object, the system invokes the [resumingHandler](resuminghandler.md) block when pausing the containing progress object.

<a id="Special-Considerations"></a>

### Special Considerations

You’re responsible for resuming any work for the progress object.

You can invoke the resuming handler on any queue. If you must do work on a specific queue, dispatch to that queue from within the resuming handler block.

## See Also

### Controlling Progress

- [cancel](cancel%28%29.md): Cancels progress tracking.
- [pause](pause%28%29.md): Pauses progress tracking.
- [resume](resume%28%29.md): Resumes progress tracking.
