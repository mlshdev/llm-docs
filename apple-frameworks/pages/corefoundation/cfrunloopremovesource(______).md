> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopremovesource(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopremovesource(_:_:_:))

# CFRunLoopRemoveSource(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a CFRunLoopSource object from a run loop mode.

## Declaration

```swift
func CFRunLoopRemoveSource(_ rl: CFRunLoop!, _ source: CFRunLoopSource!, _ mode: CFRunLoopMode!)
```

## Parameters

- `rl`: The run loop to modify.
- `source`: The run loop source to remove.
- `mode`: The run loop mode of `rl` from which to remove `source`. Use the constant [commonModes](cfrunloopmode/commonmodes.md) to remove `source` from the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

If `source` is a version 0 source, this function calls the `cancel` callback function specified in the context structure for `source`. See [CFRunLoopSourceContext](cfrunloopsourcecontext.md) and [CFRunLoopSourceContext1](cfrunloopsourcecontext1.md)for more details.

If `rl` does not contain `source` in `mode`, this function does nothing.

## See Also

### Managing Sources

- [CFRunLoopAddSource(\_:\_:\_:)](cfrunloopaddsource%28______%29.md): Adds a CFRunLoopSource object to a run loop mode.
- [CFRunLoopContainsSource(\_:\_:\_:)](cfrunloopcontainssource%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopSource object.

# CFRunLoopRemoveSource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a CFRunLoopSource object from a run loop mode.

## Declaration

```objectivec
extern void CFRunLoopRemoveSource(CFRunLoopRef rl, CFRunLoopSourceRef source, CFRunLoopMode mode);
```

## Parameters

- `rl`: The run loop to modify.
- `source`: The run loop source to remove.
- `mode`: The run loop mode of `rl` from which to remove `source`. Use the constant [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) to remove `source` from the set of objects monitored by all the common modes.

<a id="Discussion"></a>

## Discussion

If `source` is a version 0 source, this function calls the `cancel` callback function specified in the context structure for `source`. See [CFRunLoopSourceContext](cfrunloopsourcecontext.md) and [CFRunLoopSourceContext1](cfrunloopsourcecontext1.md)for more details.

If `rl` does not contain `source` in `mode`, this function does nothing.

## See Also

### Managing Sources

- [CFRunLoopAddSource](cfrunloopaddsource%28______%29.md): Adds a CFRunLoopSource object to a run loop mode.
- [CFRunLoopContainsSource](cfrunloopcontainssource%28______%29.md): Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopSource object.
