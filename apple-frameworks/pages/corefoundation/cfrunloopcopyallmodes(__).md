> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopcopyallmodes(_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopcopyallmodes(_:))

# CFRunLoopCopyAllModes(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array that contains all the defined modes for a CFRunLoop object.

## Declaration

```swift
func CFRunLoopCopyAllModes(_ rl: CFRunLoop!) -> CFArray!
```

## Parameters

- `rl`: The run loop to examine.

<a id="return-value"></a>

## Return Value

An array that contains all the run loop modes defined for `rl`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Managing Run Loop Modes

- [CFRunLoopAddCommonMode(\_:\_:)](cfrunloopaddcommonmode%28____%29.md): Adds a mode to the set of run loop common modes.
- [CFRunLoopCopyCurrentMode(\_:)](cfrunloopcopycurrentmode%28__%29.md): Returns the name of the mode in which a given run loop is currently running.

# CFRunLoopCopyAllModes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an array that contains all the defined modes for a CFRunLoop object.

## Declaration

```objectivec
extern CFArrayRefCFRunLoopCopyAllModes(CFRunLoopRef rl);
```

## Parameters

- `rl`: The run loop to examine.

<a id="return-value"></a>

## Return Value

An array that contains all the run loop modes defined for `rl`. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Managing Run Loop Modes

- [CFRunLoopAddCommonMode](cfrunloopaddcommonmode%28____%29.md): Adds a mode to the set of run loop common modes.
- [CFRunLoopCopyCurrentMode](cfrunloopcopycurrentmode%28__%29.md): Returns the name of the mode in which a given run loop is currently running.
