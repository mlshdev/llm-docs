> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/cancellationhandler](https://developer.apple.com/documentation/foundation/progress/cancellationhandler)

# cancellationHandler (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block to invoke when canceling progress.

## Declaration

```swift
var cancellationHandler: (@Sendable () -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

If the receiver is a suboperation of another progress object, the system invokes the [cancellationHandler](cancellationhandler.md) block when canceling the containing progress object.

<a id="Special-Considerations"></a>

### Special Considerations

You’re responsible for canceling any work for the progress object.

You can invoke the cancellation handler on any queue. If you must do work on a specific queue, dispatch to that queue from within the cancellation handler block.

## See Also

### Reporting Progress

- [totalUnitCount](totalunitcount.md): The total number of tracked units of work for the current progress.
- [completedUnitCount](completedunitcount.md): The number of completed units of work for the current job.
- [localizedDescription](localizeddescription.md): A localized description of tracked progress for the receiver.
- [localizedAdditionalDescription](localizedadditionaldescription.md): A more specific localized description of tracked progress for the receiver.
- [isCancellable](iscancellable.md): A Boolean value that indicates whether the receiver is tracking work that you can cancel.
- [isCancelled](iscancelled.md): A Boolean value that Indicates whether the receiver is tracking canceled work.
- [isPausable](ispausable.md): A Boolean value that indicates whether the receiver is tracking work that you can pause.
- [isPaused](ispaused.md): A Boolean value that indicates whether the receiver is tracking paused work.
- [pausingHandler](pausinghandler.md): The block to invoke when pausing progress.

# cancellationHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block to invoke when canceling progress.

## Declaration

```objectivec
@property (copy, nullable) void (^cancellationHandler)();
```

<a id="Discussion"></a>

## Discussion

If the receiver is a suboperation of another progress object, the system invokes the [cancellationHandler](cancellationhandler.md) block when canceling the containing progress object.

<a id="Special-Considerations"></a>

### Special Considerations

You’re responsible for canceling any work for the progress object.

You can invoke the cancellation handler on any queue. If you must do work on a specific queue, dispatch to that queue from within the cancellation handler block.

## See Also

### Reporting Progress

- [totalUnitCount](totalunitcount.md): The total number of tracked units of work for the current progress.
- [completedUnitCount](completedunitcount.md): The number of completed units of work for the current job.
- [localizedDescription](localizeddescription.md): A localized description of tracked progress for the receiver.
- [localizedAdditionalDescription](localizedadditionaldescription.md): A more specific localized description of tracked progress for the receiver.
- [cancellable](iscancellable.md): A Boolean value that indicates whether the receiver is tracking work that you can cancel.
- [cancelled](iscancelled.md): A Boolean value that Indicates whether the receiver is tracking canceled work.
- [pausable](ispausable.md): A Boolean value that indicates whether the receiver is tracking work that you can pause.
- [paused](ispaused.md): A Boolean value that indicates whether the receiver is tracking paused work.
- [pausingHandler](pausinghandler.md): The block to invoke when pausing progress.
