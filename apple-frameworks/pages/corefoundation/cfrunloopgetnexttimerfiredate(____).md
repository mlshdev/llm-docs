> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopgetnexttimerfiredate(_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopgetnexttimerfiredate(_:_:))

# CFRunLoopGetNextTimerFireDate(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the time at which the next timer will fire.

## Declaration

```swift
func CFRunLoopGetNextTimerFireDate(_ rl: CFRunLoop!, _ mode: CFRunLoopMode!) -> CFAbsoluteTime
```

## Parameters

- `rl`: The run loop to examine.
- `mode`: The run loop mode within `rl` to test.

<a id="return-value"></a>

## Return Value

The earliest firing time of the run loop timers registered in `mode` for the run loop `rl`.

## See Also

### Managing Timers

- [CFRunLoopAddTimer(\_:\_:\_:)](cfrunloopaddtimer%28______%29.md): Adds a CFRunLoopTimer object to a run loop mode.
- [CFRunLoopRemoveTimer(\_:\_:\_:)](cfrunloopremovetimer%28______%29.md): Removes a CFRunLoopTimer object from a run loop mode.
- [CFRunLoopContainsTimer(\_:\_:\_:)](cfrunloopcontainstimer%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopTimer object.

# CFRunLoopGetNextTimerFireDate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the time at which the next timer will fire.

## Declaration

```objectivec
extern CFAbsoluteTime CFRunLoopGetNextTimerFireDate(CFRunLoopRef rl, CFRunLoopMode mode);
```

## Parameters

- `rl`: The run loop to examine.
- `mode`: The run loop mode within `rl` to test.

<a id="return-value"></a>

## Return Value

The earliest firing time of the run loop timers registered in `mode` for the run loop `rl`.

## See Also

### Managing Timers

- [CFRunLoopAddTimer](cfrunloopaddtimer%28______%29.md): Adds a CFRunLoopTimer object to a run loop mode.
- [CFRunLoopRemoveTimer](cfrunloopremovetimer%28______%29.md): Removes a CFRunLoopTimer object from a run loop mode.
- [CFRunLoopContainsTimer](cfrunloopcontainstimer%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopTimer object.
