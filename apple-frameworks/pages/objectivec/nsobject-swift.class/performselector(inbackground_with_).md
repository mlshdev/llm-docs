> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/performselector(inbackground:with:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/performselector(inbackground:with:))

# performSelector(inBackground:with:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes a method of the receiver on a new background thread.

## Declaration

```swift
func performSelector(inBackground aSelector: Selector, with arg: Any?)
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method to invoke. The method should not have a significant return value and should take a single argument of type id, or no arguments.
- `arg`: The argument to pass to the method when it is invoked. Pass `nil` if the method does not take an argument.

<a id="Discussion"></a>

## Discussion

This method creates a new thread in your application, putting your application into multithreaded mode if it was not already. The method represented by `aSelector` must set up the thread environment just as you would for any other new thread in your program. For more information about how to configure and run threads, see [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i).

## See Also

### Sending Messages

- [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [perform(\_:with:afterDelay:inModes:)](perform%28__with_afterdelay_inmodes_%29.md): Invokes a method of the receiver on the current thread using the specified modes after a delay.
- [performSelector(onMainThread:with:waitUntilDone:)](performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [performSelector(onMainThread:with:waitUntilDone:modes:)](performselector%28onmainthread_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the main thread using the specified modes.
- [perform(\_:on:with:waitUntilDone:)](perform%28__on_with_waituntildone_%29.md): Invokes a method of the receiver on the specified thread using the default mode.
- [perform(\_:on:with:waitUntilDone:modes:)](perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [cancelPreviousPerformRequests(withTarget:)](cancelpreviousperformrequests%28withtarget_%29.md): Cancels perform requests previously registered with the [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md) instance method.
- [cancelPreviousPerformRequests(withTarget:selector:object:)](cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md).

# performSelectorInBackground:withObject: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invokes a method of the receiver on a new background thread.

## Declaration

```objectivec
- (void) performSelectorInBackground:(SEL) aSelector withObject:(id) arg;
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method to invoke. The method should not have a significant return value and should take a single argument of type id, or no arguments.
- `arg`: The argument to pass to the method when it is invoked. Pass `nil` if the method does not take an argument.

<a id="Discussion"></a>

## Discussion

This method creates a new thread in your application, putting your application into multithreaded mode if it was not already. The method represented by `aSelector` must set up the thread environment just as you would for any other new thread in your program. For more information about how to configure and run threads, see [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i).

## See Also

### Sending Messages

- [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [performSelector:withObject:afterDelay:inModes:](perform%28__with_afterdelay_inmodes_%29.md): Invokes a method of the receiver on the current thread using the specified modes after a delay.
- [performSelectorOnMainThread:withObject:waitUntilDone:](performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [performSelectorOnMainThread:withObject:waitUntilDone:modes:](performselector%28onmainthread_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the main thread using the specified modes.
- [performSelector:onThread:withObject:waitUntilDone:](perform%28__on_with_waituntildone_%29.md): Invokes a method of the receiver on the specified thread using the default mode.
- [performSelector:onThread:withObject:waitUntilDone:modes:](perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [cancelPreviousPerformRequestsWithTarget:](cancelpreviousperformrequests%28withtarget_%29.md): Cancels perform requests previously registered with the [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md) instance method.
- [cancelPreviousPerformRequestsWithTarget:selector:object:](cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md).
