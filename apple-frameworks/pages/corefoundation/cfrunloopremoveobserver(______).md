> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopremoveobserver(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopremoveobserver(_:_:_:))

# CFRunLoopRemoveObserver(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a CFRunLoopObserver object from a run loop mode.

## Declaration

```swift
func CFRunLoopRemoveObserver(_ rl: CFRunLoop!, _ observer: CFRunLoopObserver!, _ mode: CFRunLoopMode!)
```

## Parameters

- `rl`: The run loop to modify.
- `observer`: The run loop observer to remove.
- `mode`: The run loop mode of `rl` from which to remove `observer`. Use the constant [commonModes](cfrunloopmode/commonmodes.md) to remove `observer` from the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

If `rl` does not contain `observer` in `mode`, this function does nothing.

## See Also

### Managing Observers

- [CFRunLoopAddObserver(\_:\_:\_:)](cfrunloopaddobserver%28______%29.md): Adds a CFRunLoopObserver object to a run loop mode.
- [CFRunLoopContainsObserver(\_:\_:\_:)](cfrunloopcontainsobserver%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopObserver object.

# CFRunLoopRemoveObserver (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a CFRunLoopObserver object from a run loop mode.

## Declaration

```objectivec
extern void CFRunLoopRemoveObserver(CFRunLoopRef rl, CFRunLoopObserverRef observer, CFRunLoopMode mode);
```

## Parameters

- `rl`: The run loop to modify.
- `observer`: The run loop observer to remove.
- `mode`: The run loop mode of `rl` from which to remove `observer`. Use the constant [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) to remove `observer` from the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

If `rl` does not contain `observer` in `mode`, this function does nothing.

## See Also

### Managing Observers

- [CFRunLoopAddObserver](cfrunloopaddobserver%28______%29.md): Adds a CFRunLoopObserver object to a run loop mode.
- [CFRunLoopContainsObserver](cfrunloopcontainsobserver%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopObserver object.
