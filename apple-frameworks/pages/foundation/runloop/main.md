> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/main](https://developer.apple.com/documentation/foundation/runloop/main)

# main (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the run loop of the main thread.

## Declaration

```swift
class var main: RunLoop { get }
```

<a id="return-value"></a>

## Return Value

An object representing the main thread’s run loop.

## See Also

### Accessing Run Loops and Modes

- [current](current.md): Returns the run loop for the current thread.
- [currentMode](currentmode.md): The receiver’s current input mode.
- [limitDate(forMode:)](limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [getCFRunLoop()](getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.
- [RunLoop.Mode](mode.md): Modes that a run loop operates in.

# mainRunLoop (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the run loop of the main thread.

## Declaration

```objectivec
@property (class, strong, readonly) NSRunLoop * mainRunLoop;
```

<a id="return-value"></a>

## Return Value

An object representing the main thread’s run loop.

## See Also

### Accessing Run Loops and Modes

- [currentRunLoop](current.md): Returns the run loop for the current thread.
- [currentMode](currentmode.md): The receiver’s current input mode.
- [limitDateForMode:](limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [getCFRunLoop](getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.
- [NSRunLoopMode](mode.md): Modes that a run loop operates in.
