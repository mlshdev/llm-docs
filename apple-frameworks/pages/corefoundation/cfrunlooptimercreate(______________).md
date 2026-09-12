> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooptimercreate(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunlooptimercreate(_:_:_:_:_:_:_:))

# CFRunLoopTimerCreate(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new CFRunLoopTimer object with a function callback.

## Declaration

```swift
func CFRunLoopTimerCreate(_ allocator: CFAllocator!, _ fireDate: CFAbsoluteTime, _ interval: CFTimeInterval, _ flags: CFOptionFlags, _ order: CFIndex, _ callout: CFRunLoopTimerCallBack!, _ context: UnsafeMutablePointer<CFRunLoopTimerContext>!) -> CFRunLoopTimer!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `fireDate`: The time at which the timer should first fire. The fine precision (sub-millisecond at most) of the fire date may be adjusted slightly by the timer if there are implementation reasons to do so.
- `interval`: The firing interval of the timer. If `0` or negative, the timer fires once and then is automatically invalidated. The fine precision (sub-millisecond at most) of the interval may be adjusted slightly by the timer if implementation reasons to do so exist.
- `flags`: Currently ignored. Pass `0` for future compatibility.
- `order`: A priority index indicating the order in which run loop timers are processed. Run loop timers currently ignore this parameter. Pass `0`.
- `callout`: The callback function that is called when the timer fires.
- `context`: A structure holding contextual information for the run loop timer. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call. Can be `NULL` if the callback function does not need the context’s `info` pointer to keep track of state.

<a id="return-value"></a>

## Return Value

The new CFRunLoopTimer object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

A timer needs to be added to a run loop mode before it will fire. To add the timer to a run loop, use [CFRunLoopAddTimer(\_:\_:\_:)](cfrunloopaddtimer%28______%29.md). A timer can be registered to only one run loop at a time, although it can be in multiple modes within that run loop.

## See Also

### CFRunLoopTimer Miscellaneous Functions

- [CFRunLoopTimerCreateWithHandler(\_:\_:\_:\_:\_:\_:)](cfrunlooptimercreatewithhandler%28____________%29.md): Creates a new CFRunLoopTimer object with a block-based handler.
- [CFRunLoopTimerDoesRepeat(\_:)](cfrunlooptimerdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object repeats.
- [CFRunLoopTimerGetContext(\_:\_:)](cfrunlooptimergetcontext%28____%29.md): Returns the context information for a CFRunLoopTimer object.
- [CFRunLoopTimerGetInterval(\_:)](cfrunlooptimergetinterval%28__%29.md): Returns the firing interval of a repeating CFRunLoopTimer object.
- [CFRunLoopTimerGetNextFireDate(\_:)](cfrunlooptimergetnextfiredate%28__%29.md): Returns the next firing time for a CFRunLoopTimer object.
- [CFRunLoopTimerGetOrder(\_:)](cfrunlooptimergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopTimer object.
- [CFRunLoopTimerGetTypeID()](cfrunlooptimergettypeid%28%29.md): Returns the type identifier of the CFRunLoopTimer opaque type.
- [CFRunLoopTimerInvalidate(\_:)](cfrunlooptimerinvalidate%28__%29.md): Invalidates a CFRunLoopTimer object, stopping it from ever firing again.
- [CFRunLoopTimerIsValid(\_:)](cfrunlooptimerisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object is valid and able to fire.
- [CFRunLoopTimerSetNextFireDate(\_:\_:)](cfrunlooptimersetnextfiredate%28____%29.md): Sets the next firing date for a CFRunLoopTimer object .

# CFRunLoopTimerCreate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new CFRunLoopTimer object with a function callback.

## Declaration

```objectivec
extern CFRunLoopTimerRefCFRunLoopTimerCreate(CFAllocatorRef allocator, CFAbsoluteTime fireDate, CFTimeInterval interval, CFOptionFlags flags, CFIndex order, CFRunLoopTimerCallBack callout, CFRunLoopTimerContext *context);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `fireDate`: The time at which the timer should first fire. The fine precision (sub-millisecond at most) of the fire date may be adjusted slightly by the timer if there are implementation reasons to do so.
- `interval`: The firing interval of the timer. If `0` or negative, the timer fires once and then is automatically invalidated. The fine precision (sub-millisecond at most) of the interval may be adjusted slightly by the timer if implementation reasons to do so exist.
- `flags`: Currently ignored. Pass `0` for future compatibility.
- `order`: A priority index indicating the order in which run loop timers are processed. Run loop timers currently ignore this parameter. Pass `0`.
- `callout`: The callback function that is called when the timer fires.
- `context`: A structure holding contextual information for the run loop timer. The function copies the information out of the structure, so the memory pointed to by `context` does not need to persist beyond the function call. Can be `NULL` if the callback function does not need the context’s `info` pointer to keep track of state.

<a id="return-value"></a>

## Return Value

The new CFRunLoopTimer object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

A timer needs to be added to a run loop mode before it will fire. To add the timer to a run loop, use [CFRunLoopAddTimer](cfrunloopaddtimer%28______%29.md). A timer can be registered to only one run loop at a time, although it can be in multiple modes within that run loop.

## See Also

### CFRunLoopTimer Miscellaneous Functions

- [CFRunLoopTimerCreateWithHandler](cfrunlooptimercreatewithhandler%28____________%29.md): Creates a new CFRunLoopTimer object with a block-based handler.
- [CFRunLoopTimerDoesRepeat](cfrunlooptimerdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object repeats.
- [CFRunLoopTimerGetContext](cfrunlooptimergetcontext%28____%29.md): Returns the context information for a CFRunLoopTimer object.
- [CFRunLoopTimerGetInterval](cfrunlooptimergetinterval%28__%29.md): Returns the firing interval of a repeating CFRunLoopTimer object.
- [CFRunLoopTimerGetNextFireDate](cfrunlooptimergetnextfiredate%28__%29.md): Returns the next firing time for a CFRunLoopTimer object.
- [CFRunLoopTimerGetOrder](cfrunlooptimergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopTimer object.
- [CFRunLoopTimerGetTypeID](cfrunlooptimergettypeid%28%29.md): Returns the type identifier of the CFRunLoopTimer opaque type.
- [CFRunLoopTimerInvalidate](cfrunlooptimerinvalidate%28__%29.md): Invalidates a CFRunLoopTimer object, stopping it from ever firing again.
- [CFRunLoopTimerIsValid](cfrunlooptimerisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object is valid and able to fire.
- [CFRunLoopTimerSetNextFireDate](cfrunlooptimersetnextfiredate%28____%29.md): Sets the next firing date for a CFRunLoopTimer object .
