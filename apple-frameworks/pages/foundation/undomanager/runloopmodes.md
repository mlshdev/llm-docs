> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/runloopmodes](https://developer.apple.com/documentation/foundation/undomanager/runloopmodes)

# runLoopModes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The modes governing the types of input to handle during a cycle of the run loop.

## Declaration

```swift
var runLoopModes: [RunLoop.Mode] { get set }
```

<a id="Discussion"></a>

## Discussion

An array of string constants specifying the current run-loop modes.

By default, the sole run-loop mode is `NSDefaultRunLoopMode` (which excludes data from `NSConnection` objects). Some examples of other uses are to limit the input to data received during a mouse-tracking session by setting the mode to `NSEventTrackingRunLoopMode`, or limit it to data received from a modal panel with `NSModalPanelRunLoopMode`.

## See Also

### Related Documentation

- [perform(\_:target:argument:order:modes:)](../runloop/perform%28__target_argument_order_modes_%29.md): Schedules the sending of a message on the receiver.

### Working with run loops

- [NSUndoCloseGroupingRunLoopOrdering](../nsundoclosegroupingrunloopordering.md): A priority to use when using a run loop to close an undo group.

# runLoopModes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The modes governing the types of input to handle during a cycle of the run loop.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * runLoopModes;
```

<a id="Discussion"></a>

## Discussion

An array of string constants specifying the current run-loop modes.

By default, the sole run-loop mode is `NSDefaultRunLoopMode` (which excludes data from `NSConnection` objects). Some examples of other uses are to limit the input to data received during a mouse-tracking session by setting the mode to `NSEventTrackingRunLoopMode`, or limit it to data received from a modal panel with `NSModalPanelRunLoopMode`.

## See Also

### Related Documentation

- [performSelector:target:argument:order:modes:](../runloop/perform%28__target_argument_order_modes_%29.md): Schedules the sending of a message on the receiver.

### Working with run loops

- [NSUndoCloseGroupingRunLoopOrdering](../nsundoclosegroupingrunloopordering.md): A priority to use when using a run loop to close an undo group.
