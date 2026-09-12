> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsundoclosegroupingrunloopordering](https://developer.apple.com/documentation/foundation/nsundoclosegroupingrunloopordering)

# NSUndoCloseGroupingRunLoopOrdering (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A priority to use when using a run loop to close an undo group.

## Declaration

```swift
var NSUndoCloseGroupingRunLoopOrdering: Int { get }
```

<a id="Discussion"></a>

## Discussion

Use this value as the `order` parameter if you call [perform(\_:target:argument:order:modes:)](runloop/perform%28__target_argument_order_modes_%29.md) to have a [RunLoop](runloop.md) perform a selector that closes an undo group.

## See Also

### Working with run loops

- [runLoopModes](undomanager/runloopmodes.md): The modes governing the types of input to handle during a cycle of the run loop.

# NSUndoCloseGroupingRunLoopOrdering (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A priority to use when using a run loop to close an undo group.

## Declaration

```objectivec
static const NSUInteger NSUndoCloseGroupingRunLoopOrdering;
```

<a id="Discussion"></a>

## Discussion

Use this value as the `order` parameter if you call [performSelector:target:argument:order:modes:](runloop/perform%28__target_argument_order_modes_%29.md) to have a [NSRunLoop](runloop.md) perform a selector that closes an undo group.

## See Also

### Working with run loops

- [runLoopModes](undomanager/runloopmodes.md): The modes governing the types of input to handle during a cycle of the run loop.
