> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopcontainstimer(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopcontainstimer(_:_:_:))

# CFRunLoopContainsTimer(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopTimer object.

## Declaration

```swift
func CFRunLoopContainsTimer(_ rl: CFRunLoop!, _ timer: CFRunLoopTimer!, _ mode: CFRunLoopMode!) -> Bool
```

## Parameters

- `rl`: The run loop to examine.
- `timer`: The run loop timer for which to search.
- `mode`: The run loop mode of `rl` in which to search for `timer`. Use the constant [commonModes](cfrunloopmode/commonmodes.md) to search for `timer` in the set of objects monitored by all the common modes.

<a id="return-value"></a>

## Return Value

`true` if `timer` is in mode `mode` of the run loop `rl`, `false` otherwise.

<a id="Discussion"></a>

## Discussion

If `timer` was added to [commonModes](cfrunloopmode/commonmodes.md), this function returns `true` if `mode` is either [commonModes](cfrunloopmode/commonmodes.md) or any of the modes that has been added to the set of common modes.

## See Also

### Managing Timers

- [CFRunLoopAddTimer(\_:\_:\_:)](cfrunloopaddtimer%28______%29.md): Adds a CFRunLoopTimer object to a run loop mode.
- [CFRunLoopGetNextTimerFireDate(\_:\_:)](cfrunloopgetnexttimerfiredate%28____%29.md): Returns the time at which the next timer will fire.
- [CFRunLoopRemoveTimer(\_:\_:\_:)](cfrunloopremovetimer%28______%29.md): Removes a CFRunLoopTimer object from a run loop mode.

# CFRunLoopContainsTimer (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopTimer object.

## Declaration

```objectivec
extern Boolean CFRunLoopContainsTimer(CFRunLoopRef rl, CFRunLoopTimerRef timer, CFRunLoopMode mode);
```

## Parameters

- `rl`: The run loop to examine.
- `timer`: The run loop timer for which to search.
- `mode`: The run loop mode of `rl` in which to search for `timer`. Use the constant [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) to search for `timer` in the set of objects monitored by all the common modes.

<a id="return-value"></a>

## Return Value

`true` if `timer` is in mode `mode` of the run loop `rl`, `false` otherwise.

<a id="Discussion"></a>

## Discussion

If `timer` was added to [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md), this function returns `true` if `mode` is either [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) or any of the modes that has been added to the set of common modes.

## See Also

### Managing Timers

- [CFRunLoopAddTimer](cfrunloopaddtimer%28______%29.md): Adds a CFRunLoopTimer object to a run loop mode.
- [CFRunLoopGetNextTimerFireDate](cfrunloopgetnexttimerfiredate%28____%29.md): Returns the time at which the next timer will fire.
- [CFRunLoopRemoveTimer](cfrunloopremovetimer%28______%29.md): Removes a CFRunLoopTimer object from a run loop mode.
