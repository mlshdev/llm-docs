> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/cancelperformselectors(withtarget:)](https://developer.apple.com/documentation/foundation/runloop/cancelperformselectors(withtarget:))

# cancelPerformSelectors(withTarget:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels all outstanding ordered performs scheduled with a given target.

## Declaration

```swift
func cancelPerformSelectors(withTarget target: Any)
```

## Parameters

- `target`: The previously-specified target.

<a id="Discussion"></a>

## Discussion

This method cancels the previously scheduled messages associated with the target, ignoring the selector and argument of the scheduled operation. This is in contrast to [cancelPerform(\_:target:argument:)](cancelperform%28__target_argument_%29.md), which requires you to match the selector and argument as well as the target. This method removes the perform requests for the object from all modes of the run loop.

## See Also

### Scheduling and Canceling Tasks

- [perform(\_:)](perform%28__%29.md): Schedules a block that the run loop invokes.
- [perform(inModes:block:)](perform%28inmodes_block_%29.md): Schedules a block that the run loop invokes when it’s running in any of the specified modes.
- [perform(\_:target:argument:order:modes:)](perform%28__target_argument_order_modes_%29.md): Schedules the sending of a message on the receiver.
- [cancelPerform(\_:target:argument:)](cancelperform%28__target_argument_%29.md): Cancels the sending of a previously scheduled message.

# cancelPerformSelectorsWithTarget: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels all outstanding ordered performs scheduled with a given target.

## Declaration

```objectivec
- (void) cancelPerformSelectorsWithTarget:(id) target;
```

## Parameters

- `target`: The previously-specified target.

<a id="Discussion"></a>

## Discussion

This method cancels the previously scheduled messages associated with the target, ignoring the selector and argument of the scheduled operation. This is in contrast to [cancelPerformSelector:target:argument:](cancelperform%28__target_argument_%29.md), which requires you to match the selector and argument as well as the target. This method removes the perform requests for the object from all modes of the run loop.

## See Also

### Scheduling and Canceling Tasks

- [performBlock:](perform%28__%29.md): Schedules a block that the run loop invokes.
- [performInModes:block:](perform%28inmodes_block_%29.md): Schedules a block that the run loop invokes when it’s running in any of the specified modes.
- [performSelector:target:argument:order:modes:](perform%28__target_argument_order_modes_%29.md): Schedules the sending of a message on the receiver.
- [cancelPerformSelector:target:argument:](cancelperform%28__target_argument_%29.md): Cancels the sending of a previously scheduled message.
