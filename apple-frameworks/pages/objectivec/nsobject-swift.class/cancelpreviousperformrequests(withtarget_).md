> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/cancelpreviousperformrequests(withtarget:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/cancelpreviousperformrequests(withtarget:))

# cancelPreviousPerformRequests(withTarget:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Cancels perform requests previously registered with the [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md) instance method.

## Declaration

```swift
class func cancelPreviousPerformRequests(withTarget aTarget: Any)
```

## Parameters

- `aTarget`: The target for requests previously registered with the [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md) instance method.

<a id="Discussion"></a>

## Discussion

All perform requests having the same target `aTarget` are canceled. This method removes perform requests only in the current run loop, not all run loops.

## See Also

### Sending Messages

- [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [perform(\_:with:afterDelay:inModes:)](perform%28__with_afterdelay_inmodes_%29.md): Invokes a method of the receiver on the current thread using the specified modes after a delay.
- [performSelector(onMainThread:with:waitUntilDone:)](performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [performSelector(onMainThread:with:waitUntilDone:modes:)](performselector%28onmainthread_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the main thread using the specified modes.
- [perform(\_:on:with:waitUntilDone:)](perform%28__on_with_waituntildone_%29.md): Invokes a method of the receiver on the specified thread using the default mode.
- [perform(\_:on:with:waitUntilDone:modes:)](perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [performSelector(inBackground:with:)](performselector%28inbackground_with_%29.md): Invokes a method of the receiver on a new background thread.
- [cancelPreviousPerformRequests(withTarget:selector:object:)](cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [perform(\_:with:afterDelay:)](perform%28__with_afterdelay_%29.md).

# cancelPreviousPerformRequestsWithTarget: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Cancels perform requests previously registered with the [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md) instance method.

## Declaration

```objectivec
+ (void) cancelPreviousPerformRequestsWithTarget:(id) aTarget;
```

## Parameters

- `aTarget`: The target for requests previously registered with the [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md) instance method.

<a id="Discussion"></a>

## Discussion

All perform requests having the same target `aTarget` are canceled. This method removes perform requests only in the current run loop, not all run loops.

## See Also

### Sending Messages

- [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md): Invokes a method of the receiver on the current thread using the default mode after a delay.
- [performSelector:withObject:afterDelay:inModes:](perform%28__with_afterdelay_inmodes_%29.md): Invokes a method of the receiver on the current thread using the specified modes after a delay.
- [performSelectorOnMainThread:withObject:waitUntilDone:](performselector%28onmainthread_with_waituntildone_%29.md): Invokes a method of the receiver on the main thread using the default mode.
- [performSelectorOnMainThread:withObject:waitUntilDone:modes:](performselector%28onmainthread_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the main thread using the specified modes.
- [performSelector:onThread:withObject:waitUntilDone:](perform%28__on_with_waituntildone_%29.md): Invokes a method of the receiver on the specified thread using the default mode.
- [performSelector:onThread:withObject:waitUntilDone:modes:](perform%28__on_with_waituntildone_modes_%29.md): Invokes a method of the receiver on the specified thread using the specified modes.
- [performSelectorInBackground:withObject:](performselector%28inbackground_with_%29.md): Invokes a method of the receiver on a new background thread.
- [cancelPreviousPerformRequestsWithTarget:selector:object:](cancelpreviousperformrequests%28withtarget_selector_object_%29.md): Cancels perform requests previously registered with [performSelector:withObject:afterDelay:](perform%28__with_afterdelay_%29.md).
