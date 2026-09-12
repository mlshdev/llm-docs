> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/performselector(onmainthread:with:waituntildone:modes:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/performselector(onmainthread:with:waituntildone:modes:))

# performSelector(onMainThread:with:waitUntilDone:modes:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invokes a method of the receiver on the main thread using the specified modes.

## Declaration

```swift
func performSelector(onMainThread aSelector: Selector, with arg: Any?, waitUntilDone wait: Bool, modes array: [String]?)
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method to invoke. The method should not have a significant return value and should take a single argument of type id, or no arguments.
- `arg`: The argument to pass to the method when it is invoked. Pass `nil` if the method does not take an argument.
- `wait`: A Boolean that specifies whether the current thread blocks until after the specified selector is performed on the receiver on the main thread. Specify [YES](../yes.md) to block this thread; otherwise, specify [NO](../no.md) to have this method return immediately.

  If the current thread is also the main thread, and you pass [YES](../yes.md), the message is performed immediately, otherwise the perform is queued to run the next time through the run loop.
- `array`: An array of strings that identifies the modes in which it is permissible to perform the specified selector. This array must contain at least one string. If you specify `nil` or an empty array for this parameter, this method returns without performing the specified selector. For information about run loop modes, see [Run Loops](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/RunLoopManagement/RunLoopManagement.html#//apple_ref/doc/uid/10000057i-CH16) in [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i).

<a id="Discussion"></a>

## Discussion

You can use this method to deliver messages to the main thread of your application. The main thread encompasses the application’s main run loop, and is where the `NSApplication` object receives events. The message in this case is a method of the current object that you want to execute on the thread.

This method queues the message on the run loop of the main thread using the run loop modes specified in the `array` parameter. As part of its normal run loop processing, the main thread dequeues the message (assuming it is running in one of the specified modes) and invokes the desired method. Multiple calls to this method from the same thread cause the corresponding selectors to be queued and performed in the same same order in which the calls were made, assuming the associated run loop modes for each selector are the same. If you specify different modes for each selector, any selectors whose associated mode does not match the current run loop mode are skipped until the run loop subsequently executes in that mode.

You cannot cancel messages queued using this method. If you want the option of canceling a message on the current thread, you must use either the [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md) or [perform(\_:with:afterDelay:inModes:)](perform%28__with_afterdelay_inmodes_%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

This method registers with the runloop of its current context, and depends on that runloop being run on a regular basis to perform correctly. One common context where you might call this method and end up registering with a runloop that is not automatically run on a regular basis is when being invoked by a dispatch queue. If you need this type of functionality when running on a dispatch queue, you should use [dispatch_after](../../dispatch/dispatch_after.md) and related methods to get the behavior you want.

## See Also

### Sending Messages

- [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [perform(\_:with:afterDelay:inModes:)](perform%28__with_afterdelay_inmodes_%29.md): Invokes a method of the receiver on the current thread using the specified modes after a delay.
- [performSelector(onMainThread:with:waitUntilDone:)](performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [perform(\_:on:with:waitUntilDone:)](perform%28__on_with_waituntildone_%29.md): Invokes a method of the receiver on the specified thread using the default mode.
- [perform(\_:on:with:waitUntilDone:modes:)](perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [performSelector(inBackground:with:)](performselector%28inbackground_with_%29.md): Invokes a method of the receiver on a new background thread.
- [cancelPreviousPerformRequests(withTarget:)](cancelpreviousperformrequests%28withtarget_%29.md): Cancels perform requests previously registered with the [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md) instance method.
- [cancelPreviousPerformRequests(withTarget:selector:object:)](cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md).

# performSelectorOnMainThread:withObject:waitUntilDone:modes: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Invokes a method of the receiver on the main thread using the specified modes.

## Declaration

```objectivec
- (void) performSelectorOnMainThread:(SEL) aSelector withObject:(id) arg waitUntilDone:(BOOL) wait modes:(NSArray<NSString *> *) array;
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method to invoke. The method should not have a significant return value and should take a single argument of type id, or no arguments.
- `arg`: The argument to pass to the method when it is invoked. Pass `nil` if the method does not take an argument.
- `wait`: A Boolean that specifies whether the current thread blocks until after the specified selector is performed on the receiver on the main thread. Specify [YES](../yes.md) to block this thread; otherwise, specify [NO](../no.md) to have this method return immediately.

  If the current thread is also the main thread, and you pass [YES](../yes.md), the message is performed immediately, otherwise the perform is queued to run the next time through the run loop.
- `array`: An array of strings that identifies the modes in which it is permissible to perform the specified selector. This array must contain at least one string. If you specify `nil` or an empty array for this parameter, this method returns without performing the specified selector. For information about run loop modes, see [Run Loops](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/RunLoopManagement/RunLoopManagement.html#//apple_ref/doc/uid/10000057i-CH16) in [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i).

<a id="Discussion"></a>

## Discussion

You can use this method to deliver messages to the main thread of your application. The main thread encompasses the application’s main run loop, and is where the `NSApplication` object receives events. The message in this case is a method of the current object that you want to execute on the thread.

This method queues the message on the run loop of the main thread using the run loop modes specified in the `array` parameter. As part of its normal run loop processing, the main thread dequeues the message (assuming it is running in one of the specified modes) and invokes the desired method. Multiple calls to this method from the same thread cause the corresponding selectors to be queued and performed in the same same order in which the calls were made, assuming the associated run loop modes for each selector are the same. If you specify different modes for each selector, any selectors whose associated mode does not match the current run loop mode are skipped until the run loop subsequently executes in that mode.

You cannot cancel messages queued using this method. If you want the option of canceling a message on the current thread, you must use either the [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md) or [performSelector:withObject:afterDelay:inModes:](perform%28__with_afterdelay_inmodes_%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

This method registers with the runloop of its current context, and depends on that runloop being run on a regular basis to perform correctly. One common context where you might call this method and end up registering with a runloop that is not automatically run on a regular basis is when being invoked by a dispatch queue. If you need this type of functionality when running on a dispatch queue, you should use [dispatch_after](../../dispatch/dispatch_after.md) and related methods to get the behavior you want.

## See Also

### Sending Messages

- [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [performSelector:withObject:afterDelay:inModes:](perform%28__with_afterdelay_inmodes_%29.md): Invokes a method of the receiver on the current thread using the specified modes after a delay.
- [performSelectorOnMainThread:withObject:waitUntilDone:](performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [performSelector:onThread:withObject:waitUntilDone:](perform%28__on_with_waituntildone_%29.md): Invokes a method of the receiver on the specified thread using the default mode.
- [performSelector:onThread:withObject:waitUntilDone:modes:](perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [performSelectorInBackground:withObject:](performselector%28inbackground_with_%29.md): Invokes a method of the receiver on a new background thread.
- [cancelPreviousPerformRequestsWithTarget:](cancelpreviousperformrequests%28withtarget_%29.md): Cancels perform requests previously registered with the [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md) instance method.
- [cancelPreviousPerformRequestsWithTarget:selector:object:](cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md).
