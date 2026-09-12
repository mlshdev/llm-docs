> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopremovetimer(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopremovetimer(_:_:_:))

# CFRunLoopRemoveTimer(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a CFRunLoopTimer object from a run loop mode.

## Declaration

```swift
func CFRunLoopRemoveTimer(_ rl: CFRunLoop!, _ timer: CFRunLoopTimer!, _ mode: CFRunLoopMode!)
```

## Parameters

- `rl`: The run loop to modify.
- `timer`: The run loop timer to remove.
- `mode`: The run loop mode of `rl` from which to remove `timer`. Use the constant [commonModes](cfrunloopmode/commonmodes.md) to remove `timer` from the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

If `rl` does not contain `timer` in `mode`, this function does nothing.

## See Also

### Managing Timers

- [CFRunLoopAddTimer(\_:\_:\_:)](cfrunloopaddtimer%28______%29.md): Adds a CFRunLoopTimer object to a run loop mode.
- [CFRunLoopGetNextTimerFireDate(\_:\_:)](cfrunloopgetnexttimerfiredate%28____%29.md): Returns the time at which the next timer will fire.
- [CFRunLoopContainsTimer(\_:\_:\_:)](cfrunloopcontainstimer%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopTimer object.

# CFRunLoopRemoveTimer (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a CFRunLoopTimer object from a run loop mode.

## Declaration

```objectivec
extern void CFRunLoopRemoveTimer(CFRunLoopRef rl, CFRunLoopTimerRef timer, CFRunLoopMode mode);
```

## Parameters

- `rl`: The run loop to modify.
- `timer`: The run loop timer to remove.
- `mode`: The run loop mode of `rl` from which to remove `timer`. Use the constant [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) to remove `timer` from the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

If `rl` does not contain `timer` in `mode`, this function does nothing.

## See Also

### Managing Timers

- [CFRunLoopAddTimer](cfrunloopaddtimer%28______%29.md): Adds a CFRunLoopTimer object to a run loop mode.
- [CFRunLoopGetNextTimerFireDate](cfrunloopgetnexttimerfiredate%28____%29.md): Returns the time at which the next timer will fire.
- [CFRunLoopContainsTimer](cfrunloopcontainstimer%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopTimer object.
