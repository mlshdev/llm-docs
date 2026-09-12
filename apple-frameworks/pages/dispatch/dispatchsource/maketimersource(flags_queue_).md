> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/maketimersource(flags:queue:)](https://developer.apple.com/documentation/dispatch/dispatchsource/maketimersource(flags:queue:))

# makeTimerSource(flags:queue:)

**Framework:** Dispatch  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new dispatch source object for monitoring timer events.

## Declaration

```swift
class func makeTimerSource(flags: DispatchSource.TimerFlags = [], queue: DispatchQueue? = nil) -> any DispatchSourceTimer
```

## Parameters

- `flags`: Additional flags indicating the behavior of the timer. For a list of possible values, see [DispatchSource.TimerFlags](timerflags.md).
- `queue`: The dispatch queue to which to execute the installed handlers.

<a id="return-value"></a>

## Return Value

A dispatch source object that conforms to the [DispatchSourceTimer](../dispatchsourcetimer.md) protocol.

<a id="Discussion"></a>

## Discussion

After creating the dispatch source, use the methods of the [DispatchSourceProtocol](../dispatchsourceprotocol.md) protocol to install the event handlers you need. The returned dispatch source is in the inactive state initially. When you are ready to begin processing events, call its [activate()](../dispatchobject/activate%28%29.md) method.

To schedule timers, use the methods of the [DispatchSourceTimer](../dispatchsourcetimer.md) protocol. You may schedule timers that fire once or fire multiple times. Each time the timer fires, the dispatch source calls your installed event handler.

## See Also

### Creating a Timer Source

- [DispatchSourceTimer](../dispatchsourcetimer.md): A dispatch source that submits the event handler block based on a timer.
- [DispatchSource.TimerFlags](timerflags.md): Flags to use when configuring a timer dispatch source.
