> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/perform(inmodes:block:)](https://developer.apple.com/documentation/foundation/runloop/perform(inmodes:block:))

# perform(inModes:block:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Schedules a block that the run loop invokes when it’s running in any of the specified modes.

## Declaration

```swift
func perform(inModes modes: [RunLoop.Mode], block: @escaping @Sendable () -> Void)
```

## Parameters

- `modes`: An array of modes in which the run loop invokes the block.
- `block`: The block that the run loop invokes.

## See Also

### Scheduling and Canceling Tasks

- [perform(\_:)](perform%28__%29.md): Schedules a block that the run loop invokes.
- [perform(\_:target:argument:order:modes:)](perform%28__target_argument_order_modes_%29.md): Schedules the sending of a message on the receiver.
- [cancelPerform(\_:target:argument:)](cancelperform%28__target_argument_%29.md): Cancels the sending of a previously scheduled message.
- [cancelPerformSelectors(withTarget:)](cancelperformselectors%28withtarget_%29.md): Cancels all outstanding ordered performs scheduled with a given target.

# performInModes:block: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Schedules a block that the run loop invokes when it’s running in any of the specified modes.

## Declaration

```objectivec
- (void) performInModes:(NSArray<NSString *> *) modes block:(void (^)()) block;
```

## Parameters

- `modes`: An array of modes in which the run loop invokes the block.
- `block`: The block that the run loop invokes.

## See Also

### Scheduling and Canceling Tasks

- [performBlock:](perform%28__%29.md): Schedules a block that the run loop invokes.
- [performSelector:target:argument:order:modes:](perform%28__target_argument_order_modes_%29.md): Schedules the sending of a message on the receiver.
- [cancelPerformSelector:target:argument:](cancelperform%28__target_argument_%29.md): Cancels the sending of a previously scheduled message.
- [cancelPerformSelectorsWithTarget:](cancelperformselectors%28withtarget_%29.md): Cancels all outstanding ordered performs scheduled with a given target.
