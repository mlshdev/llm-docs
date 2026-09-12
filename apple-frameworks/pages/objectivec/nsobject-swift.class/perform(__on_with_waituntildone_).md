> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/perform(_:on:with:waituntildone:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/perform(_:on:with:waituntildone:))

# perform(\_:on:with:waitUntilDone:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes a method of the receiver on the specified thread using the default mode.

## Declaration

```swift
func perform(_ aSelector: Selector, on thr: Thread, with arg: Any?, waitUntilDone wait: Bool)
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method to invoke. The method should not have a significant return value and should take a single argument of type id, or no arguments.
- `thr`: The thread on which to execute `aSelector`.
- `arg`: The argument to pass to the method when it is invoked. Pass `nil` if the method does not take an argument.
- `wait`: A Boolean that specifies whether the current thread blocks until after the specified selector is performed on the receiver on the specified thread. Specify [YES](../yes.md) to block this thread; otherwise, specify [NO](../no.md) to have this method return immediately.

  If the current thread and target thread are the same, and you specify [YES](../yes.md) for this parameter, the selector is performed immediately on the current thread. If you specify [NO](../no.md), this method queues the message on the thread’s run loop and returns, just like it does for other threads. The current thread must then dequeue and process the message when it has an opportunity to do so.

<a id="Discussion"></a>

## Discussion

You can use this method to deliver messages to other threads in your application. The message in this case is a method of the current object that you want to execute on the target thread.

This method queues the message on the run loop of the target thread using the default run loop modes—that is, the modes associated with the [common](../../foundation/runloop/mode/common.md) constant. As part of its normal run loop processing, the target thread dequeues the message (assuming it is running in one of the default run loop modes) and invokes the desired method.

You cannot cancel messages queued using this method. If you want the option of canceling a message on the current thread, you must use either the [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md) or [perform(\_:with:afterDelay:inModes:)](perform%28__with_afterdelay_inmodes_%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

This method registers with the runloop of its current context, and depends on that runloop being run on a regular basis to perform correctly. One common context where you might call this method and end up registering with a runloop that is not automatically run on a regular basis is when being invoked by a dispatch queue. If you need this type of functionality when running on a dispatch queue, you should use [dispatch_after](../../dispatch/dispatch_after.md) and related methods to get the behavior you want.

## See Also

### Sending Messages

- [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [perform(\_:with:afterDelay:inModes:)](perform%28__with_afterdelay_inmodes_%29.md): Invokes a method of the receiver on the current thread using the specified modes after a delay.
- [performSelector(onMainThread:with:waitUntilDone:)](performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [performSelector(onMainThread:with:waitUntilDone:modes:)](performselector%28onmainthread_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the main thread using the specified modes.
- [perform(\_:on:with:waitUntilDone:modes:)](perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [performSelector(inBackground:with:)](performselector%28inbackground_with_%29.md): Invokes a method of the receiver on a new background thread.
- [cancelPreviousPerformRequests(withTarget:)](cancelpreviousperformrequests%28withtarget_%29.md): Cancels perform requests previously registered with the [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md) instance method.
- [cancelPreviousPerformRequests(withTarget:selector:object:)](cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md).

# performSelector:onThread:withObject:waitUntilDone: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes a method of the receiver on the specified thread using the default mode.

## Declaration

```objectivec
- (void) performSelector:(SEL) aSelector onThread:(NSThread *) thr withObject:(id) arg waitUntilDone:(BOOL) wait;
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method to invoke. The method should not have a significant return value and should take a single argument of type id, or no arguments.
- `thr`: The thread on which to execute `aSelector`.
- `arg`: The argument to pass to the method when it is invoked. Pass `nil` if the method does not take an argument.
- `wait`: A Boolean that specifies whether the current thread blocks until after the specified selector is performed on the receiver on the specified thread. Specify [YES](../yes.md) to block this thread; otherwise, specify [NO](../no.md) to have this method return immediately.

  If the current thread and target thread are the same, and you specify [YES](../yes.md) for this parameter, the selector is performed immediately on the current thread. If you specify [NO](../no.md), this method queues the message on the thread’s run loop and returns, just like it does for other threads. The current thread must then dequeue and process the message when it has an opportunity to do so.

<a id="Discussion"></a>

## Discussion

You can use this method to deliver messages to other threads in your application. The message in this case is a method of the current object that you want to execute on the target thread.

This method queues the message on the run loop of the target thread using the default run loop modes—that is, the modes associated with the [NSRunLoopCommonModes](../../foundation/runloop/mode/common.md) constant. As part of its normal run loop processing, the target thread dequeues the message (assuming it is running in one of the default run loop modes) and invokes the desired method.

You cannot cancel messages queued using this method. If you want the option of canceling a message on the current thread, you must use either the [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md) or [performSelector:withObject:afterDelay:inModes:](perform%28__with_afterdelay_inmodes_%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

This method registers with the runloop of its current context, and depends on that runloop being run on a regular basis to perform correctly. One common context where you might call this method and end up registering with a runloop that is not automatically run on a regular basis is when being invoked by a dispatch queue. If you need this type of functionality when running on a dispatch queue, you should use [dispatch_after](../../dispatch/dispatch_after.md) and related methods to get the behavior you want.

## See Also

### Sending Messages

- [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [performSelector:withObject:afterDelay:inModes:](perform%28__with_afterdelay_inmodes_%29.md): Invokes a method of the receiver on the current thread using the specified modes after a delay.
- [performSelectorOnMainThread:withObject:waitUntilDone:](performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [performSelectorOnMainThread:withObject:waitUntilDone:modes:](performselector%28onmainthread_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the main thread using the specified modes.
- [performSelector:onThread:withObject:waitUntilDone:modes:](perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [performSelectorInBackground:withObject:](performselector%28inbackground_with_%29.md): Invokes a method of the receiver on a new background thread.
- [cancelPreviousPerformRequestsWithTarget:](cancelpreviousperformrequests%28withtarget_%29.md): Cancels perform requests previously registered with the [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md) instance method.
- [cancelPreviousPerformRequestsWithTarget:selector:object:](cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md).
