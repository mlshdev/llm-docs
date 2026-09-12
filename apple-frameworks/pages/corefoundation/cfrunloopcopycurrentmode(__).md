> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopcopycurrentmode(_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopcopycurrentmode(_:))

# CFRunLoopCopyCurrentMode(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the name of the mode in which a given run loop is currently running.

## Declaration

```swift
func CFRunLoopCopyCurrentMode(_ rl: CFRunLoop!) -> CFRunLoopMode!
```

## Parameters

- `rl`: The run loop to examine.

<a id="return-value"></a>

## Return Value

The mode in which `rl` is currently running; `NULL` if `rl` is not running. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

When run on the current thread’s run loop, the returned value identifies the run loop mode that made the callout in which your code is currently executing.

## See Also

### Managing Run Loop Modes

- [CFRunLoopAddCommonMode(\_:\_:)](cfrunloopaddcommonmode%28____%29.md): Adds a mode to the set of run loop common modes.
- [CFRunLoopCopyAllModes(\_:)](cfrunloopcopyallmodes%28__%29.md): Returns an array that contains all the defined modes for a CFRunLoop object.

# CFRunLoopCopyCurrentMode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the name of the mode in which a given run loop is currently running.

## Declaration

```objectivec
extern CFRunLoopModeCFRunLoopCopyCurrentMode(CFRunLoopRef rl);
```

## Parameters

- `rl`: The run loop to examine.

<a id="return-value"></a>

## Return Value

The mode in which `rl` is currently running; `NULL` if `rl` is not running. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="Discussion"></a>

## Discussion

When run on the current thread’s run loop, the returned value identifies the run loop mode that made the callout in which your code is currently executing.

## See Also

### Managing Run Loop Modes

- [CFRunLoopAddCommonMode](cfrunloopaddcommonmode%28____%29.md): Adds a mode to the set of run loop common modes.
- [CFRunLoopCopyAllModes](cfrunloopcopyallmodes%28__%29.md): Returns an array that contains all the defined modes for a CFRunLoop object.
