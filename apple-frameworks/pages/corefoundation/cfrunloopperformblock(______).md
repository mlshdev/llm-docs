> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopperformblock(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopperformblock(_:_:_:))

# CFRunLoopPerformBlock(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enqueues a block object on a given runloop to be executed as the runloop cycles in specified modes.

## Declaration

```swift
func CFRunLoopPerformBlock(_ rl: CFRunLoop!, _ mode: CFTypeRef!, _ block: (() -> Void)!)
```

## Parameters

- `rl`: A run loop.
- `mode`: A CFString that identifies a runloop mode, or a CFArray of CFStrings that each identify a runloop mode.
- `block`: The block object to execute.

  The block is copied by the function before the function returns.

<a id="Discussion"></a>

## Discussion

When the runloop runs in the specified `mode`, the block object is executed. You can use this function as a means to offload work to another thread similar to Cocoa’s [perform(\_:on:with:waitUntilDone:)](../objectivec/nsobject-swift.class/perform%28__on_with_waituntildone_%29.md) and related methods. You can also use it as an alternative to mechanisms such as putting a CFRunLoopTimer in the other thread’s run loop, or using CFMessagePort to pass information between threads.

This method enqueues the block only and does not automatically wake up the specified run loop. Therefore, execution of the block occurs the next time the run loop wakes up to handle another input source. If you want the work performed right away, you must explicitly wake up that thread using the [CFRunLoopWakeUp(\_:)](cfrunloopwakeup%28__%29.md) function.

# CFRunLoopPerformBlock (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enqueues a block object on a given runloop to be executed as the runloop cycles in specified modes.

## Declaration

```objectivec
extern void CFRunLoopPerformBlock(CFRunLoopRef rl, CFTypeRef mode, void (^block)());
```

## Parameters

- `rl`: A run loop.
- `mode`: A CFString that identifies a runloop mode, or a CFArray of CFStrings that each identify a runloop mode.
- `block`: The block object to execute.

  The block is copied by the function before the function returns.

<a id="Discussion"></a>

## Discussion

When the runloop runs in the specified `mode`, the block object is executed. You can use this function as a means to offload work to another thread similar to Cocoa’s [performSelector:onThread:withObject:waitUntilDone:](../objectivec/nsobject-swift.class/perform%28__on_with_waituntildone_%29.md) and related methods. You can also use it as an alternative to mechanisms such as putting a CFRunLoopTimer in the other thread’s run loop, or using CFMessagePort to pass information between threads.

This method enqueues the block only and does not automatically wake up the specified run loop. Therefore, execution of the block occurs the next time the run loop wakes up to handle another input source. If you want the work performed right away, you must explicitly wake up that thread using the [CFRunLoopWakeUp](cfrunloopwakeup%28__%29.md) function.
