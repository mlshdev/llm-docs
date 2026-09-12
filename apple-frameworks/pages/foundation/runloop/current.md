> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/runloop/current](https://developer.apple.com/documentation/foundation/runloop/current)

# current (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the run loop for the current thread.

## Declaration

```swift
class var current: RunLoop { get }
```

<a id="return-value"></a>

## Return Value

The `NSRunLoop` object for the current thread.

<a id="Discussion"></a>

## Discussion

If a run loop does not yet exist for the thread, one is created and returned.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)

### Accessing Run Loops and Modes

- [currentMode](currentmode.md): The receiver’s current input mode.
- [limitDate(forMode:)](limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [main](main.md): Returns the run loop of the main thread.
- [getCFRunLoop()](getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.
- [RunLoop.Mode](mode.md): Modes that a run loop operates in.

# currentRunLoop (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the run loop for the current thread.

## Declaration

```objectivec
@property (class, strong, readonly) NSRunLoop * currentRunLoop;
```

<a id="return-value"></a>

## Return Value

The `NSRunLoop` object for the current thread.

<a id="Discussion"></a>

## Discussion

If a run loop does not yet exist for the thread, one is created and returned.

## See Also

### Related Documentation

- [Threading Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Multithreading/Introduction/Introduction.html#//apple_ref/doc/uid/10000057i)

### Accessing Run Loops and Modes

- [currentMode](currentmode.md): The receiver’s current input mode.
- [limitDateForMode:](limitdate%28formode_%29.md): Performs one pass through the run loop in the specified mode and returns the date at which the next timer is scheduled to fire.
- [mainRunLoop](main.md): Returns the run loop of the main thread.
- [getCFRunLoop](getcfrunloop%28%29.md): Returns the receiver’s underlying run loop object.
- [NSRunLoopMode](mode.md): Modes that a run loop operates in.
