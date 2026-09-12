> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopcontainsobserver(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopcontainsobserver(_:_:_:))

# CFRunLoopContainsObserver(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopObserver object.

## Declaration

```swift
func CFRunLoopContainsObserver(_ rl: CFRunLoop!, _ observer: CFRunLoopObserver!, _ mode: CFRunLoopMode!) -> Bool
```

## Parameters

- `rl`: The run loop to examine.
- `observer`: The run loop observer for which to search.
- `mode`: The run loop mode in which to search for `observer`. Use the constant [commonModes](cfrunloopmode/commonmodes.md) to search for `observer` in the set of objects monitored by all the common modes.

<a id="return-value"></a>

## Return Value

`true` if `observer` is in mode `mode` of the run loop `rl`, otherwise `false`.

<a id="Discussion"></a>

## Discussion

If `observer` was added to [commonModes](cfrunloopmode/commonmodes.md), this function returns `true` if `mode` is either [commonModes](cfrunloopmode/commonmodes.md) or any of the modes that has been added to the set of common modes.

## See Also

### Managing Observers

- [CFRunLoopAddObserver(\_:\_:\_:)](cfrunloopaddobserver%28______%29.md): Adds a CFRunLoopObserver object to a run loop mode.
- [CFRunLoopRemoveObserver(\_:\_:\_:)](cfrunloopremoveobserver%28______%29.md): Removes a CFRunLoopObserver object from a run loop mode.

# CFRunLoopContainsObserver (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopObserver object.

## Declaration

```objectivec
extern Boolean CFRunLoopContainsObserver(CFRunLoopRef rl, CFRunLoopObserverRef observer, CFRunLoopMode mode);
```

## Parameters

- `rl`: The run loop to examine.
- `observer`: The run loop observer for which to search.
- `mode`: The run loop mode in which to search for `observer`. Use the constant [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) to search for `observer` in the set of objects monitored by all the common modes.

<a id="return-value"></a>

## Return Value

`true` if `observer` is in mode `mode` of the run loop `rl`, otherwise `false`.

<a id="Discussion"></a>

## Discussion

If `observer` was added to [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md), this function returns `true` if `mode` is either [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) or any of the modes that has been added to the set of common modes.

## See Also

### Managing Observers

- [CFRunLoopAddObserver](cfrunloopaddobserver%28______%29.md): Adds a CFRunLoopObserver object to a run loop mode.
- [CFRunLoopRemoveObserver](cfrunloopremoveobserver%28______%29.md): Removes a CFRunLoopObserver object from a run loop mode.
