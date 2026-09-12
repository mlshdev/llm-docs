> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooptimercreatewithhandler(_:_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunlooptimercreatewithhandler(_:_:_:_:_:_:))

# CFRunLoopTimerCreateWithHandler(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new CFRunLoopTimer object with a block-based handler.

## Declaration

```swift
func CFRunLoopTimerCreateWithHandler(_ allocator: CFAllocator!, _ fireDate: CFAbsoluteTime, _ interval: CFTimeInterval, _ flags: CFOptionFlags, _ order: CFIndex, _ block: ((CFRunLoopTimer?) -> Void)!) -> CFRunLoopTimer!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `fireDate`: The time at which the timer should first fire. The fine precision (sub-millisecond at most) of the fire date may be adjusted slightly by the timer if there are implementation reasons to do so.
- `interval`: The firing interval of the timer. If `0` or negative, the timer fires once and then is automatically invalidated. The fine precision (sub-millisecond at most) of the interval may be adjusted slightly by the timer if implementation reasons to do so exist.
- `flags`: Currently ignored. Pass `0` for future compatibility.
- `order`: A priority index indicating the order in which run loop timers are processed. Run loop timers currently ignore this parameter. Pass `0`.
- `block`: The block invoked when the timer fires. The block takes one argument:

  - **`timer`**: The run loop timer that is firing.

<a id="return-value"></a>

## Return Value

The new CFRunLoopTimer object. Ownership follows the Create Rule described in [Ownership Policy](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148).

<a id="Discussion"></a>

## Discussion

A timer needs to be added to a run loop mode before it will fire. To add the timer to a run loop, use [CFRunLoopAddTimer(\_:\_:\_:)](cfrunloopaddtimer%28______%29.md). A timer can be registered to only one run loop at a time, although it can be in multiple modes within that run loop.

## See Also

### CFRunLoopTimer Miscellaneous Functions

- [CFRunLoopTimerCreate(\_:\_:\_:\_:\_:\_:\_:)](cfrunlooptimercreate%28______________%29.md): Creates a new CFRunLoopTimer object with a function callback.
- [CFRunLoopTimerDoesRepeat(\_:)](cfrunlooptimerdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object repeats.
- [CFRunLoopTimerGetContext(\_:\_:)](cfrunlooptimergetcontext%28____%29.md): Returns the context information for a CFRunLoopTimer object.
- [CFRunLoopTimerGetInterval(\_:)](cfrunlooptimergetinterval%28__%29.md): Returns the firing interval of a repeating CFRunLoopTimer object.
- [CFRunLoopTimerGetNextFireDate(\_:)](cfrunlooptimergetnextfiredate%28__%29.md): Returns the next firing time for a CFRunLoopTimer object.
- [CFRunLoopTimerGetOrder(\_:)](cfrunlooptimergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopTimer object.
- [CFRunLoopTimerGetTypeID()](cfrunlooptimergettypeid%28%29.md): Returns the type identifier of the CFRunLoopTimer opaque type.
- [CFRunLoopTimerInvalidate(\_:)](cfrunlooptimerinvalidate%28__%29.md): Invalidates a CFRunLoopTimer object, stopping it from ever firing again.
- [CFRunLoopTimerIsValid(\_:)](cfrunlooptimerisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object is valid and able to fire.
- [CFRunLoopTimerSetNextFireDate(\_:\_:)](cfrunlooptimersetnextfiredate%28____%29.md): Sets the next firing date for a CFRunLoopTimer object .

# CFRunLoopTimerCreateWithHandler (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new CFRunLoopTimer object with a block-based handler.

## Declaration

```objectivec
extern CFRunLoopTimerRefCFRunLoopTimerCreateWithHandler(CFAllocatorRef allocator, CFAbsoluteTime fireDate, CFTimeInterval interval, CFOptionFlags flags, CFIndex order, void (^block)(CFRunLoopTimerRef timer));
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `fireDate`: The time at which the timer should first fire. The fine precision (sub-millisecond at most) of the fire date may be adjusted slightly by the timer if there are implementation reasons to do so.
- `interval`: The firing interval of the timer. If `0` or negative, the timer fires once and then is automatically invalidated. The fine precision (sub-millisecond at most) of the interval may be adjusted slightly by the timer if implementation reasons to do so exist.
- `flags`: Currently ignored. Pass `0` for future compatibility.
- `order`: A priority index indicating the order in which run loop timers are processed. Run loop timers currently ignore this parameter. Pass `0`.
- `block`: The block invoked when the timer fires. The block takes one argument:

  - **`timer`**: The run loop timer that is firing.

<a id="return-value"></a>

## Return Value

The new CFRunLoopTimer object. Ownership follows the Create Rule described in [Ownership Policy](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148).

<a id="Discussion"></a>

## Discussion

A timer needs to be added to a run loop mode before it will fire. To add the timer to a run loop, use [CFRunLoopAddTimer](cfrunloopaddtimer%28______%29.md). A timer can be registered to only one run loop at a time, although it can be in multiple modes within that run loop.

## See Also

### CFRunLoopTimer Miscellaneous Functions

- [CFRunLoopTimerCreate](cfrunlooptimercreate%28______________%29.md): Creates a new CFRunLoopTimer object with a function callback.
- [CFRunLoopTimerDoesRepeat](cfrunlooptimerdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object repeats.
- [CFRunLoopTimerGetContext](cfrunlooptimergetcontext%28____%29.md): Returns the context information for a CFRunLoopTimer object.
- [CFRunLoopTimerGetInterval](cfrunlooptimergetinterval%28__%29.md): Returns the firing interval of a repeating CFRunLoopTimer object.
- [CFRunLoopTimerGetNextFireDate](cfrunlooptimergetnextfiredate%28__%29.md): Returns the next firing time for a CFRunLoopTimer object.
- [CFRunLoopTimerGetOrder](cfrunlooptimergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopTimer object.
- [CFRunLoopTimerGetTypeID](cfrunlooptimergettypeid%28%29.md): Returns the type identifier of the CFRunLoopTimer opaque type.
- [CFRunLoopTimerInvalidate](cfrunlooptimerinvalidate%28__%29.md): Invalidates a CFRunLoopTimer object, stopping it from ever firing again.
- [CFRunLoopTimerIsValid](cfrunlooptimerisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object is valid and able to fire.
- [CFRunLoopTimerSetNextFireDate](cfrunlooptimersetnextfiredate%28____%29.md): Sets the next firing date for a CFRunLoopTimer object .
