> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/cancelperform(_:target:argument:)](https://developer.apple.com/documentation/foundation/runloop/cancelperform(_:target:argument:))

# cancelPerform(\_:target:argument:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels the sending of a previously scheduled message.

## Declaration

```swift
func cancelPerform(_ aSelector: Selector, target: Any, argument arg: Any?)
```

## Parameters

- `aSelector`: The previously-specified selector.
- `target`: The previously-specified target.
- `arg`: The previously-specified argument.

<a id="Discussion"></a>

## Discussion

You can use this method to cancel a message previously scheduled using the [perform(\_:target:argument:order:modes:)](perform%28__target_argument_order_modes_%29.md) method. The parameters identify the message you want to cancel and must match those originally specified when the selector was scheduled. This method removes the perform request from all modes of the run loop.

## See Also

### Scheduling and Canceling Tasks

- [perform(\_:)](perform%28__%29.md): Schedules a block that the run loop invokes.
- [perform(inModes:block:)](perform%28inmodes_block_%29.md): Schedules a block that the run loop invokes when it’s running in any of the specified modes.
- [perform(\_:target:argument:order:modes:)](perform%28__target_argument_order_modes_%29.md): Schedules the sending of a message on the receiver.
- [cancelPerformSelectors(withTarget:)](cancelperformselectors%28withtarget_%29.md): Cancels all outstanding ordered performs scheduled with a given target.

# cancelPerformSelector:target:argument: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels the sending of a previously scheduled message.

## Declaration

```objectivec
- (void) cancelPerformSelector:(SEL) aSelector target:(id) target argument:(id) arg;
```

## Parameters

- `aSelector`: The previously-specified selector.
- `target`: The previously-specified target.
- `arg`: The previously-specified argument.

<a id="Discussion"></a>

## Discussion

You can use this method to cancel a message previously scheduled using the [performSelector:target:argument:order:modes:](perform%28__target_argument_order_modes_%29.md) method. The parameters identify the message you want to cancel and must match those originally specified when the selector was scheduled. This method removes the perform request from all modes of the run loop.

## See Also

### Scheduling and Canceling Tasks

- [performBlock:](perform%28__%29.md): Schedules a block that the run loop invokes.
- [performInModes:block:](perform%28inmodes_block_%29.md): Schedules a block that the run loop invokes when it’s running in any of the specified modes.
- [performSelector:target:argument:order:modes:](perform%28__target_argument_order_modes_%29.md): Schedules the sending of a message on the receiver.
- [cancelPerformSelectorsWithTarget:](cancelperformselectors%28withtarget_%29.md): Cancels all outstanding ordered performs scheduled with a given target.
