> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopaddtimer(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopaddtimer(_:_:_:))

# CFRunLoopAddTimer(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a CFRunLoopTimer object to a run loop mode.

## Declaration

```swift
func CFRunLoopAddTimer(_ rl: CFRunLoop!, _ timer: CFRunLoopTimer!, _ mode: CFRunLoopMode!)
```

## Parameters

- `rl`: The run loop to modify.
- `timer`: The run loop timer to add.
- `mode`: The run loop mode of `rl` to which to add `timer`. Use the constant [commonModes](cfrunloopmode/commonmodes.md) to add `timer` to the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

A run loop timer can be registered in only one run loop at a time, although it can be added to multiple run loop modes within that run loop.

If `rl` already contains `timer` in `mode`, this function does nothing.

## See Also

### Managing Timers

- [CFRunLoopGetNextTimerFireDate(\_:\_:)](cfrunloopgetnexttimerfiredate%28____%29.md): Returns the time at which the next timer will fire.
- [CFRunLoopRemoveTimer(\_:\_:\_:)](cfrunloopremovetimer%28______%29.md): Removes a CFRunLoopTimer object from a run loop mode.
- [CFRunLoopContainsTimer(\_:\_:\_:)](cfrunloopcontainstimer%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopTimer object.

# CFRunLoopAddTimer (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a CFRunLoopTimer object to a run loop mode.

## Declaration

```objectivec
extern void CFRunLoopAddTimer(CFRunLoopRef rl, CFRunLoopTimerRef timer, CFRunLoopMode mode);
```

## Parameters

- `rl`: The run loop to modify.
- `timer`: The run loop timer to add.
- `mode`: The run loop mode of `rl` to which to add `timer`. Use the constant [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) to add `timer` to the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

A run loop timer can be registered in only one run loop at a time, although it can be added to multiple run loop modes within that run loop.

If `rl` already contains `timer` in `mode`, this function does nothing.

## See Also

### Managing Timers

- [CFRunLoopGetNextTimerFireDate](cfrunloopgetnexttimerfiredate%28____%29.md): Returns the time at which the next timer will fire.
- [CFRunLoopRemoveTimer](cfrunloopremovetimer%28______%29.md): Removes a CFRunLoopTimer object from a run loop mode.
- [CFRunLoopContainsTimer](cfrunloopcontainstimer%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopTimer object.
