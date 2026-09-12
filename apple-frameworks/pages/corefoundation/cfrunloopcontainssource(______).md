> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopcontainssource(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopcontainssource(_:_:_:))

# CFRunLoopContainsSource(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopSource object.

## Declaration

```swift
func CFRunLoopContainsSource(_ rl: CFRunLoop!, _ source: CFRunLoopSource!, _ mode: CFRunLoopMode!) -> Bool
```

## Parameters

- `rl`: The run loop to examine.
- `source`: The run loop source for which to search.
- `mode`: The run loop mode of `rl` in which to search. Use the constant [commonModes](cfrunloopmode/commonmodes.md) to search for `source` in the set of objects monitored by all the common modes.

<a id="return-value"></a>

## Return Value

`true` if `source` is in mode `mode` of the run loop `rl`, otherwise `false`.

<a id="Discussion"></a>

## Discussion

If `source` was added to [commonModes](cfrunloopmode/commonmodes.md), this function returns `true` if `mode` is either [commonModes](cfrunloopmode/commonmodes.md) or any of the modes that has been added to the set of common modes.

## See Also

### Managing Sources

- [CFRunLoopAddSource(\_:\_:\_:)](cfrunloopaddsource%28______%29.md): Adds a CFRunLoopSource object to a run loop mode.
- [CFRunLoopRemoveSource(\_:\_:\_:)](cfrunloopremovesource%28______%29.md): Removes a CFRunLoopSource object from a run loop mode.

# CFRunLoopContainsSource (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a run loop mode contains a particular CFRunLoopSource object.

## Declaration

```objectivec
extern Boolean CFRunLoopContainsSource(CFRunLoopRef rl, CFRunLoopSourceRef source, CFRunLoopMode mode);
```

## Parameters

- `rl`: The run loop to examine.
- `source`: The run loop source for which to search.
- `mode`: The run loop mode of `rl` in which to search. Use the constant [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) to search for `source` in the set of objects monitored by all the common modes.

<a id="return-value"></a>

## Return Value

`true` if `source` is in mode `mode` of the run loop `rl`, otherwise `false`.

<a id="Discussion"></a>

## Discussion

If `source` was added to [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md), this function returns `true` if `mode` is either [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) or any of the modes that has been added to the set of common modes.

## See Also

### Managing Sources

- [CFRunLoopAddSource](cfrunloopaddsource%28______%29.md): Adds a CFRunLoopSource object to a run loop mode.
- [CFRunLoopRemoveSource](cfrunloopremovesource%28______%29.md): Removes a CFRunLoopSource object from a run loop mode.
