> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooptimersetnextfiredate(_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunlooptimersetnextfiredate(_:_:))

# CFRunLoopTimerSetNextFireDate(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the next firing date for a CFRunLoopTimer object .

## Declaration

```swift
func CFRunLoopTimerSetNextFireDate(_ timer: CFRunLoopTimer!, _ fireDate: CFAbsoluteTime)
```

## Parameters

- `timer`: The run loop timer to modify.
- `fireDate`: The new firing time for `timer`.

<a id="Discussion"></a>

## Discussion

Resetting a timer’s next firing time is a relatively expensive operation and should not be done if it can be avoided; letting timers autorepeat is more efficient. In some cases, however, manually-adjusted, repeating timers are useful. For example, if you have an action that will be performed multiple times in the future, but at irregular time intervals, it would be very expensive to create, add to run loop modes, and then destroy a timer for each firing event. Instead, you can create a repeating timer with an initial firing time in the distant future (or the initial firing time) and a very large repeat interval—on the order of decades or more—and add it to all the necessary run loop modes. Then, when you know when the timer should fire next, you reset the firing time with [CFRunLoopTimerSetNextFireDate(\_:\_:)](cfrunlooptimersetnextfiredate%28____%29.md), perhaps from the timer’s own callback function. This technique effectively produces a reusable, asynchronous timer.

## See Also

### CFRunLoopTimer Miscellaneous Functions

- [CFRunLoopTimerCreateWithHandler(\_:\_:\_:\_:\_:\_:)](cfrunlooptimercreatewithhandler%28____________%29.md): Creates a new CFRunLoopTimer object with a block-based handler.
- [CFRunLoopTimerCreate(\_:\_:\_:\_:\_:\_:\_:)](cfrunlooptimercreate%28______________%29.md): Creates a new CFRunLoopTimer object with a function callback.
- [CFRunLoopTimerDoesRepeat(\_:)](cfrunlooptimerdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object repeats.
- [CFRunLoopTimerGetContext(\_:\_:)](cfrunlooptimergetcontext%28____%29.md): Returns the context information for a CFRunLoopTimer object.
- [CFRunLoopTimerGetInterval(\_:)](cfrunlooptimergetinterval%28__%29.md): Returns the firing interval of a repeating CFRunLoopTimer object.
- [CFRunLoopTimerGetNextFireDate(\_:)](cfrunlooptimergetnextfiredate%28__%29.md): Returns the next firing time for a CFRunLoopTimer object.
- [CFRunLoopTimerGetOrder(\_:)](cfrunlooptimergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopTimer object.
- [CFRunLoopTimerGetTypeID()](cfrunlooptimergettypeid%28%29.md): Returns the type identifier of the CFRunLoopTimer opaque type.
- [CFRunLoopTimerInvalidate(\_:)](cfrunlooptimerinvalidate%28__%29.md): Invalidates a CFRunLoopTimer object, stopping it from ever firing again.
- [CFRunLoopTimerIsValid(\_:)](cfrunlooptimerisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object is valid and able to fire.

# CFRunLoopTimerSetNextFireDate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the next firing date for a CFRunLoopTimer object .

## Declaration

```objectivec
extern void CFRunLoopTimerSetNextFireDate(CFRunLoopTimerRef timer, CFAbsoluteTime fireDate);
```

## Parameters

- `timer`: The run loop timer to modify.
- `fireDate`: The new firing time for `timer`.

<a id="Discussion"></a>

## Discussion

Resetting a timer’s next firing time is a relatively expensive operation and should not be done if it can be avoided; letting timers autorepeat is more efficient. In some cases, however, manually-adjusted, repeating timers are useful. For example, if you have an action that will be performed multiple times in the future, but at irregular time intervals, it would be very expensive to create, add to run loop modes, and then destroy a timer for each firing event. Instead, you can create a repeating timer with an initial firing time in the distant future (or the initial firing time) and a very large repeat interval—on the order of decades or more—and add it to all the necessary run loop modes. Then, when you know when the timer should fire next, you reset the firing time with [CFRunLoopTimerSetNextFireDate](cfrunlooptimersetnextfiredate%28____%29.md), perhaps from the timer’s own callback function. This technique effectively produces a reusable, asynchronous timer.

## See Also

### CFRunLoopTimer Miscellaneous Functions

- [CFRunLoopTimerCreateWithHandler](cfrunlooptimercreatewithhandler%28____________%29.md): Creates a new CFRunLoopTimer object with a block-based handler.
- [CFRunLoopTimerCreate](cfrunlooptimercreate%28______________%29.md): Creates a new CFRunLoopTimer object with a function callback.
- [CFRunLoopTimerDoesRepeat](cfrunlooptimerdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object repeats.
- [CFRunLoopTimerGetContext](cfrunlooptimergetcontext%28____%29.md): Returns the context information for a CFRunLoopTimer object.
- [CFRunLoopTimerGetInterval](cfrunlooptimergetinterval%28__%29.md): Returns the firing interval of a repeating CFRunLoopTimer object.
- [CFRunLoopTimerGetNextFireDate](cfrunlooptimergetnextfiredate%28__%29.md): Returns the next firing time for a CFRunLoopTimer object.
- [CFRunLoopTimerGetOrder](cfrunlooptimergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopTimer object.
- [CFRunLoopTimerGetTypeID](cfrunlooptimergettypeid%28%29.md): Returns the type identifier of the CFRunLoopTimer opaque type.
- [CFRunLoopTimerInvalidate](cfrunlooptimerinvalidate%28__%29.md): Invalidates a CFRunLoopTimer object, stopping it from ever firing again.
- [CFRunLoopTimerIsValid](cfrunlooptimerisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object is valid and able to fire.
