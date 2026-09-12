> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooptimerisvalid(_:)](https://developer.apple.com/documentation/corefoundation/cfrunlooptimerisvalid(_:))

# CFRunLoopTimerIsValid(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFRunLoopTimer object is valid and able to fire.

## Declaration

```swift
func CFRunLoopTimerIsValid(_ timer: CFRunLoopTimer!) -> Bool
```

## Parameters

- `timer`: The run loop timer to examine.

<a id="return-value"></a>

## Return Value

`true` if `timer` is valid; otherwise `false`.

<a id="Discussion"></a>

## Discussion

A non-repeating timer is automatically invalidated after it fires.

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
- [CFRunLoopTimerSetNextFireDate(\_:\_:)](cfrunlooptimersetnextfiredate%28____%29.md): Sets the next firing date for a CFRunLoopTimer object .

# CFRunLoopTimerIsValid (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFRunLoopTimer object is valid and able to fire.

## Declaration

```objectivec
extern Boolean CFRunLoopTimerIsValid(CFRunLoopTimerRef timer);
```

## Parameters

- `timer`: The run loop timer to examine.

<a id="return-value"></a>

## Return Value

`true` if `timer` is valid; otherwise `false`.

<a id="Discussion"></a>

## Discussion

A non-repeating timer is automatically invalidated after it fires.

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
- [CFRunLoopTimerSetNextFireDate](cfrunlooptimersetnextfiredate%28____%29.md): Sets the next firing date for a CFRunLoopTimer object .
