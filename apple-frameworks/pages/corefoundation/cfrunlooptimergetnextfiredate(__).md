> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooptimergetnextfiredate(_:)](https://developer.apple.com/documentation/corefoundation/cfrunlooptimergetnextfiredate(_:))

# CFRunLoopTimerGetNextFireDate(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the next firing time for a CFRunLoopTimer object.

## Declaration

```swift
func CFRunLoopTimerGetNextFireDate(_ timer: CFRunLoopTimer!) -> CFAbsoluteTime
```

## Parameters

- `timer`: The run loop timer to examine.

<a id="return-value"></a>

## Return Value

The next firing time for `timer`. This time could be a date in the past if a run loop has not been able to process the timer since the firing time arrived.

## See Also

### CFRunLoopTimer Miscellaneous Functions

- [CFRunLoopTimerCreateWithHandler(\_:\_:\_:\_:\_:\_:)](cfrunlooptimercreatewithhandler%28____________%29.md): Creates a new CFRunLoopTimer object with a block-based handler.
- [CFRunLoopTimerCreate(\_:\_:\_:\_:\_:\_:\_:)](cfrunlooptimercreate%28______________%29.md): Creates a new CFRunLoopTimer object with a function callback.
- [CFRunLoopTimerDoesRepeat(\_:)](cfrunlooptimerdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object repeats.
- [CFRunLoopTimerGetContext(\_:\_:)](cfrunlooptimergetcontext%28____%29.md): Returns the context information for a CFRunLoopTimer object.
- [CFRunLoopTimerGetInterval(\_:)](cfrunlooptimergetinterval%28__%29.md): Returns the firing interval of a repeating CFRunLoopTimer object.
- [CFRunLoopTimerGetOrder(\_:)](cfrunlooptimergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopTimer object.
- [CFRunLoopTimerGetTypeID()](cfrunlooptimergettypeid%28%29.md): Returns the type identifier of the CFRunLoopTimer opaque type.
- [CFRunLoopTimerInvalidate(\_:)](cfrunlooptimerinvalidate%28__%29.md): Invalidates a CFRunLoopTimer object, stopping it from ever firing again.
- [CFRunLoopTimerIsValid(\_:)](cfrunlooptimerisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object is valid and able to fire.
- [CFRunLoopTimerSetNextFireDate(\_:\_:)](cfrunlooptimersetnextfiredate%28____%29.md): Sets the next firing date for a CFRunLoopTimer object .

# CFRunLoopTimerGetNextFireDate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the next firing time for a CFRunLoopTimer object.

## Declaration

```objectivec
extern CFAbsoluteTime CFRunLoopTimerGetNextFireDate(CFRunLoopTimerRef timer);
```

## Parameters

- `timer`: The run loop timer to examine.

<a id="return-value"></a>

## Return Value

The next firing time for `timer`. This time could be a date in the past if a run loop has not been able to process the timer since the firing time arrived.

## See Also

### CFRunLoopTimer Miscellaneous Functions

- [CFRunLoopTimerCreateWithHandler](cfrunlooptimercreatewithhandler%28____________%29.md): Creates a new CFRunLoopTimer object with a block-based handler.
- [CFRunLoopTimerCreate](cfrunlooptimercreate%28______________%29.md): Creates a new CFRunLoopTimer object with a function callback.
- [CFRunLoopTimerDoesRepeat](cfrunlooptimerdoesrepeat%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object repeats.
- [CFRunLoopTimerGetContext](cfrunlooptimergetcontext%28____%29.md): Returns the context information for a CFRunLoopTimer object.
- [CFRunLoopTimerGetInterval](cfrunlooptimergetinterval%28__%29.md): Returns the firing interval of a repeating CFRunLoopTimer object.
- [CFRunLoopTimerGetOrder](cfrunlooptimergetorder%28__%29.md): Returns the ordering parameter for a CFRunLoopTimer object.
- [CFRunLoopTimerGetTypeID](cfrunlooptimergettypeid%28%29.md): Returns the type identifier of the CFRunLoopTimer opaque type.
- [CFRunLoopTimerInvalidate](cfrunlooptimerinvalidate%28__%29.md): Invalidates a CFRunLoopTimer object, stopping it from ever firing again.
- [CFRunLoopTimerIsValid](cfrunlooptimerisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFRunLoopTimer object is valid and able to fire.
- [CFRunLoopTimerSetNextFireDate](cfrunlooptimersetnextfiredate%28____%29.md): Sets the next firing date for a CFRunLoopTimer object .
