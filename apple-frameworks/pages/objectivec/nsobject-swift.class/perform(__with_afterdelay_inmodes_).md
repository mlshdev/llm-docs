> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/perform(_:with:afterdelay:inmodes:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/perform(_:with:afterdelay:inmodes:))

# perform(\_:with:afterDelay:inModes:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invokes a method of the receiver on the current thread using the specified modes after a delay.

## Declaration

```swift
func perform(_ aSelector: Selector, with anArgument: Any?, afterDelay delay: TimeInterval, inModes modes: [RunLoop.Mode])
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method to invoke. The method should not have a significant return value and should take a single argument of type id, or no arguments.
- `anArgument`: The argument to pass to the method when it is invoked. Pass `nil` if the method does not take an argument.
- `delay`: The minimum time before which the message is sent. Specifying a delay of 0 does not necessarily cause the selector to be performed immediately. The selector is still queued on the thread’s run loop and performed as soon as possible.
- `modes`: An array of strings that identify the modes to associate with the timer that performs the selector. This array must contain at least one string. If you specify `nil` or an empty array for this parameter, this method returns without performing the specified selector. For information about run loop modes, see [Run Loops](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/RunLoopManagement/RunLoopManagement.html#//apple_ref/doc/uid/10000057i-CH16) in [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i).

<a id="Discussion"></a>

## Discussion

This method sets up a timer to perform the `aSelector` message on the current thread’s run loop. The timer is configured to run in the modes specified by the `modes` parameter. When the timer fires, the thread attempts to dequeue the message from the run loop and perform the selector. It succeeds if the run loop is running and in one of the specified modes; otherwise, the timer waits until the run loop is in one of those modes.

If you want the message to be dequeued when the run loop is in a mode other than the default mode, use the [perform(\_:with:afterDelay:inModes:)](perform%28__with_afterdelay_inmodes_%29.md) method instead. If you are not sure whether the current thread is the main thread, you can use the [performSelector(onMainThread:with:waitUntilDone:)](performselector%28onmainthread_with_waituntildone_%29.md) or [performSelector(onMainThread:with:waitUntilDone:modes:)](performselector%28onmainthread_with_waituntildone_modes_%29.md) method to guarantee that your selector executes on the main thread. To cancel a queued message, use the [cancelPreviousPerformRequests(withTarget:)](cancelpreviousperformrequests%28withtarget_%29.md) or [cancelPreviousPerformRequests(withTarget:selector:object:)](cancelpreviousperformrequests%28withtarget_selector_object_%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

This method registers with the runloop of its current context, and depends on that runloop being run on a regular basis to perform correctly. One common context where you might call this method and end up registering with a runloop that is not automatically run on a regular basis is when being invoked by a dispatch queue. If you need this type of functionality when running on a dispatch queue, you should use [dispatch_after](../../dispatch/dispatch_after.md) and related methods to get the behavior you want.

## See Also

### Related Documentation

- [invalidate()](../../foundation/timer/invalidate%28%29.md): Stops the timer from ever firing again and requests its removal from its run loop.
- [add(\_:forMode:)](../../foundation/runloop/add%28__formode_%29-392ag.md): Registers a given timer with a given input mode.

### Sending Messages

- [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [performSelector(onMainThread:with:waitUntilDone:)](performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [performSelector(onMainThread:with:waitUntilDone:modes:)](performselector%28onmainthread_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the main thread using the specified modes.
- [perform(\_:on:with:waitUntilDone:)](perform%28__on_with_waituntildone_%29.md): Invokes a method of the receiver on the specified thread using the default mode.
- [perform(\_:on:with:waitUntilDone:modes:)](perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [performSelector(inBackground:with:)](performselector%28inbackground_with_%29.md): Invokes a method of the receiver on a new background thread.
- [cancelPreviousPerformRequests(withTarget:)](cancelpreviousperformrequests%28withtarget_%29.md): Cancels perform requests previously registered with the [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md) instance method.
- [cancelPreviousPerformRequests(withTarget:selector:object:)](cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md).

# performSelector:withObject:afterDelay:inModes: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invokes a method of the receiver on the current thread using the specified modes after a delay.

## Declaration

```objectivec
- (void) performSelector:(SEL) aSelector withObject:(id) anArgument afterDelay:(NSTimeInterval) delay inModes:(NSArray<NSString *> *) modes;
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method to invoke. The method should not have a significant return value and should take a single argument of type id, or no arguments.
- `anArgument`: The argument to pass to the method when it is invoked. Pass `nil` if the method does not take an argument.
- `delay`: The minimum time before which the message is sent. Specifying a delay of 0 does not necessarily cause the selector to be performed immediately. The selector is still queued on the thread’s run loop and performed as soon as possible.
- `modes`: An array of strings that identify the modes to associate with the timer that performs the selector. This array must contain at least one string. If you specify `nil` or an empty array for this parameter, this method returns without performing the specified selector. For information about run loop modes, see [Run Loops](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/RunLoopManagement/RunLoopManagement.html#//apple_ref/doc/uid/10000057i-CH16) in [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i).

<a id="Discussion"></a>

## Discussion

This method sets up a timer to perform the `aSelector` message on the current thread’s run loop. The timer is configured to run in the modes specified by the `modes` parameter. When the timer fires, the thread attempts to dequeue the message from the run loop and perform the selector. It succeeds if the run loop is running and in one of the specified modes; otherwise, the timer waits until the run loop is in one of those modes.

If you want the message to be dequeued when the run loop is in a mode other than the default mode, use the [performSelector:withObject:afterDelay:inModes:](perform%28__with_afterdelay_inmodes_%29.md) method instead. If you are not sure whether the current thread is the main thread, you can use the [performSelectorOnMainThread:withObject:waitUntilDone:](performselector%28onmainthread_with_waituntildone_%29.md) or [performSelectorOnMainThread:withObject:waitUntilDone:modes:](performselector%28onmainthread_with_waituntildone_modes_%29.md) method to guarantee that your selector executes on the main thread. To cancel a queued message, use the [cancelPreviousPerformRequestsWithTarget:](cancelpreviousperformrequests%28withtarget_%29.md) or [cancelPreviousPerformRequestsWithTarget:selector:object:](cancelpreviousperformrequests%28withtarget_selector_object_%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

This method registers with the runloop of its current context, and depends on that runloop being run on a regular basis to perform correctly. One common context where you might call this method and end up registering with a runloop that is not automatically run on a regular basis is when being invoked by a dispatch queue. If you need this type of functionality when running on a dispatch queue, you should use [dispatch_after](../../dispatch/dispatch_after.md) and related methods to get the behavior you want.

## See Also

### Related Documentation

- [invalidate](../../foundation/timer/invalidate%28%29.md): Stops the timer from ever firing again and requests its removal from its run loop.
- [addTimer:forMode:](../../foundation/runloop/add%28__formode_%29-392ag.md): Registers a given timer with a given input mode.

### Sending Messages

- [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [performSelectorOnMainThread:withObject:waitUntilDone:](performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [performSelectorOnMainThread:withObject:waitUntilDone:modes:](performselector%28onmainthread_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the main thread using the specified modes.
- [performSelector:onThread:withObject:waitUntilDone:](perform%28__on_with_waituntildone_%29.md): Invokes a method of the receiver on the specified thread using the default mode.
- [performSelector:onThread:withObject:waitUntilDone:modes:](perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [performSelectorInBackground:withObject:](performselector%28inbackground_with_%29.md): Invokes a method of the receiver on a new background thread.
- [cancelPreviousPerformRequestsWithTarget:](cancelpreviousperformrequests%28withtarget_%29.md): Cancels perform requests previously registered with the [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md) instance method.
- [cancelPreviousPerformRequestsWithTarget:selector:object:](cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md).
