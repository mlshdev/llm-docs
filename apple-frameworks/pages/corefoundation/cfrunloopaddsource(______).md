> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopaddsource(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopaddsource(_:_:_:))

# CFRunLoopAddSource(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a CFRunLoopSource object to a run loop mode.

## Declaration

```swift
func CFRunLoopAddSource(_ rl: CFRunLoop!, _ source: CFRunLoopSource!, _ mode: CFRunLoopMode!)
```

## Parameters

- `rl`: The run loop to modify.
- `source`: The run loop source to add. The source is retained by the run loop.
- `mode`: The run loop mode to which to add `source`. Use the constant [commonModes](cfrunloopmode/commonmodes.md) to add `source` to the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

If `source` is a version 0 source, this function calls the `schedule` callback function specified in the context structure for `source`. See [CFRunLoopSourceContext](cfrunloopsourcecontext.md) for more details.

A run loop source can be registered in multiple run loops and run loop modes at the same time. When the source is signaled, whichever run loop that happens to detect the signal first will fire the source.

If `rl` already contains `source` in `mode`, this function does nothing.

## See Also

### Managing Sources

- [CFRunLoopContainsSource(\_:\_:\_:)](cfrunloopcontainssource%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopSource object.
- [CFRunLoopRemoveSource(\_:\_:\_:)](cfrunloopremovesource%28______%29.md): Removes a CFRunLoopSource object from a run loop mode.

# CFRunLoopAddSource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a CFRunLoopSource object to a run loop mode.

## Declaration

```objectivec
extern void CFRunLoopAddSource(CFRunLoopRef rl, CFRunLoopSourceRef source, CFRunLoopMode mode);
```

## Parameters

- `rl`: The run loop to modify.
- `source`: The run loop source to add. The source is retained by the run loop.
- `mode`: The run loop mode to which to add `source`. Use the constant [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) to add `source` to the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

If `source` is a version 0 source, this function calls the `schedule` callback function specified in the context structure for `source`. See [CFRunLoopSourceContext](cfrunloopsourcecontext.md) for more details.

A run loop source can be registered in multiple run loops and run loop modes at the same time. When the source is signaled, whichever run loop that happens to detect the signal first will fire the source.

If `rl` already contains `source` in `mode`, this function does nothing.

## See Also

### Managing Sources

- [CFRunLoopContainsSource](cfrunloopcontainssource%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopSource object.
- [CFRunLoopRemoveSource](cfrunloopremovesource%28______%29.md): Removes a CFRunLoopSource object from a run loop mode.
