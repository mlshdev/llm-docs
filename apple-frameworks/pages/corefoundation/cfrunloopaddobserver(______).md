> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopaddobserver(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopaddobserver(_:_:_:))

# CFRunLoopAddObserver(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a CFRunLoopObserver object to a run loop mode.

## Declaration

```swift
func CFRunLoopAddObserver(_ rl: CFRunLoop!, _ observer: CFRunLoopObserver!, _ mode: CFRunLoopMode!)
```

## Parameters

- `rl`: The run loop to modify.
- `observer`: The run loop observer to add.
- `mode`: The run loop mode to which to add `observer`. Use the constant [commonModes](cfrunloopmode/commonmodes.md) to add `observer` to the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

A run loop observer can be registered in only one run loop at a time, although it can be added to multiple run loop modes within that run loop.

If `rl` already contains `observer` in `mode`, this function does nothing.

## See Also

### Managing Observers

- [CFRunLoopContainsObserver(\_:\_:\_:)](cfrunloopcontainsobserver%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopObserver object.
- [CFRunLoopRemoveObserver(\_:\_:\_:)](cfrunloopremoveobserver%28______%29.md): Removes a CFRunLoopObserver object from a run loop mode.

# CFRunLoopAddObserver (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a CFRunLoopObserver object to a run loop mode.

## Declaration

```objectivec
extern void CFRunLoopAddObserver(CFRunLoopRef rl, CFRunLoopObserverRef observer, CFRunLoopMode mode);
```

## Parameters

- `rl`: The run loop to modify.
- `observer`: The run loop observer to add.
- `mode`: The run loop mode to which to add `observer`. Use the constant [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) to add `observer` to the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

A run loop observer can be registered in only one run loop at a time, although it can be added to multiple run loop modes within that run loop.

If `rl` already contains `observer` in `mode`, this function does nothing.

## See Also

### Managing Observers

- [CFRunLoopContainsObserver](cfrunloopcontainsobserver%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopObserver object.
- [CFRunLoopRemoveObserver](cfrunloopremoveobserver%28______%29.md): Removes a CFRunLoopObserver object from a run loop mode.
